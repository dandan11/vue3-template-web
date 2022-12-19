<script setup lang="ts">
import { CommonBackBox } from "@/components/CommonBackBox";

defineOptions({
  name: "CommonDialogBox"
});

defineProps({
  title: {
    type: String,
    default: "提示"
  },
  // 弹框宽度
  width: {
    type: String,
    default: "50%"
  },
  // 弹框高度
  height: {
    type: String,
    default: "50%"
  },
  // 弹框距离顶部距离
  top: {
    type: String,
    default: "100px"
  },
  dialogFormVisible: {
    type: Boolean,
    default: false
  },
  footerPlace: {
    type: String,
    default: "right"
  }
});

const emit = defineEmits(["update:dialogFormVisible"]);

const handleClose = () => {
  //dialogFormVisible是父组件传过来的props，子组件不能直接修改，需要子传父
  emit("update:dialogFormVisible", false);
};
</script>

<template>
  <transition name="dialog-fade">
    <!--self：事件修饰符，只有点击自己才触发，点击子元素不触发  -->
    <div
      class="tw-dialog__wrapper"
      v-show="dialogFormVisible"
      @click.self="handleClose"
    >
      <CommonBackBox
        className="twbg-backbox-popup"
        :style="{ width, height, margin: `${top} auto` }"
      >
        <!-- 对话框 -->
        <div class="tw-dialog">
          <!-- 对话框顶部 标题 + 关闭按钮 -->
          <div class="tw-dialog__header flex justify-between">
            <span class="tw-dialog__title" v-if="!$slots.title">{{
              title
            }}</span>
            <slot name="title"></slot>
            <button class="tw-dialog__headerbtn" @click="handleClose">
              <IconifyIconOnline icon="ep:close" width="20" />
            </button>
          </div>

          <!-- 对话框内容 -->
          <div class="tw-dialog__body">
            <slot></slot>
          </div>

          <!-- 对话框底部 一般都是一些操作，没有传入footer插槽就不显示v-if -->
          <div
            class="tw-dialog__footer flex"
            :class="[
              { 'justify-center': footerPlace === 'middle' },
              { 'justify-start': footerPlace === 'left' },
              { 'justify-end': footerPlace === 'right' }
            ]"
            v-if="$slots.footer"
          >
            <slot name="footer"></slot>
          </div>
        </div>
      </CommonBackBox>
    </div>
  </transition>
</template>

<style scoped lang="scss"></style>
<style lang="scss">
.tw-dialog__wrapper {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 99999999999;
  background: rgb(0 0 0 / 50%);
  .tw-dialog {
    padding: 5px 10px;
    height: 100%;
    position: relative;
    .tw-dialog__header {
      padding-bottom: 5px;
      .tw-dialog__title {
        color: $twBackBoxColor;
        font-size: 18px;
      }
      .tw-dialog__headerbtn {
        background: transparent;
        &:hover {
          color: $twBackBoxColor;
        }
      }
    }
    .tw-dialog__body {
    }
    .tw-dialog__footer {
      padding: 5px 0;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
}
// 进入动画
.dialog-fade-enter-active {
  animation: dialog-fade-in 0.4s;
}
// 离开动画
.dialog-fade-leave-active {
  animation: dialog-fade-out 0.4s;
}

@keyframes dialog-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes dialog-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
</style>
