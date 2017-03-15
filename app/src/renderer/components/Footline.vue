<template lang="pug">
	footer#footline.toolbar.toolbar-footer
	  .toolbar-actions
	    button.btn.btn-default.pull-left
	      | Cancel
	    button.btn.btn-primary.pull-right
	      | Save
</template>

<script>
  import './LandingPageView/css/photon.min.css'

	export default{
		name:'foot-line'
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