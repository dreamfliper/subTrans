<template>
  <div>
    <img src="./LandingPageView/assets/logo.png" alt="electron-vue">
    <contentvue></contentvue>
    <h1>Welcome.</h1>
    <tablevue></tablevue>
    <versions></versions>
    <links></links>
  </div>
</template>

<script>
  import Links from './LandingPageView/Links'
  import Versions from './LandingPageView/Versions'
  import Tablevue from './LandingPageView/Tablevue'
  import Contentvue from './LandingPageView/Contentvue'
  export default {
    components: {
      Links,
      Versions,
      Tablevue,
      Contentvue
    },
    name: 'landing-page'
  }
</script>

<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>
