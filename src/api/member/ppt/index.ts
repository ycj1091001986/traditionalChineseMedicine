import request from '@/config/axios'

// 会员ppt信息 VO
export interface PptVO {
  id: number // id
  userId: number // 用户id
  subject: string // 主题
  coverImg: string // 封面图
  pptId: string // pptid
}

// 会员ppt信息 API
export const PptApi = {
  // 查询会员ppt信息分页
  getPptPage: async (params: any) => {
    return await request.get({ url: `/member/ppt/page`, params })
  },

  // 查询会员ppt信息详情
  getPpt: async (id: number) => {
    return await request.get({ url: `/member/ppt/get?id=` + id })
  },

  
  // 查询会员ppt信息详情
  getPptTimes: async () => {
    return await request.get({ url: `/member/ppt/get-times`})
  },


  // 新增会员ppt信息
  createPpt: async (data: PptVO) => {
    return await request.post({ url: `/member/ppt/create`, data })
  },

  // 修改会员ppt信息
  updatePpt: async (data: PptVO) => {
    return await request.put({ url: `/member/ppt/update`, data })
  },

  // 删除会员ppt信息
  deletePpt: async (id: number) => {
    return await request.delete({ url: `/member/ppt/delete?id=` + id })
  },

  // 导出会员ppt信息 Excel
  exportPpt: async (params) => {
    return await request.download({ url: `/member/ppt/export-excel`, params })
  },
}
