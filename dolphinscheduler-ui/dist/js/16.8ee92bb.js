(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1127:function(t,e,a){"use strict";a.r(e);var s=a(1935),n=a(1406);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);a(1691);var r=a(30),c=Object(r.a)(n.default,s.a,s.b,!1,null,null,null);e.default=c.exports},1183:function(t,e,a){"use strict";a.r(e);var s=a(1184),n=a.n(s);for(var i in s)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(i);e.default=n.a},1184:function(t,e,a){"use strict";e.__esModule=!0,e.default={name:"list-construction",data:function(){return{}},props:{title:String}}},1186:function(t,e,a){"use strict";a.r(e);var s=a(1188),n=a(1183);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);var r=a(30),c=Object(r.a)(n.default,s.a,s.b,!1,null,null,null);e.default=c.exports},1188:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return n}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-main list-construction-model"},[a("div",{staticClass:"content-title"},[a("span",[t._v(t._s(t.title))]),t._v(" "),t._t("operation")],2),t._v(" "),a("div",{staticClass:"conditions-box"},[t._t("conditions")],2),t._v(" "),a("div",{staticClass:"list-box"},[t._t("content")],2)])},n=[]},1189:function(t,e,a){"use strict";a.r(e);var s=a(1190),n=a.n(s);for(var i in s)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(i);e.default=n.a},1190:function(t,e,a){"use strict";e.__esModule=!0,e.default={name:"no-data",props:{msg:String,height:Number}}},1193:function(t,e,a){"use strict";a.r(e);var s=a(1209),n=a(1189);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);a(1208);var r=a(30),c=Object(r.a)(n.default,s.a,s.b,!1,null,null,null);e.default=c.exports},1195:function(t,e,a){},1207:function(t,e,a){t.exports=a.p+"images/errorTip.png?a7b20f0ca8727f22f405c2a34d1363a0"},1208:function(t,e,a){"use strict";a(1195)},1209:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return n}));var s=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"no-data-model",style:{height:this.height+"px"}},[e("div",{staticClass:"no-data-box"},[this._m(0),this._v(" "),e("div",{staticClass:"text"},[this._v(this._s(this.msg||this.$t("No data")))])])])},n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img"},[e("img",{attrs:{src:a(1207),alt:""}})])}]},1350:function(t,e,a){"use strict";e.__esModule=!0,e.stateType=void 0;var s,n=a(83),i=(s=n)&&s.__esModule?s:{default:s};var r=[{code:"",label:""+i.default.$t("AllStatus")},{code:"SUBMITTED_SUCCESS",label:""+i.default.$t("Submitted successfully")},{code:"RUNNING_EXECUTION",label:""+i.default.$t("Running")},{code:"READY_PAUSE",label:""+i.default.$t("Ready to pause")},{code:"PAUSE",label:""+i.default.$t("Pause")},{code:"READY_STOP",label:""+i.default.$t("Ready to stop")},{code:"STOP",label:""+i.default.$t("Stop")},{code:"FAILURE",label:""+i.default.$t("Failed")},{code:"SUCCESS",label:""+i.default.$t("Success")},{code:"NEED_FAULT_TOLERANCE",label:""+i.default.$t("Need fault tolerance")},{code:"KILL",label:""+i.default.$t("Kill")},{code:"WAITTING_THREAD",label:""+i.default.$t("Waiting for thread")},{code:"WAITTING_DEPEND",label:""+i.default.$t("Waiting for dependency to complete")},{code:"DELAY_EXECUTION",label:""+i.default.$t("Delay execution")},{code:"FORCED_SUCCESS",label:""+i.default.$t("Forced success")}];e.stateType=r},1406:function(t,e,a){"use strict";a.r(e);var s=a(1407),n=a.n(s);for(var i in s)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(i);e.default=n.a},1407:function(t,e,a){"use strict";e.__esModule=!0;var s=u(a(744)),n=u(a(1688)),i=u(a(1689)),r=u(a(1690)),c=u(a(372)),o=u(a(1186));function u(t){return t&&t.__esModule?t:{default:t}}e.default={name:"projects-index-index",data:function(){return{searchParams:{projectId:null,startDate:"",endDate:""},dataTime:[]}},props:{id:Number},methods:{_datepicker:function(t){this.searchParams.startDate=t[0],this.searchParams.endDate=t[1]}},created:function(){this.searchParams.projectId=0===this.id?0:c.default.getItem("projectId"),this.dataTime[0]=(0,s.default)().format("YYYY-MM-DD 00:00:00"),this.dataTime[1]=(0,s.default)().format("YYYY-MM-DD HH:mm:ss"),this.searchParams.startDate=this.dataTime[0],this.searchParams.endDate=this.dataTime[1]},components:{mListConstruction:o.default,mDefineUserCount:n.default,mTaskStatusCount:i.default,mProcessStateCount:r.default}}},1408:function(t,e,a){"use strict";a.r(e);var s=a(1409),n=a.n(s);for(var i in s)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(i);e.default=n.a},1409:function(t,e,a){"use strict";e.__esModule=!0;var s=o(a(94)),n=a(650),i=a(1410),r=o(a(652)),c=o(a(1193));function o(t){return t&&t.__esModule?t:{default:t}}e.default={name:"define-user-count",data:function(){return{isSpin:!0,msg:!0,parameter:{projectId:0}}},props:{projectId:Number},methods:Object.assign({},(0,n.mapActions)("projects",["getDefineUserCount"]),{_handleDefineUser:function(t){var e=this,a=t.data.userList||[];this.defineUserList=s.default.map(a,(function(t){return{key:t.userName+","+t.userId+","+t.count,value:t.count}}));var n=r.default.bar("#process-definition-bar",this.defineUserList,{});n.echart.setOption(i.bar),this.projectId&&n.echart.on("click",(function(t){e.$router.push({name:"projects-definition-list",query:{userId:t.name.split(",")[1]}})}))}}),created:function(){var t=this;this.isSpin=!0,this.parameter.projectId=this.projectId,this.getDefineUserCount(this.parameter).then((function(e){t.msg=e.data.count>0,t.defineUserList=[],t._handleDefineUser(e),t.isSpin=!1})).catch((function(e){t.isSpin=!1}))},mounted:function(){},components:{mNoData:c.default}}},1410:function(t,e,a){"use strict";e.__esModule=!0,e.simple=e.bar=e.pie=void 0;var s,n=a(94),i=(s=n)&&s.__esModule?s:{default:s},r=a(743);var c={xAxis:{splitLine:{show:!1},axisLabel:{interval:0,showMaxLabel:!0,formatter:function(t){return r.tasksState[t].desc}}},tooltip:{formatter:function(t){var e="";return i.default.map(t,(function(t,a){0===a&&(e+=r.tasksState[t.name].desc+"<br>"),e+='<div style="font-size: 12px;">'+t.seriesName+" : "+t.data+"<br></div>"})),e}},color:["#D5050B","#0398E1"]};e.pie={series:[{type:"pie",clickable:!0,minAngle:5,avoidLabelOverlap:!0,hoverAnimation:!0,radius:["30%","60%"],center:["53%","60%"],label:{align:"left",normal:{}}}]},e.bar={title:{text:""},grid:{right:"2%"},xAxis:{splitLine:{show:!1},axisLabel:{formatter:function(t){return t.split(",")[0]+" ("+t.split(",")[2]+")"}}},tooltip:{formatter:function(t){return t[0].name.split(",")[0]+" ("+t[0].value+")"}},series:[{type:"bar",barWidth:30}]},e.simple=c},1411:function(t,e,a){"use strict";a.r(e);var s=a(1412),n=a.n(s);for(var i in s)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(i);e.default=n.a},1412:function(t,e,a){"use strict";e.__esModule=!0;var s=u(a(94)),n=a(650),i=a(1410),r=u(a(652)),c=u(a(1193)),o=a(1350);function u(t){return t&&t.__esModule?t:{default:t}}e.default={name:"task-status-count",data:function(){return{isSpin:!0,msg:"",taskStatusList:[]}},props:{searchParams:Object},methods:Object.assign({},(0,n.mapActions)("projects",["getTaskStatusCount"]),{_goTask:function(t){this.$router.push({name:"task-instance",query:{stateType:s.default.find(o.stateType,["label",t]).code,startDate:this.searchParams.startDate,endDate:this.searchParams.endDate}})},_handleTaskStatus:function(t){var e=this,a=t.data.taskCountDtos;this.taskStatusList=s.default.map(a,(function(t){return{key:s.default.find(o.stateType,["code",t.taskStateType]).label,value:t.count,type:"type"}}));var n=r.default.pie("#task-status-pie",this.taskStatusList,{title:""});n.echart.setOption(i.pie),this.searchParams.projectId&&n.echart.on("click",(function(t){e._goTask(t.data.name)}))}}),watch:{searchParams:{deep:!0,immediate:!0,handler:function(t){var e=this;this.isSpin=!0,this.getTaskStatusCount(t).then((function(t){e.taskStatusList=[],e._handleTaskStatus(t),e.isSpin=!1})).catch((function(t){console.log(t),e.msg=t.msg||"error",e.isSpin=!1}))}}},beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},computed:{},components:{mNoData:c.default}}},1413:function(t,e,a){"use strict";a.r(e);var s=a(1414),n=a.n(s);for(var i in s)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(i);e.default=n.a},1414:function(t,e,a){"use strict";e.__esModule=!0;var s=d(a(94)),n=a(650),i=a(1410),r=d(a(652)),c=d(a(651)),o=d(a(1193)),u=a(1350);function d(t){return t&&t.__esModule?t:{default:t}}e.default={name:"process-state-count",data:function(){return{isSpin:!0,msg:"",processStateList:[],currentName:""}},props:{searchParams:Object},methods:Object.assign({},(0,n.mapActions)("projects",["getProcessStateCount"]),{_goProcess:function(t){this.$router.push({name:"projects-instance-list",query:{stateType:s.default.find(u.stateType,["label",t]).code,startDate:this.searchParams.startDate,endDate:this.searchParams.endDate}})},_handleProcessState:function(t){var e=this,a=t.data.taskCountDtos;this.processStateList=s.default.map(a,(function(t){return{key:s.default.find(u.stateType,["code",t.taskStateType]).label,value:t.count}}));var n=r.default.pie("#process-state-pie",this.processStateList,{title:""});n.echart.setOption(i.pie),this.searchParams.projectId&&n.echart.on("click",(function(t){e._goProcess(t.data.name)}))}}),watch:{searchParams:{deep:!0,immediate:!0,handler:function(t){var e=this;this.isSpin=!0,this.getProcessStateCount(t).then((function(t){e.processStateList=[],e._handleProcessState(t),e.isSpin=!1})).catch((function(t){e.msg=t.msg||"error",e.isSpin=!1}))}},"$store.state.projects.sideBar":function(){c.default.init(document.getElementById("process-state-pie")).resize()}},beforeCreate:function(){},created:function(){this.currentName=this.$router.currentRoute.name},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},computed:{},components:{mNoData:o.default}}},1478:function(t,e,a){},1688:function(t,e,a){"use strict";a.r(e);var s=a(1937),n=a(1408);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);var r=a(30),c=Object(r.a)(n.default,s.a,s.b,!1,null,null,null);e.default=c.exports},1689:function(t,e,a){"use strict";a.r(e);var s=a(1938),n=a(1411);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);var r=a(30),c=Object(r.a)(n.default,s.a,s.b,!1,null,null,null);e.default=c.exports},1690:function(t,e,a){"use strict";a.r(e);var s=a(1939),n=a(1413);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);var r=a(30),c=Object(r.a)(n.default,s.a,s.b,!1,null,null,null);e.default=c.exports},1691:function(t,e,a){"use strict";a(1478)},1935:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return n}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("m-list-construction",{attrs:{title:t.searchParams.projectId?t.$t("Project Home"):t.$t("Home")}},[a("template",{slot:"content"},[a("div",{staticClass:"perject-home-content"},[a("div",{staticClass:"time-model"},[a("el-date-picker",{attrs:{type:"datetimerange",size:"small","range-separator":"-","start-placeholder":t.$t("startDate"),"end-placeholder":t.$t("endDate"),"value-format":"yyyy-MM-dd HH:mm:ss"},on:{change:t._datepicker},model:{value:t.dataTime,callback:function(e){t.dataTime=e},expression:"dataTime"}})],1),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"chart-title"},[a("span",[t._v(t._s(t.$t("Task status statistics")))])]),t._v(" "),a("div",{staticClass:"row"},[a("m-task-status-count",{attrs:{"search-params":t.searchParams}})],1)]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"chart-title"},[a("span",[t._v(t._s(t.$t("Process Status Statistics")))])]),t._v(" "),a("div",{staticClass:"row"},[a("m-process-state-count",{attrs:{"search-params":t.searchParams}})],1)])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"chart-title",staticStyle:{"margin-bottom":"-20px","margin-top":"30px"}},[a("span",[t._v(t._s(t.$t("Process Definition Statistics")))])]),t._v(" "),a("div",[a("m-define-user-count",{attrs:{"project-id":t.searchParams.projectId}})],1)])])])])],2)},n=[]},1937:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return n}));var s=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"define-user-count-model"},[this.msg?e("div",[e("div",{directives:[{name:"spin",rawName:"v-spin",value:this.isSpin,expression:"isSpin"}],staticClass:"data-area"},[e("div",{staticStyle:{height:"500px"},attrs:{id:"process-definition-bar"}})])]):e("div",[e("m-no-data",{attrs:{height:530}})],1)])},n=[]},1938:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return n}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"task-status-count-model"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.msg,expression:"!msg"}]},[a("div",{directives:[{name:"spin",rawName:"v-spin",value:t.isSpin,expression:"isSpin"}],staticClass:"data-area",staticStyle:{height:"430px"}},[t._m(0),t._v(" "),a("div",{staticClass:"col-md-5"},[a("div",{staticClass:"table-small-model"},[a("table",[a("tr",[a("th",{attrs:{width:"40"}},[t._v(t._s(t.$t("#")))]),t._v(" "),a("th",[t._v(t._s(t.$t("Number")))]),t._v(" "),a("th",[t._v(t._s(t.$t("State")))])]),t._v(" "),t._l(t.taskStatusList,(function(e,s){return a("tr",{key:s},[a("td",[a("span",[t._v(t._s(s+1))])]),t._v(" "),a("td",[a("span",[a("a",{class:t.searchParams.projectId?"links":"",attrs:{href:"javascript:"},on:{click:function(a){t.searchParams.projectId&&t._goTask(e.key)}}},[t._v(t._s(e.value))])])]),t._v(" "),a("td",[a("span",{staticClass:"ellipsis",staticStyle:{width:"98%"},attrs:{title:e.key}},[t._v(t._s(e.key))])])])}))],2)])])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.msg,expression:"msg"}]},[t.msg?a("m-no-data",{attrs:{msg:t.msg,height:430}}):t._e()],1)])},n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-7"},[e("div",{staticStyle:{height:"260px","margin-top":"100px"},attrs:{id:"task-status-pie"}})])}]},1939:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return n}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"process-state-count-model"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.msg,expression:"!msg"}]},[a("div",{directives:[{name:"spin",rawName:"v-spin",value:t.isSpin,expression:"isSpin"}],staticClass:"data-area",staticStyle:{height:"430px"}},[t._m(0),t._v(" "),a("div",{staticClass:"col-md-5"},[a("div",{staticClass:"table-small-model"},[a("table",[a("tr",[a("th",{attrs:{width:"40"}},[t._v(t._s(t.$t("#")))]),t._v(" "),a("th",[t._v(t._s(t.$t("Number")))]),t._v(" "),a("th",[t._v(t._s(t.$t("State")))])]),t._v(" "),t._l(t.processStateList,(function(e,s){return a("tr",{key:s},[a("td",[a("span",[t._v(t._s(s+1))])]),t._v(" "),a("td",["home"===t.currentName?a("a",{staticStyle:{cursor:"default"}},[t._v(t._s(e.value))]):a("span",[a("a",{attrs:{href:"javascript:"},on:{click:function(a){t.searchParams.projectId&&t._goProcess(e.key)}}},[t._v(t._s(e.value))])])]),t._v(" "),a("td",[a("span",{staticClass:"ellipsis",staticStyle:{width:"98%"},attrs:{title:e.key}},[t._v(t._s(e.key))])])])}))],2)])])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.msg,expression:"msg"}]},[t.msg?a("m-no-data",{attrs:{msg:t.msg,height:430}}):t._e()],1)])},n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-7"},[e("div",{staticStyle:{width:"100%",height:"260px","margin-top":"100px"},attrs:{id:"process-state-pie"}})])}]}}]);