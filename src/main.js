import Vue from "vue";
import VueResource from "vue-resource";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './../element-variables.scss'
import Vuex from 'vuex'

Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.use(VueResource);
Vue.use(MintUI)
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
