<template>
    <div class="physicalExamination-data">
        <DataTitleBox title="体检人数" width="454px" />
        <div class="chart-box">
            <div id="physicalChart" @dblclick="chartDialogdbClick('physicalChartDialog')"></div>
        </div>

        <div class="chartDialogAll">
            <el-dialog v-model="chartDialogShow" align-center width="auto" :show-close="false">
                <div class="dialog-box">
                    <div class="dialog-title">
                        <img src="@/assets/img/dialog-title-img.png" class="dialog-title-img" />
                        <span>体检人数</span>
                    </div>
                    <img src="@/assets/img/dialog-close-img.png" class="dialog-close-img cursor-hover"
                        @click="chartDialogShow = false" />
                    <div class="dialog-chart-box" v-if="chartDialogShow">
                        <div id="physicalChartDialog"></div>
                    </div>
                </div>
            </el-dialog>
        </div>

    </div>
</template>

<script>
export default {
    name: 'PhysicalExamination',
}
</script>

<script setup>
import * as echarts from 'echarts';
import { onMounted, ref, nextTick } from "vue";
import DataTitleBox from '../dataTitleBox/dataTitleBox.vue'; // 标题盒子

onMounted(() => {
    chartInt('physicalChart');
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

// 季度表格
let quarterChartOption = ref({})
async function chartDialogXaxisClick(chartDomID, dataIndex) {
    console.log(dataIndex);
    chartDialogShow.value = true;
    quarterChartOption.value = JSON.parse(JSON.stringify(options.value));
    await nextTick()
    var dialogChart = echarts.init(document.getElementById(chartDomID));
    dialogChart.setOption(options.value)

    quarterChartOption.value.xAxis.data = ['2023-01', '2023-02', '2023-03'];
    quarterChartOption.value.series[0].data = [10000, 3000, 7000];
    dialogChart.setOption(quarterChartOption.value);
}

let options = ref({})

// chart初始化
function chartInt(chartDomID) {
    var myChart = echarts.init(document.getElementById(chartDomID));

    options.value = {
        tooltip: {},
        grid: {
            top: 30,
            bottom: 16,
            left: 16,
            right: 16,
            containLabel: true,
        },
        xAxis: {
            triggerEvent: true,
            data: ['2023秋', '2023冬', '2024春', '2024夏', '2024秋', '2024冬', '2025春', '2025夏'],
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#1F3E54'
                },
            },
            axisLabel: {
                color: '#FFFFFF',
                fontSize: 14,
                margin: 14,
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
                fontSize: 14,
            },
        },
        series: [
            {
                name: '体检人数',
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
        ]
    }

    // 绘制图表
    myChart.setOption(options.value);

    // 监听x轴单击事件
    myChart.on("click", function (params) {
        console.log(params.dataIndex)
        chartDialogXaxisClick('physicalChartDialog', params.dataIndex)
    })
}

</script>

<style scoped lang="scss">
.physicalExamination-data {
    width: 776px;
}

.chart-box {
    margin-top: 16px;
    background: linear-gradient(90deg, rgba(62, 174, 255, 0.2) 0%, rgba(62, 174, 255, 0.08) 100%);
}

#physicalChart {
    width: 776px;
    height: 408px;
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

.chartDialogAll {
    .dialog-chart-box {
        width: 966px;
        height: 620px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 50px;
    }

    #physicalChartDialog {
        width: 866px;
        height: 455px;
    }

    :deep(.el-dialog) {
        background: url(@/assets/img/dialog-bg1.png) no-repeat center center/966px 620px;
    }

    :deep(.el-dialog__header) {
        display: none;
    }
}

.chartDialogOne {}
</style>