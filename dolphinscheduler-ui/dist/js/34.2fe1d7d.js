(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1169:function(t,e,n){"use strict";n.r(e);var i=n(2407),r=n(1890);for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);var s=n(30),o=Object(s.a)(r.default,i.a,i.b,!1,null,null,null);e.default=o.exports},1183:function(t,e,n){"use strict";n.r(e);var i=n(1184),r=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e.default=r.a},1184:function(t,e,n){"use strict";e.__esModule=!0,e.default={name:"list-construction",data:function(){return{}},props:{title:String}}},1187:function(t,e,n){"use strict";n.r(e);var i=n(1189),r=n(1183);for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);var s=n(30),o=Object(s.a)(r.default,i.a,i.b,!1,null,null,null);e.default=o.exports},1189:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-main list-construction-model"},[n("div",{staticClass:"content-title"},[n("span",[t._v(t._s(t.title))]),t._v(" "),t._t("operation")],2),t._v(" "),n("div",{staticClass:"conditions-box"},[t._t("conditions")],2),t._v(" "),n("div",{staticClass:"list-box"},[t._t("content")],2)])},r=[]},1202:function(t,e,n){"use strict";n.r(e);var i=n(1203),r=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e.default=r.a},1203:function(t,e,n){"use strict";e.__esModule=!0;var i,r=n(83),a=(i=r)&&i.__esModule?i:{default:i};e.default={name:"popup",data:function(){return{spinnerLoading:!1,apDisabled:!1}},props:{okText:{type:String,default:""+a.default.$t("Confirm")},disabled:{type:Boolean,default:!1},asynLoading:{type:Boolean,default:!1}},methods:{close:function(){this.$emit("close")},ok:function(){var t=this;this.asynLoading?(this.spinnerLoading=!0,this.$emit("ok",(function(){t.spinnerLoading=!1}))):this.$emit("ok")}},components:{}}},1206:function(t,e,n){"use strict";e.__esModule=!0;var i,r=n(94),a=(i=r)&&i.__esModule?i:{default:i},s=n(1219);e.default={watch:{searchParams:{deep:!0,handler:function(){(0,s.setUrlParams)(this.searchParams),this._debounceGET()}}},created:function(){a.default.isEmpty(this.$route.query)||(this.searchParams=a.default.assign(this.searchParams,this.$route.query))},mounted:function(){this._debounceGET()},methods:{_debounceGET:a.default.debounce((function(t){this._getList(t)}),100,{leading:!1,trailing:!0})}}},1213:function(t,e,n){},1223:function(t,e,n){"use strict";n.r(e);var i=n(1228),r=n(1202);for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n(1224);var s=n(30),o=Object(s.a)(r.default,i.a,i.b,!1,null,null,null);e.default=o.exports},1224:function(t,e,n){"use strict";n(1213)},1228:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"popup-model"},[n("div",{staticClass:"content-p"},[t._t("content")],2),t._v(" "),n("div",{staticClass:"bottom-p"},[n("el-button",{attrs:{type:"text",size:"mini",round:"",disabled:t.disabled},on:{click:function(e){return t.close()}}},[t._v(" "+t._s(t.$t("Cancel"))+" ")]),t._v(" "),n("el-button",{attrs:{type:"primary",size:"mini",round:"",loading:t.spinnerLoading,disabled:t.disabled||t.apDisabled},on:{click:function(e){return t.ok()}}},[t._v(t._s(t.spinnerLoading?"Loading...":t.okText)+" ")])],1)])},r=[]},1890:function(t,e,n){"use strict";n.r(e);var i=n(1891),r=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e.default=r.a},1891:function(t,e,n){"use strict";e.__esModule=!0;var i=p(n(94)),r=n(650),a=p(n(2355)),s=p(n(196)),o=p(n(1197)),u=p(n(1194)),c=p(n(1206)),l=p(n(1220)),d=p(n(1187)),f=p(n(2356));function p(t){return t&&t.__esModule?t:{default:t}}e.default={name:"worker-groups-index",data:function(){return{total:null,isLoading:!1,workerGroupList:[],workerAddressList:[],searchParams:{pageSize:10,pageNo:1,searchVal:""},isADMIN:"ADMIN_USER"===s.default.state.user.userInfo.userType,createWorkerGroupDialog:!1,item:{}}},mixins:[c.default],props:{},methods:Object.assign({},(0,r.mapActions)("security",["getWorkerGroups","getWorkerAddresses"]),{_onConditions:function(t){this.searchParams=i.default.assign(this.searchParams,t),this.searchParams.pageNo=1},_page:function(t){this.searchParams.pageNo=t},_pageSize:function(t){this.searchParams.pageSize=t},_onUpdate:function(){this._debounceGET()},_onEdit:function(t){this._create(t)},_create:function(t){this.createWorkerGroupDialog=!0,this.item=t},onUpdate:function(){this._debounceGET("false"),this.createWorkerGroupDialog=!1},close:function(){this.createWorkerGroupDialog=!1},_getList:function(t){var e=this;this.isLoading=!t,this.getWorkerGroups(this.searchParams).then((function(t){e.searchParams.pageNo>1&&0===t.totalList.length?e.searchParams.pageNo=e.searchParams.pageNo-1:(e.workerGroupList=[],e.workerGroupList=t.totalList,e.total=t.total,e.isLoading=!1)})).catch((function(t){e.isLoading=!1}))},_getWorkerAddressList:function(){var t=this;this.getWorkerAddresses().then((function(e){t.workerAddressList=e.data.map((function(t){return{id:t,label:t}}))}))}}),watch:{$route:function(t){this.searchParams.pageNo=i.default.isEmpty(t.query)?1:t.query.pageNo}},created:function(){this._getWorkerAddressList()},mounted:function(){},components:{mList:a.default,mListConstruction:d.default,mConditions:l.default,mSpin:o.default,mNoData:u.default,mCreateWorker:f.default}}},1892:function(t,e,n){"use strict";n.r(e);var i=n(1893),r=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e.default=r.a},1893:function(t,e,n){"use strict";e.__esModule=!0;var i=n(650);e.default={name:"user-list",data:function(){return{list:[]}},props:{workerGroupList:Array,pageNo:Number,pageSize:Number},methods:Object.assign({},(0,i.mapActions)("security",["deleteWorkerGroups"]),{_delete:function(t,e){var n=this;this.deleteWorkerGroups({id:t.id}).then((function(t){n.$emit("on-update"),n.$message.success(t.msg)})).catch((function(t){n.$message.error(t.msg||"")}))},_edit:function(t){this.$emit("on-edit",t)}}),watch:{workerGroupList:function(t){var e=this;this.list=[],setTimeout((function(){e.list=t}))}},created:function(){this.list=this.workerGroupList},mounted:function(){},components:{}}},1894:function(t,e,n){"use strict";n.r(e);var i=n(1895),r=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e.default=r.a},1895:function(t,e,n){"use strict";e.__esModule=!0;var i=u(n(83)),r=u(n(196)),a=u(n(1223)),s=u(n(370)),o=u(n(1217));function u(t){return t&&t.__esModule?t:{default:t}}n(1218),e.default={name:"create-warning",data:function(){return{store:r.default,id:0,name:"",addrList:[]}},props:{item:Object,workerAddressList:Object},methods:{_ok:function(){this._verification()&&this._submit()},_verification:function(){return this.name?!!this.addrList.length||(this.$message.warning(""+i.default.$t("Worker addresses cannot be empty")),!1):(this.$message.warning(""+i.default.$t("Please enter group name")),!1)},_submit:function(){var t=this,e={id:this.id,name:this.name,addrList:this.addrList.join(",")};this.item&&(e.id=this.item.id),this.$refs.popover.spinnerLoading=!0,this.store.dispatch("security/saveWorkerGroups",e).then((function(e){t.$refs.popover.spinnerLoading=!1,t.$emit("onUpdate"),t.$message.success(e.msg)})).catch((function(e){t.$message.error(e.msg||""),t.$refs.popover.spinnerLoading=!1}))},close:function(){this.$emit("close")}},watch:{},created:function(){this.item&&(this.id=this.item.id,this.name=this.item.name,this.addrList=this.item.addrList.split(","))},mounted:function(){},components:{mPopover:a.default,mListBoxF:s.default,Treeselect:o.default}}},2355:function(t,e,n){"use strict";n.r(e);var i=n(2451),r=n(1892);for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);var s=n(30),o=Object(s.a)(r.default,i.a,i.b,!1,null,null,null);e.default=o.exports},2356:function(t,e,n){"use strict";n.r(e);var i=n(2452),r=n(1894);for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);var s=n(30),o=Object(s.a)(r.default,i.a,i.b,!1,null,null,null);e.default=o.exports},2407:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("m-list-construction",{attrs:{title:t.$t("Worker group manage")}},[n("template",{slot:"conditions"},[n("m-conditions",{on:{"on-conditions":t._onConditions}},[t.isADMIN?n("template",{slot:"button-group"},[n("el-button",{attrs:{size:"mini"},on:{click:function(e){return t._create("")}}},[t._v(t._s(t.$t("Create worker group")))]),t._v(" "),t.createWorkerGroupDialog?n("el-dialog",{attrs:{title:t.item?t.$t("Edit worker group"):t.$t("Create worker group"),visible:t.createWorkerGroupDialog,width:"50%"},on:{"update:visible":function(e){t.createWorkerGroupDialog=e}}},[n("m-create-worker",{attrs:{item:t.item,"worker-address-list":t.workerAddressList},on:{onUpdate:t.onUpdate,close:t.close}})],1):t._e()],1):t._e()],2)],1),t._v(" "),n("template",{slot:"content"},[t.workerGroupList.length||t.total>0?[n("m-list",{attrs:{"worker-group-list":t.workerGroupList,"page-no":t.searchParams.pageNo,"page-size":t.searchParams.pageSize},on:{"on-update":t._onUpdate,"on-edit":t._onEdit}}),t._v(" "),n("div",{staticClass:"page-box"},[n("el-pagination",{attrs:{background:"","page-size":t.searchParams.pageSize,"current-page":t.searchParams.pageNo,"page-sizes":[10,30,50],layout:"sizes, prev, pager, next, jumper",total:t.total},on:{"current-change":t._page,"size-change":t._pageSize,"update:currentPage":function(e){return t.$set(t.searchParams,"pageNo",e)},"update:current-page":function(e){return t.$set(t.searchParams,"pageNo",e)}}})],1)]:t._e(),t._v(" "),!t.workerGroupList.length&&t.total<=0?[n("m-no-data")]:t._e(),t._v(" "),n("m-spin",{attrs:{"is-spin":t.isLoading}})],2)],2)},r=[]},2451:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-model"},[n("div",{staticClass:"table-box"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,size:"mini"}},[n("el-table-column",{attrs:{type:"index",label:t.$t("#"),width:"50"}}),t._v(" "),n("el-table-column",{attrs:{prop:"name",label:t.$t("Group")}}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("Addresses"),"min-width":"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticStyle:{display:"inline-block","margin-right":"10px"}},[t._v(t._s(e.row.addrList))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("Create Time"),"min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(t._f("formatDate")(e.row.createTime)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("Update Time"),"min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(t._f("formatDate")(e.row.updateTime)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("Operation"),width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.systemDefault?t._e():n("el-tooltip",{attrs:{content:t.$t("Edit"),placement:"top"}},[n("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit-outline",circle:""},on:{click:function(n){return t._edit(e.row)}}})],1),t._v(" "),e.row.systemDefault?t._e():n("el-tooltip",{attrs:{content:t.$t("Delete"),placement:"top"}},[n("el-popconfirm",{attrs:{confirmButtonText:t.$t("Confirm"),cancelButtonText:t.$t("Cancel"),icon:"el-icon-info",iconColor:"red",title:t.$t("Delete?")},on:{onConfirm:function(n){return t._delete(e.row,e.row.id)}}},[n("el-button",{attrs:{slot:"reference",type:"danger",size:"mini",icon:"el-icon-delete",circle:""},slot:"reference"})],1)],1)]}}])})],1)],1)])},r=[]},2452:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("m-popover",{ref:"popover",staticStyle:{width:"700px"},attrs:{"ok-text":t.item?t.$t("Edit"):t.$t("Submit")},on:{ok:t._ok,close:t.close}},[n("template",{slot:"content"},[n("div",{staticClass:"create-worker-model"},[n("m-list-box-f",[n("template",{slot:"name"},[n("strong",[t._v("*")]),t._v(t._s(t.$t("Group Name")))]),t._v(" "),n("template",{slot:"content"},[n("el-input",{attrs:{type:"input",maxlength:"60",size:"mini",placeholder:t.$t("Please enter group name")},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],2),t._v(" "),n("m-list-box-f",[n("template",{slot:"name"},[n("strong",[t._v("*")]),t._v(t._s(t.$t("Worker Addresses")))]),t._v(" "),n("template",{slot:"content"},[n("treeselect",{attrs:{options:this.workerAddressList,multiple:!0,placeholder:t.$t("Please select the worker addresses")},model:{value:t.addrList,callback:function(e){t.addrList=e},expression:"addrList"}})],1)],2)],1)])],2)},r=[]}}]);