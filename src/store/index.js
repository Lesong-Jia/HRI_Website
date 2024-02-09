import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    gameStep: '',//游戏进度
    quesStep: '',//问卷进度
    allQuestionForm: {},//游戏问卷
    gameArrList: [],//游戏顺序的数组
    gameGroupType: '',//游戏分组
    isPass: false,//判断是否为筛选掉的，如果是就返回首页
  },
  getters: {
    gameStep: (state) => state.gameStep,
    allQuestionForm: (state) => state.allQuestionForm,
    quesStep: (state) => state.quesStep,
    gameArrList: (state) => state.gameArrList,
    gameGroupType: (state) => state.gameGroupType,
    isPass: (state) => state.isPass
  },
  mutations: {
    SET_IS_PASS: (state, payload) => {
      console.log(payload);
      state.isPass = payload
    },
    SET_ALL_QUESTION_FORM: (state, payload) => {
      console.log(payload);
      state.allQuestionForm = { ...payload }
    },
    SET_GAME_STEP: (state, payload) => {
      console.log(payload);
      state.gameStep = payload
    },
    SET_QUES_STEP: (state, payload) => {
      console.log(payload);
      state.quesStep = payload
    },
    SET_GAME_ARR_LIST: (state, payload) => {
      console.log(payload);
      state.gameArrList = payload
    },
    SET_GAME_GROUP_TYPE: (state, payload) => {
      console.log(payload);
      state.gameGroupType = payload
    },
  },

  actions: {},
  modules: {},
  plugins: [
    createPersistedState({
      storage: window.localStorage,
    }),
  ],
});
