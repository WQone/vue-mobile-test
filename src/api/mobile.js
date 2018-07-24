/**
 * 具体接口配置
 */

import api from 'axios';

const path = {
  getData: '/news/list', // 获取数据
};

// 获取所有的接口地址
const getData = () => api.post(path.getData);

export default {
  path,
  getData,
};
