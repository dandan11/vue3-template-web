<script lang="ts" setup>
import { CommonTree } from "@/components/CommonTree";
import { CommonBackBox } from "@/components/CommonBackBox";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import { getTreeList } from "@/api/treeList";
import { onMounted, ref } from "vue";

defineOptions({
  name: "TwTreeTest"
});

const expandedKeys = ["node-1"];
const defaultCheckedKeys = ["node-1-1"];

// interface Tree {
//   id: string;
//   label: string;
//   children?: Tree[];
// }

// const getKey = (prefix: string, id: number) => {
//   return `${prefix}-${id}`;
// };

// const createData = (
//   maxDeep: number,
//   maxChildren: number,
//   minNodesNumber: number,
//   deep = 1,
//   key = "node"
// ): Tree[] => {
//   let id = 0;
//   return Array.from({ length: minNodesNumber })
//     .fill(deep)
//     .map(() => {
//       const childrenNumber =
//         deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren);
//       const nodeKey = getKey(key, ++id);
//       return {
//         id: nodeKey,
//         label: nodeKey,
//         children: childrenNumber
//           ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
//           : undefined
//       };
//     });
// };
// const data = createData(2, 10, 40);
const dataList = ref([]);

const getTreeListData = async () => {
  try {
    const { data } = await getTreeList();
    dataList.value = data.list;
    console.log(data);
  } catch (e) {
    console.log(e);
  } finally {
  }
};

onMounted(() => {
  getTreeListData();
});
</script>
<template>
  <CommonBackBox>
    <template #header>
      <span>封装树形结构组件</span>
    </template>
    <div class="treebox">
      <CommonTree
        :data="dataList"
        :expandedKeys="expandedKeys"
        :defaultCheckedKeys="defaultCheckedKeys"
        :showCheckbox="true"
        :isSearch="true"
        :icon="useRenderIcon('ant-design:caret-right-outlined')"
      >
      </CommonTree>
    </div>
  </CommonBackBox>
</template>
<style lang="scss" scoped>
.treebox {
  // margin: 2px 0 0;
  height: 100%;
}
</style>
