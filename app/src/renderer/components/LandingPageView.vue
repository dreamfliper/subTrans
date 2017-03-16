<template lang="pug">
  #landing
    tablevue
    contentvue
    versions
    links
</template>


<script>
  import Links from './LandingPageView/Links'
  import Versions from './LandingPageView/Versions'
  import Tablevue from './LandingPageView/Tablevue'
  import Contentvue from './LandingPageView/Contentvue'
  import 'vue-blu/dist/css/vue-blu.min.css'

  export default {
    components: {
      Links,
      Versions,
      Tablevue,
      Contentvue,
    },
    name: 'landing-page'
  }
</script>


<style scoped>
#landing{
  align-self:stretch;
  display: flex;
  flex-direction: column;
}
</style>
