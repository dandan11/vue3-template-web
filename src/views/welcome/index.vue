<script setup lang="ts">
import { CommonDialogBox } from "@/components/CommonDialogBox";
import { ref } from "vue";
defineOptions({
  name: "Welcome"
});
const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-08",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-06",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-07",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  }
];

const dialogFormVisible = ref(false);

// interface User {
//   date: string;
//   name: string;
//   address: string;
// }

// const currentRow = ref();

// const handleCurrentChange = (val: User | undefined) => {
//   currentRow.value = val;
// };
</script>

<template>
  <div class="h-full w-full">
    <span class="text-xl">表格</span>
    <el-button
      class="float-right mb-4"
      @click="dialogFormVisible = true"
      type="primary"
    >
      打开弹框表格
    </el-button>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
    <!-- 弹框-表格 -S -->
    <CommonDialogBox
      v-model:dialogFormVisible="dialogFormVisible"
      title="表格数据"
    >
      <!-- <template #title>2121</template> -->
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
      </el-table>
      <template #footer>
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">
          确认
        </el-button>
      </template>
    </CommonDialogBox>
    <!-- 弹框-表格 -E -->
  </div>
</template>
