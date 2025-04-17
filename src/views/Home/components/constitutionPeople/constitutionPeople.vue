<template>
    <div class="constitutionPeople-data">
        <DataTitleBox title="九种体质人次统计" width="454px" />
        <div class="chart-box">
            <div id="constitutionChart" @dblclick="chartDialogdbClick('constitutionChartDialog')"></div>
        </div>

        <el-dialog v-model="chartDialogShow" align-center width="auto" :show-close="false">
            <div class="dialog-box">
                <div class="dialog-title">
                    <img src="@/assets/img/dialog-title-img.png" class="dialog-title-img" />
                    <span>九种体质人次统计</span>
                </div>
                <img src="@/assets/img/dialog-close-img.png" class="dialog-close-img cursor-hover"
                    @click="chartDialogShow = false" />
                <div class="dialog-chart-box" v-if="chartDialogShow">
                    <div id="constitutionChartDialog"></div>
                </div>
            </div>
        </el-dialog>

    </div>
</template>

<script>
export default {
    name: 'ConstitutionPeople',
}
</script>

<script setup>
import * as echarts from 'echarts';
import { onMounted, ref, nextTick } from "vue";
import DataTitleBox from '../dataTitleBox/dataTitleBox.vue'; // 标题盒子

onMounted(() => {
    chartInt('constitutionChart');
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

const emit = defineEmits(['constitutionChange'])

function chartInt(chartDomID) {
    var myChart = echarts.init(document.getElementById(chartDomID));

    options.value = {
        tooltip: {},
        title: {
            subtext: '   单位：日',
            subtextStyle: {
                color: '#ccc',
                fontSize: 12
            }
        },
        legend: {
            top: 10,
            right: 10,
            itemWidth: 34,
            itemHeight: 4,
            orient: 'horizontal',
            align: 'right',
            textStyle: {
                color: '#fff'
            },
            data: [
                {
                    name: '女',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            { offset: 0, color: 'rgba(75, 188, 237, 1)' },
                            { offset: 1, color: 'rgba(75, 188, 237, 0.2)' }
                        ]),
                    },
                },
                {
                    name: '男',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            { offset: 0, color: 'rgba(50, 133, 255, 1)' },
                            { offset: 1, color: 'rgba(50, 133, 255, 0.20)' }
                        ]),
                    },
                }
            ],
        },
        grid: {
            top: 60,
            bottom: 16,
            left: 16,
            right: 16,
            containLabel: true,
        },
        xAxis: {
            type: 'category',
            triggerEvent: true,
            data: ['平和质', '湿热质', '气虚质', '阳虚质', '阴虚质', '痰湿质', '气郁质', '血瘀质', '特禀质'],
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
                name: '女',
                type: 'bar',
                barWidth: 8,
                data: [20000, 34000, 40000, 38000, 19000, 36000, 13000, 15000, 24356],
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(75, 188, 237, 1)' },
                        { offset: 1, color: 'rgba(75, 188, 237, 0.2)' }
                    ]),
                    borderRadius: [4, 4, 0, 0],
                },
                label: {
                    show: true,
                    position: 'top',
                    color: 'rgba(75, 188, 237, 1)',
                    fontWeight: 'bold',
                    offset: [0, 0],
                    rotate: 45,
                }
            },
            {
                name: '男',
                type: 'bar',
                barWidth: 8,
                data: [10000, 24000, 30000, 28000, 29000, 26000, 23000, 15000],
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(50, 133, 255, 1)' },
                        { offset: 1, color: 'rgba(50, 133, 255, 0.20)' }
                    ]),
                    borderRadius: [4, 4, 0, 0],
                },
                label: {
                    show: true,
                    position: 'top',
                    color: 'rgba(50, 133, 255, 1)',
                    fontWeight: 'bold',
                    offset: [15, 5],
                    rotate: 45,
                }
            }
        ]
    }

    // 绘制图表
    myChart.setOption(options.value);

    // 监听x轴单击事件
    myChart.on("click", function (params) {
        emit('constitutionChange', params)
    })
}

</script>

<style scoped lang="scss">
.constitutionPeople-data {
    width: 580px;
}

.chart-box {
    margin-top: 16px;
    background: linear-gradient(90deg, rgba(62, 174, 255, 0.2) 0%, rgba(62, 174, 255, 0.08) 100%);
}

#constitutionChart {
    width: 580px;
    height: 410px;
}

.dialog-chart-box {
    width: 844px;
    height: 620px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
}

#constitutionChartDialog {
    width: 750px;
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
    background: url(@/assets/img/dialog-bg2.png) no-repeat center center/844px 620px;
}

:deep(.el-dialog__header) {
    display: none;
}
</style>