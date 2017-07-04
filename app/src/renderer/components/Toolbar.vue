<template lang="pug">
	header.toolbar.toolbar-header
		h1.title subTrans 批次轉換
		div.toolbar-actions.flex-sapce-between
			dropdown.btn.btn-default.btn-dropdown.absolute-left(ref='dropdown')
				div.icon.icon-login 
				|  開啟編碼
				div(slot="content")
					menus
						//- div(@click="set_encode('UTF-8')") {{getEncode}}
						//- it seems ":click" can only passing function without parameter, caused by vue-blu
						//- https://github.com/vuejs/vue-touch/issues/16#issuecomment-252348624
						menu-item(:click="setEncodeUTF8",:is-active="getEncode==='UTF-8'") UTF-8
						menu-item(:click="setEncodeBIG5",:is-active="getEncode==='BIG5'") BIG5
						menu-item(:click="setEncodeGB2312",:is-active="getEncode==='GB2312'") GB2312
			div.btn-group
				button.btn.btn-large.nocursor(style='background-color:gainsboro') 簡
				button.btn.btn-default.btn-large.pointercursor(
						v-show="getMode==='s2tw'",
						@click="change_mode"
					)
					div.icon.icon-right-bold.pointercursor
				button.btn.btn-default.btn-large.pointercursor(
						v-show="getMode==='tw2s'",
						@click="change_mode"
					)
					div.icon.icon-left-bold.pointercursor
				button.btn.btn-large.nocursor(style='background-color:gainsboro') 繁

			button.btn.btn-default.btn-large.pointercursor(
				:class="{ active: getpflag }",
				@click="toggle_pflag"
			)
				|激光
				|
				div.icon.icon-arrows-ccw.icon-text.pointercursor
				|雷射

			button.btn.btn-default.btn-dropdown.absolute-right
				div.icon.icon-megaphone

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
		'getEncode',
		'getpflag',
		'getshowmodal',
		'getFileAmount',
		'getFiles',
		'getContent'
		]),
	methods: {
		...mapMutations({
			decrement_main_counter:'DECREMENT_MAIN_COUNTER',
			increment_main_counter:'INCREMENT_MAIN_COUNTER',
			change_mode           :'CHANGE_MODE',
			set_encode            :'SET_ENCODE',
			toggle_pflag          :'TOGGLE_PFLAG',
			add_file              :'ADD_FILE',
			change_selected       :'CHANGE_SELECTED',
			remove_file           :'REMOVE_FILE',
			remove_all_file       :'REMOVE_ALL_FILE',
			update_content        :'UPDATE_CONTENT',
		}),
		setEncodeUTF8: function(){
			this.set_encode('UTF-8')
			// dirty fix https://github.com/chenz24/vue-blu/blob/master/src/components/dropdown/Dropdown.vue
			setTimeout(() => {
				this.$refs.dropdown.hidePopper()
        this.popper = null;
      }, 300)
		},
		setEncodeBIG5: function(){
			this.set_encode('BIG5')
			// dirty fix https://github.com/chenz24/vue-blu/blob/master/src/components/dropdown/Dropdown.vue
			setTimeout(() => {
				this.$refs.dropdown.hidePopper()
        this.popper = null;
      }, 300)
		},
		setEncodeGB2312: function(){
			this.set_encode('GB2312')
			// dirty fix https://github.com/chenz24/vue-blu/blob/master/src/components/dropdown/Dropdown.vue
			setTimeout(() => {
				this.$refs.dropdown.hidePopper()
        this.popper = null;
      }, 300)
		},
	}
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
		
.pointercursor
	cursor: pointer
.nocursor
	cursor: not-allowed!important
.btn 
	font-size: 14px
	& .icon
		font-size: 17px;
		float:none;
</style>