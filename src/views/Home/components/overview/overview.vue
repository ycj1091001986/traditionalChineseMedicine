<template>
    <div class="overview-data">
        <DataTitleBox title="数据总览" width="302px" />

        <div class="data-box">
            <div class="flex mydatePicker">
                <el-date-picker v-model="dateList" type="daterange" :teleported="false" :clearable="false"
                    :editable="false" popper-class="date-popper" unlink-panels start-placeholder="开始日期"
                    end-placeholder="结束日期" size="small" :popper-options="{
                        modifiers: [{
                            name: 'offset', options: { offset: [0, 10] }
                        }, {
                            name: 'flip', options: { fallbackPlacements: ['bottom-start'], allowedAutoPlacements: ['bottom-start'] }
                        }]
                    }" @change="dateTimeChange($event)" />
            </div>
            <div class="list-box">
                <div class="flex row-between list-item" v-for="(item, index) in 7" :key="index">
                    <div class="fs12 left-tag tag-bg1" v-if="index < 4">人数</div>
                    <div class="fs12 left-tag tag-bg2" v-else>检测</div>
                    <div class="flex1">总体检</div>
                    <div>10000</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Overview',
}
</script>

<script setup>
import { ref, onMounted } from "vue";
import DataTitleBox from '../dataTitleBox/dataTitleBox.vue'; // 标题盒子
import dayjs from 'dayjs';

let dateList = ref([]);

onMounted(() => {
    let todayDate = dayjs().format('YYYY-MM-DD');
    dateList.value = [];
    dateList.value[0] = todayDate
    dateList.value[1] = todayDate
    console.log(dateList.value)
});

function dateTimeChange(e) {
    let startDate = dayjs(e[0]);
    let endDate = dayjs(e[1]);
    console.log(startDate.format('YYYY-MM-DD'))
    console.log(endDate.format('YYYY-MM-DD'))
}

</script>

<style scoped lang="scss">
.overview-data {
    width: 332px;
    height: 408px;
}

.data-box {
    color: #fff;
    margin-top: 16px;
    padding: 0 16px;
    height: 408px;
    background: linear-gradient(90deg, rgba(62, 174, 255, 0.2) 0%, rgba(62, 174, 255, 0.08) 100%);
    display: flex;
    flex-direction: column;

    .list-box {
        flex: 1;
        margin-top: 5px;
        // display: flex;
        // flex-direction: column;
        // justify-content: space-around;

        .list-item {
            height: calc(100% / 7);

            .left-tag {
                width: 37px;
                height: 17px;
                line-height: 17px;
                text-align: center;
                margin-right: 8px;
            }

            .tag-bg1 {
                background: url(@/assets/img/tag-bg1.png) no-repeat center center/37px 17px;
            }

            .tag-bg2 {
                background: url(@/assets/img/tag-bg2.png) no-repeat center center/37px 17px;
            }
        }
    }
}



/* 日期弹窗样式 */

.mydatePicker {
    padding-top: 20px;
    position: relative;

    :deep(.el-input__wrapper) {
        box-shadow: unset;
        background: linear-gradient(270deg, #0F2738 0%, #1C4A6B 100%) !important;
    }

    :deep(.el-range-input) {
        color: #fff;
    }

    :deep(.el-range__icon) {
        display: none;
    }

    :deep(.el-range-separator) {
        color: #fff;
    }

    :deep(.el-picker__popper.el-popper) {
        border: 1px solid #4290C8;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        background: linear-gradient(180deg, rgba(28, 74, 107, .8) 0%, rgba(15, 39, 56, .8) 100%);
    }

    :deep(.el-picker-panel) {
        color: #FFF !important;
        background: transparent !important;
    }

    :deep(.el-picker-panel__icon-btn) {
        color: #FFF !important;
    }

    :deep(.is-disabled) {
        color: #999 !important;
    }

    :deep(th) {
        color: #FFF !important;
        border-bottom: 2px solid rgba(255, 255, 255, .1);
    }

    :deep(.el-date-table td.in-range .el-date-table-cell) {
        background-color: rgba(255, 255, 255, 0.08);
    }

    :deep(.el-date-range-picker__content) {
        margin: 16px 0 !important;
        padding: 0 16px !important;
    }

    :deep(.el-date-range-picker__content.is-left) {
        border-right: 2px solid rgba(255, 255, 255, .1);
    }

    :deep(.el-popper__arrow) {
        display: none;
    }
}
</style>
