<template>
<div>
  <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
  <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>

  <mt-button type="primary" @click="register" class="loginBtn">登陆</mt-button>
</div>

</template>

<script type="text/ecmascript-6">

    export default {
        data(){
            return {
                username:'',
                 password:""
            }
        },

      methods:{
        register(){
            if(!this.username){
                alert("请输入用户名")
            }else if(!this.password)(
              alert("请输入密码")
            )
//          this.$http({
//            method: 'get',
//            url: '/user',
//            data: {
//              name: 'virus'
//            }
//          })
//            .then(res=>{
//                console.log(res)
//            })
//            .catch(res=>{
//                console.log(res)
//            })
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .loginBtn
      width 20%
      margin 0 40%
</style>
