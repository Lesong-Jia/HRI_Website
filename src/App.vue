<template>
  <a-config-provider :locale="zh_CN">
    <div id="app">
      <router-view></router-view>
    </div>
  </a-config-provider>
</template>

<script>
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
import { getUserPower, getUserInfo } from "@/api/index";
import { mapGetters } from "vuex";
import moment from "moment";
import "moment/locale/zh-cn";

moment.locale("zh-cn");
export default {
  name: "App",
  data() {
    return {
      zh_CN,
    };
  },
  computed: {},
  methods: {},
};
</script>

<style lang="less">
/**自定义滚动条样式 */
::-webkit-scrollbar {
  width: 3px;
  height: 3px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
}

::-webkit-scrollbar-thumb {
  background-color: #9c9da0;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
}
#app {
  width: 100%;
  height: 100%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0.5;
}
</style>
