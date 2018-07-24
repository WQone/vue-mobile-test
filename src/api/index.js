/**
 * axios初始化配置
 * --------------------------------------
 * 大部分接口以这个为基础
 */

import axios from 'axios';
import config from '../config';

const instance = axios.create({
  baseURL: config.apiHost,
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
    if (response.data.code !== 0) {
      console.log(response.data.message);
    }
    if (response.data.code === 403) {
      window.location.hash = '#/403';
    }
    return response;
  },
  (error) => {
    console.log(error.message);
    return Promise.reject(error);
  },
);
export default instance;
