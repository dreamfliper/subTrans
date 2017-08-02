<template lang="pug">
  #landing
    tablevue
    contentvue
</template>


<script>
  import Tablevue from './LandingPageView/Tablevue'
  import Contentvue from './LandingPageView/Contentvue'
  import 'vue-blu/dist/css/vue-blu.min.css'

  export default {
    components: {
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
