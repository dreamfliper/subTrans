<template>
  <div id="#app">
    <landing-page></landing-page>
  </div>
</template>

<script>
  import LandingPage from 'components/LandingPageView'
  import store from 'renderer/vuex/store'
  import './dragNdrop'
  export default {
    components: {
      LandingPage
    },
    store
  }
</script>

<style src='./App.css'></style>
