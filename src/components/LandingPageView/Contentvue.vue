<template>
	<modal
		title="Content Preview"
		transition="slideUp"
		:is-show="getShowModal"
		:width="viewWidth"
		@close="TOGGLE_SHOW_MODAL">
		<pre class="has-text-left">{{ content }}</pre>
		<p slot="footer">{{ filename() }} </p>
	</modal>
</template>


<script>
import { mapGetters, mapMutations } from 'vuex'
import { invoke } from '@tauri-apps/api/tauri'

export default {
	name: 'content-vue',
	computed: {
		...mapGetters([
			'getFileName',
			'getMode',
			'getpFlag',
			'getShowModal',
			'getContent',
		]),
	},
	methods: {
		filename() {
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
			viewWidth: window.innerWidth - 20,
			content: ''
		}
	},
	watch: {
		getShowModal: {
			async handler(showModal) {
				this.content =
				showModal
					? await invoke('opencc', {input: this.getContent, mode: `${this.getMode}${this.getpFlag ? 'p' : ''}`})
					: ''
			}
		}
	}
}
</script>


<style scoped>
</style>
