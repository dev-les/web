(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{342:function(e,t,r){var content=r(348);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(69).default)("6c3dd631",content,!0,{sourceMap:!1})},347:function(e,t,r){"use strict";r(342)},348:function(e,t,r){var o=r(68)(!1);o.push([e.i,'body{background:#282a34}.terminal-window{text-align:left;max-width:600px;height:360px;border-radius:10px;margin:auto;position:relative;box-shadow:0 10px 30px -15px rgba(2,12,27,.7000000000000001)}.terminal-window header{background:#6d6b6b;height:30px;border-radius:8px 8px 0 0;padding-left:10px}.terminal-window header .button{width:12px;height:12px;margin:10px 4px 0 0;display:inline-block;border-radius:8px}.terminal-window header .button.green{background:#3bb662}.terminal-window header .button.yellow{background:#e5c30f}.terminal-window header .button.red{background:#e75448}.terminal-window section.terminal{color:#fff;font-family:Menlo,Monaco,"Consolas","Courier New","Courier";font-size:large;background:#302e2d;padding:10px;box-sizing:border-box;position:absolute;width:100%;top:30px;bottom:0;overflow:auto}.typewriter{border-right:.15em solid #4ff98e;white-space:nowrap;-webkit-animation:typing 3.5s steps(40),blink-caret .75s step-end infinite;animation:typing 3.5s steps(40),blink-caret .75s step-end infinite}.history,.typewriter{overflow:hidden;margin:0 auto;letter-spacing:.15em;font-family:Menlo,Monaco,"Consolas","Courier New","Courier"}@keyframes blink{0%{opacity:1}50%{opacity:0}to{opacity:1}}@-webkit-keyframes blink{0%{opacity:1}50%{opacity:0}to{opacity:1}}@-webkit-keyframes typing{0%{width:0}to{width:100%}}@keyframes typing{0%{width:0}to{width:100%}}@-webkit-keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:#4ff98e}}@keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:#4ff98e}}.terminal-data{display:none}.terminal-window .gray{color:grey}.terminal-window .green{color:green}',""]),e.exports=o},407:function(e,t,r){"use strict";r.r(t);r(37);var o=r(8),n={__name:"Terminal",setup:function(e){var t=Object(o.ref)("$ "),r=Object(o.ref)(""),i=0,n=0,l=["Welcome to my website! &#128640;"],d="# &#128075; Hi, my name is Luis Sanchez <br>#<br> # I am a Fullstack Engineer &#128187; specializing in developing exceptional digital experiences<br><br>";function c(){i<l[n].length?(t.value+=l[n].charAt(i),i++,setTimeout(c,70)):(r.value+="".concat(t.value),t.value="$ ",++n<l.length?(i=0,r.value+="<br><br>",setTimeout(c,70)):r.value+="<br>#<br>"+d)}return Object(o.onMounted)((function(){c()})),{__sfc:!0,testVar:t,history:r,i:i,rec:n,txt:l,message:d,speed:70,typeWriter:c,onMounted:o.onMounted,ref:o.ref}}},l=(r(347),r(56)),component=Object(l.a)(n,(function(){var e=this,t=e._self._c,r=e._self._setupProxy;return t("div",{staticStyle:{"padding-top":"7%"}},[t("div",{staticClass:"terminal-window"},[e._m(0),e._v(" "),t("section",{staticClass:"terminal"},[t("div",{staticClass:"history",domProps:{innerHTML:e._s(r.history)}}),e._v(" "),t("span",{staticClass:"typewriter"},[e._v(e._s(r.testVar))])])])])}),[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("header",[t("div",{staticClass:"button green"}),e._v(" "),t("div",{staticClass:"button yellow"}),e._v(" "),t("div",{staticClass:"button red"})])}],!1,null,null,null);t.default=component.exports}}]);