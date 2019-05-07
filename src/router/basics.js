export default[
    {
        path:'/basics/',
        name:"basics",
        meta: {
          title:"教师详情1"
        },
        component:resolve => require(['@/pages/basics'], resolve),
        children:[{
          path: '/basics/html/',
          name: 'html',
          meta: {
            title:"教师详情2"
          },
          component: resolve => require(['@/pages/basics/html'], resolve)
        },{
          path: '/basics/css/',
          name: 'css',
          meta: {
            title:"教师详情3"
          },
          component: resolve => require(['@/pages/basics/css'], resolve)
        },{
          path: '/basics/js/',
          name: 'js',
          meta: {
            title:"教师详情4"
          },
          component: resolve => require(['@/pages/basics/js'], resolve)
        }]
    }
]