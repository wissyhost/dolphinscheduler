(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1131:function(t,e,n){"use strict";n.r(e);var a=n(2229),i=n(1694);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);var o=n(30),r=Object(o.a)(i.default,a.a,a.b,!1,null,null,null);e.default=r.exports},1183:function(t,e,n){"use strict";n.r(e);var a=n(1184),i=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e.default=i.a},1184:function(t,e,n){"use strict";e.__esModule=!0,e.default={name:"list-construction",data:function(){return{}},props:{title:String}}},1186:function(t,e,n){"use strict";n.r(e);var a=n(1188),i=n(1183);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);var o=n(30),r=Object(o.a)(i.default,a.a,a.b,!1,null,null,null);e.default=r.exports},1188:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-main list-construction-model"},[n("div",{staticClass:"content-title"},[n("span",[t._v(t._s(t.title))]),t._v(" "),t._t("operation")],2),t._v(" "),n("div",{staticClass:"conditions-box"},[t._t("conditions")],2),t._v(" "),n("div",{staticClass:"list-box"},[t._t("content")],2)])},i=[]},1201:function(t,e,n){"use strict";n.r(e);var a=n(1202),i=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e.default=i.a},1202:function(t,e,n){"use strict";e.__esModule=!0;var a,i=n(83),s=(a=i)&&a.__esModule?a:{default:a};e.default={name:"popup",data:function(){return{spinnerLoading:!1,apDisabled:!1}},props:{okText:{type:String,default:""+s.default.$t("Confirm")},disabled:{type:Boolean,default:!1},asynLoading:{type:Boolean,default:!1}},methods:{close:function(){this.$emit("close")},ok:function(){var t=this;this.asynLoading?(this.spinnerLoading=!0,this.$emit("ok",(function(){t.spinnerLoading=!1}))):this.$emit("ok")}},components:{}}},1205:function(t,e,n){"use strict";e.__esModule=!0;var a,i=n(94),s=(a=i)&&a.__esModule?a:{default:a},o=n(1218);e.default={watch:{searchParams:{deep:!0,handler:function(){(0,o.setUrlParams)(this.searchParams),this._debounceGET()}}},created:function(){s.default.isEmpty(this.$route.query)||(this.searchParams=s.default.assign(this.searchParams,this.$route.query))},mounted:function(){this._debounceGET()},methods:{_debounceGET:s.default.debounce((function(t){this._getList(t)}),100,{leading:!1,trailing:!0})}}},1212:function(t,e,n){},1222:function(t,e,n){"use strict";n.r(e);var a=n(1227),i=n(1201);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n(1223);var o=n(30),r=Object(o.a)(i.default,a.a,a.b,!1,null,null,null);e.default=r.exports},1223:function(t,e,n){"use strict";n(1212)},1227:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"popup-model"},[n("div",{staticClass:"content-p"},[t._t("content")],2),t._v(" "),n("div",{staticClass:"bottom-p"},[n("el-button",{attrs:{type:"text",size:"mini",round:"",disabled:t.disabled},on:{click:function(e){return t.close()}}},[t._v(" "+t._s(t.$t("Cancel"))+" ")]),t._v(" "),n("el-button",{attrs:{type:"primary",size:"mini",round:"",loading:t.spinnerLoading,disabled:t.disabled||t.apDisabled},on:{click:function(e){return t.ok()}}},[t._v(t._s(t.spinnerLoading?"Loading...":t.okText)+" ")])],1)])},i=[]},1694:function(t,e,n){"use strict";n.r(e);var a=n(1695),i=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e.default=i.a},1695:function(t,e,n){"use strict";e.__esModule=!0;var a=f(n(94)),i=n(650),s=f(n(2025)),o=f(n(1196)),r=f(n(2026)),c=f(n(1193)),u=f(n(1205)),l=f(n(1219)),d=f(n(1186));function f(t){return t&&t.__esModule?t:{default:t}}e.default={name:"projects-list",data:function(){return{total:null,projectsList:[],isLoading:!0,searchParams:{pageSize:10,pageNo:1,searchVal:""},createProjectDialog:!1,item:{}}},mixins:[u.default],props:{},methods:Object.assign({},(0,i.mapActions)("projects",["getProjectsList"]),{_onConditions:function(t){this.searchParams=a.default.assign(this.searchParams,t),this.searchParams.pageNo=1},_page:function(t){this.searchParams.pageNo=t},_pageSize:function(t){this.searchParams.pageSize=t},_create:function(t){this.createProjectDialog=!0,this.item=t},_onUpdate:function(){this.createProjectDialog=!1,this._debounceGET()},_close:function(){this.createProjectDialog=!1},_getList:function(t){var e=this;this.isLoading=!t,this.getProjectsList(this.searchParams).then((function(t){e.searchParams.pageNo>1&&0===t.totalList.length?e.searchParams.pageNo=e.searchParams.pageNo-1:(e.projectsList=[],e.projectsList=t.totalList,e.total=t.total,e.isLoading=!1)})).catch((function(t){e.isLoading=!1}))}}),watch:{$route:function(t){this.searchParams.pageNo=a.default.isEmpty(t.query)?1:t.query.pageNo}},created:function(){},mounted:function(){},components:{mListConstruction:d.default,mSpin:o.default,mConditions:l.default,mList:s.default,mCreateProject:r.default,mNoData:c.default}}},1696:function(t,e,n){"use strict";n.r(e);var a=n(1697),i=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e.default=i.a},1697:function(t,e,n){"use strict";e.__esModule=!0;var a,i=n(650),s=n(372),o=(a=s)&&a.__esModule?a:{default:a},r=n(371);e.default={name:"projects-list",data:function(){return{list:[]}},props:{projectsList:Array,pageNo:Number,pageSize:Number},methods:Object.assign({},(0,i.mapActions)("projects",["deleteProjects"]),(0,i.mapMutations)("dag",["setProjectName"]),{_switchProjects:function(t){this.setProjectName(t.name),o.default.setItem("projectName",""+t.name),o.default.setItem("projectId",""+t.id),this.$router.push({path:"/projects/index"})},_delete:function(t,e){var n=this;this.deleteProjects({projectId:t.id}).then((function(t){n.$emit("on-update"),n.$message.success(t.msg)})).catch((function(t){n.$message.error(t.msg||"")}))},_edit:function(t){(0,r.findComponentDownward)(this.$root,"projects-list")._create(t)}}),watch:{projectsList:function(t){var e=this;this.list=[],setTimeout((function(){e.list=t}))}},created:function(){},mounted:function(){this.list=this.projectsList},components:{}}},1698:function(t,e,n){"use strict";n.r(e);var a=n(1699),i=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e.default=i.a},1699:function(t,e,n){"use strict";e.__esModule=!0;var a=c(n(94)),i=c(n(83)),s=c(n(196)),o=c(n(1222)),r=c(n(370));function c(t){return t&&t.__esModule?t:{default:t}}e.default={name:"projects-create",data:function(){return{store:s.default,description:"",projectName:"",userName:""}},props:{item:Object},methods:{_ok:function(){var t=this;if(this._verification()){var e={projectName:a.default.trim(this.projectName),description:a.default.trim(this.description),userName:a.default.trim(this.userName)};this.item&&(e.projectId=this.item.id),this.$refs.popover.spinnerLoading=!0,this.store.dispatch("projects/"+(this.item?"updateProjects":"createProjects"),e).then((function(e){t.$emit("_onUpdate"),t.$message({message:e.msg,type:"success",offset:70}),t.$refs.popover.spinnerLoading=!1})).catch((function(e){t.$message.error(e.msg||""),t.$refs.popover.spinnerLoading=!1}))}},_close:function(){this.$emit("close")},_verification:function(){return this.projectName?!(this.item&&!this.userName)||(this.$message.warning(""+i.default.$t("Please enter user name")),!1):(this.$message.warning(""+i.default.$t("Please enter name")),!1)}},watch:{},created:function(){this.item&&(this.projectName=this.item.name,this.description=this.item.description,this.userName=this.item.userName)},mounted:function(){},components:{mPopover:o.default,mListBoxF:r.default}}},2025:function(t,e,n){"use strict";n.r(e);var a=n(2281),i=n(1696);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);var o=n(30),r=Object(o.a)(i.default,a.a,a.b,!1,null,null,null);e.default=r.exports},2026:function(t,e,n){"use strict";n.r(e);var a=n(2282),i=n(1698);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);var o=n(30),r=Object(o.a)(i.default,a.a,a.b,!1,null,null,null);e.default=r.exports},2229:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("m-list-construction",{attrs:{title:t.$t("Project")}},[n("template",{slot:"conditions"},[n("m-conditions",{on:{"on-conditions":t._onConditions}},[n("template",{slot:"button-group"},[n("el-button",{attrs:{size:"mini"},on:{click:function(e){return t._create("")}}},[t._v(t._s(t.$t("Create Project")))]),t._v(" "),t.createProjectDialog?n("el-dialog",{attrs:{title:t.item?t.$t("Edit"):t.$t("Create Project"),visible:t.createProjectDialog,width:"auto"},on:{"update:visible":function(e){t.createProjectDialog=e}}},[n("m-create-project",{attrs:{item:t.item},on:{_onUpdate:t._onUpdate,close:t._close}})],1):t._e()],1)],2)],1),t._v(" "),n("template",{slot:"content"},[t.projectsList.length||t.total>0?[n("m-list",{attrs:{"projects-list":t.projectsList,"page-no":t.searchParams.pageNo,"page-size":t.searchParams.pageSize},on:{"on-update":t._onUpdate}}),t._v(" "),n("div",{staticClass:"page-box"},[n("el-pagination",{attrs:{background:"","page-size":t.searchParams.pageSize,"current-page":t.searchParams.pageNo,"page-sizes":[10,30,50],layout:"sizes, prev, pager, next, jumper",total:t.total},on:{"current-change":t._page,"size-change":t._pageSize,"update:currentPage":function(e){return t.$set(t.searchParams,"pageNo",e)},"update:current-page":function(e){return t.$set(t.searchParams,"pageNo",e)}}})],1)]:t._e(),t._v(" "),!t.projectsList.length&&t.total<=0?[n("m-no-data")]:t._e(),t._v(" "),n("m-spin",{attrs:{"is-spin":t.isLoading,"is-left":!1}})],2)],2)},i=[]},2281:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-model"},[n("div",{staticClass:"table-box"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,size:"mini"}},[n("el-table-column",{attrs:{type:"index",label:t.$t("#"),width:"50"}}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("Project Name")},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{trigger:"hover",placement:"top"}},[n("p",[t._v(t._s(e.row.name))]),t._v(" "),n("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[n("a",{staticClass:"links",attrs:{href:"javascript:"},on:{click:function(n){return t._switchProjects(e.row)}}},[t._v(t._s(e.row.name))])])])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"userName",label:t.$t("Owned Users")}}),t._v(" "),n("el-table-column",{attrs:{prop:"defCount",label:t.$t("Process Define Count")}}),t._v(" "),n("el-table-column",{attrs:{prop:"instRunningCount",label:t.$t("Process Instance Running Count")}}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("Description"),width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(t._f("filterNull")(e.row.description)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("Create Time"),"min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(t._f("formatDate")(e.row.createTime)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("Update Time"),"min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(t._f("formatDate")(e.row.updateTime)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("Operation"),width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tooltip",{attrs:{content:t.$t("Edit"),placement:"top",enterable:!1}},[n("span",[n("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit-outline",circle:""},on:{click:function(n){return t._edit(e.row)}}})],1)]),t._v(" "),n("el-tooltip",{attrs:{content:t.$t("Delete"),placement:"top",enterable:!1}},[n("el-popconfirm",{attrs:{confirmButtonText:t.$t("Confirm"),cancelButtonText:t.$t("Cancel"),icon:"el-icon-info",iconColor:"red",title:t.$t("Delete?")},on:{onConfirm:function(n){return t._delete(e.row,e.row.id)}}},[n("el-button",{attrs:{slot:"reference",type:"danger",size:"mini",icon:"el-icon-delete",circle:""},slot:"reference"})],1)],1)]}}])})],1)],1)])},i=[]},2282:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("m-popover",{ref:"popover",attrs:{nameText:t.item?t.$t("Edit"):t.$t("Create Project"),"ok-text":t.item?t.$t("Edit"):t.$t("Submit")},on:{close:t._close,ok:t._ok}},[n("template",{slot:"content"},[n("div",{staticClass:"projects-create-model"},[n("m-list-box-f",[n("template",{slot:"name"},[n("strong",[t._v("*")]),t._v(t._s(t.$t("Project Name")))]),t._v(" "),n("template",{slot:"content"},[n("el-input",{attrs:{placeholder:t.$t("Please enter name"),maxlength:"60",size:"small",type:"input"},model:{value:t.projectName,callback:function(e){t.projectName=e},expression:"projectName"}})],1)],2),t._v(" "),t.item?n("m-list-box-f",[n("template",{slot:"name"},[n("strong",[t._v("*")]),t._v(t._s(t.$t("Owned Users")))]),t._v(" "),n("template",{slot:"content"},[n("el-input",{attrs:{placeholder:t.$t("Please enter user name"),maxlength:"60",size:"small",type:"input"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}})],1)],2):t._e(),t._v(" "),n("m-list-box-f",[n("template",{slot:"name"},[t._v(t._s(t.$t("Description")))]),t._v(" "),n("template",{slot:"content"},[n("el-input",{attrs:{placeholder:t.$t("Please enter description"),size:"small",type:"textarea"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)],2)],1)])],2)},i=[]}}]);