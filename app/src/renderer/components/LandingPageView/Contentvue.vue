<template>
	<modal 
	:is-show="getpflag" @close="toggle_pflag"
	title="Modal!" :width="520" transition="slideUp">
	  <h4>Text in a modal</h4>
	  <pre>{{getMode}}</pre>
	</modal>
</template>



<script>
import {mapGetters, mapState, mapMutations} from 'vuex'

  export default {
  	computed: { 
  		...mapGetters([
	    	'getFiles',
	    	'getMode',
	    	'getpflag',
	    	'getFileAmount',
	    	'getContent'
	    ]),
  	},
    methods: {
     ...mapMutations({
      decrement_main_counter:'DECREMENT_MAIN_COUNTER',
      increment_main_counter:'INCREMENT_MAIN_COUNTER',
      change_mode           :'CHANGE_MODE',
      toggle_pflag          :'TOGGLE_PFLAG',
      add_file              :'ADD_FILE',
      remove_file           :'REMOVE_FILE',
      remove_all_file       :'REMOVE_ALL_FILE',
      update_content        :'UPDATE_CONTENT',
    }),
		 slideUp() {
	      this.$modal.open({
	        autoClose: 3,
	        transition: 'slideUp',
	        content: 'slideUp...'
	      });
	    },
	  }
  }
</script>




<style scoped>
</style>