(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{jkDv:function(t,n,e){"use strict";e.r(n),e.d(n,"AdminModule",function(){return d});var a=e("ofXK"),r=e("fXoL"),o=e("H+bZ"),c=e("tyNb");let i=(()=>{class t{constructor(t,n){this.api=t,this.router=n,this.menu=[{name:"Beranda",icon:"beranda",url:"/admin/beranda"}]}ngOnInit(){this.checkLogin()}checkLogin(){this.api.get("bookswithauth/status").subscribe(t=>{},t=>{this.router.navigate(["/login"])})}logout(){confirm("Keluar aplikasi?")&&(localStorage.removeItem("appToken"),window.location.reload())}}return t.\u0275fac=function(n){return new(n||t)(r.Ob(o.a),r.Ob(c.a))},t.\u0275cmp=r.Ib({type:t,selectors:[["app-admin"]],decls:2,vars:0,template:function(t,n){1&t&&(r.Ub(0,"p"),r.yc(1,"admin works!"),r.Tb())},styles:[""]}),t})();var s=e("hctd"),p=e("3Pt+"),u=e("tk/3");const l=[{path:"",component:i,children:[{path:"beranda",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Ib({type:t,selectors:[["app-beranda"]],decls:2,vars:0,template:function(t,n){1&t&&(r.Ub(0,"p"),r.yc(1,"beranda works!"),r.Tb())},styles:[""]}),t})()},{path:"",pathMatch:"full",redirectTo:"/admin/beranda"}]}];let d=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=r.Mb({type:t}),t.\u0275inj=r.Lb({imports:[[a.c,c.c.forChild(l),s.a,p.e,u.b]]}),t})()}}]);