<template>
    <div class="dataTitleBox">
        <div class="data-title-box">
            <img src="@/assets/img/data-title-left.png" class="data-title-left" />
            <div class="data-title">{{ title }}</div>
            <div class="data-title-border"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DataTitleBox',
}
</script>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: '标题'
    },
    width: {
        type: String,
        default: '454px'
    }
});
</script>

<style scoped lang="scss">
.data-title-box {
    width: v-bind(width);
    position: relative;

    .data-title {
        color: #FFF;
        font-size: 18px;
        font-weight: bold;
        line-height: 40px;
        padding: 0 16px;
        background:
            url(@/assets/img/data-title-bg.png) no-repeat left bottom/454px 40px,
            linear-gradient(to right, #114367 0%, #000000 100%);
    }

    .data-title-left {
        width: 16px;
        height: 32px;
        position: absolute;
        left: -8px;
        top: 50%;
        transform: translate(-100%, -50%);
    }

    .data-title-border {
        width: v-bind(width);
        height: 45px;
        background: url(@/assets/img/data-title-border.png) no-repeat left center/454px 45px;
        position: absolute;
        left: -2px;
        top: -5px;
    }
}
</style>