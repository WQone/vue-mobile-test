const Layout = (resolve) => require(['@/views/Basic/Layout'], resolve);
const Apply = (resolve) => require(['@/views/Apply'], resolve);

export default {
  path: '/',
  component: Layout,
  children: [
    {
      path: 'Apply',
      component: Apply,
      name: '我的应用',
      meta: ['我的应用', 'Apply'],
    },
  ],
};
