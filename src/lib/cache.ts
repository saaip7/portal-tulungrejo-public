/**
 * Browser-based caching utility with expiration support
 * 
 * This cache implementation stores data in localStorage with TTL (Time To Live).
 * Perfect for caching API responses to reduce server load and improve performance.
 * 
 * Features:
 * - Automatic expiration based on TTL
 * - Browser-safe (handles server-side rendering)
 * - Type-safe operations
 * - Built-in cache invalidation
 * - getOrFetch pattern for easy API caching
 * 
 * Usage Example:
 * ```typescript
 * // Cache API response for 1 hour
 * const data = await cache.getOrFetch(
 *   'api:users',
 *   () => fetch('/api/users').then(r => r.json()),
 *   CACHE_DURATION.ONE_HOUR
 * )
 * ```
 */

export interface CacheItem<T> {
  data: T
  timestamp: number
  expiresAt: number
}

export class Cache {
  private storage: Storage
  
  constructor(storage?: Storage) {
    // Prefer provided storage, then browser localStorage, otherwise use an in-memory fallback
    if (storage) {
      this.storage = storage
    } else if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      this.storage = window.localStorage
    } else {
      // Minimal in-memory Storage-like fallback for SSR or non-browser environments
      const map = new Map<string, string>()
      this.storage = {
        getItem(key: string) {
          return map.has(key) ? map.get(key) as string : null
        },
        setItem(key: string, value: string) {
          map.set(key, String(value))
        },
        removeItem(key: string) {
          map.delete(key)
        },
        clear() {
          map.clear()
        },
        key() { return null },
        get length() { return map.size },
      } as unknown as Storage
    }
  }

  /**
   * Set cache with expiration time
   * @param key Cache key
   * @param data Data to cache
   * @param ttlMs Time to live in milliseconds
   */
  set<T>(key: string, data: T, ttlMs: number): void {
    const now = Date.now()
    const cacheItem: CacheItem<T> = {
      data,
      timestamp: now,
      expiresAt: now + ttlMs
    }
    
    try {
      this.storage.setItem(key, JSON.stringify(cacheItem))
    } catch (error) {
      console.warn('Failed to set cache item:', error)
    }
  }

  /**
   * Get cache if not expired
   * @param key Cache key
   * @returns Cached data or null if expired/not found
   */
  get<T>(key: string): T | null {
    try {
      const item = this.storage.getItem(key)
      if (!item) return null

      const cacheItem: CacheItem<T> = JSON.parse(item)
      const now = Date.now()

      if (now > cacheItem.expiresAt) {
        // Cache expired, remove it
        this.remove(key)
        return null
      }

      return cacheItem.data
    } catch (error) {
      console.warn('Failed to get cache item:', error)
      return null
    }
  }

  /**
   * Remove cache item
   * @param key Cache key
   */
  remove(key: string): void {
    try {
      this.storage.removeItem(key)
    } catch (error) {
      console.warn('Failed to remove cache item:', error)
    }
  }

  /**
   * Clear all cache items
   */
  clear(): void {
    try {
      this.storage.clear()
    } catch (error) {
      console.warn('Failed to clear cache:', error)
    }
  }

  /**
   * Check if cache item exists and is not expired
   * @param key Cache key
   * @returns true if cache exists and not expired
   */
  has(key: string): boolean {
    return this.get(key) !== null
  }

  /**
   * Get cache with fallback and auto-refresh
   * @param key Cache key
   * @param fetcher Function to fetch fresh data
   * @param ttlMs Time to live in milliseconds
   * @returns Cached data or fresh data from fetcher
   */
  async getOrFetch<T>(
    key: string, 
    fetcher: () => Promise<T>, 
    ttlMs: number
  ): Promise<T> {
    // Try to get from cache first
    const cached = this.get<T>(key)
    if (cached !== null) {
      return cached
    }

    // Cache miss or expired, fetch fresh data
    const freshData = await fetcher()
    this.set(key, freshData, ttlMs)
    return freshData
  }
}

// Create a default cache instance
export const cache = new Cache()

// Cache duration constants
export const CACHE_DURATION = {
  ONE_MINUTE: 60 * 1000,
  FIVE_MINUTES: 5 * 60 * 1000,
  ONE_HOUR: 60 * 60 * 1000,
  ONE_DAY: 24 * 60 * 60 * 1000,
  ONE_WEEK: 7 * 24 * 60 * 60 * 1000,
} as const
