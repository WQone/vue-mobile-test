const Layout = (resolve) => require(['@/views/Basic/Layout'], resolve);
const Message = (resolve) => require(['@/views/Message'], resolve);

export default {
  path: '/',
  component: Layout,
  children: [
    {
      path: 'Message',
      component: Message,
      name: '消息',
      meta: ['消息', 'Message'],
    },
  ],
};
