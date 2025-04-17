import request from '@/config/axios'

// 认证产品 VO
export interface AuthProductVO {
  id: number // id
  name: string // 名称
  bannerImg: string // 图片
  codeImg: string // 二维码地址
  content: string // 内容
}

// 认证产品 API
export const AuthProductApi = {
  // 查询认证产品分页
  getAuthProductPage: async (params: any) => {
    return await request.get({ url: `/system/auth-product/page`, params })
  },

  // 查询认证产品详情
  getAuthProduct: async (id: number) => {
    return await request.get({ url: `/system/auth-product/get?id=` + id })
  },

  // 新增认证产品
  createAuthProduct: async (data: AuthProductVO) => {
    return await request.post({ url: `/system/auth-product/create`, data })
  },

  // 修改认证产品
  updateAuthProduct: async (data: AuthProductVO) => {
    return await request.put({ url: `/system/auth-product/update`, data })
  },

  // 删除认证产品
  deleteAuthProduct: async (id: number) => {
    return await request.delete({ url: `/system/auth-product/delete?id=` + id })
  },

  // 导出认证产品 Excel
  exportAuthProduct: async (params) => {
    return await request.download({ url: `/system/auth-product/export-excel`, params })
  },
}