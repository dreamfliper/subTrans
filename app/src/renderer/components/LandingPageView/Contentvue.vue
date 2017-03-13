<template>
	<modal 
	:is-show="getpflag" @close="TOGGLE_PFLAG"
	title="Content Preview" :width="520" transition="slideUp">
	  <h4>{{getFileName}}</h4>
	  <pre class="has-text-left">{{getContent}}</pre>
	</modal>
</template>



<script>
import {mapGetters, mapState, mapMutations} from 'vuex'

  export default {
  	name: 'content-vue',
  	computed: { 
  		...mapGetters([
	    	'getFiles',
	    	'getFileName',
	    	'getMode',
	    	'getpflag',
	    	'getFileAmount',
	    	'getContent',
	    	'getSelected'
	    ]),
  	},
    methods: {
     ...mapMutations([
      'DECREMENT_MAIN_COUNTER',
      'INCREMENT_MAIN_COUNTER',
      'CHANGE_MODE',
      'TOGGLE_PFLAG',
      'ADD_FILE',
      'REMOVE_FILE',
      'REMOVE_ALL_FILE',
      'UPDATE_CONTENT',
    ]),
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

<style scoped></style>