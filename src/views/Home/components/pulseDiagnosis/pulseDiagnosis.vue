<template>
    <div class="pulseDiagnosis-data">
        <DataTitleBox title="脉诊分布" width="332px" />

        <div class="mt16 flex list-box">
            <div class="list-item cursor-hover" v-for="(item, index) in cate_list" :key="index"
                :class="cate_current == index ? 'is-active' : ''" @click="cate_current = index">{{ item.name }}</div>
        </div>
        <div class="chart-box">
            <div id="pulseDiagnosisChart" @dblclick="chartDialogdbClick('pulseDiagnosisChartDialog')"></div>
        </div>

        <el-dialog v-model="chartDialogShow" align-center width="auto" :show-close="false">
            <div class="dialog-box">
                <div class="dialog-title">
                    <img src="@/assets/img/dialog-title-img.png" class="dialog-title-img" />
                    <span>脉诊分布</span>
                </div>
                <img src="@/assets/img/dialog-close-img.png" class="dialog-close-img cursor-hover"
                    @click="chartDialogShow = false" />
                <div class="dialog-chart-box" v-if="chartDialogShow">
                    <div id="pulseDiagnosisChartDialog"></div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'PulseDiagnosis',
}
</script>

<script setup>
import * as echarts from 'echarts';
import { onMounted, ref, nextTick } from "vue";
import DataTitleBox from '../dataTitleBox/dataTitleBox.vue'; // 标题盒子

onMounted(() => {
    chartInt('pulseDiagnosisChart');
})

let cate_list = ref([
    { name: '脉象', id: 1 },
    { name: '脉率', id: 2 },
    { name: '紧张度', id: 3 },
    { name: '流利度', id: 4 },
])

let cate_current = ref(0)

// 弹框显示
let chartDialogShow = ref(false)
let options_dialog = ref({})

// 双击显示弹窗
async function chartDialogdbClick(chartDomID) {
    chartDialogShow.value = true;
    options_dialog.value = JSON.parse(JSON.stringify(options.value));
    options_dialog.value.series[0].barWidth = 24;
    options_dialog.value.dataZoom[0].endValue = 4;

    await nextTick()
    var dialogChart = echarts.init(document.getElementById(chartDomID));
    dialogChart.setOption(options_dialog.value)

    setTimeout(() => {
        options_dialog.value.series[0].data = [10000, 24000, 30000, 28000, 19000, 36000, 13000, 15000, 31000];
        dialogChart.setOption(options_dialog.value);
    }, 3000)
}

let options = ref({})
let myChart = null

function chartInt(chartDomID) {
    myChart = echarts.init(document.getElementById(chartDomID));
    // 绘制图表
    options.value = {
        tooltip: {},
        grid: {
            top: 30,
            bottom: 55,
            left: 60,
            right: 40,
            // containLabel: true,
        },
        xAxis: {
            data: [
                '浮', '沉', '大', '小', '滑', '涩', '细', '疾', '迟', '代', '钩', '盛', '躁', '喘',
                '数', '弦', '濡', '软', '弱', '轻', '虚', '长', '实', '强', '微', '衰', '急', '散',
                '毛', '坚', '营', '石', '搏', '静', '紧', '结', '动', '短', '缓', '绝', '横', '瘦',
                '徐', '少', '平', '揣', '鼓', '革', '促', '劲', '洪', '满', '疏'
            ],
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#1F3E54'
                },
            },
            axisLabel: {
                color: '#FFFFFF',
            }
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#1F3E54'
                },
            },
            axisLabel: {
                color: '#FFFFFF',
            },
        },
        series: [
            {
                type: 'bar',
                barWidth: 20,
                data: [20000, 34000, 40000, 38000, 19000, 36000, 13000, 15000, 31000],
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(75, 188, 237, 1)' },
                        { offset: 1, color: 'rgba(75, 188, 237, 0.2)' }
                    ])
                },
                label: {
                    show: true,
                    position: 'top',
                    color: '#fff',
                }
            }
        ],
        // 添加 dataZoom 组件
        dataZoom: [
            {
                type: "slider",
                backgroundColor: "#0F2C34",
                fillerColor: "#6694AD",
                borderColor: "rgba(124, 208, 255, 0.30)",
                borderRadius: 3,
                startValue: 0,
                endValue: 2,
                zoomLock: true,
                brushSelect: false,
                showDetail: true,
                textStyle: {
                    color: '#FFF'
                },
                showDataShadow: false,
                realtime: false,
                height: 6,
                handleSize: 0,
                bottom: 15,
            }
        ]
    }
    myChart.setOption(options.value);
}

// 体质详情
const props = defineProps({
    constitutionInfo: {
        type: Object
    }
})

// 更新数据
watch(() => props.constitutionInfo, (newValue, oldValue) => {
    chartsUpdata()
}, { deep: true })

function chartsUpdata() {
    options.value.series[0].data = [300, 400, 100, 500, 345, 678, 563, 528, 479]
    myChart.setOption(options.value);
}


</script>

<style scoped lang="scss">
.pulseDiagnosis-data {
    width: 332px;
}

.list-box {
    gap: 18px;

    .list-item {
        width: 70px;
        height: 27px;
        line-height: 25px;
        color: #fff;
        font-size: 14px;
        text-align: center;
        background: linear-gradient(270deg, #1C4A6B 0%, #1C4A6B 100%);
        border-radius: 4px;
        border: 1px solid rgba(255, 255, 255, 0);
        transition: all 0.3s;
    }

    .is-active {
        // box-shadow: 0 0 0 1px #3491D3;
        border: 1px solid #3491D3;
        background: linear-gradient(270deg, #114468 0%, #146DAC 100%);
    }
}

.chart-box {
    margin-top: 10px;
    background: linear-gradient(90deg, rgba(62, 174, 255, 0.2) 0%, rgba(62, 174, 255, 0.08) 100%);
}

#pulseDiagnosisChart {
    width: 332px;
    height: 373px;
}

.dialog-chart-box {
    width: 774px;
    height: 620px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
}

#pulseDiagnosisChartDialog {
    width: 700px;
    height: 455px;
}

.dialog-box {
    position: relative;

    .dialog-title {
        position: absolute;
        top: 46px;
        left: 15px;
        background: linear-gradient(to left, rgba(62, 174, 255, 0.08) 0%, rgba(62, 174, 255, 0.24) 100%);
        display: flex;
        align-items: center;
        padding: 6px 30px;

        .dialog-title-img {
            width: 23px;
            height: 10px;
            margin-right: 6px;
        }

        span {
            color: #FFF;
            font-size: 16px;
            line-height: 24px;
            font-weight: bold;
        }
    }

    .dialog-close-img {
        position: absolute;
        top: 36px;
        right: 31px;
    }
}

:deep(.el-dialog) {
    background: url(@/assets/img/dialog-bg6.png) no-repeat center center/774px 620px;
}

:deep(.el-dialog__header) {
    display: none;
}
</style>