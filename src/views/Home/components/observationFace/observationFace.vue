<template>
    <div class="observationFace-data">
        <DataTitleBox title="面诊分布" width="392px" />

        <div class="mt16 flex list-box">
            <div class="list-item cursor-hover" v-for="(item, index) in cate_list" :key="index"
                :class="cate_current == index ? 'is-active' : ''" @click="cate_current = index">{{ item.name }}</div>
        </div>
        <div class="chart-box">
            <div id="observationFaceChart" @dblclick="chartDialogdbClick('observationFaceChartDialog')"></div>
        </div>

        <el-dialog v-model="chartDialogShow" align-center width="auto" :show-close="false">
            <div class="dialog-box">
                <div class="dialog-title">
                    <img src="@/assets/img/dialog-title-img.png" class="dialog-title-img" />
                    <span>面诊分布</span>
                </div>
                <img src="@/assets/img/dialog-close-img.png" class="dialog-close-img cursor-hover"
                    @click="chartDialogShow = false" />
                <div class="dialog-chart-box" v-if="chartDialogShow">
                    <div id="observationFaceChartDialog"></div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'ObservationFace',
}
</script>

<script setup>
import * as echarts from 'echarts';
import { onMounted, ref, nextTick } from "vue";
import DataTitleBox from '../dataTitleBox/dataTitleBox.vue'; // 标题盒子

onMounted(() => {
    chartInt();
})

let cate_list = ref([
    { name: '面色', id: 1 },
    { name: '唇色', id: 2 },
    { name: '面部', id: 3 },
    { name: '人中', id: 4 },
])

let cate_current = ref(0)

// 弹框显示
let chartDialogShow = ref(false)
let options_dialog = ref({})

// 双击显示弹窗
async function chartDialogdbClick(chartDomID) {
    chartDialogShow.value = true;
    options_dialog.value = JSON.parse(JSON.stringify(options.value));
    options_dialog.value.series[0].radius = ['0', '130px'];
    options_dialog.value.series[0].center = ['50%', '200px'];
    options_dialog.value.legend.width = 500;

    await nextTick()
    var dialogChart = echarts.init(document.getElementById(chartDomID));
    dialogChart.setOption(options_dialog.value)

    setTimeout(() => {
        options_dialog.value.series[0].data = [
            { value: 1048, name: '面色萎黄' },
            { value: 735, name: '面色淡黄' },
            { value: 580, name: '面红黄隐隐明润含蓄' },
        ]
        dialogChart.setOption(options_dialog.value)
    }, 3000)
}

let options = ref({})
let myChart = null

function chartInt() {
    myChart = echarts.init(document.getElementById('observationFaceChart'));
    // 绘制图表
    options.value = {
        color: ['#83E2E1', '#6FA8FC', '#F6866E', '#F1898E', '#F8DF81', '#96E8C2', '#DCBAEC', '#C4F2AF'],
        tooltip: {
            trigger: 'item',
            formatter: '{b}<br />{c}人 {d}%'
        },
        legend: {
            bottom: 20,
            left: 20,
            right: 20,
            width: 352,
            itemWidth: 8,
            itemHeight: 17,
            textStyle: {
                color: '#FFF'
            },
        },
        series: [
            {
                type: 'pie',
                center: ['50%', '140px'],
                radius: ['0', '110px'],
                itemStyle: {
                    borderWidth: 3, // 设置边框宽度为2像素
                    borderColor: '#081823' // 设置边框颜色为黑色
                },
                label: {
                    show: true,
                    color: 'inherit',
                    formatter: '{b}\n{c}人 {d}%'
                },
                data: [
                    { value: 1048, name: '面色萎黄' },
                    { value: 735, name: '面色淡黄' },
                    { value: 580, name: '面红黄隐隐明润含蓄' },
                ],
            }
        ],
    };

    // 绘制图表
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
    options.value.series[0].data = [
        { value: 204, name: '面色萎黄' },
        { value: 509, name: '面色淡黄' },
        { value: 382, name: '面红黄隐隐明润含蓄' },
    ]
    myChart.setOption(options.value);
}

</script>

<style scoped lang="scss">
.observationFace-data {
    width: 392px;
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

#observationFaceChart {
    width: 392px;
    height: 373px;
}

.dialog-chart-box {
    width: 688px;
    height: 590px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
}

#observationFaceChartDialog {
    width: 650px;
    height: 490px;
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
    background: url(@/assets/img/dialog-bg5.png) no-repeat center center/688px 590px;
}

:deep(.el-dialog__header) {
    display: none;
}
</style>