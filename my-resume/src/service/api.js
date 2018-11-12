import axios from 'axios';
import qs from 'qs';

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.baseURL = 'http://127.0.0.1:3000/';
axios.defaults.baseURL = 'http://xzzdll.cn/api/';
axios.defaults.withCredentials = true;

// POST传参序列化，请求拦截器
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }
  return config;
}, (error) => {
  console.log('错误的传参');
  return Promise.reject(error);
});

// 返回状态判断，响应拦截器
axios.interceptors.response.use((res) => {
  return res;
}, (error) => {
  console.log('网络异常');
  return Promise.reject(error);
});

export function fetch (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      }).catch((error) => {
        reject(error);
      });
  });
}
