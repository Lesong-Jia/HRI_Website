(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c58d253"],{"068f":function(e,t,o){var a=o("f280");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var s=o("499e").default;s("6c377367",a,!0,{sourceMap:!1,shadowMode:!1})},2270:function(e,t,o){var a=o("24fb");t=a(!1),t.push([e.i,"[data-v-01daf57d] .ant-input{border:none!important;width:100%}[data-v-01daf57d] .ant-input:focus{box-shadow:none}",""]),e.exports=t},3763:function(e,t,o){"use strict";o("b879")},"605e":function(e,t,o){"use strict";o("a7bb")},"9c4a":function(e,t,o){"use strict";o("068f")},a51b:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"wrapper"},[t("div",{staticClass:"content"},[1===e.active?t("stepOne",{ref:"stepOne"}):e._e(),2===e.active?t("stepTwo",{ref:"stepTwo"}):e._e()],1),t("div",{staticClass:"input-wrapper"},[t("a-button",{attrs:{type:"primary",shape:"round",disabled:e.loading,loading:e.loading},on:{click:e.handleSubmit}},[e._v(" "+e._s(1===e.active?"Next":"Submit")+" ")])],1)])},s=[],i=o("365c"),r=function(){var e=this,t=e._self._c;return t("div",[e._m(0),e._m(1),t("a-form-model",{ref:"form",attrs:{model:e.form,labelCol:e.labelCol,wrapperCol:e.wrapperCol},on:{submit:e.handleSubmit},nativeOn:{submit:function(e){e.preventDefault()}}},[t("p"),t("table",{attrs:{border:"0",width:"100%",align:"center"}},[t("tr",{staticClass:"head"},[t("td",{staticStyle:{"border-right":"1px solid #efefef"}}),e._l(e.headList,(function(o){return t("td",{key:o},[e._v(" "+e._s(o)+" ")])}))],2),e._l(e.questList,(function(o,a){return t("tr",{key:a},[t("a-form-model-item",{attrs:{prop:"table."+o.key,rules:{required:!0,trigger:"blur",message:"please select"}}},[t("td",{staticClass:"require-radio"},[e._v(" "+e._s(o.content)+" ")])]),e._l(e.headList,(function(a,s){return t("td",{key:a+s},[t("a-radio",{style:e.radioStyle,attrs:{value:a,checked:e.form["table"][o.key]==s+1},on:{click:function(t){return e.checkRadio(s+1,o.key)}}})],1)}))],2)}))],2)])],1)},n=[function(){var e=this,t=e._self._c;return t("p",[t("strong",[e._v("Part 3 - Post-study Questions:")])])},function(){var e=this,t=e._self._c;return t("p",[e._v(" Please response to the following questions based on "),t("strong",[e._v("your experience and assessment of All the Scenarios")]),e._v(" you have completed in this study. ")])}],c=(o("14d9"),o("2f62"));const l=[{key:"quest1",content:"I am concerned that VR applications are collecting too much information about me."},{key:"quest2",content:"I am concerned that VR applications may monitor my activities on VR devices."},{key:"quest3",content:"As a result of using VR applications, I am concerned that other people would know me more than I am comfortable with."},{key:"quest4",content:"As a result of using VR applications, I am concerned that information about me which I consider private is now more readily available to others than I would want."},{key:"quest5",content:"As a result of using VR applications, I am concerned that information which I provided to VR companies would be misused by others."},{key:"quest6",content:"I am concerned that VR applications may use my personal information for other purposes without notifying me or getting my authorization."},{key:"quest7",content:"When I give personal information to use VR applications, I am concerned that applications may use my information for other purposes."},{key:"quest8",content:"I am concerned that VR apps may share my personal information with other entities without getting my authorization."}],d=["A. Male","B. Female","C. Non-binary / third gender","D. Self describe:","E. Prefer not to say"],u=["A. Some high school or Less","B. High school diploma or GED","C. Some college, but no degree","D. Associates or technical degree","E. Bachelor’s degree","F. Graduate or professional degree (MS, MA, MBA, PhD, JD, MD, DDS etc.)","G. Prefer not to say"],m=["A. White or Caucasian","B. Black or African American","C. American Indian/Native American or Alaska Native","D. Asian","E. Native Hawaiian or Other Pacific Islander","F. Other","G. Prefer not to say"],p=["A. 1 year or less ","B. 1 - 2 years","C. 2 - 3 years","D. more than 3 years"],h=["A. Daily","B. Weekly","C. Monthly","D. Every few months","E. Never"];var f=o("bed0"),y={name:"stepOne",data(){return{headList:f["b"],questList:l,others:"",form:{table:{}},rulles:{},radioStyle:{display:"block",height:"30px",lineHeight:"30px"},labelCol:{xs:{span:18},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:19}}}},mounted(){},computed:{...Object(c["b"])(["gameStep","allQuestionForm"])},methods:{handleSubmit(){const e=this;this.$refs["form"].validate(async t=>{if(!t)return;e.$store.commit("SET_ALL_QUESTION_FORM",{...e.allQuestionForm,last:{...e.form}});const o=await i["a"].submitForm(this.allQuestionForm);200===o.code?(this.$message.success("Submitted successfully"),this.$emit("changeLoading",!1),e.$router.push("/last")):(this.$emit("changeLoading",!0),this.$message.error(o.message))})},checkRadio(e,t){this.$set(this.form.table,t,e)}}},v=y,b=(o("3763"),o("2877")),g=Object(b["a"])(v,r,n,!1,null,"01daf57d",null),w=g.exports,k=function(){var e=this,t=e._self._c;return t("div",[t("a-form-model",{ref:"form",attrs:{model:e.form,labelCol:e.labelCol,wrapperCol:e.wrapperCol},on:{submit:e.handleSubmit},nativeOn:{submit:function(e){e.preventDefault()}}},[t("div",{staticStyle:{display:"flex","align-items":"center",margin:"20px 0px"}},[t("p",{staticClass:"require-radio"},[e._v("Please enter your age:")]),t("a-form-model-item",{attrs:{prop:"age",rules:{required:!0,trigger:"blur",message:"please enter a number "}}},[t("p",{staticStyle:{"border-bottom":"1px solid #999",width:"300px","padding-bottom":"5px"}},[t("a-input-number",{attrs:{id:"inputNumber",min:0,max:130},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1)])],1),t("p",{staticClass:"line-p"}),t("div",{staticStyle:{margin:"20px 0px"}},[t("p",{staticClass:"require-radio"},[e._v("How do you describe yourself?")]),t("a-form-model-item",{attrs:{prop:"radio1",rules:{required:!0,trigger:"blur",message:"please select"}}},[t("a-radio-group",{model:{value:e.form.radio1,callback:function(t){e.$set(e.form,"radio1",t)},expression:"form.radio1"}},[e._l(e.radioList1,(function(o){return t("a-radio",{key:o,class:e.form.radio1===o?"radio-check radio-active":"radio-check",style:e.radioStyle,attrs:{value:o}},[t("span",{style:e.form.radio1===o?"color:#fff":""},[e._v(e._s(o))]),"D. Self describe:"===o?t("span",{staticStyle:{display:"inline-block","border-bottom":"1px solid #999",width:"300px"}},[t("a-input",{style:e.form.radio1===o?"color:#fff":"",model:{value:e.others,callback:function(t){e.others=t},expression:"others"}})],1):e._e()])})),t("span",{directives:[{name:"show",rawName:"v-show",value:e.isInputOthers,expression:"isInputOthers"}],staticStyle:{color:"red"}},[e._v("please input")])],2)],1)],1),t("p",{staticClass:"line-p"}),e._l(e.radioListAll1,(function(o){return t("div",{key:o.key,staticStyle:{margin:"20px 0px"}},[t("p",{staticClass:"require-radio"},[e._v(e._s(o.quest))]),t("a-form-model-item",{attrs:{prop:o.key,rules:{required:!0,trigger:"blur",message:"please select"}}},[t("a-radio-group",{model:{value:e.form[o.key],callback:function(t){e.$set(e.form,o.key,t)},expression:"form[radioList.key]"}},e._l(o.list,(function(a){return t("a-radio",{key:a,class:e.form[o.key]===a?"radio-check radio-active":"radio-check",style:e.radioStyle,attrs:{value:a}},[t("span",{style:e.form[o.key]===a?"color:#fff":""},[e._v(e._s(a))])])})),1)],1),t("p",{staticClass:"line-p"})],1)})),t("div",[t("p",{staticStyle:{width:"600px"}},[e._v(" What Virtual Reality products (eg. Virtual Reality (VR) Glasses, Oculus, HoloLens), or services(eg. Virtual Reality Exposure Therapy, Virtual Reality Classroom), you have experienced？ ")]),t("p",{staticClass:"require-radio",staticStyle:{display:"inline-block","margin-top":"0px"}},[e._v(" Please specify: ")]),t("a-form-model-item",{staticStyle:{display:"inline-block"},attrs:{prop:"otherComments",rules:{required:!0,message:"please input"}}},[t("p",{staticStyle:{"border-bottom":"1px solid #999",width:"500px"}},[t("a-input",{model:{value:e.form.otherComments,callback:function(t){e.$set(e.form,"otherComments",t)},expression:"form.otherComments"}})],1)])],1),t("p",{staticClass:"line-p"}),e._l(e.radioListAll2,(function(o){return t("div",{key:o.key,staticStyle:{margin:"20px 0px"}},[t("p",{staticClass:"require-radio"},[e._v(e._s(o.quest))]),t("a-form-model-item",{attrs:{prop:o.key,rules:{required:!0,trigger:"blur",message:"please select"}}},[t("a-radio-group",{model:{value:e.form[o.key],callback:function(t){e.$set(e.form,o.key,t)},expression:"form[radioList.key]"}},e._l(o.list,(function(a){return t("a-radio",{key:a,class:e.form[o.key]===a?"radio-check radio-active":"radio-check",style:e.radioStyle,attrs:{value:a}},[t("span",{style:e.form[o.key]===a?"color:#fff":""},[e._v(e._s(a))])])})),1)],1),t("p",{staticClass:"line-p"})],1)}))],2)],1)},_=[];const x=[{quest:"What is the highest level of education you have completed:",key:"radio2",list:u},{quest:"Choose one or more races that you consider yourself to be:",key:"radio3",list:m}],I=[{quest:"How long have you been using Virtual Reality (VR) products or services?",key:"radio4",list:p},{quest:"What is the frequency of your Virtual Reality (VR) Products or Services usage?",key:"radio5",list:h}];var S={name:"stepTwo",data(){return{radioListAll1:x,radioListAll2:I,isInputOthers:"",others:"",radioList1:d,radioList2:u,radioList3:m,radioList4:p,radioList5:h,others:"",form:{age:void 0,radio1:"",radio2:"",radio3:"",radio4:"",otherComments:""},radioStyle:{display:"block"},labelCol:{xs:{span:18},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:19}}}},watch:{others(e){e.length<=0&&"D. Self describe:"===this.form.radio1?this.isInputOthers=!0:this.isInputOthers=!1},"form.radio1":{handler(e){this.others.length<=0&&"D. Self describe:"===e?this.isInputOthers=!0:this.isInputOthers=!1}}},mounted(){},computed:{...Object(c["b"])(["gameStep","allQuestionForm"])},methods:{handleSubmit(){const e=this;this.$refs["form"].validate(async t=>{if(!t&&this.isInputOthers)return;e.$store.commit("SET_ALL_QUESTION_FORM",{...e.allQuestionForm,last:{...e.form}});const o=await i["a"].submitForm(this.allQuestionForm);200===o.code?(this.$message.success("Submitted successfully"),this.$emit("changeLoading",!1),e.$router.push("/last")):(this.$emit("changeLoading",!0),this.$message.error(o.message))})}}},q=S,R=(o("9c4a"),Object(b["a"])(q,k,_,!1,null,"6df7499e",null)),C=R.exports,V=o("c1df"),$=o.n(V),L={name:"last",components:{stepOne:w,stepTwo:C},data(){return{loading:!1,active:1,form:{},radioStyle:{display:"block",height:"30px",lineHeight:"30px"},labelCol:{xs:{span:18},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:19}}}},mounted(){window.scrollTo(0,0)},watch:{active(e){window.scrollTo(0,0)}},methods:{handleSubmit(){const e=this;1===this.active?this.$refs.stepOne.$refs["form"].validate(async e=>{e&&(this.form={...this.form,...this.$refs.stepOne.form},this.active=2)}):this.$refs.stepTwo.$refs["form"].validate(async t=>{if(!t)return;if(this.$refs.stepTwo.isInputOthers)return;"D. Self describe:"===this.$refs.stepTwo.form.radio1&&(this.$refs.stepTwo.form.radio1=this.$refs.stepTwo.form.radio1+this.$refs.stepTwo.others),this.form={...this.form,...this.$refs.stepTwo.form},console.log(this.form),e.$store.commit("SET_ALL_QUESTION_FORM",{...e.allQuestionForm,lastQuestionnaire:{...e.form},endTime:$()().format("YYYY-MM-DD HH:mm:ss")}),e.loading=!0;const o=await i["a"].submitForm({...e.allQuestionForm,index:this.gameGroupType});200===o.code?(e.$message.success("Submitted successfully"),this.$store.commit("SET_ALL_QUESTION_FORM",{}),this.$store.commit("SET_GAME_STEP",""),this.$store.commit("SET_QUES_STEP",""),this.$store.commit("SET_IS_PASS",!0),window.location.replace("https://connect.cloudresearch.com/participant/project/3f07c8e99a444971a2c7b16de468d483/complete")):(e.loading=!1,e.$message.error(o.message))})},checkRadio(e,t){this.$set(this.form,t,e)}}},O=L,A=(o("605e"),Object(b["a"])(O,a,s,!1,null,"a50b64d0",null));t["default"]=A.exports},a7bb:function(e,t,o){var a=o("d8ae");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var s=o("499e").default;s("2bdd1389",a,!0,{sourceMap:!1,shadowMode:!1})},b879:function(e,t,o){var a=o("2270");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var s=o("499e").default;s("45a20f31",a,!0,{sourceMap:!1,shadowMode:!1})},bed0:function(e,t,o){"use strict";o.d(t,"b",(function(){return a})),o.d(t,"a",(function(){return n}));const a=["Strongly disagree","Disagree","Somewhat disagree","Neither agree or Disagree","Somewhat agree","Agree","Strongly agree"],s=[{key:"quest1",content:"I would carefully read through the whole privacy policy before I click ‘consent’."},{key:"quest2",content:"I would check back on the privacy policy when I get notifications from VR service providers that they are going to collect certain types of data from me."},{key:"quest3",content:"I have personally experienced incidents whereby my personal information was used by some VR applications without my authorization."},{key:"quest4",content:"I have been a victim of what I feel was an improper invasion of privacy."},{key:"quest5",content:"Since I started using VR products, I have heard or read about the use and potential misuse of information collected from my VR product usage."}],i=[{key:"quest1",content:"I am concerned that VR applications are collecting too much information about me."},{key:"quest2",content:"I am concerned that VR applications may monitor my activities on VR devices"},{key:"quest3",content:"As a result of using VR applications, I am concerned that other people would know me more than I am comfortable with."},{key:"quest4",content:"As a result of using VR applications, I am concerned that information about me which I consider private is now more readily available to others than I would want."},{key:"quest5",content:"As a result of using VR applications, I am concerned that information which I provided to VR companies would be misused by others."},{key:"quest6",content:"I am concerned that VR applications may use my personal information for other purposes without notifying me or getting my authorization."},{key:"quest7",content:"When I give personal information to use VR applications, I am concerned that applications may use my information for other purposes."},{key:"quest8",content:"I am concerned that VR apps may share my personal information with other entities without getting my authorization."},{key:"quest9",content:"Providing a VR company with my personal information would involve many unexpected problems."},{key:"quest10",content:"It would be risky to disclose my personal information to a VR company."},{key:"quest11",content:"Please select ‘Somewhat agree’ for this question."},{key:"quest12",content:"There would be high potential for loss with disclosing my personal information to a VR company."}],r=[{key:"quest1",content:"I would use the VR platform’s privacy policies for risk assessment of my privacy."},{key:"quest2",content:"I can find out which party has the data that my VR device collected."},{key:"quest3",content:"I can find out what data my VR device collected."},{key:"quest4",content:"I can identify violations of my privacy rights."},{key:"quest5",content:"I can find out about important privacy and security updates about my VR device."},{key:"quest6",content:"I can keep track of my privacy implications when I link multiple VR devices or accounts."},{key:"quest7",content:"I can get the information I need to delete my data stored on my devices."},{key:"quest8",content:"I can delete the data stored in a cloud if I no longer want to use my devices."},{key:"quest9",content:"I can learn the technological know-how to understand my devices’ technical data sheets."},{key:"quest10",content:"I can detect when interfaces are designed to influence my decisions about security options."},{key:"quest11",content:"I can identify violations of my privacy rights by a device feature."},{key:"quest12",content:"I can get in touch with a manufacturer’s data protection officer when necessary."},{key:"quest13",content:"I can disable my devices in case of a security attack."}],n=[{headList:[...a],questList:[...s]},{headList:[...a],questList:[...i]},{headList:[...a],questList:[...r]}]},d8ae:function(e,t,o){var a=o("24fb");t=a(!1),t.push([e.i,"[data-v-a50b64d0] .ant-input{border:none!important;width:100%}[data-v-a50b64d0] .ant-input:focus{box-shadow:none}.wrapper[data-v-a50b64d0]{width:100%;overflow:auto;display:flex;align-items:center;flex-direction:column}.wrapper .content[data-v-a50b64d0]{padding:20px 8%}",""]),e.exports=t},f280:function(e,t,o){var a=o("24fb");t=a(!1),t.push([e.i,"[data-v-6df7499e] .ant-input{border:none!important;background:transparent;width:100%;font-size:18px}[data-v-6df7499e] .ant-input:focus{box-shadow:none}[data-v-6df7499e] .ant-form-item{margin-bottom:0}[data-v-6df7499e] .ant-input-number{border:none!important;width:100%}[data-v-6df7499e] .ant-input-number:focus{box-shadow:none}[data-v-6df7499e] .ant-input-number-handler-wrap{display:none}[data-v-6df7499e] .ant-input-number-focused{box-shadow:none}*[data-v-6df7499e]{font-size:18px;color:#737373}.radio-check[data-v-6df7499e]{background:#efefef;width:500px;height:auto;white-space:pre-wrap;padding:10px;border-radius:4px;margin-bottom:10px}.radio-check[data-v-6df7499e] .ant-radio{display:none}.radio-active[data-v-6df7499e]{background:#1890ff;transition:background .2s ease-in-out}.radio-active span[data-v-6df7499e]{color:#fff!important}.table-wrapper[data-v-6df7499e]{border-bottom:2px solid #efefef;padding-bottom:20px;margin-bottom:20px}",""]),e.exports=t}}]);