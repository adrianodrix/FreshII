<template lang="html">
  <b-jumbotron header="Fresh II"
               :lead="index.inspire" >
    </b-jumbotron>
</template>

<script>
import http from 'axios'

export default {
  name: 'Timeline',
  data () {
    return {
      index: {
        inspire: null
      }
    }
  },
  mounted () {
    http.get('http://localhost/api/timeline')
      .then((response) => {
        this.index = response.data.data
      })
  }
}
</script>

<style lang="scss">
</style>
