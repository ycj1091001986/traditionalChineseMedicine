<template>
    <div class="zhoumao flex col-top">
        <el-image class="w300 h400" src="url" fit="contain" />
        <div class="flex1 ml50">
            <el-form label-width="auto" label-position="left" class="w-max">
                <el-row :gutter="20">
                    <el-col :span="7">
                        <el-form-item label="唇色">
                            <el-input />
                        </el-form-item>
                    </el-col>
                    <el-col :span="17" />
                    <el-col :span="7">
                        <el-form-item label="局部特征">
                            <el-checkbox-group>
                                <el-checkbox label="两颧潮红" value="A" />
                                <el-checkbox label="眼眶周围暗黑" value="B" />
                            </el-checkbox-group>
                        </el-form-item>
                    </el-col>
                    <el-col :span="17" />
                    <el-col :span="7">
                        <el-form-item label="面部光泽">
                            <el-input />
                        </el-form-item>
                    </el-col>
                    <el-col :span="17" />
                    <el-col :span="7">
                        <el-form-item label="面色">
                            <el-input />
                        </el-form-item>
                    </el-col>
                    <el-col :span="17" />
                    <el-col :span="12">
                        <el-form-item label="面象诊断分析" label-position="top">
                            <div class="border-eee p10 radius12 w-max">
                                <el-scrollbar height="150px" always>
                                    <p v-for="item in 10" :key="item">1、偏阳虚者，易发虚胖。且头发容易脱落，形成早秃。</p>
                                </el-scrollbar>
                            </div>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" />
                    <el-col :span="12">
                        <el-form-item label="面色参数" label-position="top">
                            <el-table :data="tableData" border class="w-max mt20" max-height="400"
                                :span-method="spanMethodFunction" header-cell-class-name="text-center"
                                cell-class-name="text-center">
                                <el-table-column prop="date" label="色彩空间" width="90" />
                                <el-table-column prop="name" label="测量标准" width="90" />
                                <el-table-column prop="name" label="总体" />
                                <el-table-column prop="name" label="额头" />
                                <el-table-column prop="name" label="脸颊(左)" />
                                <el-table-column prop="name" label="脸颊(右)" />
                                <el-table-column prop="name" label="眼眶" />
                                <el-table-column prop="name" label="鼻子" />
                            </el-table>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" />
                </el-row>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'observationOfTheFace'
}
</script>

<script setup>
import { ref, onMounted } from 'vue';

let tableData = ref([
    {
        date: 'Lab',
        name: 'L'
    },
    {
        date: 'Lab',
        name: 'a'
    },
    {
        date: 'Lab',
        name: 'b'
    }
])
function spanMethodFunction({
    row,
    column,
    rowIndex,
    columnIndex,
}) {
    if (columnIndex === 0) {
        if (rowIndex % 3 === 0) {
            return {
                rowspan: 3,
                colspan: 1,
            }
        } else {
            return {
                rowspan: 0,
                colspan: 0,
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>