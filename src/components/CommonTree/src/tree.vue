<script setup lang="ts">
import { extractPathList, deleteChildren } from "@/utils/tree";
import { computed, ref } from "vue";
import type { TreeNode } from "element-plus/es/components/tree-v2/src/types";
import { bool } from "vue-types";
import { ElTreeV2 } from "element-plus";

defineOptions({
  name: "CommonTree"
});

defineProps({
  showCheckbox: {
    type: Boolean,
    default: false
  },
  isSearch: {
    type: Boolean,
    default: false
  },
  icon: {},
  defaultCheckedKeys: {
    type: Array,
    default: []
  },
  expandedKeys: {
    type: Array,
    default: []
  },
  data: {
    type: Array,
    default: []
  }
});

interface treeNode extends TreeNode {
  meta: {
    title: string;
  };
}

const query = ref(""); // 搜索框内容

const props = ref({
  value: "id",
  label: "label",
  children: "children"
});
const treeRef = ref<InstanceType<typeof ElTreeV2>>();
const onQueryChanged = (query: string) => {
  // TODO: fix typing when refactor tree-v2
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  treeRef.value!.filter(query);
};

const filterMethod = (query: string, node: treeNode) => {
  return node.label!.indexOf(query) !== -1;
};
</script>

<template>
  <el-input
    v-model="query"
    placeholder="Please enter keyword"
    @input="onQueryChanged"
    v-if="isSearch"
  />
  <el-tree-v2
    ref="treeRef"
    :data="data"
    :props="props"
    :show-checkbox="showCheckbox"
    :height="500"
    :filter-method="filterMethod"
    :default-expanded-keys="expandedKeys"
    :default-checked-keys="defaultCheckedKeys"
    :icon="icon"
    class="twTree"
  >
    <template #default="{ data }">
      <span>{{ data.label }}</span>
    </template>
  </el-tree-v2>
</template>

<style scoped lang="scss">
.twTree {
  background: $menuBg;
  color: $themeTextColor;
  margin-top: 10px;
}
</style>
<style>
.el-tree-node:focus > .el-tree-node__content,
.el-tree-node__content:hover {
  background-color: #5deefe4d;
  border: solid 1px rgba(93, 238, 254, 0.3);
}
</style>
