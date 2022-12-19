<script lang="ts" setup>
import { CommonBackBox } from "@/components/CommonBackBox";
defineOptions({
  name: "TwBackBoxTest"
});
</script>

<template>
  <div class="w-full h-full">
    <CommonBackBox class="float-left" bgWidth="40%" bgHeight="50%">
      <template #header>标题-左上</template>
      测试内容
    </CommonBackBox>
    <CommonBackBox class="float-left" bgWidth="60%" bgHeight="50%">
      <template #header>标题-右上</template>
      测试内容
    </CommonBackBox>
    <CommonBackBox class="float-left" bgWidth="40%" bgHeight="50%">
      <template #header>标题-左下</template>
      测试内容
    </CommonBackBox>
    <CommonBackBox class="float-left" bgWidth="60%" bgHeight="50%">
      <template #header>标题-右下</template>
      测试内容
    </CommonBackBox>
  </div>
</template>
