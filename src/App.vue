<template>
	<div id="#app">
		<Toolbar></Toolbar>
		<landing-page></landing-page>
		<Footline></Footline>
	</div>
</template>

<script>
import LandingPage from './components/LandingPageView'
import Toolbar from './components/Toolbar'
import Footline from './components/Footline'
import store from './vuex/store'
import './dragNDrop'
export default {
	components: {
		LandingPage,
		Toolbar,
		Footline
	},
	store
}
</script>

<style src='./App.css'>
</style>
