<template>
	<header class="toolbar toolbar-header">
	  <h1 class="title">Header with actions</h1>

	  <div class="toolbar-actions flex-sapce-between">
	    <div class="btn-group">
	      <button class="btn btn-default btn-large is-disabled">
				簡
	      </button>
	      <button class="btn btn-default btn-large ">
	        <span class="icon icon-right-bold"></span>
	      </button>
	      <button class="btn btn-default btn-large is-disabled nocursor">
	       繁
	      </button>
	    </div>
	    <button class="btn btn-default btn-large">
	    	激光
	      <span class="icon icon-arrows-ccw icon-text"></span>
	      雷射
	    </button>

	    <button class="btn btn-default btn-dropdown absolute-right">
	      <span class="icon icon-megaphone"></span>
	    </button>
	  </div>
	</header>
</template>

<script>
	export default{
		name:'tool-bar'
	}
</script>

<style src="./LandingPageView/css/photon.css" scoped>
</style>