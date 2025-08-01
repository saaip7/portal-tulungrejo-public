import { apiClient } from '@/lib/api'

export interface LinkData {
  _id: string
  title: string
  url: string
  category: string
  image?: string
}

export const linksService = {
  async getAllLinks(): Promise<LinkData[]> {
    return apiClient.get('/api/links')
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
