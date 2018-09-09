// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from "./rouder"
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import axios from 'axios'
Vue.prototype.$http= axios
Vue.use(Mint);
import "./assets/over.css"
Vue.use(router);



new Vue({
  el: '#app',
  render:h=>h(App),
  router
})
