<template>
    <div class="zhoumao patient-detail">
        <div class="flex">
            <el-button @click="goBack()">返回</el-button>
            <p class="fs18 ml20">病人信息详情</p>
        </div>
        <div class="bg-fff radius12 p30 mt10 border-eee">
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
                                <el-form-item label="工作单位">
                                    <el-input />
                                </el-form-item>
                            </el-col>
                            <el-col :span="24">
                                <el-form-item label="家庭住址">
                                    <el-input />
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </div>
                <div class="right-box flex">
                    <div class="right-box_left">
                        <div class="flex color-999 fs14 h32">
                            <el-icon color="#999" size="16">
                                <List />
                            </el-icon>
                            <span class="ml5">既往病历</span>
                        </div>
                        <div class="bg-f5f border-eee radius12 mt20 left-content">
                            <p>中医检测</p>
                            <el-scrollbar height="400">
                                <p v-for="item in 20" :key="item">2025-03-17 19:09:24</p>
                            </el-scrollbar>
                        </div>
                    </div>
                    <div class="right-box_right">
                        <div class="flex row-between">
                            <div class="flex color-999 fs14">
                                <el-icon color="#999" size="16">
                                    <List />
                                </el-icon>
                                <span class="ml5">患者分类</span>
                            </div>
                            <el-button type="primary">新增分类</el-button>
                        </div>
                        <div class="bg-f5f border-eee radius12 mt20 p10">
                            <el-table :data="cate_list" border class="w-max mt20" max-height="400">
                                <el-table-column prop="date" label="一级分类" />
                                <el-table-column prop="name" label="二级分类" />
                                <el-table-column label="操作" />
                            </el-table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const route = useRoute()
const router = useRouter()

let opt = ref({})

let userInfo_form = ref({
    name: '张三',
    gender: '男',
    age: 21,
    marriage: undefined,
})

let cate_list = ref([]);

onMounted(() => {
    opt.value = route.query;
})

function goBack() {
    router.go(-1)
}

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
    flex: 1;
    align-items: stretch;

    &_left {
        width: 200px;
        flex-shrink: 0;
        margin-right: 20px;

        .left-content {
            padding: 5px;

            p {
                font-size: 14px;
                color: #323232;
                padding: 8px;
            }
        }
    }

    &_right {
        flex: 1;
    }

    &_left,
    &_right {
        height: 100%;
        display: flex;
        flex-direction: column;

        .bg-f5f {
            flex: 1;
            background-color: #f5f7fa;
        }
    }
}
</style>