import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
//解决vue路由重复导航错误
//获取原型对象上的push函数

const routes = [
  {
    path: "/",
    name: 'index',
    component: () => import("@/views/index/index.vue"),
  },
  {
    path: '*',
    component: () => import("@/views/index/index.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/403",
    name: "Error403",
    component: () => import("@/views/403.vue"),
  },
  {
    path: "/questionnaire",
    name: "questionnaire",
    component: () => import("@/views/questionnaire/index.vue"),
  },
  {
    path: "/gameExperience",
    name: "gameExperience",
    component: () => import("@/views/gameExperience/index.vue"),
  },
  {
    path: "/last_finish",
    name: "last_finish",
    component: () => import("@/views/last_finish/index.vue"),
  },
  {
    path: "/last_fail",
    name: "last_fail",
    component: () => import("@/views/last_fail/index.vue"),
  },
  {
    path: "/lastQuestionnaire",
    name: "lastQuestionnaire",
    component: () => import("@/views/lastQuestionnaire/index.vue"),
  },
  {
    path: "/startQuestionnaire",
    name: "startQuestionnaire",
    component: () => import("@/views/startQuestionnaire/index.vue"),
  },
  {
    path: "/perspectiveScenarioStudy",
    name: "perspectiveScenarioStudy",
    component: () => import("@/views/perspectiveScenarioStudy/index.vue"),
  },
  {
    path: "/scenarioTutorial",
    name: "scenarioTutorial",
    component: () => import("@/views/scenarioTutorial/index.vue"),
  },
  {
    path: "/Before_New",
    name: "Before_New",
    component: () => import("@/views/Before_New/index.vue"),
  },  
  {
    path: "/Before_Formal",
    name: "Before_Formal",
    component: () => import("@/views/Before_Formal/index.vue"),
  },
  {
    path: "/EndQuestionnaire",
    name: "EndQuestionnaire",
    component: () => import("@/views/EndQuestionnaire/index.vue"),
  },
];

const router = new VueRouter({
  //   mode: 'history',
  base: process.env.BASE_URL,
  routes,
});



router.beforeEach(async (_to, _from, next) => {
  store.commit("CLAER_CANCEL"); // 取消请求
  const title = _to.meta.title || "welcome";
  document.title = title;

  next();
});

export default router;
