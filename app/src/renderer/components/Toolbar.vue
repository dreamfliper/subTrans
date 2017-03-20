<template lang="pug">
	header.toolbar.toolbar-header
		h1.title MashingOpencc 批次轉換
		.toolbar-actions.flex-sapce-between
			.btn-group
				button.btn.btn-default.btn-large.nocursor
					.nocursor 簡
				button.btn.btn-default.btn-large
					.icon.icon-right-bold.pointercursor(
						v-if="getMode==='s2tw'",
						@click="change_mode"
					)
					.icon.icon-left-bold.pointercursor(
						v-if="getMode==='tw2s'",
						@click="change_mode"
					)
				button.btn.btn-default.btn-large.nocursor
					.nocursor 繁

			button.btn.btn-default.btn-large.pointercursor(
				:class="{ active: getpflag }",
				@click="toggle_pflag"
			)
				|激光
				|
				.icon.icon-arrows-ccw.icon-text.pointercursor
				|雷射

			button.btn.btn-default.btn-dropdown.absolute-right
				.icon.icon-megaphone

</template>


<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
import './LandingPageView/css/photon.min.css'

export default{
	name:'tool-bar',
	computed: mapGetters([
		'getFiles',
		'getFileName',
		'getMode',
		'getpflag',
		'getshowmodal',
		'getFileAmount',
		'getFiles',
		'getContent'
		]),
	methods: mapMutations({
		decrement_main_counter:'DECREMENT_MAIN_COUNTER',
		increment_main_counter:'INCREMENT_MAIN_COUNTER',
		change_mode           :'CHANGE_MODE',
		toggle_pflag          :'TOGGLE_PFLAG',
		add_file              :'ADD_FILE',
		change_selected       :'CHANGE_SELECTED',
		remove_file           :'REMOVE_FILE',
		remove_all_file       :'REMOVE_ALL_FILE',
		update_content        :'UPDATE_CONTENT',
	})
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
.pointercursor{
  cursor: pointer;
}
.title
	font-size: 16px
	-webkit-app-region: drag

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