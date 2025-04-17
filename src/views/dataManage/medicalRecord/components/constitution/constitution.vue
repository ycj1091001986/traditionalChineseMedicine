<template>
    <div class="zhoumao flex col-top">
        <div class="left-box">
            <div class="top">
                <div>答题类型：9种体质</div>
                <div class="mt10">答题结果：</div>
            </div>
            <div class="subject-box radius12 p20 mt10">
                <el-scrollbar height="550px" always>
                    <div class="mb10" v-for="(item, index) in subject_list" :key="index">
                        <p class="title mb5">{{ index + 1 }}、 {{ item.title }}</p>
                        <el-radio-group v-model="item.activeOption">
                            <el-radio v-for="(option_item, option_index) in item.options" :key="option_item"
                                :value="option_index">{{
                                    option_item }}</el-radio>
                        </el-radio-group>
                    </div>
                </el-scrollbar>
            </div>
        </div>
        <div class="right-box border-eee radius12 p20 flex1">
            <div class="chart-box">
                <div class="flex row-around w-max">
                    <div class="flex" v-for="(item, index) in colorMap" :key="index">
                        <div class="w50 h20 radius5" :style="{ 'backgroundColor': item.color }"></div>
                        <span class="ml10 fs12 color-666">{{ item.label }}</span>
                    </div>
                </div>
                <div id="chartContent" @dblclick="chartDialogdbClick('constitutionChartDialog')"></div>
            </div>
            <div class="text-content mt20">
                <div class="flex fs14 color-666">
                    <div class="">主体质：基本是平和质，倾向体质:有阳虚质倾向</div>
                    <div class="flex ml20">
                        <div style="flex-shrink: 0;">医生诊断主体质：</div>
                        <el-select placeholder="请选择" style="width: 120px;">
                            <el-option label="平和质" value="1" />
                        </el-select>
                    </div>
                </div>
                <div class="fs12 color-999 text-content-text mt20">
                    <p>平和质为正常体质，有阳虚质倾向的人群有以下健康风险:</p>
                    <p>1、偏阳虚者，易发虚胖。且头发容易脱落，形成早秃。</p>
                    <p>2、骨质疏松:骨质疏松与肾阳关系密切，阳虚者易患骨质疏松。</p>
                    <p>1、偏阳虚者，易发虚胖。且头发容易脱落，形成早秃。</p>
                    <p>2、骨质疏松:骨质疏松与肾阳关系密切，阳虚者易患骨质疏松。</p>
                    <p>1、偏阳虚者，易发虚胖。且头发容易脱落，形成早秃。</p>
                    <p>2、骨质疏松:骨质疏松与肾阳关系密切，阳虚者易患骨质疏松。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'constitution'
}
</script>

<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

let subject_list = ref([
    { title: '您手脚发凉吗？', options: ['没有', '很少', '经常', '总是'], activeOption: 2 },
    { title: '您手脚发凉吗？', options: ['没有', '很少', '经常', '总是'], activeOption: 2 },
    { title: '您手脚发凉吗？', options: ['没有', '很少', '经常', '总是'], activeOption: 2 },
    { title: '您手脚发凉吗？', options: ['没有', '很少', '经常', '总是'], activeOption: 2 },
    { title: '您手脚发凉吗？', options: ['没有', '很少', '经常', '总是'], activeOption: 2 },
    { title: '您手脚发凉吗？', options: ['没有', '很少', '经常', '总是'], activeOption: 2 },
    { title: '您手脚发凉吗？', options: ['没有', '很少', '经常', '总是'], activeOption: 2 },
    { title: '您手脚发凉吗？', options: ['没有', '很少', '经常', '总是'], activeOption: 2 },
    { title: '您手脚发凉吗？', options: ['没有', '很少', '经常', '总是'], activeOption: 2 },
])

onMounted(() => {
    chartInt('chartContent')
})

const colorMap = ref({
    'low': { color: '#1e90ff', label: '低于30' },
    'medium': { color: '#ffd700', label: '30 - 40' },
    'medium2': { color: '#ff8800', label: '40 - 70' },
    'high': { color: '#ff0000', label: '70~以上' }
});

// chart初始化
function chartInt(chartDomID) {
    var myChart = echarts.init(document.getElementById(chartDomID));

    const data = [75, 15, 35, 35, 10, 30, 5, 5, 5];
    const itemStyles = data.map(value => {
        if (value < 30) {
            return colorMap.value.low;
        } else if (value < 40) {
            return colorMap.value.medium;
        } else if (value < 70) {
            return colorMap.value.medium2;
        } else {
            return colorMap.value.high;
        }
    });
    const legendData = [];
    const seriesData = [];
    itemStyles.forEach((style, index) => {
        if (!legendData.includes(style.label)) {
            legendData.push(style.label);
        }
        seriesData.push({
            value: data[index],
            itemStyle: {
                color: style.color,
                barBorderRadius: [5, 5, 0, 0],
                emphasis: {
                    color: '#00FF00' // 这里将选中的柱状图颜色设置为绿色，你可以按需修改
                }
            }
        });
    });

    const option = {
        tooltip: {},
        legend: {
            data: legendData
        },
        xAxis: {
            data: ['平和质', '气虚质', '阳虚质', '阴虚质', '痰湿质', '湿热质', '血瘀质', '气郁质', '特禀质']
        },
        yAxis: {},
        series: [
            {
                type: 'bar',
                data: seriesData,
                barWidth: 20
            }
        ]
    };

    myChart.setOption(option);
}

</script>

<style lang="scss" scoped>
.left-box {
    width: 450px;
    margin-right: 50px;

    .top {
        font-size: 14px;
        color: #323232;
    }

    .subject-box {
        background-color: #F4F1F0;

        .title {
            font-size: 14px;
            color: #323232;
        }
    }
}

#chartContent {
    width: 100%;
    height: 400px;
}

.text-content-text p {
    line-height: 30px;
}
</style>