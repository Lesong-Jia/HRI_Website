(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c576f060"],{"05bd":function(e,t,o){var r=o("24fb");t=r(!1),t.push([e.i,".wrapper[data-v-4255ee7e]{width:100%;padding:20px 8%;overflow:auto;display:flex;align-items:center;flex-direction:column}.wrapper .pre-study ul[data-v-4255ee7e]{margin-left:40px}.wrapper .pre-study ul li[data-v-4255ee7e]{list-style-position:outside;padding:8px 0}.wrapper .content[data-v-4255ee7e]{width:100%}.wrapper .content .radio-check[data-v-4255ee7e]{background:#efefef;width:500px;padding:10px;border-radius:4px;margin-bottom:10px;text-align:center}.wrapper .content .radio-check[data-v-4255ee7e] .ant-radio{display:none}.wrapper .content .radio-active[data-v-4255ee7e]{background:#1890ff!important;transition:background .2s ease-in-out}.wrapper .content .radio-active span[data-v-4255ee7e]{color:#fff!important}",""]),e.exports=t},"24c5":function(e,t,o){"use strict";const r={methods:{prevent_back(){let e=this.$route.fullPath;"hash"==this.$router.mode&&(e="#"+e),window.pushStateFun=function(){let t={title:null,url:e};window.history.pushState(t,null,e)};var t={title:null,url:e};window.history.pushState(t,null,e),window.addEventListener("popstate",window.pushStateFun,!1)}},mounted(){this.$vnode&&this.$vnode.data.keepAlive||this.prevent_back()},activated(){this.prevent_back()},beforeRouteLeave(e,t,o){window.removeEventListener("popstate",window.pushStateFun,!1),o()}};t["a"]=r},3987:function(e,t,o){"use strict";o("4ed0")},"4ed0":function(e,t,o){var r=o("05bd");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=o("499e").default;a("3577aeda",r,!0,{sourceMap:!1,shadowMode:!1})},f207:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"wrapper"},[e._m(0),t("p",{staticClass:"line-p"}),t("div",{staticClass:"content"},[t("a-form-model",{ref:"form",attrs:{model:e.form,labelCol:e.labelCol,wrapperCol:e.wrapperCol},on:{submit:e.handleSubmit},nativeOn:{submit:function(e){e.preventDefault()}}},[t("p",[t("strong",[e._v("How many scenarios in total you will encounter in this part of the study?")])]),t("a-form-model-item",{attrs:{prop:"itemOne",rules:[{required:!0,pattern:/^B$/,message:"Your answer to this question is incorrect!",trigger:"blur"}]}},[t("a-radio-group",{model:{value:e.form.itemOne,callback:function(t){e.$set(e.form,"itemOne",t)},expression:"form.itemOne"}},e._l(e.radioList[0].list,(function(o){return t("a-radio",{key:o.value,class:e.form.itemOne===o.value?"radio-check radio-active":"radio-check",style:e.radioStyle,attrs:{value:o.value}},[t("span",{style:e.form.itemOne===o.value?"color:#fff":""},[e._v(e._s(o.value+". "+o.ques))])])})),1)],1),t("p",{staticClass:"line-p"}),t("p",[t("strong",[e._v("What would happen if you provide an incorrect answer to the multiple choice question in the game?")])]),t("a-form-model-item",{attrs:{prop:"itemTwo",rules:[{required:!0,pattern:/^A$/,message:"Your answer to this question is incorrect!",trigger:"blur"}]}},[t("a-radio-group",{model:{value:e.form.itemTwo,callback:function(t){e.$set(e.form,"itemTwo",t)},expression:"form.itemTwo"}},e._l(e.radioList[1].list,(function(o){return t("a-radio",{key:o.value,class:e.form.itemTwo===o.value?"radio-check radio-active":"radio-check",style:e.radioStyle,attrs:{value:o.value}},[t("span",{style:e.form.itemTwo===o.value?"color:#fff":""},[e._v(e._s(o.value+". "+o.ques))])])})),1)],1)],1)],1),t("div",{staticClass:"input-wrapper"},[t("a-button",{attrs:{type:"primary",shape:"round",loading:e.loading},on:{click:e.handleSubmit}},[e._v("Proceed")])],1)])},a=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"pre-study"},[t("p",[t("strong",[e._v("Part 2 - First Person Perspective Scenario Study: ")])]),t("p",[e._v(" You will experience "),t("strong",[e._v("4 first-person perspective scenarios through games")]),e._v(", which simulate real-life privacy challenges you might encounter while using Virtual Reality (VR) applications and services.  ")]),t("p",[e._v(" After each scenario, you are required to "),t("strong",[e._v("complete a set of corresponding questions")]),e._v(" based on "),t("strong",[e._v("your experience in the game")]),e._v(". ")]),t("p",[e._v("After entering the scenario in each game, you should be able to:")]),t("ul",[t("li",[e._v(" Move around the room with the Left/Right and Up/Down arrow keys on your keyboard. ")]),t("li",[e._v(" Interact with "),t("strong",[e._v("objects")]),e._v(" and "),t("strong",[e._v("characters")]),e._v(" within the room, "),t("strong",[e._v("following instructions")]),e._v(" given during the game. ")]),t("li",[e._v(" Provide an "),t("strong",[e._v("Correct Answer")]),e._v(" to the multiple choice question at the end of each game to proceed to the next scene. The multiple choice questions aim to help you understand key information in each scenario. Each scenario is expected to have 1 - 2 multiple choice questions. ")]),t("li",[e._v(" If you provide an "),t("strong",[e._v("Incorrect Answer")]),e._v(" to the multiple choice question at the end each game, the game will be "),t("strong",[e._v("terminated")]),e._v(": you have to refresh the game window and start from the beginning. Your game progress will not be recorded. ")]),t("li",[e._v(" When you reached the end of each scenario, a "),t("strong",[e._v("Code")]),e._v(" will appear on the center of the screen. You should enter the "),t("strong",[e._v("Code")]),e._v(" on Qualtrics to proceed to the next step of this study. ")])]),t("p",[t("strong",[e._v("While playing the game, envision yourself as the player in first-person perspective and consider the scenario in each game as if it is happening in your actual life.")])]),t("p",[e._v(" On the next page, you will experience "),t("strong",[e._v("1 tutorial scenario")]),e._v(" to help you practice tasks described above. The tutorial scenario "),t("strong",[e._v(" does not count towards the four first-person perspective scenarios")]),e._v(" for this study. ")]),t("p",[e._v(" Before you proceed, please provide the "),t("strong",[e._v("correct answers to the following questions")]),e._v(" to show that you understand the workflow of this part of the study. ")])])}],i=(o("14d9"),o("24c5"));const n=[{answser:"B",list:[{ques:"4 Scenarios: four first-person perspective scenarios in games",value:"A"},{ques:"5 Scenarios: one tutorial scenario + four first-person perspective scenarios in games",value:"B"},{ques:"4 Scenarios: one tutorial scenario + three first-person perspective scenarios in games",value:"C"}]},{answser:"A",list:[{ques:"The game will be terminated and you have to refresh the window to start from the beginning.",value:"A"},{ques:"You are allowed to re-select the correct answer on the same page to proceed.",value:"B"},{ques:"You will get a warning message, but you should be able to proceed to the next step.",value:"C"}]}];var s={mixins:[i["a"]],data(){return{radioList:n,loading:!1,form:{itemOne:"",itemTwo:""},radioStyle:{display:"block",width:"auto",textAlign:"left"},labelCol:{xs:{span:24},sm:{span:1}},wrapperCol:{xs:{span:1},sm:{span:24}}}},mounted(){window.scrollTo(0,0)},methods:{handleSubmit(){this.$refs["form"].validate(e=>{e&&this.$router.push("/scenarioTutorial")})},changeLoading(e){this.loading=e}}},l=s,u=(o("3987"),o("2877")),c=Object(u["a"])(l,r,a,!1,null,"4255ee7e",null);t["default"]=c.exports}}]);