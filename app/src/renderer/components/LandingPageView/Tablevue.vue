<template lang="pug">
  data-table#maintable(
    v-if='getFileAmount!==0',
    show-index,
    :data='getFiles', 
    :striped='true', 
    )
    
    column(label='姓名', :width='200')
      template(scope='row')
        p.pointercursor.is-fullwidth(
          @click='showclicked(row.index)'
        ) {{ row.name }}

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
  ready: function () {
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.onResize)
  },
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
    onResize(event){
      this.viewheight=window.innerHeight-250
    },
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
      }
   }
  }
</script>


<style scoped>
*{
  font-size: 16px;
}
.pointercursor{
  cursor: pointer;
}
#maintable{
  height: calc(100vh - 215px);
  margin: 5% 5% 0 5%;
}
.dropzone {
  font-size: 40px;
  margin:0px auto;
  line-height: calc(100vh - 260px);
  width: 80%;
  margin-top: 50px;
  margin-bottom: 10px;
  padding: 10px;
  height: calc(100vh - 236px);
  border: dashed gray;
  border-radius: 15px;
}
</style>