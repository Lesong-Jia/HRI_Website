(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dd885a46"],{"24c5":function(e,t,o){"use strict";const i={methods:{prevent_back(){let e=this.$route.fullPath;"hash"==this.$router.mode&&(e="#"+e),window.pushStateFun=function(){let t={title:null,url:e};window.history.pushState(t,null,e)};var t={title:null,url:e};window.history.pushState(t,null,e),window.addEventListener("popstate",window.pushStateFun,!1)}},mounted(){this.$vnode&&this.$vnode.data.keepAlive||this.prevent_back()},activated(){this.prevent_back()},beforeRouteLeave(e,t,o){window.removeEventListener("popstate",window.pushStateFun,!1),o()}};t["a"]=i},3883:function(e,t,o){"use strict";o("4690")},4690:function(e,t,o){var i=o("6155");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=o("499e").default;a("baaa77e2",i,!0,{sourceMap:!1,shadowMode:!1})},6155:function(e,t,o){var i=o("24fb");t=i(!1),t.push([e.i,".wrapper[data-v-74ab92a3]{width:100%;height:100%}.wrapper .game-box[data-v-74ab92a3]{width:100%;height:85%;border:1px dashed #efefef}.wrapper .input-wrapper[data-v-74ab92a3]{position:relative;height:auto}.wrapper .input-wrapper p[data-v-74ab92a3]{color:red;position:absolute;font-size:12px;margin:0;bottom:0}",""]),e.exports=t},cc41:function(e,t,o){"use strict";o.r(t);var i=function(){var e,t=this,o=t._self._c;return o("div",{staticClass:"wrapper"},[o("div",{staticClass:"game-box"},[o("iframe",{ref:"unity",staticStyle:{width:"100%",height:"100%"},attrs:{id:"unity",src:null===(e=t.group[t.gameGroupType][t.gameStep])||void 0===e?void 0:e.src,frameborder:"0"}})]),t.gameStep?o("div",{staticClass:"input-wrapper"},[o("a-input",{staticStyle:{width:"400px","margin-bottom":"30px",position:"relative"},attrs:{allowClear:"",placeholder:"please input code"},model:{value:t.gameCode,callback:function(e){t.gameCode=e},expression:"gameCode"}}),t.miss?o("p",[t._v("Incorrect code")]):t._e()],1):t._e(),t.gameStep?o("div",{staticClass:"input-wrapper",staticStyle:{"padding-bottom":"20px"}},[o("a-button",{attrs:{type:"primary",shape:"round"},on:{click:t.gotoNext}},[t._v("Next")])],1):t._e()])},a=[],r=(o("14d9"),o("2f62")),n=o("24c5"),s={mixins:[n["a"]],data(){return{gameCode:"",miss:!1,group:[{1:{src:"/unity/group1/Scenario_1/index.html",code:"S1ANP"},2:{src:"/unity/group1/Scenario_2/index.html",code:"S2BANS"},3:{src:"/unity/group1/Scenario_3/index.html",code:"S3GANP"},4:{src:"/unity/group1/Scenario_4/index.html",code:"S6BNW"}},{5:{src:"/unity/group2/Scenario_5/index.html",code:"S5PSNP"},6:{src:"/unity/group2/Scenario_6/index.html",code:"S6SENR"},7:{src:"/unity/group2/Scenario_7/index.html",code:"S7SENH"},8:{src:"/unity/group2/Scenario_8/index.html",code:"S8AUNB"}},{9:{src:"/unity/group3/Scenario_9/index.html",code:"S9PDNM"},10:{src:"/unity/group3/Scenario_10/index.html",code:"S10PDAN"},11:{src:"/unity/group3/Scenario_11/index.html",code:"S11BNBO"},12:{src:"/unity/group3/Scenario_12/index.html",code:"S12BHNM"}}]}},computed:{...Object(r["b"])(["gameStep","gameGroupType","gameArrList"])},mounted(){window.scrollTo(0,0),console.log(` 第${this.gameGroupType+1}组，游戏嵌入界面,第${this.gameStep}个游戏`)},methods:{gotoNext(){var e;this.gameCode=this.gameCode.trim(),this.gameCode!==(null===(e=this.group[this.gameGroupType][this.gameStep])||void 0===e?void 0:e.code)?this.miss=!0:this.$router.push("/questionnaire")}}},p=s,d=(o("3883"),o("2877")),u=Object(d["a"])(p,i,a,!1,null,"74ab92a3",null);t["default"]=u.exports}}]);