<template>
    <div class="zhoumao flex col-top">
        <el-image class="w300 h400" src="url" fit="contain" />
        <div class="flex1 ml50">
            <el-form label-width="auto" label-position="left" class="w-max">
                <el-row :gutter="20">
                    <el-col :span="7">
                        <el-form-item label="舌形">
                            <el-input />
                        </el-form-item>
                    </el-col>
                    <el-col :span="17" />
                    <el-col :span="3">
                        <el-form-item label="裂纹">
                            <el-select>
                                <el-option label="选项1" value="1" />
                                <el-option label="选项2" value="0" />
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="3">
                        <el-form-item label="数量">
                            <el-input />
                        </el-form-item>
                    </el-col>
                    <el-col :span="3">
                        <el-form-item label="齿痕">
                            <el-select>
                                <el-option label="选项1" value="1" />
                                <el-option label="选项2" value="0" />
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="3">
                        <el-form-item label="数量">
                            <el-input />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" />
                    <el-col :span="3">
                        <el-form-item label="瘀斑">
                            <el-select>
                                <el-option label="选项1" value="1" />
                                <el-option label="选项2" value="0" />
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="3">
                        <el-form-item label="数量">
                            <el-input />
                        </el-form-item>
                    </el-col>
                    <el-col :span="3">
                        <el-form-item label="点刺">
                            <el-select>
                                <el-option label="选项1" value="1" />
                                <el-option label="选项2" value="0" />
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="3">
                        <el-form-item label="数量">
                            <el-input />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" />
                    <el-col :span="6">
                        <el-form-item label="舌色">
                            <el-input />
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="舌态">
                            <el-input />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" />
                    <el-col :span="6">
                        <el-form-item label="苔质">
                            <el-input />
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="苔色">
                            <el-input />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" />
                    <el-col :span="12">
                        <el-form-item label="舌象诊断分析" label-position="top">
                            <div class="border-eee p10 radius12 w-max">
                                <el-scrollbar height="150px" always>
                                    <p v-for="item in 10" :key="item">1、偏阳虚者，易发虚胖。且头发容易脱落，形成早秃。</p>
                                </el-scrollbar>
                            </div>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" />
                    <el-col :span="12">
                        <el-form-item label="舌色参数" label-position="top">
                            <el-table :data="tableData" border class="w-max mt20" max-height="400"
                                :span-method="spanMethodFunction" header-cell-class-name="text-center"
                                cell-class-name="text-center">
                                <el-table-column prop="date" label="色彩空间" width="90" />
                                <el-table-column prop="name" label="测量标准" width="90" />
                                <el-table-column prop="name" label="全舌" />
                                <el-table-column prop="name" label="舌中" />
                                <el-table-column prop="name" label="舌根" />
                                <el-table-column prop="name" label="舌边(左)" />
                                <el-table-column prop="name" label="舌边(右)" />
                                <el-table-column prop="name" label="舌尖" />
                                <el-table-column prop="name" label="舌边(右)" />
                                <el-table-column prop="name" label="舌边(右)" />
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
    name: 'tonguePicture'
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