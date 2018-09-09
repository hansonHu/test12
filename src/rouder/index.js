/**
 * Created by Administrator on 2018/6/30.
 */
import Vue from "vue";
import VueRouter from "vue-router";
import main from "../components/main/main.vue"
import login from "../components/login/login.vue"

Vue.use(VueRouter);

export default new VueRouter({
  routes:[
    {
      path:'/',
      component:main
    },
    {
      path:"/login",
      component:login
    }
  ]
})



