(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{343:function(t,n,e){var content=e(368);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(69).default)("3c07e200",content,!0,{sourceMap:!1})},349:function(t,n,e){t.exports=e.p+"img/react-native-144.75e82be.png"},350:function(t,n,e){t.exports=e.p+"img/vue-js-144.204076b.png"},351:function(t,n,e){t.exports=e.p+"img/angularjs-144.22fce7d.png"},352:function(t,n,e){t.exports=e.p+"img/redux-144.101a464.png"},353:function(t,n,e){t.exports=e.p+"img/typescript-144.5373cc5.png"},354:function(t,n,e){t.exports=e.p+"img/javascript-144.f878fd4.png"},355:function(t,n,e){t.exports=e.p+"img/node-js-144.16cf2d0.png"},356:function(t,n,e){t.exports=e.p+"img/java-144.cc2eb4b.png"},357:function(t,n,e){t.exports=e.p+"img/python-144.23e0c8d.png"},358:function(t,n,e){t.exports=e.p+"img/my-sql-144.d43935c.png"},359:function(t,n,e){t.exports=e.p+"img/postgresql-144.c67ef31.png"},360:function(t,n,e){t.exports=e.p+"img/c-sharp-144.dd7f893.png"},361:function(t,n,e){t.exports=e.p+"img/openshift-144.579dde9.png"},362:function(t,n,e){t.exports=e.p+"img/aws-144.bfd6367.png"},363:function(t,n,e){t.exports=e.p+"img/docker-144.e272781.png"},364:function(t,n,e){t.exports=e.p+"img/heroku-144.32a97ed.png"},365:function(t,n,e){t.exports=e.p+"img/github-144.d754060.png"},366:function(t,n,e){t.exports=e.p+"img/gitlab-144.af0e857.png"},367:function(t,n,e){"use strict";e(343)},368:function(t,n,e){var o=e(68)(!1);o.push([t.i,".skill{width:100px;height:100px}.skills-main-container{padding-top:20px}.skills-container{display:flex;flex-flow:row wrap;justify-content:center}.skill-container{padding:20px;text-align:center}.aws{background:#fff;border-radius:50%}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#6d6b6b}.nav-item .nav-link{color:#fff}",""]),t.exports=o},388:function(t,n,e){"use strict";e.r(n);e(22),e(2),e(1);var o=e(8),r={__name:"Skill",setup:function(t){var n=Object(o.ref)([]),option=Object(o.ref)("fe"),r=[{name:"React/React-Native",url:e(349),type:"fe"},{name:"Vue.js",url:e(350),type:"fe"},{name:"Angular",url:e(351),type:"fe"},{name:"Redux",url:e(352),type:"fe"},{name:"Typescript",url:e(353),type:"fe"},{name:"Javascript",url:e(354),type:"fe"},{name:"NodeJS",url:e(355),type:"be"},{name:"Java",url:e(356),type:"be"},{name:"Python",url:e(357),type:"be"},{name:"MySql",url:e(358),type:"be"},{name:"Postgress",url:e(359),type:"be"},{name:"C#",url:e(360),type:"be"},{name:"OpenShift",url:e(361),type:"do"},{name:"AWS",url:e(362),type:"do"},{name:"Docker",url:e(363),type:"do"},{name:"Heroku",url:e(364),type:"do"},{name:"GitHub",url:e(365),type:"do"},{name:"GitLab",url:e(366),type:"do"}];function l(t){var n=r.filter((function(n){if(n.type===t)return n}));return console.log(n),n}return Object(o.onMounted)((function(){n.value=l(option.value)})),{__sfc:!0,test:"test",skillsDisplayed:n,option:option,skills:r,setOptions:function(t){n.value="all"===t?r:l(t),option.value=t},filterByVal:l,ref:o.ref,onMounted:o.onMounted}}},l=(e(367),e(56)),component=Object(l.a)(r,(function(){var t=this,n=t._self._c,e=t._self._setupProxy;return n("div",{staticClass:"skills-main-container"},[n("b-nav",{staticStyle:{"justify-content":"center"},attrs:{pills:""}},[n("b-nav-item",{attrs:{active:"fe"===e.option},on:{click:function(t){return e.setOptions("fe")}}},[t._v("Front-End")]),t._v(" "),n("b-nav-item",{attrs:{active:"be"===e.option},on:{click:function(t){return e.setOptions("be")}}},[t._v("Back-End")]),t._v(" "),n("b-nav-item",{attrs:{active:"do"===e.option},on:{click:function(t){return e.setOptions("do")}}},[t._v("DevOps")]),t._v(" "),n("b-nav-item",{attrs:{active:"all"===e.option},on:{click:function(t){return e.setOptions("all")}}},[t._v("Full Stack")])],1),t._v(" "),n("div",{staticClass:"skills-container"},t._l(e.skillsDisplayed,(function(e,o){return n("div",{key:o,staticClass:"skill-container"},[n("img",{staticClass:"skill",class:{aws:"AWS"===e.name},attrs:{src:"".concat(e.url)}}),t._v(" "),n("div",[t._v(t._s(e.name))])])})),0)],1)}),[],!1,null,null,null);n.default=component.exports}}]);