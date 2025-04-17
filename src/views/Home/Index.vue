<template>
  <div id="pageHome" class="zhoumao">
    <div class="fullPreview">
      <el-button id="fullPreview" type="primary" :icon="FullScreen" @click="fullPreviewClick()">全屏预览
      </el-button>
    </div>
    <main class="homeView" id="homeView">
      <div class="page-title">中医药数字一体化平台</div>

      <div class="content">
        <div class="content-top">
          <Overview class="mr44" />
          <PhysicalExamination class="mr44" />
          <DiagnosticMethod />
        </div>
        <div class="content-bottom mt30">
          <ConstitutionPeople class="mr44" @constitution-change="onConstitutionChange($event)" />
          <TonguePicture class="mr44" :constitutionInfo="constitutionInfo" />
          <ObservationFace class="mr44" :constitutionInfo="constitutionInfo" />
          <PulseDiagnosis :constitutionInfo="constitutionInfo" />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { initTable } from './FullScreen';
import { FullScreen } from '@element-plus/icons-vue';
import Overview from './components/overview/overview.vue'; // 数据总览
import PhysicalExamination from './components/physicalExamination/physicalExamination.vue'; // 体检人数
import DiagnosticMethod from './components/diagnosticMethod/diagnosticMethod.vue'; // 诊断方式人次分布
import ConstitutionPeople from './components/constitutionPeople/constitutionPeople.vue'; // 九种体质人次统计
import PulseDiagnosis from './components/pulseDiagnosis/pulseDiagnosis.vue'; // 脉诊分布
import TonguePicture from './components/tonguePicture/tonguePicture.vue'; // 舌象分布
import ObservationFace from './components/observationFace/observationFace.vue'; // 面诊分布
import { onMounted, nextTick, ref } from 'vue';

onMounted(async () => {
  await nextTick();
  fullPreviewClick();
  getWidth();
})

function fullPreviewClick() {
  const element = document.getElementById('homeView')
  initTable(element)
}

// 右侧盒子宽度
let rightContentWidth = ref();
let defaultWidth = ref(1920);
let screenScale = ref(1);

function getWidth() {
  const element = document.getElementById('pageHome')
  if (element) {
    rightContentWidth.value = element.offsetWidth - 40;
    screenScale.value = rightContentWidth.value / defaultWidth.value;
    element.style.height = `${element.offsetHeight * screenScale.value}px`;
  }
};

// 体质详情
let constitutionInfo = ref({})

// 体质切换
function onConstitutionChange(e) {
  if (constitutionInfo.value.dataIndex == e.dataIndex) constitutionInfo.value = {};
  else constitutionInfo.value = e;
}

</script>

<style scoped lang="scss">
.homeView {
  transform-origin: top left;
  transform: scale(v-bind(screenScale));
}

.page-title {
  width: 100%;
  height: 70px;
  line-height: 60px;
  text-align: center;
  color: #fff;
  font-size: 26px;
  font-weight: bold;
  background: url(@/assets/img/page-title.png) no-repeat top center/1920px 70px;
}

.content {
  padding: 20px 40px 20px 54px;

  .mr44 {
    margin-right: 44px !important;
  }

  .mt30 {
    margin-top: 30px !important;
  }

  .content-top {
    display: flex;
    align-items: top;
    // justify-content: space-between;
  }

  .content-bottom {
    display: flex;
    align-items: top;
  }
}

.fullPreview {
  color: #333;
}
</style>
