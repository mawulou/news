(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5381047d"],{"025a":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ShareHeader",{attrs:{title:"各大电商平台购物券"}}),n("MyIframe",{attrs:{src:"http://www.tzbridge.cn/mall/?sign=1qCb3"}})],1)},a=[],r=n("2241"),c=n("c78f"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("iframe",{staticStyle:{border:"0px","padding-bottom":"30px"},attrs:{src:t.src,width:t.width,height:t.height}})},l=[],s={name:"MyIframe",data:function(){return{width:"500px",height:"800px"}},props:["src"],created:function(){this.width=window.innerWidth-10,this.height=window.innerHeight-80}},h=s,u=n("2877"),d=Object(u["a"])(h,o,l,!1,null,"2183e04d",null),f=d.exports,p={name:"Mall",components:{Dialog:r["a"],ShareHeader:c["a"],MyIframe:f},data:function(){return{}},created:function(){document.title="内部优惠券-京东、拼多多、淘宝、天猫"}},w=p,g=Object(u["a"])(w,i,a,!1,null,"861dc47a",null);e["default"]=g.exports},c78f:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:t.title,fixed:"true","left-text":"返回","right-text":"分享链接","left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}}),n("div",{staticStyle:{height:"46px"}})],1)},a=[],r=n("2241"),c={name:"ShareHeader",comments:{Dialog:r["a"]},props:["title"],methods:{onClickLeft:function(){this.$router.back()},onClickRight:function(){this.$copyText(window.location.href).then((function(t){r["a"].alert({title:"",message:"链接复制成功"}).then((function(){})),console.log(t)}),(function(t){alert("Can not copy"),console.log(t)}))}}},o=c,l=n("2877"),s=Object(l["a"])(o,i,a,!1,null,"6ca772a4",null);e["a"]=s.exports}}]);