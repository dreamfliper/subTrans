<template>
  <data-table :data="getFiles" :striped=true>
    <column label="姓名" field="name"></column>
    <column label="工号" field="work_no"></column>
    <column label="生日" field="birthday"></column>
    <column label="Email" field="email"></column>
    <column label="性别" field="gender"></column>
    <column label="成绩" field="achievement"></column>
  <tag type="primary">{{getpflag}}</tag>
  <a class="button is-success" @click="toggle_pflag">Success</a>
  </data-table>
</template>

<script>
import {mapGetters, mapState, mapMutations} from 'vuex'

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
    ]),
  methods: mapMutations({
      decrement_main_counter:'DECREMENT_MAIN_COUNTER',
      increment_main_counter:'INCREMENT_MAIN_COUNTER',
      change_mode           :'CHANGE_MODE',
      toggle_pflag          :'TOGGLE_PFLAG',
      add_file              :'ADD_FILE',
      remove_file           :'REMOVE_FILE',
      remove_all_file       :'REMOVE_ALL_FILE',
      update_content        :'UPDATE_CONTENT',
    }),
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
