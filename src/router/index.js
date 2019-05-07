import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 基础方面路由
import basics from './basics'

// 错误页面
import error from './error'


export default new Router({
  // mode:"history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['@/pages/home'], resolve)
    },
    ...basics,
    ...error
  ]
})
