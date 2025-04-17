<template>
    <div class="zhoumao patient-detail">
        <div class="flex row-between">
            <div class="flex">
                <el-button @click="goBack()">返回</el-button>
                <p class="fs18 ml20">病历详情</p>
            </div>
            <el-button type="primary">中医适宜技术处方</el-button>
        </div>
        <div class="bg-fff radius12 p30 mt10 border-eee flex col-top">
            <div class="leftTagBox" v-if="activeName == 2">切换体质养生方案</div>
            <div class="flex1">
                <el-tabs v-model="activeName" type="card" class="demo-tabs" @tab-click="tabsChange($event)">
                    <el-tab-pane v-for="(item) in tabs_list" :label="item.label" :name="item.name" :key="item.name" />
                </el-tabs>
                <information v-if="activeName == 1" />
                <constitution v-else-if="activeName == 2" />
                <inquiry v-else-if="activeName == 3" />
                <tonguePicture v-else-if="activeName == 4" />
                <observationOfTheFace v-else-if="activeName == 5" />
                <pulseDiagnosis v-else-if="activeName == 6" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import information from './components/information/information.vue'
import constitution from './components/constitution/constitution.vue'
import inquiry from './components/inquiry/inquiry.vue'
import tonguePicture from './components/tonguePicture/tonguePicture.vue'
import observationOfTheFace from './components/observationOfTheFace/observationOfTheFace.vue'
import pulseDiagnosis from './components/pulseDiagnosis/pulseDiagnosis.vue'
const route = useRoute()
const router = useRouter()

let opt = ref({})

onMounted(() => {
    opt.value = route.query;
})

function goBack() {
    router.go(-1)
}

let activeName = ref(1)
let tabs_list = ref([
    { label: '病人基本信息', name: 1 },
    { label: '体质辨识', name: 2 },
    { label: '问诊诊断', name: 3 },
    { label: '舌象诊断', name: 4 },
    { label: '面诊诊断', name: 5 },
    { label: '脉诊诊断', name: 6 },
    { label: '闻诊诊断', name: 7 },
    { label: '红外诊断', name: 8 },
    { label: '经络诊断', name: 9 },
    { label: '耳穴诊断', name: 10 },
    { label: '目诊诊断', name: 11 },
])
function tabsChange(e) {
    console.log(e)
}

</script>

<style lang="scss" scoped>
.leftTagBox {
    width: 1rem;
    color: #fff;
    background-color: #48a8e4;
    padding: 10px 10px 50px 10px;
    box-sizing: content-box;
    margin-right: 20px;
    clip-path: polygon(0 0, 100% 0, 100% 95%, 50% 100%, 0 95%);
}
</style>