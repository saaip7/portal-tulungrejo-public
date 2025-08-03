import { apiClient } from '@/lib/api'

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
    return apiClient.get('/api/links')
  },

  async getGroupedLinks(): Promise<CategoryWithLinks[]> {
    return apiClient.get('/api/links/grouped')
  },

  async getLinkById(id: string): Promise<LinkData> {
    return apiClient.get(`/api/links/${id}`)
  },

  async createLink(linkData: Omit<LinkData, '_id'>): Promise<LinkData> {
    return apiClient.post('/api/links', linkData)
  },

  async updateLink(id: string, linkData: Partial<LinkData>): Promise<LinkData> {
    return apiClient.put(`/api/links/${id}`, linkData)
  },

  async deleteLink(id: string): Promise<void> {
    return apiClient.delete(`/api/links/${id}`)
  },
}
