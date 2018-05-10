const Layout = (resolve) => require(['@/views/Basic/Layout'], resolve);
const User = (resolve) => require(['@/views/User'], resolve);

export default {
  path: '/',
  component: Layout,
  children: [
    {
      path: 'User',
      component: User,
      name: '我的信息',
      meta: ['我的信息', 'User'],
    },
  ],
};
