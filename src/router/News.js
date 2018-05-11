const Layout = (resolve) => require(['@/views/Basic/Layout'], resolve);
const News = (resolve) => require(['@/views/News'], resolve);

export default {
  path: '/',
  component: Layout,
  children: [
    {
      path: 'News',
      component: News,
      name: '我的新闻',
      meta: ['我的新闻', 'News'],
    },
  ],
};
