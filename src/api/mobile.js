/**
 * 具体接口配置
 */

import api from 'axios';

const path = {
  mobile: 'www.baidu.com',
};

// 获取所有的接口地址
const mobile = () => api.get(path.mobile);

export default {
  mobile,
};
