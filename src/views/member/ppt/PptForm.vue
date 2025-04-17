<template>
  <Dialog :title="dialogTitle" v-model="dialogVisible">
    <el-form
      ref="formRef"
      :model="formData"
      :rules="formRules"
      label-width="100px"
      v-loading="formLoading"
    >
      <el-form-item label="用户id" prop="userId">
        <el-input v-model="formData.userId" placeholder="请输入用户id" />
      </el-form-item>
      <el-form-item label="主题" prop="subject">
        <el-input v-model="formData.subject" placeholder="请输入主题" />
      </el-form-item>
      <el-form-item label="封面图" prop="coverImg">
        <el-input v-model="formData.coverImg" placeholder="请输入封面图" />
      </el-form-item>
      <el-form-item label="pptid" prop="pptId">
        <el-input v-model="formData.pptId" placeholder="请输入pptid" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="submitForm" type="primary" :disabled="formLoading">确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </template>
  </Dialog>
</template>
<script setup lang="ts">
import { PptApi, PptVO } from '@/api/member/ppt'

/** 会员ppt信息 表单 */
defineOptions({ name: 'PptForm' })

const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formType = ref('') // 表单的类型：create - 新增；update - 修改
const formData = ref({
  id: undefined,
  userId: undefined,
  subject: undefined,
  coverImg: undefined,
  pptId: undefined,
})
const formRules = reactive({
})
const formRef = ref() // 表单 Ref

/** 打开弹窗 */
const open = async (type: string, id?: number) => {
  dialogVisible.value = true
  dialogTitle.value = t('action.' + type)
  formType.value = type
  resetForm()
  // 修改时，设置数据
  if (id) {
    formLoading.value = true
    try {
      formData.value = await PptApi.getPpt(id)
    } finally {
      formLoading.value = false
    }
  }
}
defineExpose({ open }) // 提供 open 方法，用于打开弹窗

/** 提交表单 */
const emit = defineEmits(['success']) // 定义 success 事件，用于操作成功后的回调
const submitForm = async () => {
  // 校验表单
  await formRef.value.validate()
  // 提交请求
  formLoading.value = true
  try {
    const data = formData.value as unknown as PptVO
    if (formType.value === 'create') {
      await PptApi.createPpt(data)
      message.success(t('common.createSuccess'))
    } else {
      await PptApi.updatePpt(data)
      message.success(t('common.updateSuccess'))
    }
    dialogVisible.value = false
    // 发送操作成功的事件
    emit('success')
  } finally {
    formLoading.value = false
  }
}

/** 重置表单 */
const resetForm = () => {
  formData.value = {
    id: undefined,
    userId: undefined,
    subject: undefined,
    coverImg: undefined,
    pptId: undefined,
  }
  formRef.value?.resetFields()
}
</script>