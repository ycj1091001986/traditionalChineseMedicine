<template>
    <div class="patient-index zhoumao">
        <p class="fs18">病人信息管理</p>
        <div class="bg-fff radius12 p30 mt10 border-eee">
            <!-- 搜索框 -->
            <div class="search-box flex">
                <div class="search-box__hospital flex">
                    <p class="mr10 fs14">根据</p>
                    <el-select v-model="queryParams.hospital_id" placeholder="所属医院" style="width: 240px;">
                        <el-option v-for="item in hospital_list" :key="item.value" :label="item.label"
                            :value="item.value" />
                    </el-select>
                </div>
                <div class="search-box__search flex ml20">
                    <p class="mr10 fs14">进行</p>
                    <el-input v-model="queryParams.user_name" :prefix-icon="Search" style="width: 360px;" />
                </div>
                <el-button type="primary" class="ml20">查询</el-button>
            </div>
            <!-- 表格内容 -->
            <div class="table-data">
                <el-table :data="user_list" border class="w-max mt20">
                    <el-table-column prop="id" label="序号" width="70" />
                    <el-table-column prop="name" label="病人姓名" width="120" />
                    <el-table-column prop="gender" label="病人性别" width="90" />
                    <el-table-column prop="mobile" label="病人手机号" />
                    <el-table-column prop="doctor_name" label="医生姓名" width="120" />
                    <el-table-column prop="hospital" label="所属医院" />
                    <el-table-column prop="departments" label="所属科室" />
                    <el-table-column prop="last_time" label="最近一次就诊时间" />
                    <el-table-column label="操作" width="90">
                        <template #default="scope">
                            <el-button link type="primary" @click="toDeail(scope)">详情</el-button>
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
import { Search } from '@element-plus/icons-vue';

let queryParams = ref({
    hospital_id: undefined,
    user_name: undefined,
    pageNo: 1,
    pageSize: 10,
})
let hospital_list = ref([
    { label: '医院数据1', value: 1 },
    { label: '医院数据2', value: 2 },
    { label: '医院数据3', value: 3 },
    { label: '医院数据4', value: 4 },
    { label: '医院数据5', value: 5 },
])
let total = ref(200)

let user_list = ref([])

onMounted(() => {
    getList();
})

function getList(e) {
    if (e) return console.log(e);
    for (let i = 0; i < 10; i++) {
        user_list.value.push({
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
    console.log('请求接口获取数据', user_list.value)
}

const { push } = useRouter()
function toDeail(scope) {
    console.log(scope.row.id)
    push(`/dataManage/patient/detail?id=${scope.row.id}`)
}

</script>

<style lang="scss" scoped></style>