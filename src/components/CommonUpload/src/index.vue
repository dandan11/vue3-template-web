<script setup lang="ts">
import { ref } from "vue";

import type { UploadProps, UploadUserFile } from "element-plus";

defineOptions({
  name: "CommonUpload"
});

const fileList = ref<UploadUserFile[]>([
  {
    name: "food.jpeg",
    url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
  },
  {
    name: "food2.jpeg",
    url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
  }
]);

const handleRemove: UploadProps["onRemove"] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles);
};

const handlePreview: UploadProps["onPreview"] = file => {
  console.log(file);
};

const submitAllFiles = () => {
  console.log("子组件接收提交方法");
};

defineExpose({
  submitAllFiles
});
</script>

<template>
  <el-upload
    v-model:file-list="fileList"
    class="upload-demo"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    list-type="picture"
  >
    <slot></slot>
    <template #tip>
      <div class="el-upload__tip">
        <slot name="tip"></slot>
      </div>
    </template>
  </el-upload>
</template>

<style scoped></style>
