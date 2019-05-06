import Vue from 'vue'
import Router from 'vue-router'
// 基础方面路由
// import basics from './basics'

// 错误页面
// import error from './error'

// console.log(basics)

Vue.use(Router)

console.log(require('@/pages/home'))

import Home from '@/pages/home'
import basics from '@/pages/basics'
import basics_html from '@/pages/basics/html'
import basics_css from '@/pages/basics/css'
import basics_js from '@/pages/basics/js'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/basics/',
      name:"basics",
      component: basics,
      children:[{
        path: '/basics/html/',
        name: 'html',
        component: basics_html
      },{
        path: '/basics/css/',
        name: 'css',
        component: basics_css
      },{
        path: '/basics/js/',
        name: 'js',
        component: basics_js
      }]
  }
    // ...basics,
    // ...error
  ]
})
