/**
 * axios初始化配置
 * --------------------------------------
 * 大部分接口以这个为基础
 */

import axios from 'axios';

const instance = axios.create({
  baseURL: 'www.baidu.com',
  withCredentials: true,
  params: {
    access_token: 'abcdefg',
  },
});

instance.interceptors.request.use((request) => {
  const axiosRequest = {
    ...request,
    params: {
      ...request.params,
      access_token: 'abcdefg',
    },
  };
  return axiosRequest;
}); 

instance.interceptors.response.use(
  (response) => {
    if (response.data.code !== 0 && response.data.code !== 20000 && response.data.code !== 401) {
      alert(response.data.message);
    }
    if (response.data.code === 401) {
    	alert('登录信息已失效，请重新登录');
    }
    if (response.data.code === 403) {
      window.location.hash = '#/403';
    }
    if (response.data.code === 20000) {
      alert('错误');
    }
    return response;
  },
  (error) => {
  	alert(error.message);
    return Promise.reject(error);
  },
);
export default instance;
