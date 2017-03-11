<template>
  <data-table :data="getFiles" :striped=true>
    <column label="姓名" field="name"></column>
    <column label="工号" field="work_no"></column>
    <column label="生日" field="birthday"></column>
    <column label="Email" field="email"></column>
    <column label="性别" field="gender"></column>
    <column label="成绩" field="achievement"></column>
  <tag type="primary">{{getpflag}}</tag>
  </data-table>
</template>

<script>
import {mapGetters, mapState} from 'vuex'

// let   files= [
//   { name: 'Learn JavaScript' ,add: 'sample1',content:'sample1'},
//   { name: 'Learn Vue' ,add:'sample2',content:'sample2'},
//   ]

export default {
  computed: mapGetters([
    'getFiles',
    'getMode',
    'getpflag',
    'getFileAmount',
    'getFiles',
    'getContent'
    ])
  ,
  data (){
    return {
        // dataSource2:files
      }
   }
  }
// console.log('tablevue debug message:'+mode())
</script>

<style scoped>
</style>
