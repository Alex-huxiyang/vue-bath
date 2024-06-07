<template>
  <el-table :data="tableData" style="width: 100%" stripe="">
    <el-table-column prop="date" label="日期" width="100" />
    <el-table-column prop="total" label="总计" width="120" />
    <el-table-column prop="maintain" label="维护费" width="110" />
    <el-table-column label="销售成本" align="center">
      <el-table-column prop="drinks" label="饮料" width="100" />
      <el-table-column prop="tea" label="茶水" width="100" />
      <el-table-column prop="cigarette" label="香烟" width="100" />
    </el-table-column>
    <el-table-column label="固定成本" align="center">
      <el-table-column prop="water" label="水费" width="90" />
      <el-table-column prop="electricity" label="电费" width="90" />
      <el-table-column prop="gas" label="燃气费" width="90" />
      <el-table-column prop="printer" label="材料费" width="90" />
    </el-table-column>
    <el-table-column label="人力成本" align="center">
      <el-table-column prop="techWorker" label="技师" />
      <el-table-column prop="commonWorker" label="普通员工" />
      <el-table-column prop="helpWorker" label="助浴" />
    </el-table-column>
    <el-table-column prop="personal" label="日常损耗" />
    <el-table-column prop="other" label="其他开支" />
    <el-table-column prop="operation" label="操作" width="300" />
  </el-table>
</template>

<script lang="ts" setup>
const tableData = [
  {
    date: "2024-06-04",
    name: "Tom",
    techWorker: "California",
    commonWorker: "Los Angeles",
    helpWorker: "No. 189, Grove St, Los Angeles",
    other: "CA 90036"
  },
  {
    date: "2024-06-05",
    name: "Tom",
    techWorker: "California",
    commonWorker: "Los Angeles",
    helpWorker: "No. 189, Grove St, Los Angeles",
    other: "CA 90036"
  },
  {
    date: "2024-06-06",
    name: "Tom",
    techWorker: "California",
    commonWorker: "Los Angeles",
    helpWorker: "No. 189, Grove St, Los Angeles",
    other: "CA 90036"
  },
  {
    date: "2024-06-01",
    name: "Tom",
    techWorker: "California",
    commonWorker: "Los Angeles",
    helpWorker: "No. 189, Grove St, Los Angeles",
    other: "CA 90036"
  },
  {
    date: "2024-06-08",
    name: "Tom",
    techWorker: "California",
    commonWorker: "Los Angeles",
    helpWorker: "No. 189, Grove St, Los Angeles",
    other: "CA 90036"
  },
  {
    date: "2024-06-06",
    name: "Tom",
    techWorker: "California",
    commonWorker: "Los Angeles",
    helpWorker: "No. 189, Grove St, Los Angeles",
    other: "CA 90036"
  },
  {
    date: "2024-06-07",
    name: "Tom",
    techWorker: "California",
    commonWorker: "Los Angeles",
    helpWorker: "No. 189, Grove St, Los Angeles",
    other: "CA 90036"
  }
];
</script>
