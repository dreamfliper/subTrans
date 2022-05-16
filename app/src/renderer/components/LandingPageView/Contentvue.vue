<template>
	<modal title="Content Preview" transition="slideUp" :is-show="getshowmodal" :width="viewwidth"
		@close="TOGGLE_SHOWMODAL">
		<pre class="has-text-left">{{ translatedcontent() }}</pre>
		<p slot="footer">{{ validate() }} </p>
	</modal>
</template>


<script>
import { mapGetters, mapMutations } from 'vuex'
import OpenCC from 'opencc'

export default {
	name: 'content-vue',
	computed: {
		...mapGetters([
			'getFileName',
			'getMode',
			'getpflag',
			'getshowmodal',
			'getContent',
		]),
	},
	methods: {
		translatedcontent() {
			let tmode = this.getpflag ? this.getMode + 'p' : this.getMode
			let opencc = new OpenCC(tmode + ".json")
			try {
				return opencc.convertSync(this.getContent)
			} catch (err) {
			}
		},
		validate() {
			try {
				return this.getFileName
			} catch (err) {
				console.log(err)
			}
		},
		...mapMutations([
			'TOGGLE_SHOWMODAL',
		]),
		slideUp() {
			this.$modal.open({
				autoClose: 3,
				transition: 'slideUp',
				content: 'slideUp...'
			});
		},
	},
	data() {
		return {
			viewwidth: window.innerWidth - 20
		}
	}
}
</script>


<style scoped>
</style>
