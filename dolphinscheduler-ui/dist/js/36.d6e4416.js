(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1145:function(t,e,a){"use strict";a.r(e);var s=a(2243),n=a(1787);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);var i=a(30),o=Object(i.a)(n.default,s.a,s.b,!1,null,null,null);e.default=o.exports},1183:function(t,e,a){"use strict";a.r(e);var s=a(1184),n=a.n(s);for(var r in s)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(r);e.default=n.a},1184:function(t,e,a){"use strict";e.__esModule=!0,e.default={name:"list-construction",data:function(){return{}},props:{title:String}}},1186:function(t,e,a){"use strict";a.r(e);var s=a(1188),n=a(1183);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);var i=a(30),o=Object(i.a)(n.default,s.a,s.b,!1,null,null,null);e.default=o.exports},1188:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return n}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-main list-construction-model"},[a("div",{staticClass:"content-title"},[a("span",[t._v(t._s(t.title))]),t._v(" "),t._t("operation")],2),t._v(" "),a("div",{staticClass:"conditions-box"},[t._t("conditions")],2),t._v(" "),a("div",{staticClass:"list-box"},[t._t("content")],2)])},n=[]},1205:function(t,e,a){"use strict";e.__esModule=!0;var s,n=a(94),r=(s=n)&&s.__esModule?s:{default:s},i=a(1218);e.default={watch:{searchParams:{deep:!0,handler:function(){(0,i.setUrlParams)(this.searchParams),this._debounceGET()}}},created:function(){r.default.isEmpty(this.$route.query)||(this.searchParams=r.default.assign(this.searchParams,this.$route.query))},mounted:function(){this._debounceGET()},methods:{_debounceGET:r.default.debounce((function(t){this._getList(t)}),100,{leading:!1,trailing:!0})}}},1441:function(t,e,a){"use strict";a.r(e);var s=a(1442),n=a.n(s);for(var r in s)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(r);e.default=n.a},1442:function(t,e,a){"use strict";e.__esModule=!0;var s=d(a(94)),n=d(a(1785)),r=d(a(196)),i=d(a(1786)),o=d(a(1196)),c=d(a(1193)),l=d(a(1205)),u=d(a(1186));function d(t){return t&&t.__esModule?t:{default:t}}e.default={name:"task-record-list",data:function(){return{store:r.default,total:null,taskRecordList:[],isLoading:!0,searchParams:{taskName:"",state:"",sourceTable:"",destTable:"",taskDate:"",startDate:"",endDate:"",pageSize:10,pageNo:1}}},mixins:[l.default],props:{config:String},methods:{_onQuery:function(t){this.searchParams=s.default.assign(this.searchParams,t),this.searchParams.pageNo=1},_page:function(t){this.searchParams.pageNo=t},_getList:function(t){var e=this;this.isLoading=!t,this.store.dispatch("dag/"+this.config.apiFn,this.searchParams).then((function(t){e.taskRecordList=[],e.taskRecordList=t.totalList,e.total=t.total,e.isLoading=!1})).catch((function(t){e.isLoading=!1}))},_onUpdate:function(){this._debounceGET()}},watch:{$route:function(t){s.default.isEmpty(t.query)&&(this.searchParams.processInstanceId=""),this.searchParams.pageNo=s.default.isEmpty(t.query)?1:t.query.pageNo}},created:function(){},mounted:function(){},components:{mList:n.default,mConditions:i.default,mSpin:o.default,mListConstruction:u.default,mNoData:c.default}}},1443:function(t,e,a){"use strict";a.r(e);var s=a(1444),n=a.n(s);for(var r in s)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(r);e.default=n.a},1444:function(t,e,a){"use strict";e.__esModule=!0,e.default={name:"list",data:function(){return{list:[],backfillItem:{}}},props:{taskRecordList:Array,pageNo:Number,pageSize:Number},methods:{_rtTooltip:function(t){return'<div style="word-wrap:break-word;text-align: left;">'+t+"</div>"}},watch:{taskRecordList:function(t){var e=this;this.list=[],setTimeout((function(){e.list=t}))}},created:function(){},mounted:function(){this.list=this.taskRecordList},components:{}}},1445:function(t,e,a){"use strict";a.r(e);var s=a(1446),n=a.n(s);for(var r in s)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(r);e.default=n.a},1446:function(t,e,a){"use strict";e.__esModule=!0;var s=r(a(94)),n=r(a(1219));function r(t){return t&&t.__esModule?t:{default:t}}e.default={name:"conditions",data:function(){return{stateList:[{label:""+this.$t("None"),code:""},{label:""+this.$t("Success"),code:"成功"},{label:""+this.$t("Waiting"),code:"等待"},{label:""+this.$t("Execution"),code:"执行中"},{label:""+this.$t("Finish"),code:"完成"},{label:""+this.$t("Failed"),code:"失败"}],searchParams:{taskName:"",state:"",sourceTable:"",destTable:"",taskDate:"",startDate:"",endDate:""},dataTime:[]}},props:{},methods:{_ckQuery:function(){this.$emit("on-query",this.searchParams)},_onChangeStartStop:function(t){this.searchParams.startDate=t[0],this.searchParams.endDate=t[1]},_onChangeState:function(t){this.searchParams.state=t},_dateEmpty:function(){this.searchParams.startDate="",this.searchParams.endDate="",this.$refs.datepicker.empty()},_onChangeDate:function(t){this.searchParams.taskDate=t}},created:function(){s.default.isEmpty(this.$route.query)||(this.searchParams=s.default.assign(this.searchParams,this.$route.query))},mounted:function(){},components:{mConditions:n.default}}},1784:function(t,e,a){"use strict";a.r(e);var s=a(1940),n=a(1441);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);var i=a(30),o=Object(i.a)(n.default,s.a,s.b,!1,null,null,null);e.default=o.exports},1785:function(t,e,a){"use strict";a.r(e);var s=a(1948),n=a(1443);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);var i=a(30),o=Object(i.a)(n.default,s.a,s.b,!1,null,null,null);e.default=o.exports},1786:function(t,e,a){"use strict";a.r(e);var s=a(1949),n=a(1445);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);var i=a(30),o=Object(i.a)(n.default,s.a,s.b,!1,null,null,null);e.default=o.exports},1787:function(t,e,a){"use strict";a.r(e);var s=a(1788),n=a.n(s);for(var r in s)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(r);e.default=n.a},1788:function(t,e,a){"use strict";e.__esModule=!0;var s,n=a(1784),r=(s=n)&&s.__esModule?s:{default:s};e.default={name:"history-task-record",data:function(){return{config:{title:""+this.$t("History task record"),apiFn:"getHistoryTaskRecordList"}}},components:{mList:r.default}}},1940:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return n}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("m-list-construction",{attrs:{title:t.config.title}},[a("template",{slot:"conditions"},[a("m-conditions",{on:{"on-query":t._onQuery}})],1),t._v(" "),a("template",{slot:"content"},[t.taskRecordList.length||t.total>0?[a("m-list",{attrs:{"task-record-list":t.taskRecordList,"page-no":t.searchParams.pageNo,"page-size":t.searchParams.pageSize},on:{"on-update":t._onUpdate}}),t._v(" "),a("div",{staticClass:"page-box"},[a("el-pagination",{attrs:{background:"","page-size":t.searchParams.pageSize,"current-page":t.searchParams.pageNo,"page-sizes":[10,30,50],layout:"sizes, prev, pager, next, jumper",total:t.total},on:{"current-change":t._page,"size-change":t._pageSize,"update:currentPage":function(e){return t.$set(t.searchParams,"pageNo",e)},"update:current-page":function(e){return t.$set(t.searchParams,"pageNo",e)}}})],1)]:t._e(),t._v(" "),!t.taskRecordList.length&&t.total<=0?[a("m-no-data")]:t._e(),t._v(" "),a("m-spin",{attrs:{"is-spin":t.isLoading}})],2)],2)},n=[]},1948:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return n}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list-model"},[a("div",{staticClass:"table-box"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,size:"mini"}},[a("el-table-column",{attrs:{type:"index",label:t.$t("#"),width:"50"}}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("Task Name"),"min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-popover",{attrs:{trigger:"hover",placement:"top"}},[a("p",[t._v(t._s(e.row.procName))]),t._v(" "),a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[t._v("\n              "+t._s(e.row.procName)+"\n            ")])])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("Task Date")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("formatDate")(e.row.procDate)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("Start Time"),width:"135"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("formatDate")(e.row.startTime)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("End Time"),width:"135"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("formatDate")(e.row.endTime)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"description",label:t.$t("Duration")+"(s)"}}),t._v(" "),a("el-table-column",{attrs:{prop:"sourceTab",label:t.$t("Source Table")}}),t._v(" "),a("el-table-column",{attrs:{prop:"sourceRowCount",label:t.$t("Record Number")}}),t._v(" "),a("el-table-column",{attrs:{prop:"targetTab",label:t.$t("Target Table")}}),t._v(" "),a("el-table-column",{attrs:{prop:"targetRowCount",label:t.$t("Record Number")}}),t._v(" "),a("el-table-column",{attrs:{prop:"note",label:t.$t("State")}})],1)],1)])},n=[]},1949:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return n}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("m-conditions",[a("template",{slot:"search-group"},[a("div",{staticClass:"list"},[a("el-button",{attrs:{type:"ghost",size:"mini",icon:"el-icon-search"},on:{click:t._ckQuery}})],1),t._v(" "),a("div",{staticClass:"list"},[a("el-date-picker",{attrs:{type:"datetimerange",size:"mini","range-separator":"-","start-placeholder":t.$t("startDate"),"end-placeholder":t.$t("endDate"),"value-format":"yyyy-MM-dd HH:mm:ss"},on:{change:t._onChangeStartStop},model:{value:t.dataTime,callback:function(e){t.dataTime=e},expression:"dataTime"}})],1),t._v(" "),a("div",{staticClass:"list"},[a("el-input",{staticStyle:{width:"120px"},attrs:{size:"mini",placeholder:t.$t("Target Table")},model:{value:t.searchParams.destTable,callback:function(e){t.$set(t.searchParams,"destTable",e)},expression:"searchParams.destTable"}})],1),t._v(" "),a("div",{staticClass:"list"},[a("el-input",{staticStyle:{width:"120px"},attrs:{size:"mini",placeholder:t.$t("Source Table")},model:{value:t.searchParams.sourceTable,callback:function(e){t.$set(t.searchParams,"sourceTable",e)},expression:"searchParams.sourceTable"}})],1),t._v(" "),a("div",{staticClass:"list"},[a("el-select",{staticStyle:{width:"90px"},attrs:{value:t.searchParams.state,placeholder:t.$t("State"),size:"mini"},on:{change:t._onChangeState}},t._l(t.stateList,(function(t){return a("el-option",{key:t.label,attrs:{value:t.code,label:t.label}})})),1)],1),t._v(" "),a("div",{staticClass:"list"},[a("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",size:"mini",type:"date",placeholder:t.$t("Date")},on:{change:t._onChangeDate},model:{value:t.searchParams.taskDate,callback:function(e){t.$set(t.searchParams,"taskDate",e)},expression:"searchParams.taskDate"}})],1),t._v(" "),a("div",{staticClass:"list"},[a("el-input",{staticStyle:{width:"130px"},attrs:{size:"mini",placeholder:t.$t("Task Name")},model:{value:t.searchParams.taskName,callback:function(e){t.$set(t.searchParams,"taskName",e)},expression:"searchParams.taskName"}})],1)])],2)},n=[]},2243:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return n}));var s=function(){var t=this.$createElement;return(this._self._c||t)("m-list",{attrs:{config:this.config}})},n=[]}}]);