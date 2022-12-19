<script setup lang="ts">
import { computed, ref } from "vue";

defineOptions({
  name: "CommonBackBox"
});

defineProps({
  className: {
    type: String,
    default: "twbg-backbox-info" // 信息模块背景twbg-backbox-info ;  弹窗背景twbg-backbox-popup
  },
  bgWidth: {
    type: String,
    default: "100%"
  },
  bgHeight: {
    type: String,
    default: "100%"
  }
});
</script>

<template>
  <div :class="className" :style="'width:' + bgWidth + ';height:' + bgHeight">
    <div class="backbox">
      <div class="top">
        <div class="top-left"></div>
        <div class="top-mid"></div>
        <div class="top-rig"></div>
      </div>
      <div class="mid">
        <div class="mid-left"></div>
        <div class="mid-mid"></div>
        <div class="mid-rig"></div>
      </div>
      <div class="bot">
        <div class="bot-left"></div>
        <div class="bot-mid"></div>
        <div class="bot-rig"></div>
      </div>
    </div>
    <div v-if="$slots.header" class="tw-back-box__header">
      <slot name="header"></slot>
    </div>
    <div :class="$slots.header ? 'haveHeader' : 'noHeader'">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.haveHeader {
  height: calc(100% - 2rem);
  overflow-y: auto;
}
.noHeader {
  height: 100%;
  overflow-y: auto;
}
</style>
