import Vue from 'vue';
import Router from 'vue-router';
import User from './User';

Vue.use(Router);

const Layout = (resolve) => require(['@/views/Basic/Layout'], resolve);
const NotBind = (resolve) => require(['@/views/Basic/NotBind'], resolve);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
    },
    User,
    {
      path: '/405',
      name: '405',
      component: NotBind,
    },
  ],
});
