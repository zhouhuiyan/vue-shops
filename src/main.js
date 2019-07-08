import Vue from 'vue'   
import App from './App.vue'
import VueRouter from 'vue-router'

/**
 * router 组件外置  
 * import router from ‘路径’
 * 再NEW VUE中注册router
 * 如果引入的名字不是router那么注册方式为
 * router：名字
 * 
*/
// import Vue from 'vue/dist/vue.esm.js'  //compiler 模板模式

Vue.use(VueRouter);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


