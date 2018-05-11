import Vue from 'vue';
import Router from 'vue-router';
import Apply from './Apply';
import Message from './Message';
import News from './News';
import User from './User';

Vue.use(Router);

const Blank = (resolve) => require(['@/views/Basic/Blank'], resolve);
const NotBind = (resolve) => require(['@/views/Basic/NotBind'], resolve);
const Login = (resolve) => require(['@/views/Basic/Login'], resolve);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Blank',
      component: Blank,
    },
    {
      path: '/Login',
      name: '登录',
      component: Login,
    },
    User,
    Apply,
    Message,
    News,
    {
      path: '/405',
      name: '405',
      component: NotBind,
    },
  ],
});
