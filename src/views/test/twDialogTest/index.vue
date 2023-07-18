<script setup lang="ts">
import { CommonDialogBox } from "@/components/CommonDialogBox";
import { notifiMessage, MessageParams } from "@/utils/notifiMessage";
import { CommonBgButton } from "@/components/CommonBgButton";
import { message } from "@/utils/message";

import { ref } from "vue";
defineOptions({
  name: "TwDialogTest"
});

const dialogFormVisible = ref(false);
const dialogDefaultVisible = ref(false);

const openPromptSuccessInfo = () => {
  let messageObj: MessageParams = {
    title: "提示",
    message: "测试提示信息框内容",
    type: "success",
    duration: 0
  };
  notifiMessage(messageObj);
};

const openPromptErrorInfo = () => {
  let messageObj: MessageParams = {
    title: "提示",
    message:
      "测试提示信息框内容提示信息框内容提示信息框内容字数多的情况字数多的情况字数多的情况字数多的情况字数多的情况",
    type: "error"
  };
  notifiMessage(messageObj);
};

const openMessageSuccessInfo = () => {
  message("这是一个简单的提示框", { type: "success" });
};

const openMessageWarnInfo = () => {
  message("这是一个简单的提示框", { type: "warning" });
};

const imgBg = new URL("@/assets/common/tab_switch.png", import.meta.url).href;
const imgBgHover = new URL(
  "@/assets/common/tab_switch-selected.png",
  import.meta.url
).href;
const commonBgButtonRef = ref(null);
const handleMouseenter = () => {
  commonBgButtonRef.value.handleMouseenter();
};
const handleMouseleave = () => {
  commonBgButtonRef.value.handleMouseleave();
};
</script>

<template>
  <div class="h-full w-full">
    <!-- <h4 class="my-4">弹出框</h4> -->

    <el-button @click="dialogFormVisible = true" type="primary">
      打开系统风格弹出框
    </el-button>
    <el-button @click="dialogDefaultVisible = true" type="primary">
      打开普通确认框
    </el-button>
    <!-- <h4 class="my-4">提示信息框（一）</h4> -->
    <el-button @click="openPromptSuccessInfo" type="primary">
      打开提示信息框(成功)
    </el-button>
    <el-button @click="openPromptErrorInfo" type="primary">
      打开提示信息框(失败)
    </el-button>
    <!-- <h4 class="my-4">提示信息框（二）</h4> -->
    <el-button @click="openMessageSuccessInfo" type="primary">
      打开简单提示框(成功)
    </el-button>
    <el-button @click="openMessageWarnInfo" type="primary">
      打开简单提示框(警告)
    </el-button>
    <CommonDialogBox
      v-model:dialogFormVisible="dialogFormVisible"
      title="测试标题"
    >
      <!-- <template #title>2121</template> -->
      <div>
        <p>主体内容，随便写点什么...</p>
      </div>
      <template #footer>
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">
          确认
        </el-button>
      </template>
    </CommonDialogBox>
    <el-dialog
      v-model="dialogDefaultVisible"
      class="tw-el-dialog"
      title="提示"
      width="30%"
    >
      <span>这是一个确认信息</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogDefaultVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogDefaultVisible = false">
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>
    <CommonBgButton
      ref="commonBgButtonRef"
      height="50px"
      width="100px"
      text="提交"
      :imgBg="imgBg"
      :imgBgHover="imgBgHover"
      @mouseenter="handleMouseenter"
      @mouseleave="handleMouseleave"
    ></CommonBgButton>
  </div>
</template>

<style scoped lang="scss">
.common-btn {
  height: 46px;
  width: 120px;
  position: relative;
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
