(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1130:function(e,n,t){"use strict";t.r(n);var a=t(2228),i=t(1692);for(var s in i)["default"].indexOf(s)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(s);t(2024);var r=t(30),o=Object(r.a)(i.default,a.a,a.b,!1,null,null,null);n.default=o.exports},1220:function(e,n,t){"use strict";t.r(n);var a=t(1221),i=t.n(a);for(var s in a)["default"].indexOf(s)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(s);n.default=i.a},1221:function(e,n,t){"use strict";(function(e){n.__esModule=!0;var a,i=t(1352),s=(a=i)&&a.__esModule?a:{default:a};n.default={name:"secondary-menu",data:function(){return{menuList:(0,s.default)(this.type),index:0,id:this.$route.params.id,isTogHide:!1,isLeft:!0}},props:{type:String,className:String},watch:{isTogHide:function(n){var t=e(".main-layout-box");n?t.addClass("toggle"):t.removeClass("toggle")}},methods:{_toggleSubMenu:function(e){e.isOpen=!e.isOpen},_toggleMenu:function(){this.isTogHide=!this.isTogHide,this.isTogHide?sessionStorage.setItem("isLeft",0):sessionStorage.setItem("isLeft",1)}},mounted:function(){}}}).call(this,t(55))},1248:function(e,n,t){},1351:function(e,n,t){"use strict";t.r(n);var a=t(1358),i=t(1220);for(var s in i)["default"].indexOf(s)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(s);t(1353);var r=t(30),o=Object(r.a)(i.default,a.a,a.b,!1,null,null,null);n.default=o.exports},1352:function(e,n,t){"use strict";n.__esModule=!0;var a=r(t(83)),i=r(t(746)),s=r(t(745));function r(e){return e&&e.__esModule?e:{default:e}}var o={projects:[{name:""+a.default.$t("Project Home"),id:0,path:"projects-index",isOpen:!0,enabled:!0,icon:"ri-home-4-line",children:[]},{name:""+a.default.$t("Kinship"),id:1,path:"projects-kinship",isOpen:!0,enabled:!0,icon:"ri-node-tree",children:[]},{name:""+a.default.$t("Process"),id:2,path:"",isOpen:!0,enabled:!0,icon:"el-icon-s-tools",children:[{name:""+a.default.$t("Process definition"),path:"definition",id:0,enabled:!0},{name:""+a.default.$t("Process Instance"),path:"instance",id:1,enabled:!0},{name:""+a.default.$t("Task Instance"),path:"task-instance",id:2,enabled:!0},{name:""+a.default.$t("Task record"),path:"task-record",id:3,enabled:i.default.recordSwitch},{name:""+a.default.$t("History task record"),path:"history-task-record",id:4,enabled:i.default.recordSwitch}]}],security:[{name:""+a.default.$t("Tenant Manage"),id:0,path:"tenement-manage",isOpen:!0,enabled:!0,icon:"el-icon-user-solid",children:[]},{name:""+a.default.$t("User Manage"),id:1,path:"users-manage",isOpen:!0,enabled:!0,icon:"el-icon-user-solid",children:[]},{name:""+a.default.$t("Warning group manage"),id:2,path:"warning-groups-manage",isOpen:!0,enabled:!0,icon:"el-icon-warning",children:[]},{name:""+a.default.$t("Warning instance manage"),id:2,path:"warning-instance-manage",isOpen:!0,enabled:!0,icon:"el-icon-warning-outline",children:[]},{name:""+a.default.$t("Worker group manage"),id:4,path:"worker-groups-manage",isOpen:!0,enabled:!0,icon:"el-icon-s-custom",children:[]},{name:""+a.default.$t("Queue manage"),id:3,path:"queue-manage",isOpen:!0,enabled:!0,icon:"el-icon-s-grid",children:[]},{name:""+a.default.$t("Token manage"),id:2,path:"token-manage",isOpen:!0,icon:"el-icon-document",children:[],enabled:!0}],resource:[{name:""+a.default.$t("File Manage"),id:0,path:"file",isOpen:!0,icon:"el-icon-document-copy",children:[],enabled:!0},{name:""+a.default.$t("UDF manage"),id:1,path:"",isOpen:!0,icon:"el-icon-document",enabled:!0,children:[{name:""+a.default.$t("Resource manage"),path:"resource-udf",id:0,enabled:!0},{name:""+a.default.$t("Function manage"),path:"resource-func",id:1,enabled:!0}]}],user:[{name:""+a.default.$t("User Information"),id:0,path:"account",isOpen:!0,icon:"el-icon-user-solid",children:[],enabled:!0},{name:""+a.default.$t("Edit password"),id:1,path:"password",isOpen:!0,icon:"el-icon-key",children:[],enabled:!0},{name:""+a.default.$t("Token manage"),id:2,path:"token",isOpen:!0,icon:"el-icon-s-custom",children:[],enabled:s.default.getAuth()}],monitor:[{name:""+a.default.$t("Servers manage"),id:1,path:"",isOpen:!0,enabled:!0,icon:"el-icon-menu",children:[{name:"Master",path:"servers-master",id:0,enabled:!0},{name:"Worker",path:"servers-worker",id:1,enabled:!0},{name:"Zookeeper",path:"servers-zookeeper",id:4,enabled:!0},{name:"DB",path:"servers-db",id:6,enabled:!0}]},{name:""+a.default.$t("Statistics manage"),id:0,path:"",isOpen:!0,enabled:!0,icon:"el-icon-menu",children:[{name:"Statistics",path:"statistics",id:0,enabled:!0}]}]};n.default=function(e){return o[e]}},1353:function(e,n,t){"use strict";t(1248)},1358:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return i}));var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"secondary-menu-model",class:e.className},[t("div",{staticClass:"toogle-box"},[e.isTogHide?e._e():t("a",{staticClass:"tog-close",attrs:{href:"javascript:"},on:{click:e._toggleMenu}}),e._v(" "),e.isTogHide?t("a",{staticClass:"tog-open",attrs:{href:"javascript:"},on:{click:e._toggleMenu}}):e._e()]),e._v(" "),e._l(e.menuList,(function(n,a){return t("div",{key:a,staticClass:"leven-1"},[n.enabled?t("div",[n.path?[t("router-link",{attrs:{to:{name:n.path}}},[t("div",{staticClass:"name",on:{click:function(t){return e._toggleSubMenu(n)}}},[t("a",{attrs:{href:"javascript:"}},[t("em",{staticClass:"fa icon",class:n.icon}),e._v(" "),t("span",[e._v(e._s(n.name))]),e._v(" "),n.children.length?t("em",{staticClass:"fa angle",class:n.isOpen?"el-icon-arrow-down":"el-icon-arrow-right"}):e._e()])])])]:e._e(),e._v(" "),n.path?e._e():[t("div",{staticClass:"name",on:{click:function(t){return e._toggleSubMenu(n)}}},[t("a",{attrs:{href:"javascript:"}},[t("em",{staticClass:"fa icon",class:n.icon}),e._v(" "),t("span",[e._v(e._s(n.name))]),e._v(" "),n.children.length?t("em",{staticClass:"fa angle",class:n.isOpen?"el-icon-arrow-down":"el-icon-arrow-right"}):e._e()])])],e._v(" "),n.isOpen&&n.children.length?t("ul",[e._l(n.children,(function(n,a){return[n.enabled?t("router-link",{key:a,attrs:{to:{name:n.path},tag:"li","active-class":"active"}},[t("span",[e._v(e._s(n.name))])]):e._e()]}))],2):e._e()],2):e._e()])}))],2)},i=[]},1692:function(e,n,t){"use strict";t.r(n);var a=t(1693),i=t.n(a);for(var s in a)["default"].indexOf(s)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(s);n.default=i.a},1693:function(e,n,t){"use strict";n.__esModule=!0;var a,i=t(1351),s=(a=i)&&a.__esModule?a:{default:a};n.default={name:"projects-index",data:function(){return{isProjectsList:"projects-list"===this.$router.history.current.name}},watch:{$route:function(e){var n=e.name;this.isProjectsList="projects-list"===n}},components:{mSecondaryMenu:s.default}}},1950:function(e,n,t){},2024:function(e,n,t){"use strict";t(1950)},2228:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return i}));var a=function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"main-layout-box",class:this.isProjectsList?"no":""},[this.isProjectsList?this._e():n("m-secondary-menu",{attrs:{type:"projects"}}),this._v(" "),n("transition",{attrs:{name:"fade"}},[n("router-view")],1)],1)},i=[]}}]);