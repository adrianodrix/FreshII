<template lang="html">
  <div id="app">
    <navigations/>
    <div class="container" style="margin-top: 80px">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navigations from './Navigations.vue'

export default {
  name: 'main',
  components: {
    Navigations
  }
}
</script>

<style src="sass/app.scss" lang="sass"></style>
