<template lang="pug">
	header.toolbar.toolbar-header
		h1.title Header with actions
		.toolbar-actions.flex-sapce-between
			.btn-group
				button.btn.btn-default.btn-large.nocursor
					.nocursor 簡
				button.btn.btn-default.btn-large
					.icon.icon-right-bold
				button.btn.btn-default.btn-large.nocursor
					.nocursor 繁
			button.btn.btn-default.btn-large.active
				|激光
				|
				span.icon.icon-arrows-ccw.icon-text
				|雷射
			button.btn.btn-default.btn-dropdown.absolute-right
				.icon.icon-megaphone
</template>

<script>
	import './LandingPageView/css/photon.min.css'

	export default{
		name:'tool-bar'
	}
</script>

<style lang="stylus" scoped>
.absolute
	&-right
			position: absolute
			right:5px
	&-left
			position: absolute
			left:5px

.flex-sapce-between{
	display: flex;
	align-items: center;
	justify-content: space-between;

}

.active
	color: #fff
	border: 1px solid transparent
	background-image: none
	background-color: #6d6c6d
	& .icon
		color: #fff
		
.nocursor{cursor: not-allowed!important;}
.btn 
	font-size: 14px
	& .icon
		font-size: 17px;
		float:none;
</style>