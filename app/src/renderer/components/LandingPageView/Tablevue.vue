<template>
  <data-table show-index id="maintable" :data="getFiles" :striped=true :height="viewheight">
    <column label="姓名" :width='200'>
      <template scope="row">
        <p class="pointercursor" is-fullwidth @click="change_selected(row.index)">{{ row.name }}</p>
      </template>
    </column>
    <column label="address">
      <template scope="row">
        <p class="pointercursor" is-fullwidth @click="change_selected(row.index)">{{ row.add }}</p>
      </template>
    </column>
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
  name:'table-vue',
  computed: mapGetters([
    'getFiles',
    'getFileName',
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
      change_selected       :'CHANGE_SELECTED',
      remove_file           :'REMOVE_FILE',
      remove_all_file       :'REMOVE_ALL_FILE',
      update_content        :'UPDATE_CONTENT',
    }),
  data (){
    return {
        // dataSource2:files
        viewheight:window.innerHeight-315
      }
   }
  }
console.log('tablevue debug message:'+window)
</script>

<style scoped>
.pointercursor{
  cursor: pointer;
}
#maintable{
  margin: 0 5%;
}
span{
  width: inherit;
}
</style>