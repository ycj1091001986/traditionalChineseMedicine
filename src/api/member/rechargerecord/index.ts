import request from '@/config/axios'

// 会员充值记录 VO
export interface RechargeRecordVO {
  id: number // 编号
  userId: number // 用户id
  amount: number // 金额
  times: number // 次数
}

// 会员充值记录 API
export const RechargeRecordApi = {
  // 查询会员充值记录分页
  getRechargeRecordPage: async (params: any) => {
    return await request.get({ url: `/member/recharge-record/page`, params })
  },

  // 查询会员充值记录详情
  getRechargeRecord: async (id: number) => {
    return await request.get({ url: `/member/recharge-record/get?id=` + id })
  },

  // 新增会员充值记录
  createRechargeRecord: async (data: RechargeRecordVO) => {
    return await request.post({ url: `/member/recharge-record/create`, data })
  },

  // 修改会员充值记录
  updateRechargeRecord: async (data: RechargeRecordVO) => {
    return await request.put({ url: `/member/recharge-record/update`, data })
  },

  // 删除会员充值记录
  deleteRechargeRecord: async (id: number) => {
    return await request.delete({ url: `/member/recharge-record/delete?id=` + id })
  },

  // 导出会员充值记录 Excel
  exportRechargeRecord: async (params) => {
    return await request.download({ url: `/member/recharge-record/export-excel`, params })
  },
}