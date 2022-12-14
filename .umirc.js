import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // mock: false,
  // proxy: {
  //   '/api': {
  //     'target': 'http://127.0.0.1:7001/',
  //     'changeOrigin': true
  //   }
  // },
  // history: {
  //   type: 'hash'
  // },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/',
          component: './home/index',
          title: '首页'
        },
        {
          path: '/order',
          component: './order/index',
          title: '订单',
          auth: true
        },
        {
          path: '/search',
          component: './search/index',
          title: '搜索',
        }, 
        {
          path: '/observer',
          component: './observer',
          title: 'observer',
        },
        {
          path: '/house',
          component: './house',
          title: '房屋详情',
        },         
      ]
    }
  ],
});
