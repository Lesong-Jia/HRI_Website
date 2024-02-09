import axiosConfig from "@/utils/requests";

// 示例api---登陆者信息
export default {
  // 获取故障原因和故障细分数据
  submitForm(params) {
    return axiosConfig.post('/answer/submit', params);
  },
  getIndex() {
    return axiosConfig.get('/answer/index');

  }
}