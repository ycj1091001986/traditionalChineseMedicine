<template>
    <div class="zhoumao">
        <div class="flex content-box">
            <div class="left-form">
                <el-form :model="userInfo_form" label-width="auto" label-position="left" class="w-max">
                    <el-row :gutter="100">
                        <el-col :span="12">
                            <el-form-item label="姓名">
                                <el-input v-model="userInfo_form.name" disabled />
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="性别">
                                <el-input v-model="userInfo_form.gender" disabled />
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="电话">
                                <el-input v-model="userInfo_form.gender" disabled />
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="年龄">
                                <el-input v-model="userInfo_form.age" />
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="职业">
                                <el-input />
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="婚姻">
                                <el-select v-model="userInfo_form.marriage">
                                    <el-option label="已婚" value="1" />
                                    <el-option label="未婚" value="0" />
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="身高">
                                <el-input type="number" />
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="体重">
                                <el-input type="number" />
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="血压">
                                <div class="flex">
                                    <el-input />
                                    <span class="ml10 mr10 fs12 color-666">/</span>
                                    <el-input />
                                </div>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="血糖">
                                <el-input />
                            </el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item label="医保号">
                                <el-input />
                            </el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item label="身份证号">
                                <el-input />
                            </el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item label="门诊号">
                                <el-input />
                            </el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item label="住院号">
                                <el-input />
                            </el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item label="主诉">
                                <el-input />
                            </el-form-item>
                        </el-col>
                        <el-col :span="24">
                            <el-form-item label="重大手术与外伤">
                                <el-input />
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
            <div class="right-box">
                <div class="flex color-999 fs14 h32">
                    <el-icon color="#999" size="16">
                        <List />
                    </el-icon>
                    <span class="ml5">既往病史</span>
                </div>
                <div class="mt20">
                    <el-checkbox-group v-model="checkList">
                        <el-row>
                            <el-col :span="12" v-for="item in checkOptions" :key="item.value">
                                <el-checkbox :label="item.label" :value="item.value" />
                            </el-col>
                        </el-row>
                    </el-checkbox-group>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'information'
}
</script>

<script setup>
import { ref, onMounted } from 'vue';

let userInfo_form = ref({
    name: '张三',
    gender: '男',
    age: 21,
    marriage: undefined,
})

let checkList = ref([])

let checkOptions = ref([
    { label: '糖尿病', value: 1 },
    { label: '胃溃疡', value: 2 },
    { label: '高血压', value: 3 },
    { label: '胆结石', value: 4 },
    { label: '冠心病', value: 5 },
    { label: '胆囊炎', value: 6 },
    { label: '脑出血', value: 7 },
    { label: '急慢性肝炎', value: 8 },
    { label: '脑栓赛', value: 9 },
    { label: '脂肪肝', value: 10 },
    { label: '面瘫', value: 21 },
    { label: '痛风', value: 11 },
    { label: '甲亢', value: 12 },
    { label: '贫血', value: 13 },
    { label: '颈椎病', value: 14 },
    { label: '哮喘', value: 15 },
    { label: '腰椎间盘突出', value: 16 },
    { label: '慢性支气管炎', value: 17 },
    { label: '慢性肾炎', value: 18 },
    { label: '类风湿关节炎', value: 19 },
    { label: '慢性胃炎', value: 20 },
])

</script>

<style lang="scss" scoped>
.content-box {
    align-items: stretch;
}

.left-form {
    width: 550px;
    box-sizing: border-box;
    padding-right: 50px;
    flex-shrink: 0;
}

.right-box {
    width: 550px;
    margin-left: 100px;
}
</style>