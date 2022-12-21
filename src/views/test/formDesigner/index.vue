<script setup lang="ts">
import { ref } from "vue";

defineOptions({
  name: "FormDesigner"
});

const vfdRef = ref(null);
</script>

<template>
  <div class="h-full w-full">
    <div class="formBox">
      <v-form-designer
        ref="vfdRef"
        class="v-form-designer-box"
      ></v-form-designer>
    </div>
  </div>
</template>

<style scoped lang="scss">
.formBox {
}
</style>
<style lang="scss">
.v-form-designer-box {
  svg {
    display: inline-block !important;
  }
  .el-scrollbar__view {
    padding: 0 !important;
  }
  // .el-scrollbar__wrap,
  // .el-scrollbar__view {
  //   overflow: auto;
  //   height: 100%;
  // }
  // & > .el-container {
  //   height: calc(100% - 93px);
  // }
  .el-input__wrapper {
    background-color: #fff;
    --el-input-border-color: #8888884d;
  }
  .el-textarea__inner {
    --el-input-border-color: #8888884d;
    background-color: #fff;
  }
}
</style>
