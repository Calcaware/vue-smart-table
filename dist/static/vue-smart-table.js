!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.SmartTable=e():t.SmartTable=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="/",e(0)}([function(t,e,n){"use strict";var o=n(115);window.SmartTable=o,"undefined"!=typeof window&&window.Vue&&window.Vue.component("smart-table",o),t.exports=o},function(t,e,n){var o=n(31)("wks"),r=n(21),i=n(3).Symbol,s="function"==typeof i,a=t.exports=function(t){return o[t]||(o[t]=s&&i[t]||(s?i:r)("Symbol."+t))};a.store=o},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var o=n(9),r=n(40),i=n(33),s=Object.defineProperty;e.f=n(5)?Object.defineProperty:function(t,e,n){if(o(t),e=i(e,!0),o(n),r)try{return s(t,e,n)}catch(a){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){t.exports=!n(11)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var o=n(4),r=n(16);t.exports=n(5)?function(t,e,n){return o.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var o=n(41),r=n(17);t.exports=function(t){return o(r(t))}},function(t,e,n){var o=n(12);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var o=n(3),r=n(2),i=n(13),s=n(6),a="prototype",u=function(t,e,n){var c,l,f,d=t&u.F,p=t&u.G,h=t&u.S,v=t&u.P,y=t&u.B,b=t&u.W,m=p?r:r[e]||(r[e]={}),x=m[a],g=p?o:h?o[e]:(o[e]||{})[a];p&&(n=e);for(c in n)l=!d&&g&&void 0!==g[c],l&&c in m||(f=l?g[c]:n[c],m[c]=p&&"function"!=typeof g[c]?n[c]:y&&l?i(f,o):b&&g[c]==f?function(t){var e=function(e,n,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,o)}return t.apply(this,arguments)};return e[a]=t[a],e}(f):v&&"function"==typeof f?i(Function.call,f):f,v&&((m.virtual||(m.virtual={}))[c]=f,t&u.R&&x&&!x[c]&&s(x,c,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var o=n(73);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,r){return t.call(e,n,o,r)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports={}},function(t,e,n){var o=n(48),r=n(23);t.exports=Object.keys||function(t){return o(t,r)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var o=n(4).f,r=n(7),i=n(1)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,i)&&o(t,i,{configurable:!0,value:e})}},function(t,e,n){var o=n(32),r=Math.min;t.exports=function(t){return t>0?r(o(t),9007199254740991):0}},function(t,e,n){var o=n(17);t.exports=function(t){return Object(o(t))}},function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var o=n(13),r=n(44),i=n(42),s=n(9),a=n(19),u=n(51),c={},l={},e=t.exports=function(t,e,n,f,d){var p,h,v,y,b=d?function(){return t}:u(t),m=o(n,f,e?2:1),x=0;if("function"!=typeof b)throw TypeError(t+" is not iterable!");if(i(b)){for(p=a(t.length);p>x;x++)if(y=e?m(s(h=t[x])[0],h[1]):m(t[x]),y===c||y===l)return y}else for(v=b.call(t);!(h=v.next()).done;)if(y=r(v,m,h.value,e),y===c||y===l)return y};e.BREAK=c,e.RETURN=l},function(t,e,n){"use strict";var o=n(26),r=n(10),i=n(50),s=n(6),a=n(7),u=n(14),c=n(86),l=n(18),f=n(92),d=n(1)("iterator"),p=!([].keys&&"next"in[].keys()),h="@@iterator",v="keys",y="values",b=function(){return this};t.exports=function(t,e,n,m,x,g,w){c(n,e,m);var _,O,S,E=function(t){if(!p&&t in j)return j[t];switch(t){case v:return function(){return new n(this,t)};case y:return function(){return new n(this,t)}}return function(){return new n(this,t)}},A=e+" Iterator",k=x==y,$=!1,j=t.prototype,P=j[d]||j[h]||x&&j[x],M=P||E(x),N=x?k?E("entries"):M:void 0,C="Array"==e?j.entries||P:P;if(C&&(S=f(C.call(new t)),S!==Object.prototype&&(l(S,A,!0),o||a(S,d)||s(S,d,b))),k&&P&&P.name!==y&&($=!0,M=function(){return P.call(this)}),o&&!w||!p&&!$&&j[d]||s(j,d,M),u[e]=M,u[A]=b,x)if(_={values:k?M:E(y),keys:g?M:E(v),entries:N},w)for(O in _)O in j||i(j,O,_[O]);else r(r.P+r.F*(p||$),e,_);return _}},function(t,e){t.exports=!0},function(t,e,n){var o=n(21)("meta"),r=n(12),i=n(7),s=n(4).f,a=0,u=Object.isExtensible||function(){return!0},c=!n(11)(function(){return u(Object.preventExtensions({}))}),l=function(t){s(t,o,{value:{i:"O"+ ++a,w:{}}})},f=function(t,e){if(!r(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,o)){if(!u(t))return"F";if(!e)return"E";l(t)}return t[o].i},d=function(t,e){if(!i(t,o)){if(!u(t))return!0;if(!e)return!1;l(t)}return t[o].w},p=function(t){return c&&h.NEED&&u(t)&&!i(t,o)&&l(t),t},h=t.exports={KEY:o,NEED:!1,fastKey:f,getWeak:d,onFreeze:p}},function(t,e,n){var o=n(9),r=n(89),i=n(23),s=n(30)("IE_PROTO"),a=function(){},u="prototype",c=function(){var t,e=n(39)("iframe"),o=i.length,r=">";for(e.style.display="none",n(85).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object</script"+r),t.close(),c=t.F;o--;)delete c[u][i[o]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(a[u]=o(t),n=new a,a[u]=null,n[s]=t):n=c(),void 0===e?n:r(n,e)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var o=n(31)("keys"),r=n(21);t.exports=function(t){return o[t]||(o[t]=r(t))}},function(t,e,n){var o=n(3),r="__core-js_shared__",i=o[r]||(o[r]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},function(t,e,n){var o=n(12);t.exports=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var o=n(3),r=n(2),i=n(26),s=n(35),a=n(4).f;t.exports=function(t){var e=r.Symbol||(r.Symbol=i?{}:o.Symbol||{});"_"==t.charAt(0)||t in e||a(e,t,{value:s.f(t)})}},function(t,e,n){e.f=n(1)},function(t,e,n){"use strict";var o=n(95)(!0);n(25)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=o(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e){t.exports=function(t,e,n,o){if(!(t instanceof e)||void 0!==o&&o in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var o=n(22),r=n(1)("toStringTag"),i="Arguments"==o(function(){return arguments}()),s=function(t,e){try{return t[e]}catch(n){}};t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=s(e=Object(t),r))?n:i?o(e):"Object"==(a=o(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,n){var o=n(12),r=n(3).document,i=o(r)&&o(r.createElement);t.exports=function(t){return i?r.createElement(t):{}}},function(t,e,n){t.exports=!n(5)&&!n(11)(function(){return 7!=Object.defineProperty(n(39)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var o=n(22);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},function(t,e,n){var o=n(14),r=n(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||i[r]===t)}},function(t,e,n){var o=n(22);t.exports=Array.isArray||function(t){return"Array"==o(t)}},function(t,e,n){var o=n(9);t.exports=function(t,e,n,r){try{return r?e(o(n)[0],n[1]):e(n)}catch(i){var s=t["return"];throw void 0!==s&&o(s.call(t)),i}}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var o=n(48),r=n(23).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return o(t,r)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var o=n(7),r=n(8),i=n(76)(!1),s=n(30)("IE_PROTO");t.exports=function(t,e){var n,a=r(t),u=0,c=[];for(n in a)n!=s&&o(a,n)&&c.push(n);for(;e.length>u;)o(a,n=e[u++])&&(~i(c,n)||c.push(n));return c}},function(t,e,n){var o=n(6);t.exports=function(t,e,n){for(var r in e)n&&t[r]?t[r]=e[r]:o(t,r,e[r]);return t}},function(t,e,n){t.exports=n(6)},function(t,e,n){var o=n(38),r=n(1)("iterator"),i=n(14);t.exports=n(2).getIteratorMethod=function(t){return void 0!=t?t[r]||t["@@iterator"]||i[o(t)]:void 0}},function(t,e){},function(t,e,n){n(98);for(var o=n(3),r=n(6),i=n(14),s=n(1)("toStringTag"),a=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],u=0;5>u;u++){var c=a[u],l=o[c],f=l&&l.prototype;f&&!f[s]&&r(f,s,c),i[c]=i.Array}},function(t,e,n){var o,r;n(106),o=n(56),r=n(110),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(54),i=o(r);e["default"]={components:{ModalCore:i["default"]},data:function(){return{problem:{},actionLabel:"undefined",command:{action:void 0,selection:[]}}},props:["show"],events:{command:function(t){this.show=!0,this.command.action=t.action.key,this.actionLabel=t.action.label,this.command.selection=t.selection,this.problem=!1,void 0===this.command.action?this.problem={"short":"No action to perform!","long":"Please select an action from the dropdown menu."}:0===this.command.selection.length&&(this.problem={"short":"Selection empty!","long":"There is no selection to "+this.actionLabel+"."})}},methods:{close:function(){this.show=!1},confirm:function(){this.$dispatch("confirm",this.command),this.close()}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:["show","onClose"],methods:{close:function(){this.onClose()}},ready:function(){var t=this;document.addEventListener("keydown",function(e){t.show&&27===e.keyCode&&t.onClose()})}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(54),i=o(r);e["default"]={components:{ModalCore:i["default"]},data:function(){return{value:void 0,type:void 0,id:void 0,col:void 0,prev:void 0}},props:["show"],events:{modalEdit:function(t){this.show=!0,this.value=t.currentValue,this.type=t.type,this.id=t.id,this.col=t.col,this.prev=t.previousValue}},methods:{close:function(){this.show=!1,this.$dispatch("close")},confirm:function(){this.$dispatch("confirm",{id:this.id,col:this.col,currentValue:this.value,previousValue:this.prev}),this.close()}}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(60),i=o(r),s=n(62),a=o(s),u=n(65),c=o(u),l=n(61),f=o(l),d=n(66),p=o(d),h=n(113),v=o(h),y=n(114),b=o(y);e["default"]={components:{Modal:v["default"],ModalEdit:b["default"]},data:function(){return{toggleAll:!1,action:void 0,selection:[],error:!1,modalEdit:void 0,backMatrix:{},newRow:{},canSaveNewRow:!1,scrolledPast:!1,filters:{}}},props:{autoLoad:Boolean,canFilterBy:Array,orderKey:String,useTextAreaFor:Array,header:[Object,Array],idCol:{type:String,required:!1,"default":"_id"},"delete":{type:Boolean,"default":!1},footer:{required:!1},inputList:{type:Object,required:!1,"default":void 0},bodyField:{type:String,"default":"body"},body:{type:Array,required:!1,"default":void 0},actions:[Object,Array],endpoint:{type:String,"default":"http://localhost:8080"},labelCol:{type:String,"default":"name"},editable:{"default":!0},addRow:{type:Boolean,"default":!1}},computed:{processedFooter:function(){return void 0===this.footer?[]:this.footer.constructor===Array?this.footer.length>0&&this.footer[0].constructor===Array?this.footer:[this.footer]:"object"===(0,p["default"])(this.footer)?this.footer:void 0},canSaveNewRow:function(){var t=this;if(0===(0,f["default"])(this.newRow).length)return!1;var e=!0;return this.editableFields.forEach(function(n){t.newRow.hasOwnProperty(n)?(void 0===t.newRow[n]||t.doesNotPassValidation(n,t.newRow[n]))&&(e=!1):e=!1}),e},editableFields:function(){var t=(0,f["default"])(this.tableHeader);return this.editable===!0?t:this.editable===!1?[]:Array.isArray(this.editable)&&this.editable.length>0?this.editable.filter(function(e){return-1!==t.indexOf(e)}):this.isPlainObject(this.editable)&&(0,f["default"])(this.editable)>0?(0,f["default"])(this.editable).filter(function(e){return-1!==t.indexOf(e)}):[]},actionsArePresent:function(){return Array.isArray(this.actions)&&this.actions.length>0?!0:this.actions instanceof Object&&(0,f["default"])(this.actions).length>0},tableHeader:function(){var t=this;if(void 0===this.body&&(this.body=[]),void 0!==this.header&&!Array.isArray(this.header))return this.header;var e=(0,f["default"])(this.body);if(e.length<1)return{};var n={},o=[].concat((0,c["default"])(new a["default"]([].concat.apply([],this.body.map(function(t){return(0,f["default"])(t)})))));return o=o.filter(function(t){return!/^_/.test(t)}),o.forEach(function(e,o){void 0===t.header?n[e]=e:n[e]=t.header[o]}),n},mainCol:function(){return-1===(0,f["default"])(this.tableHeader).indexOf(this.labelCol)?(0,f["default"])(this.tableHeader)[0]:this.labelCol},processedSmartBody:function(){var t=this;void 0===this.body&&(this.body=[]);var e=0;this.body.forEach(function(n){var o=t.idCol.split(".").reduce(function(t,e){return t[e]},n);void 0!==o&&null!==o||void 0!==n[t.idCol]&&null!==n[t.idCol]||(n[t.idCol]="smart_"+e++)});var n={};return this.body.forEach(function(e){(0,f["default"])(e).every(function(n){return(0,f["default"])(t.filters).every(function(o){return o!==n||-1!==(0,i["default"])(e[n]).toLowerCase().indexOf(t.filters[o].model.toLowerCase())})})&&!function(){var o={};(0,f["default"])(t.tableHeader).forEach(function(t){var n={};/\+/.test(t)?t.split("+").forEach(function(t){n[t]=t.split(".").reduce(function(t,e){return t[e]},e)}):n=t.split(".").reduce(function(t,e){return t[e]},e),o[t]=n});var r=t.idCol.split(".").reduce(function(t,e){return t[e]},e),i=e[t.idCol],s=r||i;n[s]=o}()}),n},span:function(){return(0,f["default"])(this.tableHeader).length+1+(this["delete"]?1:0)}},beforeCompile:function(){var t=this;if((void 0===this.body||this.body.lenght<1)&&this.autoLoad===!1&&console.warn("Body passed is empty, if you want to load data set auto-load to true"),Array.isArray(this.actions)){var e={};this.actions.forEach(function(t){return e[t]=t}),this.actions=e}Array.isArray(this.canFilterBy)&&!function(){var e={};t.canFilterBy.forEach(function(t){return e[t]={open:!1,model:""}}),t.filters=e}()},compiled:function(){var t=this;this.autoLoad===!0?this.$http.get(this.endpoint).then(function(e){var n="";n=0===t.bodyField.length?e.data:e.data[t.bodyField],t.$set("body",n),t.$set("footer",e.data.footer),t.$dispatch("successful-request"),t.$dispatch("after-request"),t.$set("error",!1),t.updateInjectedValues()},function(e){t.$set("error",{status:e.status,data:e.data.error}),t.$dispatch("failed-request"),t.$dispatch("after-request")}):this.updateInjectedValues()},ready:function(){window.addEventListener("scroll",this.refreshTableHeader)},watch:{processedSmartBody:function(){this.updateInjectedValues()}},methods:{openFilter:function(t){this.filters[t].open=!0,this.$nextTick(function(){})},saveNewRow:function(){var t=this;this.canSaveNewRow&&(this.$dispatch("before-request"),this.$http.post(this.endpoint,{action:"addRow",resource:this.newRow}).then(function(e){t.$set("error",!1),t.$set("body",e.data.body),t.$dispatch("successful-request"),t.$dispatch("after-request")},function(e){t.$set("error",{status:e.status,data:e.data}),t.$dispatch("failed-request"),t.$dispatch("after-request")}))},doesNotPassValidation:function(t,e){return!this.passesValidation(t,e)},passesValidation:function(t,e){return!!e},refreshTableHeader:function(){var t=[].slice.call(this.$el.getElementsByClassName("persist-area")),e=t.map(function(t){var e=0;do isNaN(t.offsetTop)||(e+=t.offsetTop);while(t=t.offsetParent);return e})[0],n=t.map(function(t){var e=0;do isNaN(t.offsetLeft)||(e+=t.offsetLeft);while(t=t.offsetParent);return e})[0],o=window.scrollY,r=window.scrollX,i=o>e,s=o<e+t[0].offsetHeight;this.scrolledPast=i&&s;var a=this.$el.getElementsByClassName("floating-header")[0],u=this.$el.getElementsByClassName("regular-header")[0];a.style.left=n-r,a.style.zIndex=3;var c=[].slice.call(u.getElementsByTagName("th")),l=[].slice.call(a.getElementsByTagName("th"));l.forEach(function(t,e){t.style.width=c[e].offsetWidth+"px"})},updateInjectedValues:function(){var t=this,e=this.$children,n=(0,f["default"])(this.tableHeader);e.forEach(function(e){var o="function"==typeof e.$el.getAttribute?e.$el.getAttribute("slot"):null;if(null!==o&&-1!==n.indexOf(o)){var r=e.$el.parentElement.id.match(/^value-([a-zA-Z0-9 ._-]+)-/)[1];if(e.value=t.processedSmartBody[r][o],t.addRow&&void 0!==e.inputTemplate){e.inputTemplate}}})},toggleAllRows:function(){this.toggleAll===!1?(this.toggleAll=!0,this.selection=(0,f["default"])(this.processedSmartBody)):(this.toggleAll=!1,this.selection=[])},next:function(){var t=this,e=this.action,n=this.actions[this.action],o=this.selection.map(function(e){return void 0!==t.processedSmartBody[e]?{key:e,label:t.processedSmartBody[e][t.mainCol]}:null}).filter(function(t){return null!==t}),r={action:{key:e,label:n},selection:o};this.$broadcast("command",r)},doCommand:function(t){function e(t){var e="";e=0===this.bodyField.length?t.data:t.data[this.bodyField],void 0===e&&e!=={}||(this.$set("body",e),this.$set("footer",t.data.footer)),this.$dispatch("successful-request"),this.$dispatch("after-request"),this.$set("error",!1)}function n(t){this.$set("error",{status:t.status,data:t.data.error}),this.$dispatch("failed-request"),this.$dispatch("after-request")}this.$dispatch("before-request"),/^(_remove|_delete)$/i.test(t.action)?this.$http["delete"](this.endpoint,t).then(e,n):this.$http.get(this.endpoint,t).then(e,n)},remove:function(t){function e(t){var e="";e=0===this.bodyField.length?t.data:t.data[this.bodyField],void 0===e&&e!=={}||(this.$set("body",e),this.$set("footer",t.data.footer)),this.$dispatch("successful-request"),this.$dispatch("after-request"),this.$set("error",!1)}function n(t){this.$set("error",{status:t.status,data:t.data.error}),this.$dispatch("failed-request"),this.$dispatch("after-request")}this.$dispatch("before-request"),this.$http["delete"](this.endpoint+"/"+t).then(e,n)},isEditable:function(t){return this.editable===!1?!1:!Array.isArray(this.editable)||-1!==this.editable.indexOf(t)},isNotEditable:function(t){return!this.isEditable(t)},valueClick:function(t,e){this.isNotEditable(e)||void 0===this.modalEdit&&(this.modalEdit={id:t,col:e,currentValue:this.processedSmartBody[t][e],previousValue:this.processedSmartBody[t][e],type:this.editType(e)},this.$broadcast("modalEdit",this.modalEdit))},editType:function(t){return void 0!==this.inputList&&void 0!==this.inputList[t]?"select":void 0!==this.useTextAreaFor&&void 0!==this.useTextAreaFor.indexOf(t)?"textarea":"text"},doEdit:function(t){var e=this;this.$dispatch("before-request"),this.$http.put(this.endpoint+"/"+t.id+"/"+t.col,{action:"edit",value:t.currentValue}).then(function(t){e.$dispatch("successful-request"),e.$dispatch("after-request"),e.$set("error",!1)},function(t){e.$set("error",{status:t.status,data:t.data.error}),e.$dispatch("failed-request"),e.$dispatch("after-request")})},isPlainObject:function(t){return null!==t&&"object"===("undefined"==typeof t?"undefined":(0,p["default"])(t))},closedModalEdit:function(){this.modalEdit=void 0}}}},function(t,e,n){t.exports={"default":n(67),__esModule:!0}},function(t,e,n){t.exports={"default":n(68),__esModule:!0}},function(t,e,n){t.exports={"default":n(69),__esModule:!0}},function(t,e,n){t.exports={"default":n(70),__esModule:!0}},function(t,e,n){t.exports={"default":n(71),__esModule:!0}},function(t,e,n){t.exports={"default":n(72),__esModule:!0}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var r=n(59),i=o(r);e["default"]=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,i["default"])(t)}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var r=n(64),i=o(r),s=n(63),a=o(s),u="function"==typeof a["default"]&&"symbol"==typeof i["default"]?function(t){return typeof t}:function(t){return t&&"function"==typeof a["default"]&&t.constructor===a["default"]?"symbol":typeof t};e["default"]="function"==typeof a["default"]&&"symbol"===u(i["default"])?function(t){return"undefined"==typeof t?"undefined":u(t)}:function(t){return t&&"function"==typeof a["default"]&&t.constructor===a["default"]?"symbol":"undefined"==typeof t?"undefined":u(t)}},function(t,e,n){n(36),n(97),t.exports=n(2).Array.from},function(t,e,n){var o=n(2),r=o.JSON||(o.JSON={stringify:JSON.stringify});t.exports=function(t){return r.stringify.apply(r,arguments)}},function(t,e,n){n(99),t.exports=n(2).Object.keys},function(t,e,n){n(52),n(36),n(53),n(100),n(102),t.exports=n(2).Set},function(t,e,n){n(101),n(52),n(103),n(104),t.exports=n(2).Symbol},function(t,e,n){n(36),n(53),t.exports=n(35).f("iterator")},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(){}},function(t,e,n){var o=n(24);t.exports=function(t,e){var n=[];return o(t,!1,n.push,n,e),n}},function(t,e,n){var o=n(8),r=n(19),i=n(96);t.exports=function(t){return function(e,n,s){var a,u=o(e),c=r(u.length),l=i(s,c);if(t&&n!=n){for(;c>l;)if(a=u[l++],a!=a)return!0}else for(;c>l;l++)if((t||l in u)&&u[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){var o=n(13),r=n(41),i=n(20),s=n(19),a=n(79);t.exports=function(t,e){var n=1==t,u=2==t,c=3==t,l=4==t,f=6==t,d=5==t||f,p=e||a;return function(e,a,h){for(var v,y,b=i(e),m=r(b),x=o(a,h,3),g=s(m.length),w=0,_=n?p(e,g):u?p(e,0):void 0;g>w;w++)if((d||w in m)&&(v=m[w],y=x(v,w,b),t))if(n)_[w]=y;else if(y)switch(t){case 3:return!0;case 5:return v;case 6:return w;case 2:_.push(v)}else if(l)return!1;return f?-1:c||l?l:_}}},function(t,e,n){var o=n(12),r=n(43),i=n(1)("species");t.exports=function(t){var e;return r(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!r(e.prototype)||(e=void 0),o(e)&&(e=e[i],null===e&&(e=void 0))),void 0===e?Array:e}},function(t,e,n){var o=n(78);t.exports=function(t,e){return new(o(t))(e)}},function(t,e,n){"use strict";var o=n(4).f,r=n(28),i=(n(6),n(49)),s=n(13),a=n(37),u=n(17),c=n(24),l=n(25),f=n(45),d=n(94),p=n(5),h=n(27).fastKey,v=p?"_s":"size",y=function(t,e){var n,o=h(e);if("F"!==o)return t._i[o];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,l){var f=t(function(t,o){a(t,f,e,"_i"),t._i=r(null),t._f=void 0,t._l=void 0,t[v]=0,void 0!=o&&c(o,n,t[l],t)});return i(f.prototype,{clear:function(){for(var t=this,e=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete e[n.i];t._f=t._l=void 0,t[v]=0},"delete":function(t){var e=this,n=y(e,t);if(n){var o=n.n,r=n.p;delete e._i[n.i],n.r=!0,r&&(r.n=o),o&&(o.p=r),e._f==n&&(e._f=o),e._l==n&&(e._l=r),e[v]--}return!!n},forEach:function(t){a(this,f,"forEach");for(var e,n=s(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(n(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!y(this,t)}}),p&&o(f.prototype,"size",{get:function(){return u(this[v])}}),f},def:function(t,e,n){var o,r,i=y(t,e);return i?i.v=n:(t._l=i={i:r=h(e,!0),k:e,v:n,p:o=t._l,n:void 0,r:!1},t._f||(t._f=i),o&&(o.n=i),t[v]++,"F"!==r&&(t._i[r]=i)),t},getEntry:y,setStrong:function(t,e,n){l(t,e,function(t,e){this._t=t,this._k=e,this._l=void 0},function(){for(var t=this,e=t._k,n=t._l;n&&n.r;)n=n.p;return t._t&&(t._l=n=n?n.n:t._t._f)?"keys"==e?f(0,n.k):"values"==e?f(0,n.v):f(0,[n.k,n.v]):(t._t=void 0,f(1))},n?"entries":"values",!n,!0),d(e)}}},function(t,e,n){var o=n(38),r=n(75);t.exports=function(t){return function(){if(o(this)!=t)throw TypeError(t+"#toJSON isn't generic");return r(this)}}},function(t,e,n){"use strict";var o=n(3),r=n(10),i=n(27),s=n(11),a=n(6),u=n(49),c=n(24),l=n(37),f=n(12),d=n(18),p=n(4).f,h=n(77)(0),v=n(5);t.exports=function(t,e,n,y,b,m){var x=o[t],g=x,w=b?"set":"add",_=g&&g.prototype,O={};return v&&"function"==typeof g&&(m||_.forEach&&!s(function(){(new g).entries().next()}))?(g=e(function(e,n){l(e,g,t,"_c"),e._c=new x,void 0!=n&&c(n,b,e[w],e)}),h("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(t){var e="add"==t||"set"==t;t in _&&(!m||"clear"!=t)&&a(g.prototype,t,function(n,o){if(l(this,g,t),!e&&m&&!f(n))return"get"==t?void 0:!1;var r=this._c[t](0===n?0:n,o);return e?this:r})}),"size"in _&&p(g.prototype,"size",{get:function(){return this._c.size}})):(g=y.getConstructor(e,t,b,w),u(g.prototype,n),i.NEED=!0),d(g,t),O[t]=g,r(r.G+r.W+r.F,O),m||y.setStrong(g,t,b),g}},function(t,e,n){"use strict";var o=n(4),r=n(16);t.exports=function(t,e,n){e in t?o.f(t,e,r(0,n)):t[e]=n}},function(t,e,n){var o=n(15),r=n(47),i=n(29);t.exports=function(t){var e=o(t),n=r.f;if(n)for(var s,a=n(t),u=i.f,c=0;a.length>c;)u.call(t,s=a[c++])&&e.push(s);return e}},function(t,e,n){t.exports=n(3).document&&document.documentElement},function(t,e,n){"use strict";var o=n(28),r=n(16),i=n(18),s={};n(6)(s,n(1)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=o(s,{next:r(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var o=n(1)("iterator"),r=!1;try{var i=[7][o]();i["return"]=function(){r=!0},Array.from(i,function(){throw 2})}catch(s){}t.exports=function(t,e){if(!e&&!r)return!1;var n=!1;try{var i=[7],s=i[o]();s.next=function(){return{done:n=!0}},i[o]=function(){return s},t(i)}catch(a){}return n}},function(t,e,n){var o=n(15),r=n(8);t.exports=function(t,e){for(var n,i=r(t),s=o(i),a=s.length,u=0;a>u;)if(i[n=s[u++]]===e)return n}},function(t,e,n){var o=n(4),r=n(9),i=n(15);t.exports=n(5)?Object.defineProperties:function(t,e){r(t);for(var n,s=i(e),a=s.length,u=0;a>u;)o.f(t,n=s[u++],e[n]);return t}},function(t,e,n){var o=n(29),r=n(16),i=n(8),s=n(33),a=n(7),u=n(40),c=Object.getOwnPropertyDescriptor;e.f=n(5)?c:function(t,e){if(t=i(t),e=s(e,!0),u)try{return c(t,e)}catch(n){}return a(t,e)?r(!o.f.call(t,e),t[e]):void 0}},function(t,e,n){var o=n(8),r=n(46).f,i={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return r(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==i.call(t)?a(t):r(o(t))}},function(t,e,n){var o=n(7),r=n(20),i=n(30)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),o(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e,n){var o=n(10),r=n(2),i=n(11);t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],s={};s[t]=e(n),o(o.S+o.F*i(function(){n(1)}),"Object",s)}},function(t,e,n){"use strict";var o=n(3),r=n(2),i=n(4),s=n(5),a=n(1)("species");t.exports=function(t){var e="function"==typeof r[t]?r[t]:o[t];s&&e&&!e[a]&&i.f(e,a,{configurable:!0,get:function(){return this}})}},function(t,e,n){var o=n(32),r=n(17);t.exports=function(t){return function(e,n){var i,s,a=String(r(e)),u=o(n),c=a.length;return 0>u||u>=c?t?"":void 0:(i=a.charCodeAt(u),55296>i||i>56319||u+1===c||(s=a.charCodeAt(u+1))<56320||s>57343?t?a.charAt(u):i:t?a.slice(u,u+2):(i-55296<<10)+(s-56320)+65536)}}},function(t,e,n){var o=n(32),r=Math.max,i=Math.min;t.exports=function(t,e){return t=o(t),0>t?r(t+e,0):i(t,e)}},function(t,e,n){"use strict";var o=n(13),r=n(10),i=n(20),s=n(44),a=n(42),u=n(19),c=n(83),l=n(51);r(r.S+r.F*!n(87)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,r,f,d=i(t),p="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,y=void 0!==v,b=0,m=l(d);if(y&&(v=o(v,h>2?arguments[2]:void 0,2)),void 0==m||p==Array&&a(m))for(e=u(d.length),n=new p(e);e>b;b++)c(n,b,y?v(d[b],b):d[b]);else for(f=m.call(d),n=new p;!(r=f.next()).done;b++)c(n,b,y?s(f,v,[r.value,b],!0):r.value);return n.length=b,n}})},function(t,e,n){"use strict";var o=n(74),r=n(45),i=n(14),s=n(8);t.exports=n(25)(Array,"Array",function(t,e){this._t=s(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):"keys"==e?r(0,n):"values"==e?r(0,t[n]):r(0,[n,t[n]])},"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,e,n){var o=n(20),r=n(15);n(93)("keys",function(){return function(t){return r(o(t))}})},function(t,e,n){"use strict";var o=n(80);t.exports=n(82)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return o.def(this,t=0===t?0:t,t)}},o)},function(t,e,n){"use strict";var o=n(3),r=n(7),i=n(5),s=n(10),a=n(50),u=n(27).KEY,c=n(11),l=n(31),f=n(18),d=n(21),p=n(1),h=n(35),v=n(34),y=n(88),b=n(84),m=n(43),x=n(9),g=n(8),w=n(33),_=n(16),O=n(28),S=n(91),E=n(90),A=n(4),k=n(15),$=E.f,j=A.f,P=S.f,M=o.Symbol,N=o.JSON,C=N&&N.stringify,T="prototype",F=p("_hidden"),R=p("toPrimitive"),q={}.propertyIsEnumerable,B=l("symbol-registry"),L=l("symbols"),I=l("op-symbols"),V=Object[T],H="function"==typeof M,J=o.QObject,z=!J||!J[T]||!J[T].findChild,W=i&&c(function(){return 7!=O(j({},"a",{get:function(){return j(this,"a",{value:7}).a}})).a})?function(t,e,n){var o=$(V,e);o&&delete V[e],j(t,e,n),o&&t!==V&&j(V,e,o)}:j,D=function(t){var e=L[t]=O(M[T]);return e._k=t,e},K=H&&"symbol"==typeof M.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof M},G=function(t,e,n){return t===V&&G(I,e,n),x(t),e=w(e,!0),x(n),r(L,e)?(n.enumerable?(r(t,F)&&t[F][e]&&(t[F][e]=!1),n=O(n,{enumerable:_(0,!1)})):(r(t,F)||j(t,F,_(1,{})),t[F][e]=!0),W(t,e,n)):j(t,e,n)},Y=function(t,e){x(t);for(var n,o=b(e=g(e)),r=0,i=o.length;i>r;)G(t,n=o[r++],e[n]);return t},U=function(t,e){return void 0===e?O(t):Y(O(t),e)},Q=function(t){var e=q.call(this,t=w(t,!0));return this===V&&r(L,t)&&!r(I,t)?!1:e||!r(this,t)||!r(L,t)||r(this,F)&&this[F][t]?e:!0},X=function(t,e){if(t=g(t),e=w(e,!0),t!==V||!r(L,e)||r(I,e)){var n=$(t,e);return!n||!r(L,e)||r(t,F)&&t[F][e]||(n.enumerable=!0),n}},Z=function(t){for(var e,n=P(g(t)),o=[],i=0;n.length>i;)r(L,e=n[i++])||e==F||e==u||o.push(e);return o},tt=function(t){for(var e,n=t===V,o=P(n?I:g(t)),i=[],s=0;o.length>s;)r(L,e=o[s++])&&(n?r(V,e):!0)&&i.push(L[e]);return i};H||(M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===V&&e.call(I,n),r(this,F)&&r(this[F],t)&&(this[F][t]=!1),W(this,t,_(1,n))};return i&&z&&W(V,t,{configurable:!0,set:e}),D(t)},a(M[T],"toString",function(){return this._k}),E.f=X,A.f=G,n(46).f=S.f=Z,n(29).f=Q,n(47).f=tt,i&&!n(26)&&a(V,"propertyIsEnumerable",Q,!0),h.f=function(t){return D(p(t))}),s(s.G+s.W+s.F*!H,{Symbol:M});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)p(et[nt++]);
for(var et=k(p.store),nt=0;et.length>nt;)v(et[nt++]);s(s.S+s.F*!H,"Symbol",{"for":function(t){return r(B,t+="")?B[t]:B[t]=M(t)},keyFor:function(t){if(K(t))return y(B,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){z=!0},useSimple:function(){z=!1}}),s(s.S+s.F*!H,"Object",{create:U,defineProperty:G,defineProperties:Y,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),N&&s(s.S+s.F*(!H||c(function(){var t=M();return"[null]"!=C([t])||"{}"!=C({a:t})||"{}"!=C(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!K(t)){for(var e,n,o=[t],r=1;arguments.length>r;)o.push(arguments[r++]);return e=o[1],"function"==typeof e&&(n=e),!n&&m(e)||(e=function(t,e){return n&&(e=n.call(this,t,e)),K(e)?void 0:e}),o[1]=e,C.apply(N,o)}}}),M[T][R]||n(6)(M[T],R,M[T].valueOf),f(M,"Symbol"),f(Math,"Math",!0),f(o.JSON,"JSON",!0)},function(t,e,n){var o=n(10);o(o.P+o.R,"Set",{toJSON:n(81)("Set")})},function(t,e,n){n(34)("asyncIterator")},function(t,e,n){n(34)("observable")},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){t.exports='<div class=modal> <modal-core :show.sync=show :on-close=close> <div class=modal-header> <h3 v-show=problem>{{problem.short}}</h3> <h3 v-else>Are you sure?</h3> </div> <div class="modal-body no-action" v-show=problem> <p>{{{problem.long}}}</p> </div> <div class=modal-body v-else> <p>You will <span class=action-label>{{actionLabel}}</span> the following</p> <ul> <li v-for="item in command.selection">{{item.label}}</li> </ul> </div> <div class="modal-footer text-right" v-show=problem> <button class=modal-cancel-button @click=close>Ok</button> </div> <div class="modal-footer text-right" v-else> <button class=modal-cancel-button @click=close>Cancel</button> <button class="modal-default-button action-label" @click=confirm(command)> {{actionLabel}} </button> </div> </modal-core> </div>'},function(t,e){t.exports="<div class=modal-core @click=close v-show=show transition=modal> <div class=modal-container @click.stop> <slot></slot> </div> </div>"},function(t,e){t.exports='<div class=modal-edit> <modal-core :show.sync=show :on-close=close> <div id=value-{{id}}-{{col}}-edit class=modal-body> <input v-if="type !== \'textarea\'" type={{type}} v-model=value /> <textarea v-else v-model=value></textarea> </div> <div class="modal-footer text-right"> <button class=modal-cancel-button @click=close>Cancel</button> <button class="modal-default-button modal-ok-button action-label" @click=confirm>Save</button> </div> </modal-core> </div>'},function(t,e){t.exports='<div class=smart-table> <modal @confirm=doCommand></modal> <modal-edit @confirm=doEdit @close=closedModalEdit></modal-edit> <table class=persist-area> <thead v-show=scrolledPast class=floating-header> <th v-if=actionsArePresent> <input class=toggle-all type=checkbox @click=toggleAllRows /> </th> <th v-for="(column, label) in tableHeader" class="col-{{column}} col-cell"> {{label}} <div v-if=filters[column] class="{{column}}-filter-cue click-cue fa fa-filter" @click=openFilter(column)></div> <div v-if="filters[column] && filters[column].open" class={{column}}-filter-input> <input type=text v-model=filters[column].model /> </div> </th> <th v-if=delete> </th></thead> <thead class=regular-header :class="{ transparent: scrolledPast }"> <tr> <th v-if=actionsArePresent> <input class=toggle-all type=checkbox @click=toggleAllRows /> </th> <th v-for="(column, label) in tableHeader" class=col-{{column}}> {{label}} <div v-if=filters[column] class="{{column}}-filter-cue click-cue fa fa-filter" @click=openFilter(column)></div> <div v-if="filters[column] && filters[column].open" class={{column}}-filter-input> <input type=text v-model=filters[column].model /> </div> </th> <th v-if=delete> </th> </tr> </thead> <tfoot> <tr v-for="footerRow in processedFooter" class=footer-row> <td v-if=actionsArePresent></td> <td v-for="footerCell in footerRow" track-by=$index> {{footerCell}} </td> <td v-if=delete></td> </tr> <tr v-if=actionsArePresent class=action-row> <td class=smart-control-bar colspan={{span}}> <span class=bottom-right-corner>&#8990;</span> <select class=actions v-model=action> <option v-for="(key, label) in actions" value={{key}} class=action-label>{{label}}</option> </select> <button class=action-button @click=next>Next...</button> </td> </tr> </tfoot> <tbody> <tr v-for="(key, entry) in processedSmartBody\n      | orderBy orderKey -1" class=row-{{key}}> <td v-if=actionsArePresent> <input id=toggle-{{key}} value={{key}} type=checkbox v-model=selection /> </td> <td v-for="(col, value) in entry" id=cell-{{key}}-{{col}} class=cell-{{col}} @dblclick="valueClick(key, col)"> <div id=value-{{key}}-{{col}}> <slot :name=col> {{value}} </slot> </div> </td> <td v-if=delete> <button id=delete-{{key}} @click=remove(key)>Delete</button> </td> </tr> <tr v-if=addRow class=row-new> <td v-if=actionsArePresent></td> <td v-for="(col, value) in tableHeader" id=edit-new-{{col}}> <input v-if="isEditable(col) && editType(col) !== \'select\'" :type=editType(col) v-model=newRow[col] /> <select v-if="isEditable(col) && editType(col) === \'select\'" v-model=newRow[col]> <option v-for="(value, label) in inputList[col]" value={{value}} class=input-label>{{label}}</option> </select> </td> <td v-if=delete></td> </tr> </tbody> </table> <div class=add-row-button v-show=canSaveNewRow><button @click=saveNewRow>Add Row</button></div> <div class=error-panel v-show=error>{{error | json}}</div> </div>'},function(t,e,n){var o,r;n(105),o=n(55),r=n(109),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,n){var o,r;n(107),o=n(57),r=n(111),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,n){var o,r;n(108),o=n(58),r=n(112),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)}])});
//# sourceMappingURL=vue-smart-table.js.map