<template>
    <div class="tonguePicture-data">
        <DataTitleBox title="舌象分布" width="392px" />
        <div class="mt16 flex list-box">
            <div class="list-item cursor-hover" v-for="(item, index) in cate_list" :key="index"
                :class="cate_current == index ? 'is-active' : ''" @click="cate_current = index">{{ item.name }}</div>
        </div>
        <div class="chart-box">
            <div id="tonguePictureChart" @dblclick="chartDialogdbClick('tonguePictureChartDialog')"></div>
        </div>

        <el-dialog v-model="chartDialogShow" align-center width="auto" :show-close="false">
            <div class="dialog-box">
                <div class="dialog-title">
                    <img src="@/assets/img/dialog-title-img.png" class="dialog-title-img" />
                    <span>舌象分布</span>
                </div>
                <img src="@/assets/img/dialog-close-img.png" class="dialog-close-img cursor-hover"
                    @click="chartDialogShow = false" />
                <div class="dialog-chart-box" v-if="chartDialogShow">
                    <div id="tonguePictureChartDialog"></div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'TonguePicture',
}
</script>

<script setup>
import * as echarts from 'echarts';
import { onMounted, ref, nextTick, watch } from "vue";
import DataTitleBox from '../dataTitleBox/dataTitleBox.vue';

onMounted(() => {
    chartInt('tonguePictureChart');
})

let cate_list = ref([
    { name: '舌形', id: 1 },
    { name: '舌色', id: 2 },
    { name: '舌苔', id: 3 },
    { name: '舌质', id: 4 },
])

let cate_current = ref(0)

// 弹框显示
let chartDialogShow = ref(false)
let options_dialog = ref({})

// 双击显示弹窗
async function chartDialogdbClick(chartDomID) {
    chartDialogShow.value = true;
    options_dialog.value = JSON.parse(JSON.stringify(options.value));
    options_dialog.value.series[0].radius = ['60px', '130px'];
    options_dialog.value.legend.width = 500;

    console.log(options_dialog.value)
    await nextTick()
    var dialogChart = echarts.init(document.getElementById(chartDomID));
    dialogChart.setOption(options_dialog.value)

    setTimeout(() => {
        options_dialog.value.series[0].data = [
            { value: 1048, name: '胖舌、裂纹舌、齿痕舌' },
            { value: 735, name: '点刺舌、齿痕舌' },
            { value: 580, name: '胖舌、点刺舌、齿痕舌' },
            { value: 484, name: '胖舌、齿痕舌' },
            { value: 300, name: '齿痕舌' },
        ]
        dialogChart.setOption(options_dialog.value)
    }, 3000)
}

let options = ref({})
let myChart = null;

function chartInt(chartDomID) {
    myChart = echarts.init(document.getElementById(chartDomID));

    options.value = {
        color: ['#83E2E1', '#6FA8FC', '#F6866E', '#F1898E', '#F8DF81', '#96E8C2', '#DCBAEC', '#C4F2AF'],
        tooltip: {
            trigger: 'item'
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
                padAngle: 5,
                center: ['50%', '140px'],
                radius: ['60px', '110px'],
                itemStyle: {
                    borderRadius: 5
                },
                label: {
                    show: true,
                    color: 'inherit',
                    formatter: '{b}\n{c}人 {d}%'
                },
                data: [
                    { value: 1048, name: '胖舌、裂纹舌、齿痕舌' },
                    { value: 735, name: '点刺舌、齿痕舌' },
                    { value: 580, name: '胖舌、点刺舌、齿痕舌' },
                    { value: 484, name: '胖舌、齿痕舌' },
                    { value: 300, name: '齿痕舌' },
                ],
            }
        ],
    }

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
        { value: 234, name: '胖舌、裂纹舌、齿痕舌' },
        { value: 300, name: '点刺舌、齿痕舌' },
        { value: 100, name: '胖舌、点刺舌、齿痕舌' },
        { value: 50, name: '胖舌、齿痕舌' },
        { value: 95, name: '齿痕舌' }
    ]
    myChart.setOption(options.value);
}

</script>

<style scoped lang="scss">
.tonguePicture-data {
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

#tonguePictureChart {
    width: 392px;
    height: 373px;
}

.dialog-chart-box {
    width: 582px;
    height: 620px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
}

#tonguePictureChartDialog {
    width: 500px;
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
    background: url(@/assets/img/dialog-bg4.png) no-repeat center center/582px 620px;
}

:deep(.el-dialog__header) {
    display: none;
}
</style>