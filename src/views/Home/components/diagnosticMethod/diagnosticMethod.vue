<template>
    <div class="diagnosticMethod-data">
        <DataTitleBox title="诊断方式人次分布" width="454px" />
        <div class="chart-box">
            <div id="diagnosticChart" @dblclick="chartDialogdbClick('diagnosticChartDialog')"></div>
        </div>

        <el-dialog v-model="chartDialogShow" align-center width="auto" :show-close="false">
            <div class="dialog-box">
                <div class="dialog-title">
                    <img src="@/assets/img/dialog-title-img.png" class="dialog-title-img" />
                    <span>诊断方式人次分布</span>
                </div>
                <img src="@/assets/img/dialog-close-img.png" class="dialog-close-img cursor-hover"
                    @click="chartDialogShow = false" />
                <div class="dialog-chart-box" v-if="chartDialogShow">
                    <div id="diagnosticChartDialog"></div>
                </div>
            </div>
        </el-dialog>

    </div>
</template>

<script>
export default {
    name: 'DiagnosticMethod',
}
</script>

<script setup>
import * as echarts from 'echarts';
import { onMounted, ref, nextTick } from "vue";
import DataTitleBox from '../dataTitleBox/dataTitleBox.vue'; // 标题盒子

onMounted(() => {
    chartInt('diagnosticChart');
})

// 弹框显示
let chartDialogShow = ref(false)

// 双击显示弹窗
async function chartDialogdbClick(chartDomID) {
    chartDialogShow.value = true;
    await nextTick()
    var dialogChart = echarts.init(document.getElementById(chartDomID));
    dialogChart.setOption(options.value)

    setTimeout(() => {
        options.value.series[0].data = [10000, 24000, 30000, 28000, 19000, 36000, 13000, 15000, 31000];
        dialogChart.setOption(options.value);
    }, 3000)
}

let options = ref({})

function chartInt(chartDomID) {
    var myChart = echarts.init(document.getElementById(chartDomID));

    options.value = {
        tooltip: {},
        grid: {
            top: 16,
            bottom: 35,
            left: 75,
            right: 40,
        },
        xAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#1F3E54'
                },
            },
            axisLabel: {
                color: '#FFFFFF',
            },
            splitLine: {
                show: false,
            },
        },
        yAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#1F3E54'
                },
            },
            axisLabel: {
                color: '#FFFFFF',
            },
            data: ['问诊人次', '望诊人次', '脉诊人次', '经络检测', '耳穴检测', '红外检测'],
        },
        series: [
            {
                name: '体检人数',
                type: 'bar',
                barWidth: 20,
                data: [20000, 34000, 40000, 38000, 19000, 36000, 13000],
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                        { offset: 0, color: 'rgba(75, 188, 237, 1)' },
                        { offset: 1, color: 'rgba(75, 188, 237, 0.2)' }
                    ])
                },
                label: {
                    show: true,
                    position: 'right',
                    color: '#fff',
                }
            }
        ]
    }

    // 绘制图表
    myChart.setOption(options.value);
}

</script>

<style scoped lang="scss">
.diagnosticMethod-data {
    width: 630px;
}

.chart-box {
    margin-top: 16px;
    background: linear-gradient(90deg, rgba(62, 174, 255, 0.2) 0%, rgba(62, 174, 255, 0.08) 100%);
}

#diagnosticChart {
    width: 630px;
    height: 408px;
}

.dialog-chart-box {
    width: 900px;
    height: 620px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
}

#diagnosticChartDialog {
    width: 800px;
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
    background: url(@/assets/img/dialog-bg2.png) no-repeat center center/900px 620px;
}

:deep(.el-dialog__header) {
    display: none;
}
</style>