import { useState, useEffect, useRef } from 'react'
import { linksService, type LinkData, type GroupedLinksResponse, type CategoryWithLinks } from '@/lib/services/links'
import mockData from '@/data/mockdata.json'

export const useLinks = () => {
  const [links, setLinks] = useState<LinkData[]>([])
  const [groupedLinks, setGroupedLinks] = useState<GroupedLinksResponse>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isUsingFallback, setIsUsingFallback] = useState<boolean>(false)

  const fetchLinks = async (forceRefresh = false) => {
    try {
      setLoading(true)
      setError(null)
      
      // Clear cache if force refresh is requested
      if (forceRefresh) {
        linksService.clearCache()
      }
      
      const data = await linksService.getGroupedLinks()
      
      // Debug log to see the actual response structure
      console.log('API Response:', data)
      console.log('Type of data:', typeof data)
      console.log('Is array:', Array.isArray(data))
      
      const processedGroupedLinks: GroupedLinksResponse = {}
      const processedLinks: LinkData[] = []
      
      // Handle the API response structure: array of { category, links }
      if (Array.isArray(data)) {
        // Sort categories by order before processing
        const sortedData = data.sort((a, b) => {
          const orderA = a.category?.order || 999
          const orderB = b.category?.order || 999
          return orderA - orderB
        })
        
        sortedData.forEach((categoryGroup: CategoryWithLinks) => {
          const categoryName = categoryGroup.category?.name || 'Uncategorized'
          const categoryLinks = categoryGroup.links || []
          
          // Sort links within each category by order
          const sortedLinks = categoryLinks.sort((a, b) => {
            const orderA = a.order || 999
            const orderB = b.order || 999
            return orderA - orderB
          })
          
          processedGroupedLinks[categoryName] = sortedLinks
          processedLinks.push(...sortedLinks)
        })
      } else {
        throw new Error('Invalid response format from API - expected array')
      }
      
  setGroupedLinks(processedGroupedLinks)
  setLinks(processedLinks)
  setIsUsingFallback(false)
    } catch (err) {
      console.error("Error fetching links:", err)
      setError(err instanceof Error ? err.message : 'Failed to fetch links')

      // Fallback to local mock JSON data (group by category)
      try {
        const raw: LinkData[] = (mockData as unknown) as LinkData[]
        const groups: Record<string, CategoryWithLinks> = {}

        raw.forEach((item) => {
          const cat = item.category || { _id: 'uncat', name: 'Uncategorized', slug: 'uncategorized', order: 999, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), __v: 0 }
          const key = cat._id || cat.name
          if (!groups[key]) {
            groups[key] = { category: cat, links: [] }
          }
          groups[key].links.push(item)
        })

        const mockApiData: CategoryWithLinks[] = Object.values(groups)

        // Process mockApiData using the same logic as real API response
        const processedGroupedLinks: GroupedLinksResponse = {}
        const processedLinks: LinkData[] = []

        const sortedMockData = mockApiData.sort((a, b) => {
          const orderA = a.category?.order || 999
          const orderB = b.category?.order || 999
          return orderA - orderB
        })

        sortedMockData.forEach((categoryGroup: CategoryWithLinks) => {
          const categoryName = categoryGroup.category?.name || 'Uncategorized'
          const categoryLinks = categoryGroup.links || []

          const sortedLinks = categoryLinks.sort((a, b) => {
            const orderA = a.order || 999
            const orderB = b.order || 999
            return orderA - orderB
          })

          processedGroupedLinks[categoryName] = sortedLinks
          processedLinks.push(...sortedLinks)
        })

  setGroupedLinks(processedGroupedLinks)
  setLinks(processedLinks)
  // start retry loop to try fetching live data in background
  setIsUsingFallback(true)
  setError(null)
  startRetryLoop()
      } catch (fallbackErr) {
        console.error('Failed to use local mock data:', fallbackErr)
      }
    } finally {
      setLoading(false)
    }
  }

  // Retry loop refs and helpers
  const retryTimerRef = useRef<number | null>(null)
  const retryDelayRef = useRef<number>(10000) // start with 10s
  const retryActiveRef = useRef<boolean>(false)

  const clearRetry = () => {
    if (retryTimerRef.current !== null) {
      clearTimeout(retryTimerRef.current)
      retryTimerRef.current = null
    }
    retryActiveRef.current = false
    retryDelayRef.current = 10000
  }

  const tryFetchLiveOnce = async () => {
    try {
      // Force bypass cache to check live API
      linksService.clearCache()
      const data = await linksService.getGroupedLinks()
      if (!Array.isArray(data)) throw new Error('Invalid response format from API')

      // If successful, process and replace current groupedLinks/links
      const processedGroupedLinks: GroupedLinksResponse = {}
      const processedLinks: LinkData[] = []

      const sortedData = data.sort((a, b) => {
        const orderA = a.category?.order || 999
        const orderB = b.category?.order || 999
        return orderA - orderB
      })

      sortedData.forEach((categoryGroup: CategoryWithLinks) => {
        const categoryName = categoryGroup.category?.name || 'Uncategorized'
        const categoryLinks = categoryGroup.links || []

        const sortedLinks = categoryLinks.sort((a, b) => {
          const orderA = a.order || 999
          const orderB = b.order || 999
          return orderA - orderB
        })

        processedGroupedLinks[categoryName] = sortedLinks
        processedLinks.push(...sortedLinks)
      })

  setGroupedLinks(processedGroupedLinks)
  setLinks(processedLinks)
  setError(null)
  setIsUsingFallback(false)
  clearRetry()
      return true
    } catch (e) {
      console.debug('Live fetch retry failed, will retry later:', e)
      return false
    }
  }

  const startRetryLoop = () => {
    if (retryActiveRef.current) return
    retryActiveRef.current = true

    const schedule = async () => {
      const success = await tryFetchLiveOnce()
      if (success) return

      // schedule next attempt with exponential backoff (cap at 60s)
      retryDelayRef.current = Math.min(retryDelayRef.current * 2, 60000)
      retryTimerRef.current = window.setTimeout(schedule, retryDelayRef.current)
    }

    // initial schedule
    retryTimerRef.current = window.setTimeout(schedule, retryDelayRef.current)
  }

  useEffect(() => {
    fetchLinks()

    return () => {
      // cleanup any pending retry timers
      if (typeof window !== 'undefined') {
        if (retryTimerRef.current !== null) {
          clearTimeout(retryTimerRef.current)
          retryTimerRef.current = null
        }
      }
    }
  }, [])

  // Listen for global refresh events so other components using this hook
  // can re-fetch when another part of the app requests a cache refresh.
  useEffect(() => {
    const handler = () => {
      // Force refresh when an external signal is received
      fetchLinks(true)
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('links:refresh', handler)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('links:refresh', handler)
      }
    }
  }, [])

  // ensure external refetch cancels retry loop to avoid races
  const wrappedFetchLinks = async (force?: boolean) => {
    clearRetry()
    return fetchLinks(force)
  }

  return {
    links,
    groupedLinks,
    loading,
    error,
  refetch: wrappedFetchLinks,
  refreshCache: () => wrappedFetchLinks(true), // Force refresh by clearing cache
    clearCache: linksService.clearCache,
    isCacheValid: () => linksService.isCacheValid('links:grouped'),
  isUsingFallback,
  dismissFallback: () => setIsUsingFallback(false),
  }
}