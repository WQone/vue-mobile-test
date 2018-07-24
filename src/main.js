// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'lib-flexible/flexible';
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/store';
import './vux-ui';
import './assets/css/reset.css';
import './fonts/iconfont.css'; //  图标字体
import setWechatTitle from './utils/setWechatTitle';
import './api/mock'; // 添加mockjs拦截请求，模拟返回服务器数据

Vue.config.productionTip = false;

/* eslint-disable no-new */

const goVue = () => {
  router.afterEach((transition) => {
    const title = transition.name;
    setWechatTitle(title);
  });

  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount('#app');
};

goVue();
