(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-091f623c"],{"16c6":function(e,t,o){var n=o("4296");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=o("499e").default;a("19ef1c41",n,!0,{sourceMap:!1,shadowMode:!1})},"24c5":function(e,t,o){"use strict";const n={methods:{prevent_back(){let e=this.$route.fullPath;"hash"==this.$router.mode&&(e="#"+e),window.pushStateFun=function(){let t={title:null,url:e};window.history.pushState(t,null,e)};var t={title:null,url:e};window.history.pushState(t,null,e),window.addEventListener("popstate",window.pushStateFun,!1)}},mounted(){this.$vnode&&this.$vnode.data.keepAlive||this.prevent_back()},activated(){this.prevent_back()},beforeRouteLeave(e,t,o){window.removeEventListener("popstate",window.pushStateFun,!1),o()}};t["a"]=n},"29ce":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"wrapper"},[e._m(0),t("div",{staticClass:"content"},[t("a-form-model",{ref:"form",attrs:{model:e.form,labelCol:e.labelCol,wrapperCol:e.wrapperCol},on:{submit:e.handleSubmit},nativeOn:{submit:function(e){e.preventDefault()}}},e._l(e.allQuestList,(function(o,n){return t("div",{key:n,staticClass:"table-wrapper"},[t("table",{attrs:{border:"0",width:"100%",align:"center"}},[t("tr",{staticClass:"head"},[t("td",{staticStyle:{"border-right":"1px solid #efefef"}}),e._l(o.headList,(function(o){return t("td",{key:o},[e._v(" "+e._s(o)+" ")])}))],2),e._l(o.questList,(function(a,i){return t("tr",{key:i},[t("a-form-model-item",{attrs:{prop:"table"+n+"."+a.key,rules:{required:!0,trigger:"blur",message:"please select"}}},[t("td",{staticClass:"require-radio"},[e._v(" "+e._s(a.content)+" ")])]),e._l(o.headList,(function(o,i){return t("td",{key:o+i},[t("a-radio",{style:e.radioStyle,attrs:{value:o,checked:e.form["table"+n][a.key]==i+1},on:{click:function(t){return e.checkRadio(i+1,n,a.key)}}})],1)}))],2)}))],2)])})),0)],1),t("div",{staticClass:"input-wrapper"},[t("a-button",{attrs:{type:"primary",shape:"round",disabled:e.loading,loading:e.loading},on:{click:e.handleSubmit}},[e._v("Next")])],1)])},a=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"pre-study"},[t("p",[t("strong",[e._v("Part 1 - Pre-study Questions:")])]),t("p",[t("strong",[e._v("Please indicate to what extent you agree with the following statements.")])]),t("p",[e._v(" There are questions which require you to "),t("strong",[e._v("select the specific answer indicated in the question")]),e._v(". If you "),t("strong",[e._v("failed to select the specific answer")]),e._v(" as required in the question, your study will "),t("strong",[e._v("be terminated. You will not be compensated for the study.")])])])}],i=(o("14d9"),o("24c5")),s=o("bed0"),r=o("a656"),c=o("365c"),u={mixins:[i["a"]],data(){return{allQuestList:s["a"],loading:!1,form:{table0:{},table1:{},table2:{}},radioStyle:{display:"block",height:"30px",lineHeight:"30px"},labelCol:{xs:{span:24},sm:{span:1}},wrapperCol:{xs:{span:1},sm:{span:24}}}},mounted(){window.scrollTo(0,0),this.setGameGroupType()},created(){this.toIndex()},methods:{setGameGroupType(){c["a"].getIndex().then(e=>{200===e.code&&(this.$store.commit("SET_GAME_GROUP_TYPE",e.data),this.$store.commit("SET_GAME_ARR_LIST",r["a"][this.gameGroupType]))})},handleSubmit(){this.$refs["form"].validate(e=>{if(!e)return;if(this.loading=!0,5!==this.form.table1.quest11)return void this.passUser();const t=Object(r["b"])(this.gameArrList);console.log(this.gameArrList),console.log(t),console.log(this.allQuestionForm),this.$store.commit("SET_ALL_QUESTION_FORM",{...this.allQuestionForm,startQuestionnaire:{...this.form}}),this.$store.commit("SET_GAME_STEP",t),this.$store.commit("SET_QUES_STEP",1),this.$router.push("/perspectiveScenarioStudy")})},checkRadio(e,t,o){this.$set(this.form["table"+t],o,e)},changeLoading(e){this.loading=e}}},l=u,d=(o("ca5d"),o("2877")),p=Object(d["a"])(l,n,a,!1,null,"368554b9",null);t["default"]=p.exports},4296:function(e,t,o){var n=o("24fb");t=n(!1),t.push([e.i,".wrapper[data-v-368554b9]{width:100%;overflow:auto;display:flex;align-items:center;flex-direction:column}.wrapper .content[data-v-368554b9],.wrapper .pre-study[data-v-368554b9]{padding:20px 8%}.wrapper .table-wrapper[data-v-368554b9]{border-bottom:2px solid #efefef;padding-bottom:20px;margin-bottom:20px}",""]),e.exports=t},a656:function(e,t,o){"use strict";function n(e){return e.sort((function(){return.5-Math.random()})),console.log(e),e[0]}o.d(t,"b",(function(){return n})),o.d(t,"a",(function(){return a}));const a=[[1,2,3,4],[5,6,7,8],[9,10,11,12]]},bed0:function(e,t,o){"use strict";o.d(t,"b",(function(){return n})),o.d(t,"a",(function(){return r}));const n=["Strongly disagree","Disagree","Somewhat disagree","Neither agree or Disagree","Somewhat agree","Agree","Strongly agree"],a=[{key:"quest1",content:"I would carefully read through the whole privacy policy before I click ‘consent’."},{key:"quest2",content:"I would check back on the privacy policy when I get notifications from VR service providers that they are going to collect certain types of data from me."},{key:"quest3",content:"I have personally experienced incidents whereby my personal information was used by some VR applications without my authorization."},{key:"quest4",content:"I have been a victim of what I feel was an improper invasion of privacy."},{key:"quest5",content:"Since I started using VR products, I have heard or read about the use and potential misuse of information collected from my VR product usage."}],i=[{key:"quest1",content:"I am concerned that VR applications are collecting too much information about me."},{key:"quest2",content:"I am concerned that VR applications may monitor my activities on VR devices"},{key:"quest3",content:"As a result of using VR applications, I am concerned that other people would know me more than I am comfortable with."},{key:"quest4",content:"As a result of using VR applications, I am concerned that information about me which I consider private is now more readily available to others than I would want."},{key:"quest5",content:"As a result of using VR applications, I am concerned that information which I provided to VR companies would be misused by others."},{key:"quest6",content:"I am concerned that VR applications may use my personal information for other purposes without notifying me or getting my authorization."},{key:"quest7",content:"When I give personal information to use VR applications, I am concerned that applications may use my information for other purposes."},{key:"quest8",content:"I am concerned that VR apps may share my personal information with other entities without getting my authorization."},{key:"quest9",content:"Providing a VR company with my personal information would involve many unexpected problems."},{key:"quest10",content:"It would be risky to disclose my personal information to a VR company."},{key:"quest11",content:"Please select ‘Somewhat agree’ for this question."},{key:"quest12",content:"There would be high potential for loss with disclosing my personal information to a VR company."}],s=[{key:"quest1",content:"I would use the VR platform’s privacy policies for risk assessment of my privacy."},{key:"quest2",content:"I can find out which party has the data that my VR device collected."},{key:"quest3",content:"I can find out what data my VR device collected."},{key:"quest4",content:"I can identify violations of my privacy rights."},{key:"quest5",content:"I can find out about important privacy and security updates about my VR device."},{key:"quest6",content:"I can keep track of my privacy implications when I link multiple VR devices or accounts."},{key:"quest7",content:"I can get the information I need to delete my data stored on my devices."},{key:"quest8",content:"I can delete the data stored in a cloud if I no longer want to use my devices."},{key:"quest9",content:"I can learn the technological know-how to understand my devices’ technical data sheets."},{key:"quest10",content:"I can detect when interfaces are designed to influence my decisions about security options."},{key:"quest11",content:"I can identify violations of my privacy rights by a device feature."},{key:"quest12",content:"I can get in touch with a manufacturer’s data protection officer when necessary."},{key:"quest13",content:"I can disable my devices in case of a security attack."}],r=[{headList:[...n],questList:[...a]},{headList:[...n],questList:[...i]},{headList:[...n],questList:[...s]}]},ca5d:function(e,t,o){"use strict";o("16c6")}}]);