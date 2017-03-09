<template>
  <data-table :data="dataSource2" :striped=true>
    <column label="姓名" field="name"></column>
    <column label="工号" field="work_no"></column>
    <column label="生日" field="birthday"></column>
    <column label="Email" field="email"></column>
    <column label="性别" field="gender"></column>
    <column label="成绩" field="achievement"></column>
  </data-table>
</template>

<script>
let files= [
    { name: 'Learn JavaScript' ,work_no: 'sample1',birthday:'sample1'},
    { name: 'Learn Vue' ,work_no:'sample2',birthday:'sample2'},{ name: 'Learn Vue' ,work_no:'sample2',birthday:'sample2'},{ name: 'Learn Vue' ,work_no:'sample2',birthday:'sample2'},{ name: 'Learn Vue' ,work_no:'sample2',birthday:'sample2'},{ name: 'Learn Vue' ,work_no:'sample2',birthday:'sample2'},
  ]
export default {
   data (){
    return {
        dataSource2:files
      }
   }
  }
console.log('tablevue debug message:'+files[1].name)
</script>

<style scoped>
</style>
