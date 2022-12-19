<script setup lang="ts">
import { CommonUpload } from "@/components/CommonUpload";
import { ref } from "vue";

const twUploadRef = ref(null);
const submit = () => {
  console.log("父组件去提交");
  console.log(twUploadRef.value);
  twUploadRef.value.submitAllFiles();
};
</script>

<template>
  <div class="h-full w-full">
    <CommonUpload ref="twUploadRef">
      <el-button type="primary">上传图片</el-button>
      <template #tip>jpg/png files with a size less than 500kb</template>
    </CommonUpload>
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>

<style scoped></style>
