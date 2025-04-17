<template>
    <div class="zhoumao patient-detail">
        <p class="fs18">病历信息查询</p>
        <div class="bg-fff radius12 p30 mt10 border-eee">
            <div class="search-box">
                <div class="mb20" v-if="searchBox_show">
                    <el-form :model="queryParams" label-width="auto" label-position="right" class="w-max">
                        <el-row :gutter="20">
                            <el-col :span="4">
                                <el-form-item label="所属医院">
                                    <el-input />
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-form-item label="所属科室">
                                    <el-input />
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-form-item label="医生姓名">
                                    <el-input />
                                </el-form-item>
                            </el-col>
                            <el-col :span="12" />
                            <el-col :span="4">
                                <el-form-item label="医生手机号">
                                    <el-input />
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-form-item label="患者手机号">
                                    <el-input />
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-form-item label="患者姓名">
                                    <el-input />
                                </el-form-item>
                            </el-col>
                            <el-col :span="12" />
                            <el-col :span="4">
                                <el-form-item label="病历号">
                                    <el-input />
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-form-item label="所属省">
                                    <el-input />
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-form-item label="红外类型">
                                    <el-select>
                                        <el-option label="选项1" value="1" />
                                        <el-option label="选项2" value="0" />
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12" />
                            <el-col :span="8">
                                <el-form-item label="接诊日期">
                                    <el-date-picker type="daterange" range-separator="至" start-placeholder="开始时间"
                                        end-placeholder="结束时间" />
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-form-item label="查询范围">
                                    <el-select>
                                        <el-option label="选项1" value="1" />
                                        <el-option label="选项2" value="0" />
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </div>
                <div class="search-button-box flex row-between">
                    <div class="left-box">
                        <el-button type="primary">搜索</el-button>
                        <el-button type="primary" @click="searchBoxShowChange()">收起搜索条件</el-button>
                    </div>
                    <div class="right-box">
                        <el-button type="primary">新建病历</el-button>
                        <el-button type="primary">导出CSV</el-button>
                        <el-button type="primary">复制病历</el-button>
                        <el-button type="primary">批量删除</el-button>
                    </div>
                </div>
            </div>
            <!-- 表格内容 -->
            <div class="table-data">
                <el-table :data="list" border height="600" class="w-max mt20">
                    <el-table-column type="selection" width="45" />
                    <el-table-column prop="id" label="序号" width="60" />
                    <el-table-column prop="name" label="病人姓名" width="90" />
                    <el-table-column label="病历号" />
                    <el-table-column label="接诊时间" sortable />
                    <el-table-column label="体质" />
                    <el-table-column label="舌面诊" />
                    <el-table-column label="脉诊" />
                    <el-table-column label="红外" />
                    <el-table-column label="经络" />
                    <el-table-column label="目诊" />
                    <el-table-column prop="gender" label="病人性别" />
                    <el-table-column prop="mobile" label="病人手机号" />
                    <el-table-column prop="doctor_name" label="医生姓名" />
                    <el-table-column prop="hospital" label="所属医院" />
                    <el-table-column prop="departments" label="所属科室" />
                    <el-table-column prop="last_time" label="最近一次就诊时间" />
                    <el-table-column fixed="right" label="操作" width="400">
                        <template #default="scope">
                            <el-button link type="primary" @click="toDeail(scope)">详情</el-button>
                            <el-button link type="primary">修改</el-button>
                            <el-button link type="primary">留言</el-button>
                            <el-button link type="primary">已生成报告</el-button>
                            <el-button link type="primary">线上四诊报告</el-button>
                            <el-button link type="danger">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="flex row-center mt20">
                    <Pagination v-model:limit="queryParams.pageSize" v-model:page="queryParams.pageNo" :total="total"
                        @pagination="getList($event)" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

let queryParams = ref({
    pageNo: 1,
    pageSize: 10,
})
let total = ref(200)

let searchBox_show = ref(true)

onMounted(() => {
    getList();
})

function searchBoxShowChange() {
    searchBox_show.value = !searchBox_show.value;
}

let list = ref([])

function getList(e) {
    if (e) return console.log(e);
    for (let i = 0; i < 10; i++) {
        list.value.push({
            id: i,
            name: `病人0-${i}`,
            gender: '男',
            mobile: '18812341234',
            doctor_name: `医生0-${i}`,
            hospital: '郑州大学附属医院',
            departments: '基础学医院',
            last_time: '2025-03-17 19:15:50'
        })
    }
    console.log('请求接口获取数据', list.value)
}

const { push } = useRouter()
function toDeail(scope) {
    console.log(scope.row.id)
    push(`/dataManage/medicalRecord/detail?id=${scope.row.id}`)
}
</script>

<style lang="scss" scoped></style>