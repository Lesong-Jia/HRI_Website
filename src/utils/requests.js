import axios from "axios";
import { message } from "ant-design-vue";
import store from "@/store";
import router from "@/router";
import $ from 'jquery';

axios.defaults.timeout = 100000;

// const baseURL = process.env.NODE_ENV === "production" ? "http://localhost:8040/game/answer" : "http://192.168.1.44:8040/vgq";
let baseURL
const getBaseUrl = function () {
  $.ajax({
    type: "get",
    async: false, // fasle表示同步请求，true表示异步请求
    url: "./config.json",
    data: {},
    success: function (result) {
      console.log(result);
      baseURL = result.baseURL;
    },
    error: function (e) {
      console.log(e);
    }
  });
};
getBaseUrl()//配置基路径暴露
console.log(baseURL);
axios.interceptors.request.use(function (config) {
  // 得到请求方式和请求体数据
  const { method, data, headers } = config;
  headers.Authorization = localStorage.getItem('loginToken');
  // let hasContentType = headers['Content-Type'];
  const isHeadersOfJson = headers['Content-Type'] && headers['Content-Type'] === 'application/json';
  const isHeadersOfFormData = headers['Content-Type'] && headers['Content-Type'] === 'multipart/form-data';
  const isHeadersOfUrlencoded =
    headers['Content-Type'] && headers['Content-Type'] === 'application/x-www-form-urlencoded';
  if (method.toLowerCase() === 'post') {
    if (isHeadersOfJson) {
      console.warn(`isHeadersOfJson: ${isHeadersOfJson}`);
    } else if (isHeadersOfFormData) {
      console.warn(`isHeadersOfFormData: ${isHeadersOfFormData}`);
    } else if (isHeadersOfUrlencoded) {
      config.data = qs.stringify(data);
    }
  }
  return config;
});
// 添加请求拦截器
const post = (url, params = {}, config) => {
  return new Promise((resolve, reject) => {
    axios
      .post(baseURL + url, params, config)
      .then(
        (response) => {
          resolve(response.data);
        },
        (err) => {
          reject(err);
        }
      )
      .catch((error) => {
        reject(error);
      });
  });
};
const get = (url, params = {}, config) => {
  return new Promise((resolve, reject) => {
    axios
      .get(baseURL + url, params, config)
      .then(
        (response) => {
          resolve(response.data);
        },
        (err) => {
          reject(err);
        }
      )
      .catch((error) => {
        reject(error);
      });
  });
};
export default {
  post,
  get
};
