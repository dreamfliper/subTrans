<template lang="pug">
  data-table#maintable(
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

    tag(type='primary') {{getpflag}}
    a.button.is-success(@click='toggle_pflag') Success
</template>


<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
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
        // dataSource2:files
        viewheight:window.innerHeight-320
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
  margin: 0 5%;
}
span{
  width: inherit;
}
</style>