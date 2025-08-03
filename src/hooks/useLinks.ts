import { useState, useEffect } from 'react'
import { linksService, type LinkData, type GroupedLinksResponse, type CategoryWithLinks } from '@/lib/services/links'

export const useLinks = () => {
  const [links, setLinks] = useState<LinkData[]>([])
  const [groupedLinks, setGroupedLinks] = useState<GroupedLinksResponse>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchLinks = async () => {
    try {
      setLoading(true)
      setError(null)
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
    } catch (err) {
      console.error("Error fetching links:", err)
      setError(err instanceof Error ? err.message : 'Failed to fetch links')
      
      // Fallback to mock data if API call fails - using the same structure as API
      const mockApiData: CategoryWithLinks[] = [
        {
          category: { 
            _id: "cat1", 
            name: "Sosial Media Resmi", 
            slug: "sosial-media-resmi", 
            order: 1, 
            createdAt: "2025-01-01T00:00:00.000Z", 
            updatedAt: "2025-01-01T00:00:00.000Z", 
            __v: 0 
          },
          links: [
            {
              _id: "1",
              title: "Instagram Pemdes Tulungrejo",
              url: "https://instagram.com/tulungrejo",
              category: { 
                _id: "cat1", 
                name: "Sosial Media Resmi", 
                slug: "sosial-media-resmi", 
                order: 1, 
                createdAt: "2025-01-01T00:00:00.000Z", 
                updatedAt: "2025-01-01T00:00:00.000Z", 
                __v: 0 
              },
              image: "/placeholder.svg?height=40&width=40",
              isActive: true,
              order: 1,
              createdAt: "2025-01-01T00:00:00.000Z",
              __v: 0
            },
            {
              _id: "2",
              title: "Instagram Desa Wisata Tulungrejo",
              url: "https://instagram.com/desawisatatulungrejo",
              category: { 
                _id: "cat1", 
                name: "Sosial Media Resmi", 
                slug: "sosial-media-resmi", 
                order: 1, 
                createdAt: "2025-01-01T00:00:00.000Z", 
                updatedAt: "2025-01-01T00:00:00.000Z", 
                __v: 0 
              },
              image: "/placeholder.svg?height=40&width=40",
              isActive: true,
              order: 2,
              createdAt: "2025-01-01T00:00:00.000Z",
              __v: 0
            },
            {
              _id: "3",
              title: "Tiktok Desa Tulungrejo",
              url: "https://tiktok.com/@tulungrejo",
              category: { 
                _id: "cat1", 
                name: "Sosial Media Resmi", 
                slug: "sosial-media-resmi", 
                order: 1, 
                createdAt: "2025-01-01T00:00:00.000Z", 
                updatedAt: "2025-01-01T00:00:00.000Z", 
                __v: 0 
              },
              image: "/placeholder.svg?height=40&width=40",
              isActive: true,
              order: 3,
              createdAt: "2025-01-01T00:00:00.000Z",
              __v: 0
            }
          ]
        },
        {
          category: { 
            _id: "cat2", 
            name: "Kontak dan Pelayanan", 
            slug: "kontak-dan-pelayanan", 
            order: 2, 
            createdAt: "2025-01-01T00:00:00.000Z", 
            updatedAt: "2025-01-01T00:00:00.000Z", 
            __v: 0 
          },
          links: [
            {
              _id: "4",
              title: "Kontak Pelayanan Administrasi",
              url: "https://wa.me/6281234567890",
              category: { 
                _id: "cat2", 
                name: "Kontak dan Pelayanan", 
                slug: "kontak-dan-pelayanan", 
                order: 2, 
                createdAt: "2025-01-01T00:00:00.000Z", 
                updatedAt: "2025-01-01T00:00:00.000Z", 
                __v: 0 
              },
              image: "/placeholder.svg?height=40&width=40",
              isActive: true,
              order: 1,
              createdAt: "2025-01-01T00:00:00.000Z",
              __v: 0
            },
            {
              _id: "5",
              title: "Email Resmi Desa Tulungrejo",
              url: "mailto:info@tulungrejo.desa.id",
              category: { 
                _id: "cat2", 
                name: "Kontak dan Pelayanan", 
                slug: "kontak-dan-pelayanan", 
                order: 2, 
                createdAt: "2025-01-01T00:00:00.000Z", 
                updatedAt: "2025-01-01T00:00:00.000Z", 
                __v: 0 
              },
              image: "/placeholder.svg?height=40&width=40",
              isActive: true,
              order: 2,
              createdAt: "2025-01-01T00:00:00.000Z",
              __v: 0
            }
          ]
        },
        {
          category: { 
            _id: "cat4", 
            name: "Kontak Darurat", 
            slug: "kontak-darurat", 
            order: 4, 
            createdAt: "2025-01-01T00:00:00.000Z", 
            updatedAt: "2025-01-01T00:00:00.000Z", 
            __v: 0 
          },
          links: [
            {
              _id: "8",
              title: "BPBD Kota Batu",
              url: "https://bpbd.batukota.go.id",
              category: { 
                _id: "cat4", 
                name: "Kontak Darurat", 
                slug: "kontak-darurat", 
                order: 4, 
                createdAt: "2025-01-01T00:00:00.000Z", 
                updatedAt: "2025-01-01T00:00:00.000Z", 
                __v: 0 
              },
              image: "/placeholder.svg?height=40&width=40",
              isActive: true,
              order: 1,
              createdAt: "2025-01-01T00:00:00.000Z",
              __v: 0
            },
            {
              _id: "9",
              title: "Pemadam Kebakaran",
              url: "tel:113",
              category: { 
                _id: "cat4", 
                name: "Kontak Darurat", 
                slug: "kontak-darurat", 
                order: 4, 
                createdAt: "2025-01-01T00:00:00.000Z", 
                updatedAt: "2025-01-01T00:00:00.000Z", 
                __v: 0 
              },
              image: "/placeholder.svg?height=40&width=40",
              isActive: true,
              order: 2,
              createdAt: "2025-01-01T00:00:00.000Z",
              __v: 0
            }
          ]
        }
      ]
      
      // Process mock data using the same logic as real API response
      const processedGroupedLinks: GroupedLinksResponse = {}
      const processedLinks: LinkData[] = []
      
      // Sort categories by order before processing
      const sortedMockData = mockApiData.sort((a, b) => {
        const orderA = a.category?.order || 999
        const orderB = b.category?.order || 999
        return orderA - orderB
      })
      
      sortedMockData.forEach((categoryGroup: CategoryWithLinks) => {
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
      
      setGroupedLinks(processedGroupedLinks)
      setLinks(processedLinks)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLinks()
  }, [])

  return {
    links,
    groupedLinks,
    loading,
    error,
    refetch: fetchLinks,
  }
}