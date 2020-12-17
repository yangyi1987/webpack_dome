<template lang="pug">
  #app
    img(src="./assets/logo.png")
    router-view
</template>

<script>
export default {
  name: 'App',
  mounted () {
    const config = require('../config')
    console.log(config)
    console.log(process.env.NODE_ENV)
  }
}
</script>

<style>
</style>
