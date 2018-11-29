import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 180000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://39.108.153.72:8080/webapps';

axios.interceptors.request.use((config) => {
  config.headers["X-Requested-With"] = 'XMLHttpRequest'

  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export function fetch(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params).then(response => {
      resolve(response.data);
    }, err => {
      reject(err);
    }).catch((error) => {
      reject(error)
    })
  })
}

export default {
  //获取菜单列表
  reglet(params) {
    return fetch('reglet', params)
  },
  savetemplate(params) {
    return fetch('savetemplate', params)
  },
  listlet(params) {
    return fetch('listlet', params)
  },
  getdata(params) {
    return fetch('getdata', params)
  },
  savedata(params) {
    return fetch('savedata', params)
  }
}
