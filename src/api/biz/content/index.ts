import request from '@/config/axios'

// 内容 VO
export interface ContentVO {
  id: number // 自增编号
  type: number // 类型 1用户协议 2隐私政策
  content: string // 内容
}

// 内容 API
export const ContentApi = {
  // 查询内容分页
  getContentPage: async (params: any) => {
    return await request.get({ url: `/biz/content/page`, params })
  },

  // 查询内容详情
  getContent: async (id: number) => {
    return await request.get({ url: `/biz/content/get?id=` + id })
  },

  // 新增内容
  createContent: async (data: ContentVO) => {
    return await request.post({ url: `/biz/content/create`, data })
  },

  // 修改内容
  updateContent: async (data: ContentVO) => {
    return await request.put({ url: `/biz/content/update`, data })
  },

  // 删除内容
  deleteContent: async (id: number) => {
    return await request.delete({ url: `/biz/content/delete?id=` + id })
  },

  // 导出内容 Excel
  exportContent: async (params) => {
    return await request.download({ url: `/biz/content/export-excel`, params })
  },
}