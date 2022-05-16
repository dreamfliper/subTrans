<template>
	<modal title="Content Preview" transition="slideUp" :is-show="getShowModal" :width="viewWidth"
		@close="TOGGLE_SHOW_MODAL">
		<pre class="has-text-left">{{ translatedContent() }}</pre>
		<p slot="footer">{{ validate() }} </p>
	</modal>
</template>


<script>
import { mapGetters, mapMutations } from 'vuex'
import { DictSource, Converter } from 'wasm-opencc'

export default {
	name: 'content-vue',
	computed: {
		...mapGetters([
			'getFileName',
			'getMode',
			'getPFlag',
			'getShowModal',
			'getContent',
		]),
	},
	methods: {
		async translatedContent() {
      const dictSource = new DictSource(`${this.getMode}${this.getPFlag ? 'p' : ''}.json`)
			const converter = new Converter(await dictSource.get())
			const result = converter.convert(this.getContent)
			converter.delete()
			return result
		},
		validate() {
			try {
				return this.getFileName
			} catch (err) {
				console.log(err)
			}
		},
		...mapMutations([
			'TOGGLE_SHOW_MODAL',
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
			viewWidth: window.innerWidth - 20
		}
	}
}
</script>


<style scoped>
</style>
