<template lang="pug">
  data-table#maintable(
    v-if='getFileAmount!==0',
    show-index,
    :data='getFiles', 
    :striped='true', 
    :height='viewheight'
    )
    
    column(label='姓名', :width='200')
      template(scope='row')
        p.pointercursor.is-fullwidth(
          @click='showclicked(row.index)'
        ) {{ row.name }} {{row.index}}

    column(label='address')
      template(scope='row')
        p.pointercursor.is-fullwidth(
          @click='showclicked(row.index)'
        ) {{ row.add }}
  
  .dropzone#dropzone(v-else) 拖曳檔案到此處

</template>


<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  name:'table-vue',
  computed: mapGetters([
    'mainCounter',
    'getFiles',
    'getFileName',
    'getMode',
    'getpflag',
    'getFileAmount',
    'getFiles',
    'getContent'
    ]),
  methods: {
    ...mapMutations({
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
    ...mapActions([
      'showclicked' 
    ])
  },
  data (){
    return {
        viewheight:window.innerHeight-250
      }
   }
  }
console.log('tablevue debug message:'+window)
</script>


<style scoped>
*{
  font-size: 16px;
}
.pointercursor{
  cursor: pointer;
}
#maintable{
  margin: 5% 5% 0 5%;
}
.dropzone {
  font-size: 40px;
  line-height:300px;
  margin:0px auto;
  width: 80%;
  height: 365px;
  margin-top: 50px;
  margin-bottom: 10px;
  padding: 10px;
  border: dashed gray;
  border-radius: 15px;
}
</style>