<template>
	<modal title="Content Preview" transition="slideUp" :is-show="getshowmodal" :width="viewwidth" @close="TOGGLE_SHOWMODAL">
		<h4>{{getFileName}}</h4>
		<pre class="has-text-left">{{translatedcontent()}}</pre>
	</modal>
</template>


<script>
import {mapGetters, mapMutations} from 'vuex'
import OpenCC from 'opencc'

	export default {
		name: 'content-vue',
		computed: { 
			...mapGetters([
				'getFiles',
				'getFileName',
				'getMode',
				'getpflag',
				'getshowmodal',
				'getFileAmount',
				'getContent',
				'getSelected'
			]),
		},
		methods: {
			translatedcontent(){
				let tmode = this.getpflag ? this.getMode+'p':this.getMode
				let opencc = new OpenCC(tmode+".json")
				return opencc.convertSync(this.getContent)
			},
		 	...mapMutations([
				'DECREMENT_MAIN_COUNTER',
				'INCREMENT_MAIN_COUNTER',
				'CHANGE_MODE',
				'TOGGLE_PFLAG',
				'TOGGLE_SHOWMODAL',
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
		},
		data(){
			return{
        viewwidth:window.innerWidth-20
			}
		}
	}
</script>


<style scoped>
	
</style>