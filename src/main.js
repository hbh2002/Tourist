// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 解决移动端click点击事件300毫秒延迟效果
import fastClick from 'fastclick'
// 导入初始化css样式 全局样式
import './assets/styles/reset.css'
// 解决移动端1像素边框问题
import './assets/styles/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
