<template lang="pug">
	footer#footline.toolbar.toolbar-footer
	  .toolbar-actions
	    button.btn.btn-default.pull-left(
				@click="remove_all_file"
	    ) 清除全部

	    button.btn.btn-primary.pull-right 轉換並儲存
	    
</template>


<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
import './LandingPageView/css/photon.min.css'

export default{
	name:'foot-line',
	methods: mapMutations({
		remove_all_file       :'REMOVE_ALL_FILE',
	})
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