import{aC as ce,aD as Le,aE as se,a7 as he,a as ue,ak as ie,a8 as Se,aF as Oe,aG as Me,S as ke,J as Ce,M as ae,K as Z,aA as be,a4 as xe,a3 as oe,r as S,aH as le,aI as $e,aJ as Re,aK as _e,Z as Fe,aL as qe,m as O,N as Ee,aM as ze,j,ad as fe,ae as pe,o as B,c as U,b as H,n as G,w as K,aN as Pe,Q as $,ay as P,s as te,d as b,R as je,F as me,p as Te,T as Ie,B as Ke,X as Ve,Y as He,aO as Ue,a2 as q,aP as We,aq as Ye,aQ as Je,k as ge,aR as Qe,t as V,af as Ge,e as p,f as Q,ah as De,x as Xe,E as Ze,i as et,aj as tt}from"./index-dtHZBTLx.js";import{u as nt,E as ot}from"./use-table-handlers-UakrxxyC.js";import{a as at,E as dt}from"./el-form-item-BY7osHy-.js";import{l as st,r as rt,s as it,u as lt,b as ct}from"./app-role-RC62qRUl.js";import{l as ht}from"./app-resource-DCnCGPzM.js";const X="$treeNodeId",we=function(t,e){!e||e[X]||Object.defineProperty(e,X,{value:t.id,enumerable:!1,configurable:!1,writable:!1})},ve=function(t,e){return t?e[t]:e[X]},ye=(t,e,n)=>{const o=t.value.currentNode;n();const a=t.value.currentNode;o!==a&&e("current-change",a?a.data:null,a)},Ne=t=>{let e=!0,n=!0,o=!0;for(let a=0,d=t.length;a<d;a++){const s=t[a];(s.checked!==!0||s.indeterminate)&&(e=!1,s.disabled||(o=!1)),(s.checked!==!1||s.indeterminate)&&(n=!1)}return{all:e,none:n,allWithoutDisable:o,half:!e&&!n}},ne=function(t){if(t.childNodes.length===0||t.loading)return;const{all:e,none:n,half:o}=Ne(t.childNodes);e?(t.checked=!0,t.indeterminate=!1):o?(t.checked=!1,t.indeterminate=!0):n&&(t.checked=!1,t.indeterminate=!1);const a=t.parent;!a||a.level===0||t.store.checkStrictly||ne(a)},re=function(t,e){const n=t.store.props,o=t.data||{},a=n[e];if(ie(a))return a(o,t);if(Se(a))return o[a];if(he(a)){const d=o[e];return d===void 0?"":d}};let ut=0;class W{constructor(e){this.id=ut++,this.text=null,this.checked=!1,this.indeterminate=!1,this.data=null,this.expanded=!1,this.parent=null,this.visible=!0,this.isCurrent=!1,this.canFocus=!1;for(const n in e)ce(e,n)&&(this[n]=e[n]);this.level=0,this.loaded=!1,this.childNodes=[],this.loading=!1,this.parent&&(this.level=this.parent.level+1)}initialize(){const e=this.store;if(!e)throw new Error("[Node]store is required!");e.registerNode(this);const n=e.props;if(n&&typeof n.isLeaf<"u"){const d=re(this,"isLeaf");Le(d)&&(this.isLeafByUser=d)}if(e.lazy!==!0&&this.data?(this.setData(this.data),e.defaultExpandAll&&(this.expanded=!0,this.canFocus=!0)):this.level>0&&e.lazy&&e.defaultExpandAll&&!this.isLeafByUser&&this.expand(),se(this.data)||we(this,this.data),!this.data)return;const o=e.defaultExpandedKeys,a=e.key;a&&o&&o.includes(this.key)&&this.expand(null,e.autoExpandParent),a&&e.currentNodeKey!==void 0&&this.key===e.currentNodeKey&&(e.currentNode=this,e.currentNode.isCurrent=!0),e.lazy&&e._initDefaultCheckedNode(this),this.updateLeafState(),this.parent&&(this.level===1||this.parent.expanded===!0)&&(this.canFocus=!0)}setData(e){se(e)||we(this,e),this.data=e,this.childNodes=[];let n;this.level===0&&se(this.data)?n=this.data:n=re(this,"children")||[];for(let o=0,a=n.length;o<a;o++)this.insertChild({data:n[o]})}get label(){return re(this,"label")}get key(){const e=this.store.key;return this.data?this.data[e]:null}get disabled(){return re(this,"disabled")}get nextSibling(){const e=this.parent;if(e){const n=e.childNodes.indexOf(this);if(n>-1)return e.childNodes[n+1]}return null}get previousSibling(){const e=this.parent;if(e){const n=e.childNodes.indexOf(this);if(n>-1)return n>0?e.childNodes[n-1]:null}return null}contains(e,n=!0){return(this.childNodes||[]).some(o=>o===e||n&&o.contains(e))}remove(){const e=this.parent;e&&e.removeChild(this)}insertChild(e,n,o){if(!e)throw new Error("InsertChild error: child is required.");if(!(e instanceof W)){if(!o){const a=this.getChildren(!0);a.includes(e.data)||(he(n)||n<0?a.push(e.data):a.splice(n,0,e.data))}Object.assign(e,{parent:this,store:this.store}),e=ue(new W(e)),e instanceof W&&e.initialize()}e.level=this.level+1,he(n)||n<0?this.childNodes.push(e):this.childNodes.splice(n,0,e),this.updateLeafState()}insertBefore(e,n){let o;n&&(o=this.childNodes.indexOf(n)),this.insertChild(e,o)}insertAfter(e,n){let o;n&&(o=this.childNodes.indexOf(n),o!==-1&&(o+=1)),this.insertChild(e,o)}removeChild(e){const n=this.getChildren()||[],o=n.indexOf(e.data);o>-1&&n.splice(o,1);const a=this.childNodes.indexOf(e);a>-1&&(this.store&&this.store.deregisterNode(e),e.parent=null,this.childNodes.splice(a,1)),this.updateLeafState()}removeChildByData(e){let n=null;for(let o=0;o<this.childNodes.length;o++)if(this.childNodes[o].data===e){n=this.childNodes[o];break}n&&this.removeChild(n)}expand(e,n){const o=()=>{if(n){let a=this.parent;for(;a.level>0;)a.expanded=!0,a=a.parent}this.expanded=!0,e&&e(),this.childNodes.forEach(a=>{a.canFocus=!0})};this.shouldLoadData()?this.loadData(a=>{se(a)&&(this.checked?this.setChecked(!0,!0):this.store.checkStrictly||ne(this),o())}):o()}doCreateChildren(e,n={}){e.forEach(o=>{this.insertChild(Object.assign({data:o},n),void 0,!0)})}collapse(){this.expanded=!1,this.childNodes.forEach(e=>{e.canFocus=!1})}shouldLoadData(){return this.store.lazy===!0&&this.store.load&&!this.loaded}updateLeafState(){if(this.store.lazy===!0&&this.loaded!==!0&&typeof this.isLeafByUser<"u"){this.isLeaf=this.isLeafByUser;return}const e=this.childNodes;if(!this.store.lazy||this.store.lazy===!0&&this.loaded===!0){this.isLeaf=!e||e.length===0;return}this.isLeaf=!1}setChecked(e,n,o,a){if(this.indeterminate=e==="half",this.checked=e===!0,this.store.checkStrictly)return;if(!(this.shouldLoadData()&&!this.store.checkDescendants)){const{all:s,allWithoutDisable:i}=Ne(this.childNodes);!this.isLeaf&&!s&&i&&(this.checked=!1,e=!1);const f=()=>{if(n){const k=this.childNodes;for(let h=0,g=k.length;h<g;h++){const N=k[h];a=a||e!==!1;const v=N.disabled?N.checked:a;N.setChecked(v,n,!0,a)}const{half:l,all:c}=Ne(k);c||(this.checked=c,this.indeterminate=l)}};if(this.shouldLoadData()){this.loadData(()=>{f(),ne(this)},{checked:e!==!1});return}else f()}const d=this.parent;!d||d.level===0||o||ne(d)}getChildren(e=!1){if(this.level===0)return this.data;const n=this.data;if(!n)return null;const o=this.store.props;let a="children";return o&&(a=o.children||"children"),n[a]===void 0&&(n[a]=null),e&&!n[a]&&(n[a]=[]),n[a]}updateChildren(){const e=this.getChildren()||[],n=this.childNodes.map(d=>d.data),o={},a=[];e.forEach((d,s)=>{const i=d[X];!!i&&n.findIndex(k=>k[X]===i)>=0?o[i]={index:s,data:d}:a.push({index:s,data:d})}),this.store.lazy||n.forEach(d=>{o[d[X]]||this.removeChildByData(d)}),a.forEach(({index:d,data:s})=>{this.insertChild({data:s},d)}),this.updateLeafState()}loadData(e,n={}){if(this.store.lazy===!0&&this.store.load&&!this.loaded&&(!this.loading||Object.keys(n).length)){this.loading=!0;const o=d=>{this.childNodes=[],this.doCreateChildren(d,n),this.loaded=!0,this.loading=!1,this.updateLeafState(),e&&e.call(this,d)},a=()=>{this.loading=!1};this.store.load(this,o,a)}else e&&e.call(this)}eachNode(e){const n=[this];for(;n.length;){const o=n.shift();n.unshift(...o.childNodes),e(o)}}reInitChecked(){this.store.checkStrictly||ne(this)}}class ft{constructor(e){this.currentNode=null,this.currentNodeKey=null;for(const n in e)ce(e,n)&&(this[n]=e[n]);this.nodesMap={}}initialize(){if(this.root=new W({data:this.data,store:this}),this.root.initialize(),this.lazy&&this.load){const e=this.load;e(this.root,n=>{this.root.doCreateChildren(n),this._initDefaultCheckedNodes()})}else this._initDefaultCheckedNodes()}filter(e){const n=this.filterNodeMethod,o=this.lazy,a=function(d){const s=d.root?d.root.childNodes:d.childNodes;if(s.forEach(i=>{i.visible=n.call(i,e,i.data,i),a(i)}),!d.visible&&s.length){let i=!0;i=!s.some(f=>f.visible),d.root?d.root.visible=i===!1:d.visible=i===!1}e&&d.visible&&!d.isLeaf&&(!o||d.loaded)&&d.expand()};a(this)}setData(e){e!==this.root.data?(this.nodesMap={},this.root.setData(e),this._initDefaultCheckedNodes(),this.setCurrentNodeKey(this.currentNodeKey)):this.root.updateChildren()}getNode(e){if(e instanceof W)return e;const n=Oe(e)?ve(this.key,e):e;return this.nodesMap[n]||null}insertBefore(e,n){const o=this.getNode(n);o.parent.insertBefore({data:e},o)}insertAfter(e,n){const o=this.getNode(n);o.parent.insertAfter({data:e},o)}remove(e){const n=this.getNode(e);n&&n.parent&&(n===this.currentNode&&(this.currentNode=null),n.parent.removeChild(n))}append(e,n){const o=Me(n)?this.root:this.getNode(n);o&&o.insertChild({data:e})}_initDefaultCheckedNodes(){const e=this.defaultCheckedKeys||[],n=this.nodesMap;e.forEach(o=>{const a=n[o];a&&a.setChecked(!0,!this.checkStrictly)})}_initDefaultCheckedNode(e){(this.defaultCheckedKeys||[]).includes(e.key)&&e.setChecked(!0,!this.checkStrictly)}setDefaultCheckedKey(e){e!==this.defaultCheckedKeys&&(this.defaultCheckedKeys=e,this._initDefaultCheckedNodes())}registerNode(e){const n=this.key;!e||!e.data||(n?e.key!==void 0&&(this.nodesMap[e.key]=e):this.nodesMap[e.id]=e)}deregisterNode(e){!this.key||!e||!e.data||(e.childNodes.forEach(o=>{this.deregisterNode(o)}),delete this.nodesMap[e.key])}getCheckedNodes(e=!1,n=!1){const o=[],a=function(d){(d.root?d.root.childNodes:d.childNodes).forEach(i=>{(i.checked||n&&i.indeterminate)&&(!e||e&&i.isLeaf)&&o.push(i.data),a(i)})};return a(this),o}getCheckedKeys(e=!1){return this.getCheckedNodes(e).map(n=>(n||{})[this.key])}getHalfCheckedNodes(){const e=[],n=function(o){(o.root?o.root.childNodes:o.childNodes).forEach(d=>{d.indeterminate&&e.push(d.data),n(d)})};return n(this),e}getHalfCheckedKeys(){return this.getHalfCheckedNodes().map(e=>(e||{})[this.key])}_getAllNodes(){const e=[],n=this.nodesMap;for(const o in n)ce(n,o)&&e.push(n[o]);return e}updateChildren(e,n){const o=this.nodesMap[e];if(!o)return;const a=o.childNodes;for(let d=a.length-1;d>=0;d--){const s=a[d];this.remove(s.data)}for(let d=0,s=n.length;d<s;d++){const i=n[d];this.append(i,o.data)}}_setCheckedKeys(e,n=!1,o){const a=this._getAllNodes().sort((f,k)=>f.level-k.level),d=Object.create(null),s=Object.keys(o);a.forEach(f=>f.setChecked(!1,!1));const i=f=>{f.childNodes.forEach(k=>{var l;d[k.data[e]]=!0,(l=k.childNodes)!=null&&l.length&&i(k)})};for(let f=0,k=a.length;f<k;f++){const l=a[f],c=l.data[e].toString();if(!s.includes(c)){l.checked&&!d[c]&&l.setChecked(!1,!1);continue}if(l.childNodes.length&&i(l),l.isLeaf||this.checkStrictly){l.setChecked(!0,!1);continue}if(l.setChecked(!0,!0),n){l.setChecked(!1,!1);const g=function(N){N.childNodes.forEach(C=>{C.isLeaf||C.setChecked(!1,!1),g(C)})};g(l)}}}setCheckedNodes(e,n=!1){const o=this.key,a={};e.forEach(d=>{a[(d||{})[o]]=!0}),this._setCheckedKeys(o,n,a)}setCheckedKeys(e,n=!1){this.defaultCheckedKeys=e;const o=this.key,a={};e.forEach(d=>{a[d]=!0}),this._setCheckedKeys(o,n,a)}setDefaultExpandedKeys(e){e=e||[],this.defaultExpandedKeys=e,e.forEach(n=>{const o=this.getNode(n);o&&o.expand(null,this.autoExpandParent)})}setChecked(e,n,o){const a=this.getNode(e);a&&a.setChecked(!!n,o)}getCurrentNode(){return this.currentNode}setCurrentNode(e){const n=this.currentNode;n&&(n.isCurrent=!1),this.currentNode=e,this.currentNode.isCurrent=!0}setUserCurrentNode(e,n=!0){const o=e[this.key],a=this.nodesMap[o];this.setCurrentNode(a),n&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0)}setCurrentNodeKey(e,n=!0){if(this.currentNodeKey=e,e==null){this.currentNode&&(this.currentNode.isCurrent=!1),this.currentNode=null;return}const o=this.getNode(e);o&&(this.setCurrentNode(o),n&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0))}}const pt=Ce({name:"ElTreeNodeContent",props:{node:{type:Object,required:!0},renderContent:Function},setup(t){const e=ae("tree"),n=Z("NodeInstance"),o=Z("RootTree");return()=>{const a=t.node,{data:d,store:s}=a;return t.renderContent?t.renderContent(be,{_self:n,node:a,data:d,store:s}):xe(o.ctx.slots,"default",{node:a,data:d},()=>[be("span",{class:e.be("node","label")},[a.label])])}}});var gt=ke(pt,[["__file","tree-node-content.vue"]]);function Be(t){const e=Z("TreeNodeMap",null),n={treeNodeExpand:o=>{t.node!==o&&t.node.collapse()},children:[]};return e&&e.children.push(n),oe("TreeNodeMap",n),{broadcastExpanded:o=>{if(t.accordion)for(const a of n.children)a.treeNodeExpand(o)}}}const Ae=Symbol("dragEvents");function yt({props:t,ctx:e,el$:n,dropIndicator$:o,store:a}){const d=ae("tree"),s=S({showDropIndicator:!1,draggingNode:null,dropNode:null,allowDrop:!0,dropType:null});return oe(Ae,{treeNodeDragStart:({event:l,treeNode:c})=>{if(ie(t.allowDrag)&&!t.allowDrag(c.node))return l.preventDefault(),!1;l.dataTransfer.effectAllowed="move";try{l.dataTransfer.setData("text/plain","")}catch{}s.value.draggingNode=c,e.emit("node-drag-start",c.node,l)},treeNodeDragOver:({event:l,treeNode:c})=>{const h=c,g=s.value.dropNode;g&&g.node.id!==h.node.id&&le(g.$el,d.is("drop-inner"));const N=s.value.draggingNode;if(!N||!h)return;let v=!0,C=!0,x=!0,A=!0;ie(t.allowDrop)&&(v=t.allowDrop(N.node,h.node,"prev"),A=C=t.allowDrop(N.node,h.node,"inner"),x=t.allowDrop(N.node,h.node,"next")),l.dataTransfer.dropEffect=C||v||x?"move":"none",(v||C||x)&&(g==null?void 0:g.node.id)!==h.node.id&&(g&&e.emit("node-drag-leave",N.node,g.node,l),e.emit("node-drag-enter",N.node,h.node,l)),v||C||x?s.value.dropNode=h:s.value.dropNode=null,h.node.nextSibling===N.node&&(x=!1),h.node.previousSibling===N.node&&(v=!1),h.node.contains(N.node,!1)&&(C=!1),(N.node===h.node||N.node.contains(h.node))&&(v=!1,C=!1,x=!1);const L=h.$el.querySelector(`.${d.be("node","content")}`).getBoundingClientRect(),R=n.value.getBoundingClientRect();let T;const Y=v?C?.25:x?.45:1:-1,J=x?C?.75:v?.55:0:1;let _=-9999;const u=l.clientY-L.top;u<L.height*Y?T="before":u>L.height*J?T="after":C?T="inner":T="none";const m=h.$el.querySelector(`.${d.be("node","expand-icon")}`).getBoundingClientRect(),E=o.value;T==="before"?_=m.top-R.top:T==="after"&&(_=m.bottom-R.top),E.style.top=`${_}px`,E.style.left=`${m.right-R.left}px`,T==="inner"?$e(h.$el,d.is("drop-inner")):le(h.$el,d.is("drop-inner")),s.value.showDropIndicator=T==="before"||T==="after",s.value.allowDrop=s.value.showDropIndicator||A,s.value.dropType=T,e.emit("node-drag-over",N.node,h.node,l)},treeNodeDragEnd:l=>{const{draggingNode:c,dropType:h,dropNode:g}=s.value;if(l.preventDefault(),l.dataTransfer&&(l.dataTransfer.dropEffect="move"),c&&g){const N={data:c.node.data};h!=="none"&&c.node.remove(),h==="before"?g.node.parent.insertBefore(N,g.node):h==="after"?g.node.parent.insertAfter(N,g.node):h==="inner"&&g.node.insertChild(N),h!=="none"&&(a.value.registerNode(N),a.value.key&&c.node.eachNode(v=>{var C;(C=a.value.nodesMap[v.data[a.value.key]])==null||C.setChecked(v.checked,!a.value.checkStrictly)})),le(g.$el,d.is("drop-inner")),e.emit("node-drag-end",c.node,g.node,h,l),h!=="none"&&e.emit("node-drop",c.node,g.node,h,l)}c&&!g&&e.emit("node-drag-end",c.node,null,h,l),s.value.showDropIndicator=!1,s.value.draggingNode=null,s.value.dropNode=null,s.value.allowDrop=!0}}),{dragState:s}}const Nt=Ce({name:"ElTreeNode",components:{ElCollapseTransition:Re,ElCheckbox:_e,NodeContent:gt,ElIcon:Fe,Loading:qe},props:{node:{type:W,default:()=>({})},props:{type:Object,default:()=>({})},accordion:Boolean,renderContent:Function,renderAfterExpand:Boolean,showCheckbox:{type:Boolean,default:!1}},emits:["node-expand"],setup(t,e){const n=ae("tree"),{broadcastExpanded:o}=Be(t),a=Z("RootTree"),d=S(!1),s=S(!1),i=S(null),f=S(null),k=S(null),l=Z(Ae),c=Ie();oe("NodeInstance",c),t.node.expanded&&(d.value=!0,s.value=!0);const h=a.props.props.children||"children";O(()=>{const u=t.node.data[h];return u&&[...u]},()=>{t.node.updateChildren()}),O(()=>t.node.indeterminate,u=>{v(t.node.checked,u)}),O(()=>t.node.checked,u=>{v(u,t.node.indeterminate)}),O(()=>t.node.childNodes.length,()=>t.node.reInitChecked()),O(()=>t.node.expanded,u=>{Ee(()=>d.value=u),u&&(s.value=!0)});const g=u=>ve(a.props.nodeKey,u.data),N=u=>{const m=t.props.class;if(!m)return{};let E;if(ie(m)){const{data:I}=u;E=m(I,u)}else E=m;return Se(E)?{[E]:!0}:E},v=(u,m)=>{(i.value!==u||f.value!==m)&&a.ctx.emit("check-change",t.node.data,u,m),i.value=u,f.value=m},C=u=>{ye(a.store,a.ctx.emit,()=>{var m;if((m=a==null?void 0:a.props)==null?void 0:m.nodeKey){const I=g(t.node);a.store.value.setCurrentNodeKey(I)}else a.store.value.setCurrentNode(t.node)}),a.currentNode.value=t.node,a.props.expandOnClickNode&&A(),a.props.checkOnClickNode&&!t.node.disabled&&L(null,{target:{checked:!t.node.checked}}),a.ctx.emit("node-click",t.node.data,t.node,c,u)},x=u=>{a.instance.vnode.props.onNodeContextmenu&&(u.stopPropagation(),u.preventDefault()),a.ctx.emit("node-contextmenu",u,t.node.data,t.node,c)},A=()=>{t.node.isLeaf||(d.value?(a.ctx.emit("node-collapse",t.node.data,t.node,c),t.node.collapse()):t.node.expand(()=>{e.emit("node-expand",t.node.data,t.node,c)}))},L=(u,m)=>{t.node.setChecked(m.target.checked,!a.props.checkStrictly),Ee(()=>{const E=a.store.value;a.ctx.emit("check",t.node.data,{checkedNodes:E.getCheckedNodes(),checkedKeys:E.getCheckedKeys(),halfCheckedNodes:E.getHalfCheckedNodes(),halfCheckedKeys:E.getHalfCheckedKeys()})})};return{ns:n,node$:k,tree:a,expanded:d,childNodeRendered:s,oldChecked:i,oldIndeterminate:f,getNodeKey:g,getNodeClass:N,handleSelectChange:v,handleClick:C,handleContextMenu:x,handleExpandIconClick:A,handleCheckChange:L,handleChildNodeExpand:(u,m,E)=>{o(m),a.ctx.emit("node-expand",u,m,E)},handleDragStart:u=>{a.props.draggable&&l.treeNodeDragStart({event:u,treeNode:t})},handleDragOver:u=>{u.preventDefault(),a.props.draggable&&l.treeNodeDragOver({event:u,treeNode:{$el:k.value,node:t.node}})},handleDrop:u=>{u.preventDefault()},handleDragEnd:u=>{a.props.draggable&&l.treeNodeDragEnd(u)},CaretRight:ze}}});function kt(t,e,n,o,a,d){const s=j("el-icon"),i=j("el-checkbox"),f=j("loading"),k=j("node-content"),l=j("el-tree-node"),c=j("el-collapse-transition");return fe((B(),U("div",{ref:"node$",class:$([t.ns.b("node"),t.ns.is("expanded",t.expanded),t.ns.is("current",t.node.isCurrent),t.ns.is("hidden",!t.node.visible),t.ns.is("focusable",!t.node.disabled),t.ns.is("checked",!t.node.disabled&&t.node.checked),t.getNodeClass(t.node)]),role:"treeitem",tabindex:"-1","aria-expanded":t.expanded,"aria-disabled":t.node.disabled,"aria-checked":t.node.checked,draggable:t.tree.props.draggable,"data-key":t.getNodeKey(t.node),onClick:P(t.handleClick,["stop"]),onContextmenu:t.handleContextMenu,onDragstart:P(t.handleDragStart,["stop"]),onDragover:P(t.handleDragOver,["stop"]),onDragend:P(t.handleDragEnd,["stop"]),onDrop:P(t.handleDrop,["stop"])},[H("div",{class:$(t.ns.be("node","content")),style:je({paddingLeft:(t.node.level-1)*t.tree.props.indent+"px"})},[t.tree.props.icon||t.CaretRight?(B(),G(s,{key:0,class:$([t.ns.be("node","expand-icon"),t.ns.is("leaf",t.node.isLeaf),{expanded:!t.node.isLeaf&&t.expanded}]),onClick:P(t.handleExpandIconClick,["stop"])},{default:K(()=>[(B(),G(Pe(t.tree.props.icon||t.CaretRight)))]),_:1},8,["class","onClick"])):te("v-if",!0),t.showCheckbox?(B(),G(i,{key:1,"model-value":t.node.checked,indeterminate:t.node.indeterminate,disabled:!!t.node.disabled,onClick:P(()=>{},["stop"]),onChange:t.handleCheckChange},null,8,["model-value","indeterminate","disabled","onClick","onChange"])):te("v-if",!0),t.node.loading?(B(),G(s,{key:2,class:$([t.ns.be("node","loading-icon"),t.ns.is("loading")])},{default:K(()=>[b(f)]),_:1},8,["class"])):te("v-if",!0),b(k,{node:t.node,"render-content":t.renderContent},null,8,["node","render-content"])],6),b(c,null,{default:K(()=>[!t.renderAfterExpand||t.childNodeRendered?fe((B(),U("div",{key:0,class:$(t.ns.be("node","children")),role:"group","aria-expanded":t.expanded},[(B(!0),U(me,null,Te(t.node.childNodes,h=>(B(),G(l,{key:t.getNodeKey(h),"render-content":t.renderContent,"render-after-expand":t.renderAfterExpand,"show-checkbox":t.showCheckbox,node:h,accordion:t.accordion,props:t.props,onNodeExpand:t.handleChildNodeExpand},null,8,["render-content","render-after-expand","show-checkbox","node","accordion","props","onNodeExpand"]))),128))],10,["aria-expanded"])),[[pe,t.expanded]]):te("v-if",!0)]),_:1})],42,["aria-expanded","aria-disabled","aria-checked","draggable","data-key","onClick","onContextmenu","onDragstart","onDragover","onDragend","onDrop"])),[[pe,t.node.visible]])}var Ct=ke(Nt,[["render",kt],["__file","tree-node.vue"]]);function mt({el$:t},e){const n=ae("tree"),o=Ke([]),a=Ke([]);Ve(()=>{s()}),He(()=>{o.value=Array.from(t.value.querySelectorAll("[role=treeitem]")),a.value=Array.from(t.value.querySelectorAll("input[type=checkbox]"))}),O(a,i=>{i.forEach(f=>{f.setAttribute("tabindex","-1")})}),Ue(t,"keydown",i=>{const f=i.target;if(!f.className.includes(n.b("node")))return;const k=i.code;o.value=Array.from(t.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`));const l=o.value.indexOf(f);let c;if([q.up,q.down].includes(k)){if(i.preventDefault(),k===q.up){c=l===-1?0:l!==0?l-1:o.value.length-1;const g=c;for(;!e.value.getNode(o.value[c].dataset.key).canFocus;){if(c--,c===g){c=-1;break}c<0&&(c=o.value.length-1)}}else{c=l===-1?0:l<o.value.length-1?l+1:0;const g=c;for(;!e.value.getNode(o.value[c].dataset.key).canFocus;){if(c++,c===g){c=-1;break}c>=o.value.length&&(c=0)}}c!==-1&&o.value[c].focus()}[q.left,q.right].includes(k)&&(i.preventDefault(),f.click());const h=f.querySelector('[type="checkbox"]');[q.enter,q.numpadEnter,q.space].includes(k)&&h&&(i.preventDefault(),h.click())});const s=()=>{var i;o.value=Array.from(t.value.querySelectorAll(`.${n.is("focusable")}[role=treeitem]`)),a.value=Array.from(t.value.querySelectorAll("input[type=checkbox]"));const f=t.value.querySelectorAll(`.${n.is("checked")}[role=treeitem]`);if(f.length){f[0].setAttribute("tabindex","0");return}(i=o.value[0])==null||i.setAttribute("tabindex","0")}}const vt=Ce({name:"ElTree",components:{ElTreeNode:Ct},props:{data:{type:Array,default:()=>[]},emptyText:{type:String},renderAfterExpand:{type:Boolean,default:!0},nodeKey:String,checkStrictly:Boolean,defaultExpandAll:Boolean,expandOnClickNode:{type:Boolean,default:!0},checkOnClickNode:Boolean,checkDescendants:{type:Boolean,default:!1},autoExpandParent:{type:Boolean,default:!0},defaultCheckedKeys:Array,defaultExpandedKeys:Array,currentNodeKey:[String,Number],renderContent:Function,showCheckbox:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},allowDrag:Function,allowDrop:Function,props:{type:Object,default:()=>({children:"children",label:"label",disabled:"disabled"})},lazy:{type:Boolean,default:!1},highlightCurrent:Boolean,load:Function,filterNodeMethod:Function,accordion:Boolean,indent:{type:Number,default:18},icon:{type:We}},emits:["check-change","current-change","node-click","node-contextmenu","node-collapse","node-expand","check","node-drag-start","node-drag-end","node-drop","node-drag-leave","node-drag-enter","node-drag-over"],setup(t,e){const{t:n}=Ye(),o=ae("tree"),a=Z(Je,null),d=S(new ft({key:t.nodeKey,data:t.data,lazy:t.lazy,props:t.props,load:t.load,currentNodeKey:t.currentNodeKey,checkStrictly:t.checkStrictly,checkDescendants:t.checkDescendants,defaultCheckedKeys:t.defaultCheckedKeys,defaultExpandedKeys:t.defaultExpandedKeys,autoExpandParent:t.autoExpandParent,defaultExpandAll:t.defaultExpandAll,filterNodeMethod:t.filterNodeMethod}));d.value.initialize();const s=S(d.value.root),i=S(null),f=S(null),k=S(null),{broadcastExpanded:l}=Be(t),{dragState:c}=yt({props:t,ctx:e,el$:f,dropIndicator$:k,store:d});mt({el$:f},d);const h=ge(()=>{const{childNodes:r}=s.value,y=a?a.hasFilteredOptions!==0:!1;return(!r||r.length===0||r.every(({visible:M})=>!M))&&!y});O(()=>t.currentNodeKey,r=>{d.value.setCurrentNodeKey(r)}),O(()=>t.defaultCheckedKeys,r=>{d.value.setDefaultCheckedKey(r)}),O(()=>t.defaultExpandedKeys,r=>{d.value.setDefaultExpandedKeys(r)}),O(()=>t.data,r=>{d.value.setData(r)},{deep:!0}),O(()=>t.checkStrictly,r=>{d.value.checkStrictly=r});const g=r=>{if(!t.filterNodeMethod)throw new Error("[Tree] filterNodeMethod is required when filter");d.value.filter(r)},N=r=>ve(t.nodeKey,r.data),v=r=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in getNodePath");const y=d.value.getNode(r);if(!y)return[];const M=[y.data];let w=y.parent;for(;w&&w!==s.value;)M.push(w.data),w=w.parent;return M.reverse()},C=(r,y)=>d.value.getCheckedNodes(r,y),x=r=>d.value.getCheckedKeys(r),A=()=>{const r=d.value.getCurrentNode();return r?r.data:null},L=()=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in getCurrentKey");const r=A();return r?r[t.nodeKey]:null},R=(r,y)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedNodes");d.value.setCheckedNodes(r,y)},T=(r,y)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedKeys");d.value.setCheckedKeys(r,y)},Y=(r,y,M)=>{d.value.setChecked(r,y,M)},J=()=>d.value.getHalfCheckedNodes(),_=()=>d.value.getHalfCheckedKeys(),u=(r,y=!0)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentNode");ye(d,e.emit,()=>{l(r),d.value.setUserCurrentNode(r,y)})},m=(r,y=!0)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentKey");ye(d,e.emit,()=>{l(),d.value.setCurrentNodeKey(r,y)})},E=r=>d.value.getNode(r),I=r=>{d.value.remove(r)},D=(r,y)=>{d.value.append(r,y)},ee=(r,y)=>{d.value.insertBefore(r,y)},z=(r,y)=>{d.value.insertAfter(r,y)},F=(r,y,M)=>{l(y),e.emit("node-expand",r,y,M)},de=(r,y)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in updateKeyChild");d.value.updateChildren(r,y)};return oe("RootTree",{ctx:e,props:t,store:d,root:s,currentNode:i,instance:Ie()}),oe(Qe,void 0),{ns:o,store:d,root:s,currentNode:i,dragState:c,el$:f,dropIndicator$:k,isEmpty:h,filter:g,getNodeKey:N,getNodePath:v,getCheckedNodes:C,getCheckedKeys:x,getCurrentNode:A,getCurrentKey:L,setCheckedNodes:R,setCheckedKeys:T,setChecked:Y,getHalfCheckedNodes:J,getHalfCheckedKeys:_,setCurrentNode:u,setCurrentKey:m,t:n,getNode:E,remove:I,append:D,insertBefore:ee,insertAfter:z,handleNodeExpand:F,updateKeyChildren:de}}});function bt(t,e,n,o,a,d){const s=j("el-tree-node");return B(),U("div",{ref:"el$",class:$([t.ns.b(),t.ns.is("dragging",!!t.dragState.draggingNode),t.ns.is("drop-not-allow",!t.dragState.allowDrop),t.ns.is("drop-inner",t.dragState.dropType==="inner"),{[t.ns.m("highlight-current")]:t.highlightCurrent}]),role:"tree"},[(B(!0),U(me,null,Te(t.root.childNodes,i=>(B(),G(s,{key:t.getNodeKey(i),node:i,props:t.props,accordion:t.accordion,"render-after-expand":t.renderAfterExpand,"show-checkbox":t.showCheckbox,"render-content":t.renderContent,onNodeExpand:t.handleNodeExpand},null,8,["node","props","accordion","render-after-expand","show-checkbox","render-content","onNodeExpand"]))),128)),t.isEmpty?(B(),U("div",{key:0,class:$(t.ns.e("empty-block"))},[xe(t.$slots,"empty",{},()=>{var i;return[H("span",{class:$(t.ns.e("empty-text"))},V((i=t.emptyText)!=null?i:t.t("el.tree.emptyText")),3)]})],2)):te("v-if",!0),fe(H("div",{ref:"dropIndicator$",class:$(t.ns.e("drop-indicator"))},null,2),[[pe,t.dragState.showDropIndicator]])],2)}var Et=ke(vt,[["render",bt],["__file","tree.vue"]]);const Kt=Ge(Et),Dt={class:"main-body"},wt={class:"toolbar"},St={class:"dialog-footer"},xt={class:"dialog-footer"},Ot={__name:"Role",setup(t){const e=ue({id:"",name:"",remark:""}),n=ue({name:""}),{t:o,tableRef:a,dialogVisible:d,isEdit:s,formLoading:i,formRef:f,doAdd:k,doEdit:l,doSubmit:c,doRemove:h,doSearch:g,doClose:N}=nt(e),v=S([]),C=S(!1),x=S([]),A=S(!1),L=S(),R=ge(()=>[{type:"selection"},{prop:"id",label:o("thead.ID"),minWidth:50},{prop:"name",label:o("thead.roleName"),minWidth:120},{prop:"remark",label:o("thead.remark"),minWidth:120,showOverflowTooltip:!0},{prop:"createdBy",label:o("thead.createdBy"),minWidth:120},{prop:"createdTime",label:o("thead.createdTime"),minWidth:160},{prop:"lastUpdateBy",label:o("thead.updatedBy"),minWidth:120},{prop:"lastUpdateTime",label:o("thead.updatedTime"),minWidth:160}]),T=[{type:"edit"},{label:o("action.bindResource"),onClick:u},{type:"delete"}],Y=ge(()=>({name:[{required:!0,message:o("form.nameRequired"),trigger:"blur"}]}));function J(I,D){h(rt,I,D)}function _(){c({save:it,update:lt})}function u(I){C.value=!0,m(),x.value=I.resourceIds?I.resourceIds.split(","):[]}function m(){ht().then(I=>{v.value=I.data})}function E(){A.value=!0,ct({ids:L.value.getCheckedKeys().toString()}).then(()=>{Xe({message:o("tips.success"),type:"success",shoClose:!0}),C.value=!1}).finally(()=>{A.value=!1})}return(I,D)=>{const ee=Ze,z=at,F=et,de=dt,r=tt,y=ot,M=Kt;return B(),U(me,null,[H("div",Dt,[H("div",wt,[b(de,{inline:!0,model:p(n)},{default:K(()=>[b(z,null,{default:K(()=>[b(ee,{modelValue:p(n).name,"onUpdate:modelValue":D[0]||(D[0]=w=>p(n).name=w),placeholder:p(o)("thead.username")},null,8,["modelValue","placeholder"])]),_:1}),b(z,null,{default:K(()=>[b(F,{icon:"search",type:"primary",onClick:p(g)},{default:K(()=>[Q(V(p(o)("action.search")),1)]),_:1},8,["onClick"])]),_:1}),b(z,null,{default:K(()=>[b(F,{icon:"plus",type:"primary",onClick:p(k)},{default:K(()=>[Q(V(p(o)("action.add")),1)]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),b(r,{ref_key:"tableRef",ref:a,"get-page":p(st),filters:p(n),columns:p(R),operations:T,onHandleEdit:p(l),onHandleDelete:J},null,8,["get-page","filters","columns","onHandleEdit"])]),b(y,{title:p(s)?p(o)("action.edit"):p(o)("action.add"),width:"40%",draggable:"",modelValue:p(d),"onUpdate:modelValue":D[3]||(D[3]=w=>De(d)?d.value=w:null),"close-on-click-modal":!1,onClose:p(N)},{footer:K(()=>[H("div",St,[b(F,{onClick:p(N)},{default:K(()=>[Q(V(p(o)("action.cancel")),1)]),_:1},8,["onClick"]),b(F,{type:"primary",onClick:_,loading:p(i)},{default:K(()=>[Q(V(p(o)("action.submit")),1)]),_:1},8,["loading"])])]),default:K(()=>[b(de,{ref_key:"formRef",ref:f,model:p(e),"label-width":"80px",rules:p(Y)},{default:K(()=>[b(z,{label:p(o)("thead.roleName"),prop:"name"},{default:K(()=>[b(ee,{modelValue:p(e).name,"onUpdate:modelValue":D[1]||(D[1]=w=>p(e).name=w)},null,8,["modelValue"])]),_:1},8,["label"]),b(z,{label:p(o)("thead.remark"),prop:"remark"},{default:K(()=>[b(ee,{modelValue:p(e).remark,"onUpdate:modelValue":D[2]||(D[2]=w=>p(e).remark=w),type:"textarea"},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue","onClose"]),b(y,{title:p(o)("action.bindResource"),width:"40%",draggable:"",modelValue:p(C),"onUpdate:modelValue":D[5]||(D[5]=w=>De(C)?C.value=w:null),"close-on-click-modal":!1},{footer:K(()=>[H("div",xt,[b(F,{onClick:D[4]||(D[4]=w=>C.value=!1)},{default:K(()=>[Q(V(p(o)("action.cancel")),1)]),_:1}),b(F,{type:"primary",onClick:E,loading:p(A)},{default:K(()=>[Q(V(p(o)("action.submit")),1)]),_:1},8,["loading"])])]),default:K(()=>[b(M,{ref_key:"treeRef",ref:L,data:p(v),"show-checkbox":"","node-key":"id","default-expand-all":"","default-checked-keys":p(x),props:{label:"displayName"}},null,8,["data","default-checked-keys"])]),_:1},8,["title","modelValue"])],64)}}};export{Ot as default};