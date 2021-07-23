import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      routes: [{ path: '/any', component: '@/pages/any' }],
    },
  ],
  fastRefresh: {},
  qiankun: { master: {} },
});
