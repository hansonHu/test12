<template>
  <mt-header title="soul动漫" class="header">
    <mt-button slot="right" @click="login" class="login">登陆</mt-button>
  </mt-header>
</template>

<script type="text/ecmascript-6">
    export default {
      methods:{
        login:function () {
         console.log(this.$router)
          this.$router.push("/login")
      }
    }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    background #ffbae5
    .login
      background #FF88DC
      padding 0 0.2rem



</style>
