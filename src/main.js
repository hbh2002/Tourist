// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入Vuex
import store from './store'
// 解决移动端click点击事件300毫秒延迟效果
import fastClick from 'fastclick'
// 轮播图组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 解决部分手机端白屏问题
import 'babel-polyfill'
// 导入初始化css样式 全局样式
import 'styles/reset.css'
// 解决移动端1像素边框问题
import 'styles/border.css'
// 导入矢量图标样式
import 'styles/iconfonts/iconfonts.css'
// 轮播图样式
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
