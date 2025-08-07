import { apiClient } from '@/lib/api'
import { cache, CACHE_DURATION } from '@/lib/cache'

export interface Category {
  _id: string
  name: string
  slug: string
  order: number
  createdAt: string
  updatedAt: string
  __v: number
}

export interface LinkData {
  _id: string
  title: string
  url: string
  category: Category
  image?: string
  isActive: boolean
  order: number
  createdAt: string
  __v: number
}

export interface GroupedLinksResponse {
  [categoryName: string]: LinkData[]
}

export interface CategoryWithLinks {
  category: Category
  links: LinkData[]
}

export const linksService = {
  async getAllLinks(): Promise<LinkData[]> {
    const cacheKey = 'links:all'
    return cache.getOrFetch(
      cacheKey,
      () => apiClient.get('/api/links'),
      CACHE_DURATION.ONE_DAY
    )
  },

  async getGroupedLinks(): Promise<CategoryWithLinks[]> {
    const cacheKey = 'links:grouped'
    return cache.getOrFetch(
      cacheKey,
      () => apiClient.get('/api/links/grouped'),
      CACHE_DURATION.ONE_DAY
    )
  },

  async getLinkById(id: string): Promise<LinkData> {
    const cacheKey = `links:${id}`
    return cache.getOrFetch(
      cacheKey,
      () => apiClient.get(`/api/links/${id}`),
      CACHE_DURATION.ONE_DAY
    )
  },

  async createLink(linkData: Omit<LinkData, '_id'>): Promise<LinkData> {
    const result = await apiClient.post('/api/links', linkData)
    
    // Invalidate cache after creating new link
    cache.remove('links:all')
    cache.remove('links:grouped')
    
    return result
  },

  async updateLink(id: string, linkData: Partial<LinkData>): Promise<LinkData> {
    const result = await apiClient.put(`/api/links/${id}`, linkData)
    
    // Invalidate cache after updating link
    cache.remove('links:all')
    cache.remove('links:grouped')
    cache.remove(`links:${id}`)
    
    return result
  },

  async deleteLink(id: string): Promise<void> {
    const result = await apiClient.delete(`/api/links/${id}`)
    
    // Invalidate cache after deleting link
    cache.remove('links:all')
    cache.remove('links:grouped')
    cache.remove(`links:${id}`)
    
    return result
  },

  // Cache management methods
  clearCache(): void {
    cache.remove('links:all')
    cache.remove('links:grouped')
  },

  clearAllLinksCache(): void {
    // Clear all link-related cache entries
    if (typeof window !== 'undefined' && window.localStorage) {
      const keys = Object.keys(localStorage)
      keys.forEach(key => {
        if (key.startsWith('links:')) {
          cache.remove(key)
        }
      })
    }
  },

  isCacheValid(cacheKey: string): boolean {
    return cache.has(cacheKey)
  },
}
