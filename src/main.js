import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/reset.css';
import 'ant-design-vue/dist/antd.css';
import {
  ConfigProvider,
  message,
  Icon,
  Select,
  Input,
  Table,
  Button,
  Form,
  Rate,
  FormModel,
  Modal,
  List,
  Radio,
  Tabs,
  Upload,
  Checkbox,
  Steps,
  Empty,
  Row,
  Col,
  Tag,
  InputNumber,
} from 'ant-design-vue';
/**注册全局svg组件*/
import SvgIcon from "@/components/SvgIcon/index.vue"; // svg组件
Vue.component("svg-icon", SvgIcon);
import "@/components/SvgIcon/index.js";
import "@/assets/styles/global.less"
import 'lib-flexible'
import './assets/styles/resetAntd.less';
import moment from 'moment'
import mixin from './mixin';
Vue.mixin(mixin)
// Vue.use(Antd);
Vue.use(ConfigProvider);
Vue.use(InputNumber);
Vue.use(Icon);
Vue.use(message);
Vue.use(Select);
Vue.use(Input);
Vue.use(Table);
Vue.use(Button);
Vue.use(Form);
Vue.use(Rate);
Vue.use(FormModel);
Vue.use(Modal);
Vue.use(List);
Vue.use(Radio);
Vue.use(Tabs);
Vue.use(Upload);
Vue.use(Checkbox);
Vue.use(Steps);
Vue.use(Empty);
Vue.use(Row);
Vue.use(Col);
Vue.use(Tag);
Vue.prototype.$Moment = moment;
Vue.prototype.$message = message;
message.config({
  duration: 3, // 持续时间
  top: '20px', // 到页面顶部距离
  maxCount: 3, // 最大显示数, 超过限制时，最早的消息会被自动关闭
});
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
