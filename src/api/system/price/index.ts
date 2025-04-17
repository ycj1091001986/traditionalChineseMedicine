import request from '@/config/axios'

// 价格配置 VO
export interface PriceVO {
  id: number // id
  price: number // 价格
  times: number // 次数
}

// 价格配置 API
export const PriceApi = {
  // 查询价格配置分页
  getPricePage: async (params: any) => {
    return await request.get({ url: `/system/price/page`, params })
  },

  // 查询价格配置详情
  getPrice: async (id: number) => {
    return await request.get({ url: `/system/price/get?id=` + id })
  },

  // 新增价格配置
  createPrice: async (data: PriceVO) => {
    return await request.post({ url: `/system/price/create`, data })
  },

  // 修改价格配置
  updatePrice: async (data: PriceVO) => {
    return await request.put({ url: `/system/price/update`, data })
  },

  // 删除价格配置
  deletePrice: async (id: number) => {
    return await request.delete({ url: `/system/price/delete?id=` + id })
  },

  // 导出价格配置 Excel
  exportPrice: async (params) => {
    return await request.download({ url: `/system/price/export-excel`, params })
  },
}