<script setup lang="ts">
import { ref, toRefs } from "vue";
defineOptions({
  name: "CommonBgButton"
});
const props = defineProps({
  height: {
    type: String,
    default: "46px"
  },
  width: {
    type: String,
    default: "120px"
  },
  imgBg: {
    type: String,
    default: ""
  },
  imgBgHover: {
    type: String,
    default: ""
  },
  text: {
    type: String,
    defalut: "按钮"
  }
});
const { imgBg, imgBgHover } = toRefs(props);
let currentShowBg = ref(imgBg.value);
const handleMouseenter = () => {
  currentShowBg.value = imgBgHover.value;
};
const handleMouseleave = () => {
  currentShowBg.value = imgBg.value;
};

defineExpose({
  handleMouseenter,
  handleMouseleave
});
</script>

<template>
  <div class="common-btn" :style="{ height: `${height}`, width: `${width}` }">
    <div class="img-bg">
      <img :src="currentShowBg" />
    </div>
    <div class="text">{{ text }}</div>
  </div>
</template>

<style scoped lang="scss">
.common-btn {
  position: relative;
  cursor: pointer;
  .img-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .text {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
