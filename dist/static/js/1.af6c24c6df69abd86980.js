webpackJsonp([1],{DAYN:function(t,e,n){"use strict";var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}!function(){function e(t){function e(t){t.parentElement.removeChild(t)}function n(t,e,n){var i=0===n?t.children[0]:t.children[n-1].nextSibling;t.insertBefore(e,i)}function r(t,e){var n=this;this.$nextTick(function(){return n.$emit(t.toLowerCase(),e)})}var a=["Start","Add","Remove","Update","End"],s=["Choose","Sort","Filter","Clone"],l=["Move"].concat(a,s).map(function(t){return"on"+t}),c=null;return{name:"draggable",props:{options:Object,list:{type:Array,required:!1,default:null},value:{type:Array,required:!1,default:null},noTransitionOnDrag:{type:Boolean,default:!1},clone:{type:Function,default:function(t){return t}},element:{type:String,default:"div"},move:{type:Function,default:null},componentData:{type:Object,required:!1,default:null}},data:function(){return{transitionMode:!1,noneFunctionalComponentMode:!1,init:!1}},render:function(t){var e=this.$slots.default;if(e&&1===e.length){var n=e[0];n.componentOptions&&"transition-group"===n.componentOptions.tag&&(this.transitionMode=!0)}var i=e,r=this.$slots.footer;r&&(i=e?[].concat(o(e),o(r)):[].concat(o(r)));var a=null,s=function(t,e){a=function(t,e,n){return void 0==n?t:((t=null==t?{}:t)[e]=n,t)}(a,t,e)};if(s("attrs",this.$attrs),this.componentData){var l=this.componentData,c=l.on,d=l.props;s("on",c),s("props",d)}return t(this.element,a,i)},mounted:function(){var e=this;if(this.noneFunctionalComponentMode=this.element.toLowerCase()!==this.$el.nodeName.toLowerCase(),this.noneFunctionalComponentMode&&this.transitionMode)throw new Error("Transition-group inside component is not supported. Please alter element value or remove transition-group. Current element value: "+this.element);var n={};a.forEach(function(t){n["on"+t]=function(t){var e=this;return function(n){null!==e.realList&&e["onDrag"+t](n),r.call(e,t,n)}}.call(e,t)}),s.forEach(function(t){n["on"+t]=r.bind(e,t)});var o=i({},this.options,n,{onMove:function(t,n){return e.onDragMove(t,n)}});!("draggable"in o)&&(o.draggable=">*"),this._sortable=new t(this.rootContainer,o),this.computeIndexes()},beforeDestroy:function(){this._sortable.destroy()},computed:{rootContainer:function(){return this.transitionMode?this.$el.children[0]:this.$el},isCloning:function(){return!!this.options&&!!this.options.group&&"clone"===this.options.group.pull},realList:function(){return this.list?this.list:this.value}},watch:{options:{handler:function(t){for(var e in t)-1==l.indexOf(e)&&this._sortable.option(e,t[e])},deep:!0},realList:function(){this.computeIndexes()}},methods:{getChildrenNodes:function(){if(this.init||(this.noneFunctionalComponentMode=this.noneFunctionalComponentMode&&1==this.$children.length,this.init=!0),this.noneFunctionalComponentMode)return this.$children[0].$slots.default;var t=this.$slots.default;return this.transitionMode?t[0].child.$slots.default:t},computeIndexes:function(){var t=this;this.$nextTick(function(){t.visibleIndexes=function(t,e,n){if(!t)return[];var i=t.map(function(t){return t.elm}),r=[].concat(o(e)).map(function(t){return i.indexOf(t)});return n?r.filter(function(t){return-1!==t}):r}(t.getChildrenNodes(),t.rootContainer.children,t.transitionMode)})},getUnderlyingVm:function(t){var e=function(t,e){return t.map(function(t){return t.elm}).indexOf(e)}(this.getChildrenNodes()||[],t);return-1===e?null:{index:e,element:this.realList[e]}},getUnderlyingPotencialDraggableComponent:function(t){var e=t.__vue__;return e&&e.$options&&"transition-group"===e.$options._componentTag?e.$parent:e},emitChanges:function(t){var e=this;this.$nextTick(function(){e.$emit("change",t)})},alterList:function(t){if(this.list)t(this.list);else{var e=[].concat(o(this.value));t(e),this.$emit("input",e)}},spliceList:function(){var t=arguments,e=function(e){return e.splice.apply(e,t)};this.alterList(e)},updatePosition:function(t,e){var n=function(n){return n.splice(e,0,n.splice(t,1)[0])};this.alterList(n)},getRelatedContextFromMoveEvent:function(t){var e=t.to,n=t.related,o=this.getUnderlyingPotencialDraggableComponent(e);if(!o)return{component:o};var r=o.realList,a={list:r,component:o};if(e!==n&&r&&o.getUnderlyingVm){var s=o.getUnderlyingVm(n);if(s)return i(s,a)}return a},getVmIndex:function(t){var e=this.visibleIndexes,n=e.length;return t>n-1?n:e[t]},getComponent:function(){return this.$slots.default[0].componentInstance},resetTransitionData:function(t){if(this.noTransitionOnDrag&&this.transitionMode){this.getChildrenNodes()[t].data=null;var e=this.getComponent();e.children=[],e.kept=void 0}},onDragStart:function(t){this.context=this.getUnderlyingVm(t.item),t.item._underlying_vm_=this.clone(this.context.element),c=t.item},onDragAdd:function(t){var n=t.item._underlying_vm_;if(void 0!==n){e(t.item);var i=this.getVmIndex(t.newIndex);this.spliceList(i,0,n),this.computeIndexes();var o={element:n,newIndex:i};this.emitChanges({added:o})}},onDragRemove:function(t){if(n(this.rootContainer,t.item,t.oldIndex),this.isCloning)e(t.clone);else{var i=this.context.index;this.spliceList(i,1);var o={element:this.context.element,oldIndex:i};this.resetTransitionData(i),this.emitChanges({removed:o})}},onDragUpdate:function(t){e(t.item),n(t.from,t.item,t.oldIndex);var i=this.context.index,o=this.getVmIndex(t.newIndex);this.updatePosition(i,o);var r={element:this.context.element,oldIndex:i,newIndex:o};this.emitChanges({moved:r})},computeFutureIndex:function(t,e){if(!t.element)return 0;var n=[].concat(o(e.to.children)).filter(function(t){return"none"!==t.style.display}),i=n.indexOf(e.related),r=t.component.getVmIndex(i);return-1!=n.indexOf(c)||!e.willInsertAfter?r:r+1},onDragMove:function(t,e){var n=this.move;if(!n||!this.realList)return!0;var o=this.getRelatedContextFromMoveEvent(t),r=this.context,a=this.computeFutureIndex(o,t);return i(r,{futureIndex:a}),i(t,{relatedContext:o,draggedContext:r}),n(t,e)},onDragEnd:function(t){this.computeIndexes(),c=null}}}}Array.from||(Array.from=function(t){return[].slice.call(t)});var r=n("Lokx");t.exports=e(r)}()},EtHT:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("DAYN"),o={components:{draggable:n.n(i).a},props:{HeaderText:{type:String,default:"Header"},list:{type:Array,default:function(){return[]}}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"board-column"},[n("div",{staticClass:"board-column-header"},[t._v("\n        "+t._s(t.HeaderText)+"\n    ")]),t._v(" "),n("draggable",{staticClass:"board-column-content",attrs:{options:{group:"people"}}},t._l(t.list,function(e){return n("div",{key:e.id,staticClass:"board-item"},[t._v("\n            "+t._s(e.name)+t._s(e.id)+"\n        ")])}))],1)},staticRenderFns:[]};var a={components:{PanelDrag:n("VU/8")(o,r,!1,function(t){n("x+xX")},null,null).exports},data:function(){return{list1:[{name:"Mission",id:1},{name:"Mission",id:2},{name:"Mission",id:3},{name:"Mission",id:4}],list2:[{name:"Mission",id:5},{name:"Mission",id:6},{name:"Mission",id:7}],list3:[{name:"Mission",id:8},{name:"Mission",id:9},{name:"Mission",id:10}]}}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"components-container board"},[e("panel-drag",{staticClass:"kanban todo",attrs:{list:this.list1,"header-text":"Todo"}}),this._v(" "),e("panel-drag",{staticClass:"kanban working",attrs:{list:this.list2,"header-text":"Working"}}),this._v(" "),e("panel-drag",{staticClass:"kanban done",attrs:{list:this.list3,"header-text":"Done"}})],1)},staticRenderFns:[]};var l=n("VU/8")(a,s,!1,function(t){n("mRhs")},null,null);e.default=l.exports},Lokx:function(t,e,n){var i,o;
/**!
 * Sortable
 * @author	RubaXa   <trash@rubaxa.org>
 * @license MIT
 */
/**!
 * Sortable
 * @author	RubaXa   <trash@rubaxa.org>
 * @license MIT
 */
!function(r){"use strict";void 0===(o="function"==typeof(i=r)?i.call(e,n,e,t):i)||(t.exports=o)}(function(){"use strict";if("undefined"==typeof window||!window.document)return function(){throw new Error("Sortable.js requires a window with a document")};var t,e,n,i,o,r,a,s,l,c,d,u,h,f,p,g,v,m,_,b,y,D={},x=/\s+/g,C=/left|right|inline/,w="Sortable"+(new Date).getTime(),T=window,E=T.document,S=T.parseInt,M=T.setTimeout,I=T.jQuery||T.Zepto,k=T.Polymer,N=!1,O="draggable"in E.createElement("div"),A=!navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i)&&((y=E.createElement("x")).style.cssText="pointer-events:auto","auto"===y.style.pointerEvents),P=!1,L=Math.abs,B=Math.min,R=[],F=[],Y=it(function(t,e,n){if(n&&e.scroll){var i,o,r,a,d,u,h=n[w],f=e.scrollSensitivity,p=e.scrollSpeed,g=t.clientX,v=t.clientY,m=window.innerWidth,_=window.innerHeight;if(l!==n&&(s=e.scroll,l=n,c=e.scrollFn,!0===s)){s=n;do{if(s.offsetWidth<s.scrollWidth||s.offsetHeight<s.scrollHeight)break}while(s=s.parentNode)}s&&(i=s,o=s.getBoundingClientRect(),r=(L(o.right-g)<=f)-(L(o.left-g)<=f),a=(L(o.bottom-v)<=f)-(L(o.top-v)<=f)),r||a||(a=(_-v<=f)-(v<=f),((r=(m-g<=f)-(g<=f))||a)&&(i=T)),D.vx===r&&D.vy===a&&D.el===i||(D.el=i,D.vx=r,D.vy=a,clearInterval(D.pid),i&&(D.pid=setInterval(function(){if(u=a?a*p:0,d=r?r*p:0,"function"==typeof c)return c.call(h,d,u,t);i===T?T.scrollTo(T.pageXOffset+d,T.pageYOffset+u):(i.scrollTop+=u,i.scrollLeft+=d)},24)))}},30),$=function(t){function e(t,e){return void 0!==t&&!0!==t||(t=n.name),"function"==typeof t?t:function(n,i){var o=i.options.group.name;return e?t:t&&(t.join?t.indexOf(o)>-1:o==t)}}var n={},i=t.group;i&&"object"==typeof i||(i={name:i}),n.name=i.name,n.checkPull=e(i.pull,!0),n.checkPut=e(i.put),n.revertClone=i.revertClone,t.group=n};try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){N={capture:!1,passive:!1}}}))}catch(t){}function X(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be HTMLElement, and not "+{}.toString.call(t);this.el=t,this.options=e=ot({},e),t[w]=this;var n={group:Math.random(),sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(t.nodeName)?"li":">*",ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==X.supportPointer};for(var i in n)!(i in e)&&(e[i]=n[i]);for(var o in $(e),this)"_"===o.charAt(0)&&"function"==typeof this[o]&&(this[o]=this[o].bind(this));this.nativeDraggable=!e.forceFallback&&O,H(t,"mousedown",this._onTapStart),H(t,"touchstart",this._onTapStart),e.supportPointer&&H(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(H(t,"dragover",this),H(t,"dragenter",this)),F.push(this._onDragOver),e.store&&this.sort(e.store.get(this))}function U(e,n){"clone"!==e.lastPullMode&&(n=!0),i&&i.state!==n&&(z(i,"display",n?"none":""),n||i.state&&(e.options.group.revertClone?(o.insertBefore(i,r),e._animate(t,i)):o.insertBefore(i,t)),i.state=n)}function V(t,e,n){if(t){n=n||E;do{if(">*"===e&&t.parentNode===n||nt(t,e))return t}while(t=j(t))}return null}function j(t){var e=t.host;return e&&e.nodeType?e:t.parentNode}function H(t,e,n){t.addEventListener(e,n,N)}function W(t,e,n){t.removeEventListener(e,n,N)}function q(t,e,n){if(t)if(t.classList)t.classList[n?"add":"remove"](e);else{var i=(" "+t.className+" ").replace(x," ").replace(" "+e+" "," ");t.className=(i+(n?" "+e:"")).replace(x," ")}}function z(t,e,n){var i=t&&t.style;if(i){if(void 0===n)return E.defaultView&&E.defaultView.getComputedStyle?n=E.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in i||(e="-webkit-"+e),i[e]=n+("string"==typeof n?"":"px")}}function G(t,e,n){if(t){var i=t.getElementsByTagName(e),o=0,r=i.length;if(n)for(;o<r;o++)n(i[o],o);return i}return[]}function J(t,e,n,o,r,a,s,l){t=t||e[w];var c=E.createEvent("Event"),d=t.options,u="on"+n.charAt(0).toUpperCase()+n.substr(1);c.initEvent(n,!0,!0),c.to=r||e,c.from=a||e,c.item=o||e,c.clone=i,c.oldIndex=s,c.newIndex=l,e.dispatchEvent(c),d[u]&&d[u].call(t,c)}function Q(t,e,n,i,o,r,a,s){var l,c,d=t[w],u=d.options.onMove;return(l=E.createEvent("Event")).initEvent("move",!0,!0),l.to=e,l.from=t,l.dragged=n,l.draggedRect=i,l.related=o||e,l.relatedRect=r||e.getBoundingClientRect(),l.willInsertAfter=s,t.dispatchEvent(l),u&&(c=u.call(d,l,a)),c}function Z(t){t.draggable=!1}function K(){P=!1}function tt(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,i=0;n--;)i+=e.charCodeAt(n);return i.toString(36)}function et(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t&&(t=t.previousElementSibling);)"TEMPLATE"===t.nodeName.toUpperCase()||">*"!==e&&!nt(t,e)||n++;return n}function nt(t,e){if(t){var n=(e=e.split(".")).shift().toUpperCase(),i=new RegExp("\\s("+e.join("|")+")(?=\\s)","g");return!(""!==n&&t.nodeName.toUpperCase()!=n||e.length&&((" "+t.className+" ").match(i)||[]).length!=e.length)}return!1}function it(t,e){var n,i;return function(){void 0===n&&(n=arguments,i=this,M(function(){1===n.length?t.call(i,n[0]):t.apply(i,n),n=void 0},e))}}function ot(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function rt(t){return k&&k.dom?k.dom(t).cloneNode(!0):I?I(t).clone(!0)[0]:t.cloneNode(!0)}function at(t){return M(t,0)}function st(t){return clearTimeout(t)}return X.prototype={constructor:X,_onTapStart:function(e){var n,i=this,o=this.el,r=this.options,s=r.preventOnFilter,l=e.type,c=e.touches&&e.touches[0],d=(c||e).target,u=e.target.shadowRoot&&e.path&&e.path[0]||d,h=r.filter;if(function(t){var e=t.getElementsByTagName("input"),n=e.length;for(;n--;){var i=e[n];i.checked&&R.push(i)}}(o),!t&&!(/mousedown|pointerdown/.test(l)&&0!==e.button||r.disabled)&&!u.isContentEditable&&(d=V(d,r.draggable,o))&&a!==d){if(n=et(d,r.draggable),"function"==typeof h){if(h.call(this,e,d,this))return J(i,u,"filter",d,o,o,n),void(s&&e.preventDefault())}else if(h&&(h=h.split(",").some(function(t){if(t=V(u,t.trim(),o))return J(i,t,"filter",d,o,o,n),!0})))return void(s&&e.preventDefault());r.handle&&!V(u,r.handle,o)||this._prepareDragStart(e,c,d,n)}},_prepareDragStart:function(n,i,s,l){var c,d=this,u=d.el,h=d.options,p=u.ownerDocument;s&&!t&&s.parentNode===u&&(m=n,o=u,e=(t=s).parentNode,r=t.nextSibling,a=s,g=h.group,f=l,this._lastX=(i||n).clientX,this._lastY=(i||n).clientY,t.style["will-change"]="all",c=function(){d._disableDelayedDrag(),t.draggable=d.nativeDraggable,q(t,h.chosenClass,!0),d._triggerDragStart(n,i),J(d,o,"choose",t,o,o,f)},h.ignore.split(",").forEach(function(e){G(t,e.trim(),Z)}),H(p,"mouseup",d._onDrop),H(p,"touchend",d._onDrop),H(p,"touchcancel",d._onDrop),H(p,"selectstart",d),h.supportPointer&&H(p,"pointercancel",d._onDrop),h.delay?(H(p,"mouseup",d._disableDelayedDrag),H(p,"touchend",d._disableDelayedDrag),H(p,"touchcancel",d._disableDelayedDrag),H(p,"mousemove",d._disableDelayedDrag),H(p,"touchmove",d._disableDelayedDrag),h.supportPointer&&H(p,"pointermove",d._disableDelayedDrag),d._dragStartTimer=M(c,h.delay)):c())},_disableDelayedDrag:function(){var t=this.el.ownerDocument;clearTimeout(this._dragStartTimer),W(t,"mouseup",this._disableDelayedDrag),W(t,"touchend",this._disableDelayedDrag),W(t,"touchcancel",this._disableDelayedDrag),W(t,"mousemove",this._disableDelayedDrag),W(t,"touchmove",this._disableDelayedDrag),W(t,"pointermove",this._disableDelayedDrag)},_triggerDragStart:function(e,n){(n=n||("touch"==e.pointerType?e:null))?(m={target:t,clientX:n.clientX,clientY:n.clientY},this._onDragStart(m,"touch")):this.nativeDraggable?(H(t,"dragend",this),H(o,"dragstart",this._onDragStart)):this._onDragStart(m,!0);try{E.selection?at(function(){E.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(){if(o&&t){var e=this.options;q(t,e.ghostClass,!0),q(t,e.dragClass,!1),X.active=this,J(this,o,"start",t,o,o,f)}else this._nulling()},_emulateDragOver:function(){if(_){if(this._lastX===_.clientX&&this._lastY===_.clientY)return;this._lastX=_.clientX,this._lastY=_.clientY,A||z(n,"display","none");var t=E.elementFromPoint(_.clientX,_.clientY),e=t,i=F.length;if(t&&t.shadowRoot&&(e=t=t.shadowRoot.elementFromPoint(_.clientX,_.clientY)),e)do{if(e[w]){for(;i--;)F[i]({clientX:_.clientX,clientY:_.clientY,target:t,rootEl:e});break}t=e}while(e=e.parentNode);A||z(n,"display","")}},_onTouchMove:function(t){if(m){var e=this.options,i=e.fallbackTolerance,o=e.fallbackOffset,r=t.touches?t.touches[0]:t,a=r.clientX-m.clientX+o.x,s=r.clientY-m.clientY+o.y,l=t.touches?"translate3d("+a+"px,"+s+"px,0)":"translate("+a+"px,"+s+"px)";if(!X.active){if(i&&B(L(r.clientX-this._lastX),L(r.clientY-this._lastY))<i)return;this._dragStarted()}this._appendGhost(),b=!0,_=r,z(n,"webkitTransform",l),z(n,"mozTransform",l),z(n,"msTransform",l),z(n,"transform",l),t.preventDefault()}},_appendGhost:function(){if(!n){var e,i=t.getBoundingClientRect(),r=z(t),a=this.options;q(n=t.cloneNode(!0),a.ghostClass,!1),q(n,a.fallbackClass,!0),q(n,a.dragClass,!0),z(n,"top",i.top-S(r.marginTop,10)),z(n,"left",i.left-S(r.marginLeft,10)),z(n,"width",i.width),z(n,"height",i.height),z(n,"opacity","0.8"),z(n,"position","fixed"),z(n,"zIndex","100000"),z(n,"pointerEvents","none"),a.fallbackOnBody&&E.body.appendChild(n)||o.appendChild(n),e=n.getBoundingClientRect(),z(n,"width",2*i.width-e.width),z(n,"height",2*i.height-e.height)}},_onDragStart:function(e,n){var r=this,a=e.dataTransfer,s=r.options;r._offUpEvents(),g.checkPull(r,r,t,e)&&((i=rt(t)).draggable=!1,i.style["will-change"]="",z(i,"display","none"),q(i,r.options.chosenClass,!1),r._cloneId=at(function(){o.insertBefore(i,t),J(r,o,"clone",t)})),q(t,s.dragClass,!0),n?("touch"===n?(H(E,"touchmove",r._onTouchMove),H(E,"touchend",r._onDrop),H(E,"touchcancel",r._onDrop),s.supportPointer&&(H(E,"pointermove",r._onTouchMove),H(E,"pointerup",r._onDrop))):(H(E,"mousemove",r._onTouchMove),H(E,"mouseup",r._onDrop)),r._loopId=setInterval(r._emulateDragOver,50)):(a&&(a.effectAllowed="move",s.setData&&s.setData.call(r,a,t)),H(E,"drop",r),r._dragStartId=at(r._dragStarted))},_onDragOver:function(a){var s,l,c,f,p=this.el,m=this.options,_=m.group,y=X.active,D=g===_,x=!1,T=m.sort;if(void 0!==a.preventDefault&&(a.preventDefault(),!m.dragoverBubble&&a.stopPropagation()),!t.animated&&(b=!0,y&&!m.disabled&&(D?T||(f=!o.contains(t)):v===this||(y.lastPullMode=g.checkPull(this,y,t,a))&&_.checkPut(this,y,t,a))&&(void 0===a.rootEl||a.rootEl===this.el))){if(Y(a,m,this.el),P)return;if(s=V(a.target,m.draggable,p),l=t.getBoundingClientRect(),v!==this&&(v=this,x=!0),f)return U(y,!0),e=o,void(i||r?o.insertBefore(t,i||r):T||o.appendChild(t));if(0===p.children.length||p.children[0]===n||p===a.target&&function(t,e){var n=t.lastElementChild.getBoundingClientRect();return e.clientY-(n.top+n.height)>5||e.clientX-(n.left+n.width)>5}(p,a)){if(0!==p.children.length&&p.children[0]!==n&&p===a.target&&(s=p.lastElementChild),s){if(s.animated)return;c=s.getBoundingClientRect()}U(y,D),!1!==Q(o,p,t,l,s,c,a)&&(t.contains(p)||(p.appendChild(t),e=p),this._animate(l,t),s&&this._animate(c,s))}else if(s&&!s.animated&&s!==t&&void 0!==s.parentNode[w]){d!==s&&(d=s,u=z(s),h=z(s.parentNode));var E=(c=s.getBoundingClientRect()).right-c.left,S=c.bottom-c.top,I=C.test(u.cssFloat+u.display)||"flex"==h.display&&0===h["flex-direction"].indexOf("row"),k=s.offsetWidth>t.offsetWidth,N=s.offsetHeight>t.offsetHeight,O=(I?(a.clientX-c.left)/E:(a.clientY-c.top)/S)>.5,A=s.nextElementSibling,L=!1;if(I){var B=t.offsetTop,R=s.offsetTop;L=B===R?s.previousElementSibling===t&&!k||O&&k:s.previousElementSibling===t||t.previousElementSibling===s?(a.clientY-c.top)/S>.5:R>B}else x||(L=A!==t&&!N||O&&N);var F=Q(o,p,t,l,s,c,a,L);!1!==F&&(1!==F&&-1!==F||(L=1===F),P=!0,M(K,30),U(y,D),t.contains(p)||(L&&!A?p.appendChild(t):s.parentNode.insertBefore(t,L?A:s)),e=t.parentNode,this._animate(l,t),this._animate(c,s))}}},_animate:function(t,e){var n=this.options.animation;if(n){var i=e.getBoundingClientRect();1===t.nodeType&&(t=t.getBoundingClientRect()),z(e,"transition","none"),z(e,"transform","translate3d("+(t.left-i.left)+"px,"+(t.top-i.top)+"px,0)"),e.offsetWidth,z(e,"transition","all "+n+"ms"),z(e,"transform","translate3d(0,0,0)"),clearTimeout(e.animated),e.animated=M(function(){z(e,"transition",""),z(e,"transform",""),e.animated=!1},n)}},_offUpEvents:function(){var t=this.el.ownerDocument;W(E,"touchmove",this._onTouchMove),W(E,"pointermove",this._onTouchMove),W(t,"mouseup",this._onDrop),W(t,"touchend",this._onDrop),W(t,"pointerup",this._onDrop),W(t,"touchcancel",this._onDrop),W(t,"pointercancel",this._onDrop),W(t,"selectstart",this)},_onDrop:function(a){var s=this.el,l=this.options;clearInterval(this._loopId),clearInterval(D.pid),clearTimeout(this._dragStartTimer),st(this._cloneId),st(this._dragStartId),W(E,"mouseover",this),W(E,"mousemove",this._onTouchMove),this.nativeDraggable&&(W(E,"drop",this),W(s,"dragstart",this._onDragStart)),this._offUpEvents(),a&&(b&&(a.preventDefault(),!l.dropBubble&&a.stopPropagation()),n&&n.parentNode&&n.parentNode.removeChild(n),o!==e&&"clone"===X.active.lastPullMode||i&&i.parentNode&&i.parentNode.removeChild(i),t&&(this.nativeDraggable&&W(t,"dragend",this),Z(t),t.style["will-change"]="",q(t,this.options.ghostClass,!1),q(t,this.options.chosenClass,!1),J(this,o,"unchoose",t,e,o,f),o!==e?(p=et(t,l.draggable))>=0&&(J(null,e,"add",t,e,o,f,p),J(this,o,"remove",t,e,o,f,p),J(null,e,"sort",t,e,o,f,p),J(this,o,"sort",t,e,o,f,p)):t.nextSibling!==r&&(p=et(t,l.draggable))>=0&&(J(this,o,"update",t,e,o,f,p),J(this,o,"sort",t,e,o,f,p)),X.active&&(null!=p&&-1!==p||(p=f),J(this,o,"end",t,e,o,f,p),this.save()))),this._nulling()},_nulling:function(){o=t=e=n=r=i=a=s=l=m=_=b=p=d=u=v=g=X.active=null,R.forEach(function(t){t.checked=!0}),R.length=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragover":case"dragenter":t&&(this._onDragOver(e),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.preventDefault()}(e));break;case"mouseover":this._onDrop(e);break;case"selectstart":e.preventDefault()}},toArray:function(){for(var t,e=[],n=this.el.children,i=0,o=n.length,r=this.options;i<o;i++)V(t=n[i],r.draggable,this.el)&&e.push(t.getAttribute(r.dataIdAttr)||tt(t));return e},sort:function(t){var e={},n=this.el;this.toArray().forEach(function(t,i){var o=n.children[i];V(o,this.options.draggable,n)&&(e[t]=o)},this),t.forEach(function(t){e[t]&&(n.removeChild(e[t]),n.appendChild(e[t]))})},save:function(){var t=this.options.store;t&&t.set(this)},closest:function(t,e){return V(t,e||this.options.draggable,this.el)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];n[t]=e,"group"===t&&$(n)},destroy:function(){var t=this.el;t[w]=null,W(t,"mousedown",this._onTapStart),W(t,"touchstart",this._onTapStart),W(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(W(t,"dragover",this),W(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),F.splice(F.indexOf(this._onDragOver),1),this._onDrop(),this.el=t=null}},H(E,"touchmove",function(t){X.active&&t.preventDefault()}),X.utils={on:H,off:W,css:z,find:G,is:function(t,e){return!!V(t,e,t)},extend:ot,throttle:it,closest:V,toggleClass:q,clone:rt,index:et,nextTick:at,cancelNextTick:st},X.create=function(t,e){return new X(t,e)},X.version="1.7.0",X})},mRhs:function(t,e){},"x+xX":function(t,e){}});
//# sourceMappingURL=1.af6c24c6df69abd86980.js.map