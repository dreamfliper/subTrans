<template lang="pug">
footer#footline.toolbar.toolbar-footer
	.toolbar-actions
		button.btn.btn-default.pull-left(
			@click="REMOVE_ALL_FILE"
		) 清除全部

		button.btn.btn-primary.pull-right(
			@click="SAVE_ALL_FILES"
		) 轉換並儲存

</template>


<script>
import { mapMutations } from 'vuex'
import './LandingPageView/css/photon.min.css'

export default {
	name: 'foot-line',
	methods: mapMutations([
		'REMOVE_ALL_FILE',
		'SAVE_ALL_FILES'
	])
}
</script>


<style scoped>
.btn {
	font-size: 14px;
}

.btn .icon {
	font-size: 17px;
}
</style>
