<template>
  <div>
    <img src="./LandingPageView/assets/logo.png" alt="electron-vue">
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
  export default {
    components: {
      Links,
      Versions,
      Tablevue
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
