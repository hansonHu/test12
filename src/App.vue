<template>
  <div id="app">
    <headerTop></headerTop>
    <router-view></router-view>
  </div>
</template>

<script>
  import headerTop from "./components/header/header"

export default {
  name: 'App',
  components: {
    headerTop
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">


</style>
