<template>
	<header class="toolbar toolbar-header">
	  <h1 class="title">Header with actions</h1>

	  <div class="toolbar-actions flex-sapce-between">
	    <div class="btn-group">
	      <button class="btn btn-default btn-large nocursor">
	       <div class="nocursor">簡</div>
	      </button>
	      <button class="btn btn-default btn-large ">
	        <span class="icon icon-right-bold"></span>
	      </button>
	      <button class="btn btn-default btn-large nocursor">
	       <div class="nocursor">繁</div>
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
  import './LandingPageView/css/photon.min.css'

	export default{
		name:'tool-bar'
	}
</script>

<style scoped>
.absolute-right{
  position: absolute;
  right: 5px;
}
.absolute-left{
  position: absolute;
  left: 5px;
}
.flex-sapce-between{
  display: flex;
  align-items: center;
  justify-content: space-between;

}

.nocursor{cursor: not-allowed!important;}
.btn {font-size: 14px;}

.btn .icon {
	font-size: 17px;
	float:none;
	}
</style>