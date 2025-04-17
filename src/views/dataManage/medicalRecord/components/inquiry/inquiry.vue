<template>
    <div class="zhoumao">
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="tabsChange($event)">
            <el-tab-pane v-for="(item) in tabs_list" :label="item.label" :name="item.name" :key="item.name" />
        </el-tabs>
    </div>
</template>

<script>
export default {
    name: 'inquiry'
}
</script>

<script setup>
import { ref, onMounted } from 'vue';

let activeName = ref(1)
let tabs_list = ref([
    { label: '埃德蒙顿', name: 1 },
    { label: '中医五态人格', name: 2 },
    { label: '慢性病诊断', name: 3 },
    { label: '新型肺炎', name: 4 },
    { label: '中医内科', name: 5 },
    { label: '疫病', name: 6 },
    { label: '糖尿病肾病风险评估', name: 7 },
    { label: '糖尿名', name: 8 },
    { label: '朝医四象', name: 9 },
])
function tabsChange(e) {
    console.log(e)
}

</script>

<style lang="scss" scoped></style>