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
    'getFileAmount',
    'getFiles',
    ]),
  methods: {
    onResize(event){
      this.viewheight=window.innerHeight-250
    },
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
  height: calc(100vh - 115px);
  margin: 0% 5% 0 5%;
  overflow: scroll;
}
.dropzone {
  font-size: 40px;
  margin:0px auto;
  line-height: calc(100vh - 215px);
  width: 80%;
  height: calc(100vh - 175px);
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 10px;
  border: dashed gray;
  border-radius: 15px;
}
</style>