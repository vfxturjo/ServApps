import{S as h,i as v,s as L,k as g,l as r,H as u,p as f,J as I,K as M,a as c,h as _,L as D,M as H,w as N,A as d,g as p,N as S,O as b,P as w}from"./index.c472aaf2.js";function m(o){let e;function t(a,l){return a[0].svg?j:T}let n=t(o),s=n(o);return{c(){s.c(),e=g()},m(a,l){s.m(a,l),r(a,e,l)},p(a,l){n===(n=t(a))&&s?s.p(a,l):(s.d(1),s=n(a),s&&(s.c(),s.m(e.parentNode,e)))},d(a){s.d(a),a&&f(e)}}}function T(o){let e,t=[o[0].attributes],n={};for(let s=0;s<t.length;s+=1)n=c(n,t[s]);return{c(){e=N("span"),d(e,n)},m(s,a){r(s,e,a)},p(s,a){d(e,n=p(t,[a&1&&s[0].attributes]))},d(s){s&&f(e)}}}function j(o){let e,t=o[0].body+"",n=[o[0].attributes],s={};for(let a=0;a<n.length;a+=1)s=c(s,n[a]);return{c(){e=S("svg"),b(e,s)},m(a,l){r(a,e,l),e.innerHTML=t},p(a,l){l&1&&t!==(t=a[0].body+"")&&(e.innerHTML=t),b(e,s=p(n,[l&1&&a[0].attributes]))},d(a){a&&f(e)}}}function q(o){let e,t=o[0]&&m(o);return{c(){t&&t.c(),e=g()},m(n,s){t&&t.m(n,s),r(n,e,s)},p(n,[s]){n[0]?t?t.p(n,s):(t=m(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:u,o:u,d(n){t&&t.d(n),n&&f(e)}}}function A(o,e,t){const n={name:"",loading:null,destroyed:!1};let s=!1,a=0,l;const k=i=>{typeof e.onLoad=="function"&&e.onLoad(i),w()("load",{icon:i})};function y(){t(3,a++,a)}return I(()=>{t(2,s=!0)}),M(()=>{t(1,n.destroyed=!0,n),n.loading&&(n.loading.abort(),t(1,n.loading=null,n))}),o.$$set=i=>{t(6,e=c(c({},e),_(i)))},o.$$.update=()=>{{const i=D(e.icon,n,s,y,k);t(0,l=i?H(i.data,e):null),l&&i.classes&&t(0,l.attributes.class=(typeof e.class=="string"?e.class+" ":"")+i.classes.join(" "),l)}},e=_(e),[l,n,s,a]}class J extends h{constructor(e){super(),v(this,e,A,q,L,{})}}export{J as I};