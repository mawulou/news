(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08a2f32e"],{"28a5":function(t,e,i){"use strict";var n=i("aae3"),r=i("cb7c"),l=i("ebd6"),o=i("0390"),a=i("9def"),c=i("5f1b"),s=i("520a"),u=i("79e5"),h=Math.min,f=[].push,d="split",g="length",p="lastIndex",v=4294967295,w=!u((function(){RegExp(v,"y")}));i("214f")("split",2,(function(t,e,i,u){var m;return m="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[g]||2!="ab"[d](/(?:ab)*/)[g]||4!="."[d](/(.?)(.?)/)[g]||"."[d](/()()/)[g]>1||""[d](/.?/)[g]?function(t,e){var r=String(this);if(void 0===t&&0===e)return[];if(!n(t))return i.call(r,t,e);var l,o,a,c=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,d=void 0===e?v:e>>>0,w=new RegExp(t.source,u+"g");while(l=s.call(w,r)){if(o=w[p],o>h&&(c.push(r.slice(h,l.index)),l[g]>1&&l.index<r[g]&&f.apply(c,l.slice(1)),a=l[0][g],h=o,c[g]>=d))break;w[p]===l.index&&w[p]++}return h===r[g]?!a&&w.test("")||c.push(""):c.push(r.slice(h)),c[g]>d?c.slice(0,d):c}:"0"[d](void 0,0)[g]?function(t,e){return void 0===t&&0===e?[]:i.call(this,t,e)}:i,[function(i,n){var r=t(this),l=void 0==i?void 0:i[e];return void 0!==l?l.call(i,r,n):m.call(String(r),i,n)},function(t,e){var n=u(m,t,this,e,m!==i);if(n.done)return n.value;var s=r(t),f=String(this),d=l(s,RegExp),g=s.unicode,p=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(w?"y":"g"),x=new d(w?s:"^(?:"+s.source+")",p),b=void 0===e?v:e>>>0;if(0===b)return[];if(0===f.length)return null===c(x,f)?[f]:[];var k=0,C=0,R=[];while(C<f.length){x.lastIndex=w?C:0;var y,E=c(x,w?f:f.slice(C));if(null===E||(y=h(a(x.lastIndex+(w?0:C)),f.length))===k)C=o(f,C,g);else{if(R.push(f.slice(k,C)),R.length===b)return R;for(var I=1;I<=E.length-1;I++)if(R.push(E[I]),R.length===b)return R;C=k=y}}return R.push(f.slice(k)),R}]}))},"2f80":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("van-nav-bar",{attrs:{title:"各大电商平台购物券",fixed:"true","left-text":"返回","right-text":"分享链接","left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}}),i("iframe",{staticStyle:{"margin-top":"50px",border:"0px","margin-bottom":"50px"},attrs:{src:"http://www.tzbridge.cn/mall/?sign=1qCb3",width:t.width,height:t.height}})],1)},r=[],l=(i("28a5"),i("a481"),i("2241")),o={name:"FaceRecognition",components:{Dialog:l["a"]},data:function(){return{videoEle:null,width:"500px",height:"800px"}},created:function(){this.width=window.innerWidth-10,this.height=window.innerHeight-20},methods:{onClickLeft:function(){this.$router.back()},onClickRight:function(){var t=window.location.href.replace("?from=singlemessage",""),e=t.split("#")[0]+"html/redirect.html?appRedirect="+encodeURIComponent(t);this.$copyText(e).then((function(t){l["a"].alert({title:"",message:"链接复制成功"}).then((function(){})),console.log(t)}),(function(t){alert("Can not copy"),console.log(t)}))}}},a=o,c=i("2877"),s=Object(c["a"])(a,n,r,!1,null,"6f3cb29a",null);e["default"]=s.exports},aae3:function(t,e,i){var n=i("d3f4"),r=i("2d95"),l=i("2b4c")("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[l])?!!e:"RegExp"==r(t))}}}]);