import Vue from 'vue';
import Router from 'vue-router';
import userInfo from '@/views/userInfo';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '我的信息',
      component: userInfo,
    },
  ],
});
