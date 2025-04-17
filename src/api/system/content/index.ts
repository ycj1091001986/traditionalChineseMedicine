import request from '@/config/axios'

// 内容表  VO
export interface ContentVO {
  id: number // id
  type: number // 类型 1服务协议 2隐私协议
  content: string // 内容
}

// 内容表  API
export const ContentApi = {
  // 查询内容表 分页
  getContentPage: async (params: any) => {
    return await request.get({ url: `/system/content/page`, params })
  },

  // 查询内容表 详情
  getContent: async (id: number) => {
    return await request.get({ url: `/system/content/get?id=` + id })
  },

  // 新增内容表 
  createContent: async (data: ContentVO) => {
    return await request.post({ url: `/system/content/create`, data })
  },

  // 修改内容表 
  updateContent: async (data: ContentVO) => {
    return await request.put({ url: `/system/content/update`, data })
  },

  // 删除内容表 
  deleteContent: async (id: number) => {
    return await request.delete({ url: `/system/content/delete?id=` + id })
  },

  // 导出内容表  Excel
  exportContent: async (params) => {
    return await request.download({ url: `/system/content/export-excel`, params })
  },
}