<template>
    <div class="zhoumao">
        <div class="top-select">
            <el-row :gutter="80">
                <el-col :span="4">
                    <el-select>
                        <el-option label="左手" value="1" />
                        <el-option label="右手" value="0" />
                    </el-select>
                </el-col>
                <el-col :span="4">
                    <el-select>
                        <el-option label="关脉脉象" value="1" />
                        <el-option label="关脉脉象" value="0" />
                    </el-select>
                </el-col>
            </el-row>
        </div>

        <el-image src="url" fit="contain" class="w800 h100 mt20" />

        <div class="table-box mt20">
            <el-row :gutter="40">
                <el-col :span="8">
                    <p class="color-666 fs14">复杂参数</p>
                    <el-table :data="tableData_left" border class="w-max mt20" max-height="200">
                        <el-table-column prop="name" label="项目" />
                        <el-table-column prop="data" label="检测值" />
                    </el-table>
                </el-col>
                <el-col :span="12">
                    <div class="right-top">
                        <p class="color-666 fs14">简略参数</p>
                        <el-table :data="tableData_right_top" border class="w-max mt20">
                            <el-table-column prop="name" label="脉取位置" />
                            <el-table-column prop="data1" label="脉位">
                                <template #default="scope">
                                    <el-input v-model="scope.row.data1.value" />
                                </template>
                            </el-table-column>
                            <el-table-column prop="data2" label="脉率">
                                <template #default="scope">
                                    <el-input v-model="scope.row.data2.value" />
                                </template>
                            </el-table-column>
                            <el-table-column prop="data3" label="脉节律">
                                <template #default="scope">
                                    <el-input v-model="scope.row.data3.value" />
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="right-bottom mt20">
                        <el-table :data="tableData_right_bottom" border class="w-max mt20">
                            <el-table-column prop="data1" label="脉力">
                                <template #default="scope">
                                    <el-input v-model="scope.row.data1.value" />
                                </template>
                            </el-table-column>
                            <el-table-column prop="data2" label="紧张度">
                                <template #default="scope">
                                    <el-input v-model="scope.row.data2.value" />
                                </template>
                            </el-table-column>
                            <el-table-column prop="data3" label="流利度">
                                <template #default="scope">
                                    <el-input v-model="scope.row.data3.value" />
                                </template>
                            </el-table-column>
                            <el-table-column prop="data4" label="脉名提示">
                                <template #default="scope">
                                    <div class="flex">
                                        <el-input v-model="scope.row.data4.value"
                                            :disabled="scope.row.data4.disabled" />
                                        <el-button type="primary" :icon="EditPen" circle class="ml20"
                                            @click="inputEditChange(scope)" />
                                    </div>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </el-col>
            </el-row>
        </div>

    </div>
</template>

<script>
export default {
    name: 'pulseDiagnosis'
}
</script>

<script setup>
import { ref, onMounted } from 'vue';
import { EditPen } from '@element-plus/icons-vue'

let tableData_left = ref([
    { name: '综合分析', data: '' },
    { name: '时间（秒）', data: '0.8901' },
    { name: '时间（秒）', data: '0.8901' },
    { name: '时间（秒）', data: '0.8901' },
    { name: '时间（秒）', data: '0.8901' },
    { name: '时间（秒）', data: '0.8901' },
    { name: '时间（秒）', data: '0.8901' },
    { name: '时间（秒）', data: '0.8901' },
    { name: '时间（秒）', data: '0.8901' },
    { name: '时间（秒）', data: '0.8901' },
    { name: '时间（秒）', data: '0.8901' },
])

let tableData_right_top = ref([
    { name: '左手关脉', data1: { value: '适中', disabled: false }, data2: { value: '67', disabled: false }, data3: { value: '匀齐', disabled: false } }
])

let tableData_right_bottom = ref([
    { data1: { value: '无力', disabled: false }, data2: { value: '适中', disabled: false }, data3: { value: '流利通畅', disabled: false }, data4: { value: '缓', disabled: true } }
])

function inputEditChange(scope) {
    scope.row.data4.disabled = !scope.row.data4.disabled;
    console.log(tableData_right_bottom.value)
    console.log(scope.row.data4.disabled)
}
</script>

<style lang="scss" scoped></style>