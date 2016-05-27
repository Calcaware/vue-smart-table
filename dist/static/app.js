webpackJsonp([2,0],{0:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var a=o(128),i=n(a),l=o(115),r=n(l),s=o(101),d=n(s);i["default"].use(r["default"]),i["default"].component("smart-table",d["default"])},44:function(t,e,o){var n,a;o(125),n=o(46),a=o(96),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},45:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=o(44),i=n(a);e["default"]={components:{ModalCore:i["default"]},data:function(){return{problem:{},actionLabel:"undefined",command:{action:void 0,selection:[]}}},props:["show"],events:{command:function(t){this.show=!0,this.command.action=t.action.key,this.actionLabel=t.action.label,this.command.selection=t.selection,this.problem=!1,void 0===this.command.action?this.problem={"short":"No action to perform!","long":"Please select an action from the dropdown menu."}:0===this.command.selection.length&&(this.problem={"short":"Selection empty!","long":"There is no selection to "+this.actionLabel+"."})}},methods:{close:function(){this.show=!1},confirm:function(){this.$dispatch("confirm",this.command),this.close()}}}},46:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:["show","onClose"],methods:{close:function(){this.onClose()}},ready:function(){var t=this;document.addEventListener("keydown",function(e){t.show&&27===e.keyCode&&t.onClose()})}}},47:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=o(44),i=n(a);e["default"]={components:{ModalCore:i["default"]},data:function(){return{value:void 0,type:void 0,id:void 0,col:void 0,prev:void 0}},props:["show"],events:{modalEdit:function(t){this.show=!0,this.value=t.currentValue,this.type=t.type,this.id=t.id,this.col=t.col,this.prev=t.previousValue}},methods:{close:function(){this.show=!1,this.$dispatch("close")},confirm:function(){this.$dispatch("confirm",{id:this.id,col:this.col,currentValue:this.value,previousValue:this.prev}),this.close()}}}},48:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=o(49),i=n(a),l=o(54),r=n(l),s=o(50),d=n(s),c=o(51),A=n(c),u=o(99),f=n(u),p=o(100),h=n(p),m=o(93),b=n(m),v=o(94),C=n(v);e["default"]={components:{Modal:f["default"],ModalEdit:h["default"]},data:function(){return{toggleAll:!1,action:void 0,selection:[],error:!1,modalEdit:void 0,backMatrix:{},newRow:{},canSaveNewRow:!1,scrolledPast:!1,filters:{},totals:void 0}},props:{canFilterBy:Array,orderKey:String,useTextAreaFor:Array,header:[Object,Array],footer:{required:!1},inputList:{type:Object,required:!1,"default":void 0},body:{type:Object,required:!0,validator:function(t){if(null===t||void 0===t)return console.log("Passed null as body! If you are loading data, pass an empty object"),!1;var e=(0,A["default"])(t);if(e.length<1)return console.log("Warning: body has no rows"),!0;var o=t[e[0]],n=(0,A["default"])(o),a=n.length;for(var i in t)if(t.hasOwnProperty(i)){var l=(0,A["default"])(t[i]).length;if(a!==l)return console.log("entry "+(0,d["default"])(t[i])+" has not length "+a),!1}return!0}},actions:[Object,Array],endpoint:{type:String,"default":"http://jsonplaceholder.typicode.com/photos"},labelCol:{type:String,"default":"name"},editable:{"default":!0},addRow:{type:Boolean,"default":!1},sum:{type:Array,"default":function(){return[]}}},computed:{processedFooter:function(){return void 0===this.footer?[]:this.footer.constructor===Array?this.footer.length>0&&this.footer[0].constructor===Array?this.footer:[this.footer]:"object"===(0,r["default"])(this.footer)?this.footer:void 0},canSaveNewRow:function(){var t=this;if(0===(0,A["default"])(this.newRow).length)return!1;var e=!0;return this.editableFields.forEach(function(o){t.newRow.hasOwnProperty(o)?(void 0===t.newRow[o]||t.doesNotPassValidation(o,t.newRow[o]))&&(e=!1):e=!1}),e},editableFields:function(){var t=(0,A["default"])(this.tableHeader);return this.editable===!0?t:this.editable===!1?[]:b["default"].isArray(this.editable)&&this.editable.length>0?this.editable.filter(function(e){return-1!==t.indexOf(e)}):b["default"].isPlainObject(this.editable)&&(0,A["default"])(this.editable)>0?(0,A["default"])(this.editable).filter(function(e){return-1!==t.indexOf(e)}):[]},actionsArePresent:function(){return Array.isArray(this.actions)&&this.actions.length>0?!0:this.actions instanceof Object&&(0,A["default"])(this.actions).length>0},tableHeader:function(){var t=this;if(void 0!==this.header&&!Array.isArray(this.header))return this.header;var e=(0,A["default"])(this.body);if(e.length<1)return{};var o={},n=this.body[e[0]],a=(0,A["default"])(n);return a.forEach(function(e,n){void 0===t.header?o[e]=e:o[e]=t.header[n]}),o},mainCol:function(){var t=(0,A["default"])(this.body),e=this.body[t[0]],o=(0,A["default"])(e);return-1===o.indexOf(this.labelCol)?o[0]:this.labelCol},processedSmartBody:function(){var t=this,e=(0,A["default"])(this.body),o={};if(e.forEach(function(e){o[e]={};var n=(0,A["default"])(t.tableHeader);n.forEach(function(n){o[e][n]=t.body[e][n]})}),o=C["default"].filter(function(e){return C["default"].all(function(o){return C["default"].all(function(n){return n!==o||-1!==(0,d["default"])(e[o]).toLowerCase().indexOf(t.filters[n].model.toLowerCase())},C["default"].keys(t.filters))},C["default"].keys(e))},o),this.sum.length>0){var n=function(t,e){return Number(t)+Number(e)};this.totals=C["default"].mapObjIndexed(function(e,a){return C["default"].contains(a,t.sum)?C["default"].reduce(n,0,C["default"].values(C["default"].map(function(t){return t[a]},o))).toFixed(2):""},C["default"].values(o)[0])}return o},span:function(){return(0,A["default"])(this.tableHeader).length+1}},beforeCompile:function(){if(Array.isArray(this.actions)){var t={};this.actions.forEach(function(e){return t[e]=e}),this.actions=t}Array.isArray(this.canFilterBy)&&(this.filters=C["default"].zipObj(this.canFilterBy,C["default"].map(function(t){return{open:!1,model:""}},this.canFilterBy)))},compiled:function(){this.updateInjectedValues()},ready:function(){(0,b["default"])(window).scroll(this.refreshTableHeader)},watch:{processedSmartBody:function(){this.updateInjectedValues()}},methods:{openFilter:function(t){this.filters[t].open=!0,this.$nextTick(function(){console.log("."+t+"-filter-input > input"),(0,b["default"])("."+t+"-filter-input > input")[1].focus()})},saveNewRow:function(){var t=this;this.canSaveNewRow&&(this.$dispatch("before-request"),this.$http.get(this.endpoint,{action:"addRow",resource:this.newRow}).then(function(e){t.$set("error",!1),t.$set("body",e.data.body),t.$dispatch("successful-request"),t.$dispatch("after-request")},function(e){t.$set("error",{status:e.status,data:e.data}),t.$dispatch("failed-request"),t.$dispatch("after-request")}))},doesNotPassValidation:function(t,e){return!this.passesValidation(t,e)},passesValidation:function(t,e){return!!e},refreshTableHeader:function(){var t=(0,b["default"])(".persist-area",this.$el),e=t.offset(),o=(0,b["default"])(window).scrollTop(),n=(0,b["default"])(window).scrollLeft(),a=o>e.top,i=o<e.top+t.height();this.scrolledPast=a&&i,(0,b["default"])(".floating-header").css({left:e.left-n,"z-index":3}),(0,b["default"])(".floating-header th").each(function(t){(0,b["default"])(this).width((0,b["default"])(".regular-header th").eq(t).width())})},updateInjectedValues:function(){var t=this.$children,e=(0,A["default"])(this.tableHeader),o=!0,n=!1,a=void 0;try{for(var l,r=(0,i["default"])(t);!(o=(l=r.next()).done);o=!0){var s=l.value,d="function"==typeof s.$el.getAttribute?s.$el.getAttribute("slot"):null;if(null!==d&&-1!==e.indexOf(d)){var c=s.$el.parentElement.id.match(/^value-([0-9]+)-/)[1];s.value=this.processedSmartBody[c][d]}}}catch(u){n=!0,a=u}finally{try{!o&&r["return"]&&r["return"]()}finally{if(n)throw a}}},toggleAllRows:function(){this.toggleAll===!1?(this.toggleAll=!0,this.selection=(0,A["default"])(this.body)):(this.toggleAll=!1,this.selection=[])},next:function(){var t=this,e=this.action,o=this.actions[this.action],n=this.selection.map(function(e){return void 0!==t.body[e]?{key:e,label:t.body[e][t.mainCol]}:null},this).filter(function(t){return null!==t}),a={action:{key:e,label:o},selection:n};this.$broadcast("command",a)},doCommand:function(t){var e=this;this.$dispatch("before-request"),this.$http.get(this.endpoint,t).then(function(t){void 0===t.data.body&&t.data.body!=={}||(e.$set("body",t.data.body),e.$set("footer",t.data.footer)),e.$dispatch("successful-request"),e.$dispatch("after-request"),e.$set("error",!1)},function(t){e.$set("error",{status:t.status,data:t.data.error}),e.$dispatch("failed-request"),e.$dispatch("after-request")})},isEditable:function(t){return this.editable===!1?!1:!Array.isArray(this.editable)||-1!==this.editable.indexOf(t)},isNotEditable:function(t){return!this.isEditable(t)},valueClick:function(t,e){this.isNotEditable(e)||void 0===this.modalEdit&&(this.modalEdit={id:t,col:e,currentValue:this.body[t][e],previousValue:this.body[t][e],type:this.editType(e)},this.$broadcast("modalEdit",this.modalEdit))},editType:function(t){return void 0!==this.inputList&&void 0!==this.inputList[t]?"select":void 0!==this.useTextAreaFor&&void 0!==this.useTextAreaFor.indexOf(t)?"textarea":"text"},doEdit:function(t){var e=this;this.$dispatch("before-request"),this.$http.put(this.endpoint+"/"+t.id+"/"+t.col,{action:"edit",value:t.currentValue}).then(function(t){e.$dispatch("successful-request"),e.$dispatch("after-request"),e.$set("error",!1)},function(t){e.$set("error",{status:t.status,data:t.data.error}),e.$dispatch("failed-request"),e.$dispatch("after-request")})},closedModalEdit:function(){this.modalEdit=void 0}}}},89:function(t,e,o){e=t.exports=o(18)(),e.push([t.id,"*{box-sizing:border-box}.modal-header h3{margin-top:0;color:#a9b9ee}.modal-body{margin:20px 0}.text-right{text-align:right}.form-label{display:block;margin-bottom:1em}.form-label>.form-control{margin-top:.5em}.form-control{display:block;width:100%;padding:.5em 1em;line-height:1.5;border:1px solid #aabcfe}.action-label{text-transform:capitalize}","",{version:3,sources:["/./src/components/Modal.vue"],names:[],mappings:"AACA,EACE,qBAAuB,CACxB,AAED,iBACE,aAAc,AACd,aAAe,CAChB,AAED,YACE,aAAe,CAChB,AAED,YACE,gBAAkB,CACnB,AAED,YACE,cAAe,AACf,iBAAmB,CACpB,AAED,0BACE,eAAkB,CACnB,AAED,cACE,cAAe,AACf,WAAY,AACZ,iBAAmB,AACnB,gBAAiB,AACjB,wBAA0B,CAC3B,AAED,cACE,yBAA2B,CAC5B",file:"Modal.vue",sourcesContent:["\n* {\n  box-sizing: border-box;\n}\n\n.modal-header h3 {\n  margin-top: 0;\n  color: #a9b9ee;\n}\n\n.modal-body {\n  margin: 20px 0;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.form-label {\n  display: block;\n  margin-bottom: 1em;\n}\n\n.form-label > .form-control {\n  margin-top: 0.5em;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  padding: 0.5em 1em;\n  line-height: 1.5;\n  border: 1px solid #aabcfe;\n}\n\n.action-label {\n  text-transform: capitalize;\n}\n"],sourceRoot:"webpack://"}])},90:function(t,e,o){e=t.exports=o(18)(),e.push([t.id,"*{box-sizing:border-box}.modal-core{position:fixed;z-index:9998;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);-webkit-transition:opacity .3s ease;transition:opacity .3s ease}.modal-container{width:300px;margin:40px auto 0;padding:20px 30px;background-color:#fff;border-radius:2px;box-shadow:0 2px 8px rgba(0,0,0,.33);-webkit-transition:all .3s ease;transition:all .3s ease;font-family:Helvetica,Arial,sans-serif}.modal-enter,.modal-leave{opacity:0}.modal-enter .modal-container,.modal-leave .modal-container{-webkit-transform:scale(1.1);transform:scale(1.1)}","",{version:3,sources:["/./src/components/ModalCore.vue"],names:[],mappings:"AACA,EACE,qBAAuB,CACxB,AAED,YACE,eAAgB,AAChB,aAAc,AACd,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,YAAa,AACb,gCAAoC,AACpC,oCAAqC,AACrC,2BAA6B,CAC9B,AAED,iBACE,YAAa,AACb,mBAAoB,AACpB,kBAAmB,AACnB,sBAAuB,AACvB,kBAAmB,AACnB,qCAAyC,AACzC,gCAAiC,AACjC,wBAAyB,AACzB,sCAA0C,CAC3C,AAED,0BAEE,SAAW,CACZ,AAED,4DAEE,6BAA8B,AAC9B,oBAAsB,CACvB",file:"ModalCore.vue",sourcesContent:["\n* {\n  box-sizing: border-box;\n}\n\n.modal-core {\n  position: fixed;\n  z-index: 9998;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, .5);\n  -webkit-transition: opacity .3s ease;\n  transition: opacity .3s ease;\n}\n\n.modal-container {\n  width: 300px;\n  margin: 40px auto 0;\n  padding: 20px 30px;\n  background-color: #fff;\n  border-radius: 2px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);\n  -webkit-transition: all .3s ease;\n  transition: all .3s ease;\n  font-family: Helvetica, Arial, sans-serif;\n}\n\n.modal-enter,\n.modal-leave {\n  opacity: 0;\n}\n\n.modal-enter .modal-container,\n.modal-leave .modal-container {\n  -webkit-transform: scale(1.1);\n  transform: scale(1.1);\n}\n"],sourceRoot:"webpack://"}])},91:function(t,e,o){e=t.exports=o(18)(),e.push([t.id,"*{box-sizing:border-box}.modal-header h3{margin-top:0;color:#a9b9ee}.modal-body{margin:20px 0}.text-right{text-align:right}.form-label{display:block;margin-bottom:1em}.form-label>.form-control{margin-top:.5em}.form-control{display:block;width:100%;padding:.5em 1em;line-height:1.5;border:1px solid #aabcfe}.action-label{text-transform:capitalize}","",{version:3,sources:["/./src/components/ModalEdit.vue"],names:[],mappings:"AACA,EACE,qBAAuB,CACxB,AAED,iBACE,aAAc,AACd,aAAe,CAChB,AAED,YACE,aAAe,CAChB,AAED,YACE,gBAAkB,CACnB,AAED,YACE,cAAe,AACf,iBAAmB,CACpB,AAED,0BACE,eAAkB,CACnB,AAED,cACE,cAAe,AACf,WAAY,AACZ,iBAAmB,AACnB,gBAAiB,AACjB,wBAA0B,CAC3B,AAED,cACE,yBAA2B,CAC5B",file:"ModalEdit.vue",sourcesContent:["\n* {\n  box-sizing: border-box;\n}\n\n.modal-header h3 {\n  margin-top: 0;\n  color: #a9b9ee;\n}\n\n.modal-body {\n  margin: 20px 0;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.form-label {\n  display: block;\n  margin-bottom: 1em;\n}\n\n.form-label > .form-control {\n  margin-top: 0.5em;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  padding: 0.5em 1em;\n  line-height: 1.5;\n  border: 1px solid #aabcfe;\n}\n\n.action-label {\n  text-transform: capitalize;\n}\n"],sourceRoot:"webpack://"}])},92:function(t,e,o){e=t.exports=o(18)(),e.push([t.id,".floating-header{position:fixed;top:0}.transparent{opacity:0}.smart-table table{font-family:Lucida Sans Unicode,Lucida Grande,sans-serif;font-size:12px;text-align:left;border-collapse:collapse}.smart-table th{height:51px;font-size:13px;font-weight:400;background:#2c3e50;border-top:4px solid #34495e;color:#798795;text-transform:capitalize}.smart-table td,.smart-table th{border-bottom:1px solid #fff;padding:8px}.smart-table td{background:#f3f5f7;color:#495255;border-top:1px solid transparent}.smart-table td.smart-control-bar{background:#e4ebf1}.smart-table tr:hover td{background:#e1e8ef;color:#495255}.bottom-right-corner{font-size:42px;float:left;height:1px;top:-25px;position:relative;width:32px;left:5px;pointer-events:none;cursor:default}.action-label{text-transform:capitalize}table input[type=checkbox]{-webkit-transform:scale(1.6);transform:scale(1.6);margin:0}.error-panel{width:100%;height:50px;background-color:#260707;color:#c8999e}.click-cue{width:1em;height:1em}","",{version:3,sources:["/./src/components/SmartTable.vue"],names:[],mappings:"AACA,iBACE,eAAgB,AAChB,KAAO,CACR,AAED,aACE,SAAW,CACZ,AAED,mBACE,yDAAgE,AAChE,eAAgB,AAChB,gBAAiB,AACjB,wBAA0B,CAC3B,AAED,gBACE,YAAa,AACb,eAAgB,AAChB,gBAAoB,AACpB,mBAAoB,AACpB,6BAA8B,AAE9B,cAAe,AAEf,yBAA2B,CAC5B,AAED,gCANE,6BAA8B,AAE9B,WAAa,CAUd,AAND,gBACE,mBAAgC,AAEhC,cAA0B,AAC1B,gCAAkC,CAEnC,AAED,kCACE,kBAA+B,CAChC,AAED,yBACE,mBAAgC,AAChC,aAA0B,CAC3B,AAED,qBACE,eAAgB,AAChB,WAAY,AACZ,WAAY,AACZ,UAAW,AACX,kBAAmB,AACnB,WAAY,AACZ,SAAU,AACV,oBAAqB,AACrB,cAAgB,CACjB,AAED,cACE,yBAA2B,CAC5B,AAED,2BACE,6BAA8B,AACtB,qBAAsB,AAC9B,QAAU,CACX,AAED,aACE,WAAY,AACZ,YAAa,AACb,yBAA0B,AAC1B,aAAe,CAChB,AAED,WACE,UAAW,AACX,UAAY,CACb",file:"SmartTable.vue",sourcesContent:['\n.floating-header {\n  position: fixed;\n  top: 0;\n}\n\n.transparent {\n  opacity: 0;\n}\n\n.smart-table table {\n  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;\n  font-size: 12px;\n  text-align: left;\n  border-collapse: collapse;\n}\n\n.smart-table th {\n  height: 51px;\n  font-size: 13px;\n  font-weight: normal;\n  background: #2C3E50;\n  border-top: 4px solid #34495E;\n  border-bottom: 1px solid #fff;\n  color: #798795;\n  padding: 8px;\n  text-transform: capitalize;\n}\n\n.smart-table td {\n  background: hsla(210,19%,96%,1);\n  border-bottom: 1px solid #fff;\n  color: hsla(196,8%,31%,1);\n  border-top: 1px solid transparent;\n  padding: 8px;\n}\n\n.smart-table td.smart-control-bar {\n  background: hsl(210, 30%, 92%);\n}\n\n.smart-table tr:hover td {\n  background: hsla(210,29%,91%,1);\n  color: hsla(196,8%,31%,1);\n}\n\n.bottom-right-corner {\n  font-size: 42px;\n  float: left;\n  height: 1px;\n  top: -25px;\n  position: relative;\n  width: 32px;\n  left: 5px;\n  pointer-events: none;\n  cursor: default;\n}\n\n.action-label {\n  text-transform: capitalize;\n}\n\ntable input[type="checkbox"] {\n  -webkit-transform: scale(1.6);\n          transform: scale(1.6);\n  margin: 0;\n}\n\n.error-panel {\n  width: 100%;\n  height: 50px;\n  background-color: #260707;\n  color: #c8999e;\n}\n\n.click-cue {\n  width: 1em;\n  height: 1em;\n}\n'],sourceRoot:"webpack://"}])},95:function(t,e){t.exports='<div class=modal> <modal-core :show.sync=show :on-close=close> <div class=modal-header> <h3 v-show=problem>{{problem.short}}</h3> <h3 v-else>Are you sure?</h3> </div> <div class="modal-body no-action" v-show=problem> <p>{{{problem.long}}}</p> </div> <div class=modal-body v-else> <p>You will <span class=action-label>{{actionLabel}}</span> the following</p> <ul> <li v-for="item in command.selection">{{item.label}}</li> </ul> </div> <div class="modal-footer text-right" v-show=problem> <button class=modal-cancel-button @click=close>Ok</button> </div> <div class="modal-footer text-right" v-else> <button class=modal-cancel-button @click=close>Cancel</button> <button class="modal-default-button action-label" @click=confirm(command)> {{actionLabel}} </button> </div> </modal-core> </div>'},96:function(t,e){t.exports="<div class=modal-core @click=close v-show=show transition=modal> <div class=modal-container @click.stop> <slot></slot> </div> </div>"},97:function(t,e){t.exports='<div class=modal-edit> <modal-core :show.sync=show :on-close=close> <div id=value-{{id}}-{{col}}-edit class=modal-body> <input v-if="type !== \'textarea\'" type={{type}} v-model=value /> <textarea v-else v-model=value></textarea> </div> <div class="modal-footer text-right"> <button class=modal-cancel-button @click=close>Cancel</button> <button class="modal-default-button modal-ok-button action-label" @click=confirm>Save</button> </div> </modal-core> </div>'},98:function(t,e){t.exports='<div class=smart-table> <modal @confirm=doCommand></modal> <modal-edit @confirm=doEdit @close=closedModalEdit></modal-edit> <table class=persist-area> <thead v-show=scrolledPast class=floating-header> <th v-if=actionsArePresent> <input class=toggle-all type=checkbox @click=toggleAllRows /> </th> <th v-for="(column, label) in tableHeader" class="col-{{column}} col-cell"> {{label}} <div v-if=filters[column] class="{{column}}-filter-cue click-cue fa fa-filter" @click=openFilter(column)></div> <div v-if="filters[column] && filters[column].open" class={{column}}-filter-input> <input type=text v-model=filters[column].model /> </div> </th> </thead> <thead class=regular-header :class="{ transparent: scrolledPast }"> <tr> <th v-if=actionsArePresent> <input class=toggle-all type=checkbox @click=toggleAllRows /> </th> <th v-for="(column, label) in tableHeader" class=col-{{column}}> {{label}} <div v-if=filters[column] class="{{column}}-filter-cue click-cue fa fa-filter" @click=openFilter(column)></div> <div v-if="filters[column] && filters[column].open" class={{column}}-filter-input> <input type=text v-model=filters[column].model /> </div> </th> </tr> </thead> <tfoot> <tr v-if=totals class=totals-row> <td v-if=actionsArePresent></td> <td v-for="(col, totalCell) in totals" id=value-total-{{col}} track-by=$index> {{totalCell}} </td> </tr> <tr v-for="footerRow in processedFooter" class=footer-row> <td v-if=actionsArePresent></td> <td v-for="footerCell in footerRow" track-by=$index> {{footerCell}} </td> </tr> <tr v-if=actionsArePresent class=action-row> <td class=smart-control-bar colspan={{span}}> <span class=bottom-right-corner>&#8990;</span> <select class=actions v-model=action> <option v-for="(key, label) in actions" value={{key}} class=action-label>{{label}}</option> </select> <button class=action-button @click=next>Next...</button> </td> </tr> </tfoot> <tbody> <tr v-for="(id, entry) in processedSmartBody\n      | orderBy orderKey -1" class=row-{{id}}> <td v-if=actionsArePresent> <input id=toggle-{{id}} value={{id}} type=checkbox v-model=selection /> </td> <td v-for="(col, value) in entry" id=cell-{{id}}-{{col}} class=cell-{{col}} @dblclick="valueClick(id, col)"> <div id=value-{{id}}-{{col}}> <slot :name=col> {{value}} </slot> </div> </td> </tr> <tr v-if=addRow class=row-new> <td v-if=actionsArePresent></td> <td v-for="(col, value) in tableHeader" id=edit-new-{{col}}> <input v-if="isEditable(col) && editType(col) !== \'select\'" :type=editType(col) v-model=newRow[col] /> <select v-if="isEditable(col) && editType(col) === \'select\'" v-model=newRow[col]> <option v-for="(value, label) in inputList[col]" value={{value}} class=input-label>{{label}}</option> </select> </td> </tr> </tbody> </table> <div class=add-row-button v-show=canSaveNewRow><button @click=saveNewRow>Add Row</button></div> <div class=error-panel v-show=error>{{error | json}}</div> </div>'},99:function(t,e,o){var n,a;o(124),n=o(45),a=o(95),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},100:function(t,e,o){var n,a;o(126),n=o(47),a=o(97),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},101:function(t,e,o){var n,a;o(127),n=o(48),a=o(98),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},124:function(t,e,o){var n=o(89);"string"==typeof n&&(n=[[t.id,n,""]]);o(19)(n,{});n.locals&&(t.exports=n.locals)},125:function(t,e,o){var n=o(90);"string"==typeof n&&(n=[[t.id,n,""]]);o(19)(n,{});n.locals&&(t.exports=n.locals)},126:function(t,e,o){var n=o(91);"string"==typeof n&&(n=[[t.id,n,""]]);o(19)(n,{});n.locals&&(t.exports=n.locals)},127:function(t,e,o){var n=o(92);"string"==typeof n&&(n=[[t.id,n,""]]);o(19)(n,{});n.locals&&(t.exports=n.locals)}});
//# sourceMappingURL=app.js.map