(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e7a1194a"],{"16f4":function(t,e,i){t.exports=i.p+"img/404.41dba65c.png"},"28a5":function(t,e,i){"use strict";var n=i("aae3"),r=i("cb7c"),o=i("ebd6"),l=i("0390"),c=i("9def"),a=i("5f1b"),u=i("520a"),s=i("79e5"),h=Math.min,f=[].push,d="split",g="length",p="lastIndex",v=4294967295,w=!s((function(){RegExp(v,"y")}));i("214f")("split",2,(function(t,e,i,s){var m;return m="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[g]||2!="ab"[d](/(?:ab)*/)[g]||4!="."[d](/(.?)(.?)/)[g]||"."[d](/()()/)[g]>1||""[d](/.?/)[g]?function(t,e){var r=String(this);if(void 0===t&&0===e)return[];if(!n(t))return i.call(r,t,e);var o,l,c,a=[],s=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,d=void 0===e?v:e>>>0,w=new RegExp(t.source,s+"g");while(o=u.call(w,r)){if(l=w[p],l>h&&(a.push(r.slice(h,o.index)),o[g]>1&&o.index<r[g]&&f.apply(a,o.slice(1)),c=o[0][g],h=l,a[g]>=d))break;w[p]===o.index&&w[p]++}return h===r[g]?!c&&w.test("")||a.push(""):a.push(r.slice(h)),a[g]>d?a.slice(0,d):a}:"0"[d](void 0,0)[g]?function(t,e){return void 0===t&&0===e?[]:i.call(this,t,e)}:i,[function(i,n){var r=t(this),o=void 0==i?void 0:i[e];return void 0!==o?o.call(i,r,n):m.call(String(r),i,n)},function(t,e){var n=s(m,t,this,e,m!==i);if(n.done)return n.value;var u=r(t),f=String(this),d=o(u,RegExp),g=u.unicode,p=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(w?"y":"g"),b=new d(w?u:"^(?:"+u.source+")",p),x=void 0===e?v:e>>>0;if(0===x)return[];if(0===f.length)return null===a(b,f)?[f]:[];var y=0,k=0,$=[];while(k<f.length){b.lastIndex=w?k:0;var _,C=a(b,w?f:f.slice(k));if(null===C||(_=h(c(b.lastIndex+(w?0:k)),f.length))===y)k=l(f,k,g);else{if($.push(f.slice(y,k)),$.length===x)return $;for(var E=1;E<=C.length-1;E++)if($.push(C[E]),$.length===x)return $;k=y=_}}return $.push(f.slice(y)),$}]}))},"99ad":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("van-nav-bar",{attrs:{title:t.title,fixed:"true","left-text":"返回","right-text":"分享链接","left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}}),i("iframe",{staticStyle:{"margin-top":"50px",border:"0px","margin-bottom":"50px"},attrs:{src:t.href,width:t.width,height:t.height}})],1)},r=[],o=(i("28a5"),i("2241")),l=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"margin-top":"45%","text-align":"center",color:"#969799"}},[n("img",{attrs:{src:i("16f4")}}),n("br"),t._v("\n    页面找不到了!\n")])}],a={name:"404"},u=a,s=i("2877"),h=Object(s["a"])(u,l,c,!1,null,"5ba95518",null),f=h.exports,d=(i("bc3a"),{name:"ArticleDetail",components:{View404:f,Dialog:o["a"]},data:function(){return{title:"详情",content:!1,outerHref:!1,href:""}},created:function(){this.width=window.innerWidth-10,this.height=window.innerHeight-20,document.title=this.$route.query.title,this.init()},methods:{onClickLeft:function(){var t=document.referrer,e=window.location.href.split("#")[0];t&&e==t.split("#")[0]?this.$router.back():window.location.href=e},onClickRight:function(){var t=window.location.href;this.$copyText(t).then((function(t){o["a"].alert({title:"",message:"链接复制成功"}).then((function(){})),console.log(t)}),(function(t){alert("Can not copy"),console.log(t)}))},init:function(){this.title=this.$route.query.title,this.outerHref=0==this.$route.query.href.indexOf("http://"),this.href=this.$route.query.href}}}),g=d,p=Object(s["a"])(g,n,r,!1,null,"c888b808",null);e["default"]=p.exports},aae3:function(t,e,i){var n=i("d3f4"),r=i("2d95"),o=i("2b4c")("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==r(t))}}}]);