import{j as we,S as oe,i as ue,s as ee,c as N,m as O,t as p,d as m,e as I,f as ce,I as ut,W as xe,a as x,h as _e,q as et,w as j,A as he,l as h,X as ft,B as R,g as De,Y as at,u as tt,r as nt,v as lt,p as k,Z as qe,C as W,_ as Re,H as G,$ as it,a0 as J,a1 as X,b as ct,a2 as Y,x as M,y as P,D as T,n as Z,o as K,a3 as te,a4 as Q,a5 as ke,a6 as F,a7 as ae,a8 as me,a9 as $e,aa as Ne,ab as Oe,ac as Ie,ad as Se,P as st,G as L,ae as se,af as le,k as rt,ag as Be,ah as _t,ai as dt,aj as de,ak as be,al as ze,V as Le,am as pt,J as gt,an as Ce,ao as mt,ap as $t,aq as bt,ar as ht,as as kt,at as wt,au as vt}from"./index.c472aaf2.js";import{L as ie,M as zt,B as re,o as Ct,I as ot,D as yt,a as ne,b as Ee,_ as Nt,c as Ot,d as It,f as St}from"./index.f860b652.js";import{P as ve}from"./P.088ee10a.js";import{I as pe}from"./Icon.860078f8.js";import{H as Dt}from"./Hr.cc98fc63.js";const qt={red:"text-red-600 focus:ring-red-500 dark:focus:ring-red-600",green:"text-green-600 focus:ring-green-500 dark:focus:ring-green-600",purple:"text-purple-600 focus:ring-purple-500 dark:focus:ring-purple-600",teal:"text-teal-600 focus:ring-teal-500 dark:focus:ring-teal-600",yellow:"text-yellow-400 focus:ring-yellow-500 dark:focus:ring-yellow-600",orange:"text-orange-500 focus:ring-orange-500 dark:focus:ring-orange-600",blue:"text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600"},Te=(l,e)=>we(l?"inline-flex":"flex","items-center",e),We=(l,e,t,n,o)=>we("w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2",o===!0&&"mr-2",n?"dark:bg-gray-600 dark:border-gray-500":"dark:bg-gray-700 dark:border-gray-600",l&&"sr-only peer",t&&"rounded",qt[e],o);function Bt(l){let e,t,n,o,r,s,u=[{type:"checkbox"},{__value:l[5]},l[11],{class:t=We(l[3],l[2],!0,l[6],l[10].default||l[9].class)}],f={};for(let i=0;i<u.length;i+=1)f=x(f,u[i]);const a=l[12].default,g=et(a,l,l[25],null);return{c(){e=j("input"),g&&g.c(),he(e,f)},m(i,$){h(i,e,$),e.autofocus&&e.focus(),e.checked=l[1],g&&g.m(i,$),o=!0,r||(s=[ft(n=l[7].call(null,e,l[0])),R(e,"change",l[24]),R(e,"keyup",l[13]),R(e,"keydown",l[14]),R(e,"keypress",l[15]),R(e,"focus",l[16]),R(e,"blur",l[17]),R(e,"click",l[18]),R(e,"mouseover",l[19]),R(e,"mouseenter",l[20]),R(e,"mouseleave",l[21]),R(e,"paste",l[22]),R(e,"change",l[8]),R(e,"change",l[23])],r=!0)},p(i,$){he(e,f=De(u,[{type:"checkbox"},(!o||$&32)&&{__value:i[5]},$&2048&&i[11],(!o||$&1548&&t!==(t=We(i[3],i[2],!0,i[6],i[10].default||i[9].class)))&&{class:t}])),n&&at(n.update)&&$&1&&n.update.call(null,i[0]),$&2&&(e.checked=i[1]),g&&g.p&&(!o||$&33554432)&&tt(g,a,i,i[25],o?lt(a,i[25],$,null):nt(i[25]),null)},i(i){o||(p(g,i),o=!0)},o(i){m(g,i),o=!1},d(i){i&&k(e),g&&g.d(i),r=!1,qe(s)}}}function Mt(l){let e,t;return e=new ie({props:{class:Te(l[4],l[9].class),show:!!l[10].default,$$slots:{default:[Bt]},$$scope:{ctx:l}}}),{c(){N(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},p(n,[o]){const r={};o&528&&(r.class=Te(n[4],n[9].class)),o&1024&&(r.show=!!n[10].default),o&33558063&&(r.$$scope={dirty:o,ctx:n}),e.$set(r)},i(n){t||(p(e.$$.fragment,n),t=!0)},o(n){m(e.$$.fragment,n),t=!1},d(n){I(e,n)}}}function jt(l,e,t){const n=["color","custom","inline","group","value","checked"];let o=ce(e,n),{$$slots:r={},$$scope:s}=e;const u=ut(r);let{color:f="blue"}=e,{custom:a=!1}=e,{inline:g=!1}=e,{group:i=[]}=e,{value:$=""}=e,{checked:C=void 0}=e,b=xe("background");function c(v,U){return C===void 0&&t(1,C=U.includes($)),q(),{update(ge){t(1,C=ge.includes($))}}}function q(){const v=i.indexOf($);C===void 0&&t(1,C=v>=0),C?v<0&&(i.push($),t(0,i)):v>=0&&(i.splice(v,1),t(0,i))}function w(v){W.call(this,l,v)}function A(v){W.call(this,l,v)}function z(v){W.call(this,l,v)}function E(v){W.call(this,l,v)}function _(v){W.call(this,l,v)}function S(v){W.call(this,l,v)}function y(v){W.call(this,l,v)}function V(v){W.call(this,l,v)}function H(v){W.call(this,l,v)}function d(v){W.call(this,l,v)}function B(v){W.call(this,l,v)}function D(){C=this.checked,t(1,C)}return l.$$set=v=>{t(9,e=x(x({},e),_e(v))),t(11,o=ce(e,n)),"color"in v&&t(2,f=v.color),"custom"in v&&t(3,a=v.custom),"inline"in v&&t(4,g=v.inline),"group"in v&&t(0,i=v.group),"value"in v&&t(5,$=v.value),"checked"in v&&t(1,C=v.checked),"$$scope"in v&&t(25,s=v.$$scope)},e=_e(e),[i,C,f,a,g,$,b,c,q,e,u,o,r,w,A,z,E,_,S,y,V,H,d,B,D,s]}class At extends oe{constructor(e){super(),ue(this,e,jt,Mt,ee,{color:2,custom:3,inline:4,group:0,value:5,checked:1})}}function Ht(l){let e,t,n,o=[{type:"range"},l[2],{class:l[1]}],r={};for(let s=0;s<o.length;s+=1)r=x(r,o[s]);return{c(){e=j("input"),he(e,r)},m(s,u){h(s,e,u),e.autofocus&&e.focus(),Re(e,l[0]),t||(n=[R(e,"change",l[9]),R(e,"input",l[9]),R(e,"change",l[4]),R(e,"click",l[5]),R(e,"keydown",l[6]),R(e,"keypress",l[7]),R(e,"keyup",l[8])],t=!0)},p(s,[u]){he(e,r=De(o,[{type:"range"},u&4&&s[2],u&2&&{class:s[1]}])),u&1&&Re(e,s[0])},i:G,o:G,d(s){s&&k(e),t=!1,qe(n)}}}function Pt(l,e,t){const n=["value","size"];let o=ce(e,n),{value:r}=e,{size:s="md"}=e;const u={sm:"h-1 range-sm",md:"h-2",lg:"h-3 range-lg"};let f;function a(c){W.call(this,l,c)}function g(c){W.call(this,l,c)}function i(c){W.call(this,l,c)}function $(c){W.call(this,l,c)}function C(c){W.call(this,l,c)}function b(){r=it(this.value),t(0,r)}return l.$$set=c=>{t(11,e=x(x({},e),_e(c))),t(2,o=ce(e,n)),"value"in c&&t(0,r=c.value),"size"in c&&t(3,s=c.size)},l.$$.update=()=>{var c;t(1,f=we("w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700",(c=u[s])!=null?c:u.md,e.class))},e=_e(e),[r,f,o,s,a,g,i,$,C,b]}class ye extends oe{constructor(e){super(),ue(this,e,Pt,Ht,ee,{value:0,size:3})}}function Rt(l){let e,t,n;const o=l[7].default,r=et(o,l,l[12],null);return{c(){e=j("span"),t=M(),r&&r.c(),P(e,"class",l[3])},m(s,u){h(s,e,u),h(s,t,u),r&&r.m(s,u),n=!0},p(s,u){(!n||u&8)&&P(e,"class",s[3]),r&&r.p&&(!n||u&4096)&&tt(r,o,s,s[12],n?lt(o,s[12],u,null):nt(s[12]),null)},i(s){n||(p(r,s),n=!0)},o(s){m(r,s),n=!1},d(s){s&&k(e),s&&k(t),r&&r.d(s)}}}function Lt(l){let e,t,n,o;const r=[{custom:!0},l[4],{class:l[5].class},{value:l[2]}];function s(a){l[8](a)}function u(a){l[9](a)}let f={$$slots:{default:[Rt]},$$scope:{ctx:l}};for(let a=0;a<r.length;a+=1)f=x(f,r[a]);return l[1]!==void 0&&(f.checked=l[1]),l[0]!==void 0&&(f.group=l[0]),e=new At({props:f}),J.push(()=>X(e,"checked",s,l[1])),J.push(()=>X(e,"group",u,l[0])),e.$on("click",l[10]),e.$on("change",l[11]),{c(){N(e.$$.fragment)},m(a,g){O(e,a,g),o=!0},p(a,[g]){const i=g&52?De(r,[r[0],g&16&&ct(a[4]),g&32&&{class:a[5].class},g&4&&{value:a[2]}]):{};g&4104&&(i.$$scope={dirty:g,ctx:a}),!t&&g&2&&(t=!0,i.checked=a[1],Y(()=>t=!1)),!n&&g&1&&(n=!0,i.group=a[0],Y(()=>n=!1)),e.$set(i)},i(a){o||(p(e.$$.fragment,a),o=!0)},o(a){m(e.$$.fragment,a),o=!1},d(a){I(e,a)}}}const Et="mr-3 bg-gray-200 rounded-full peer-focus:ring-4 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all";function Tt(l,e,t){const n=["size","group","value","checked"];let o=ce(e,n),{$$slots:r={},$$scope:s}=e,{size:u="default"}=e,{group:f=[]}=e,{value:a=""}=e,{checked:g=void 0}=e,i=xe("background");const $={red:"peer-focus:ring-red-300 dark:peer-focus:ring-red-800 peer-checked:bg-red-600",green:"peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:bg-green-600",purple:"peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:bg-purple-600",yellow:"peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:bg-yellow-400",teal:"peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-teal-600",orange:"peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:bg-orange-500",blue:"peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600"},C={small:"w-9 h-5 after:top-[2px] after:left-[2px] after:h-4 after:w-4",default:"w-11 h-6 after:top-0.5 after:left-[2px] after:h-5 after:w-5",large:"w-14 h-7 after:top-0.5 after:left-[4px]  after:h-6 after:w-6"};let b;function c(z){g=z,t(1,g)}function q(z){f=z,t(0,f)}function w(z){W.call(this,l,z)}function A(z){W.call(this,l,z)}return l.$$set=z=>{t(5,e=x(x({},e),_e(z))),t(4,o=ce(e,n)),"size"in z&&t(6,u=z.size),"group"in z&&t(0,f=z.group),"value"in z&&t(2,a=z.value),"checked"in z&&t(1,g=z.checked),"$$scope"in z&&t(12,s=z.$$scope)},l.$$.update=()=>{var z;t(3,b=we(Et,i?"dark:bg-gray-600 dark:border-gray-500":"dark:bg-gray-700 dark:border-gray-600",$[(z=o.color)!=null?z:"blue"],C[u],"relative"))},e=_e(e),[f,g,a,b,o,e,u,r,c,q,w,A,s]}class fe extends oe{constructor(e){super(),ue(this,e,Tt,Lt,ee,{size:6,group:0,value:2,checked:1})}}function Wt(l){let e,t,n,o,r,s,u,f=l[7]&&Ve(l);return{c(){f&&f.c(),e=M(),t=j("button"),P(t,"class",n="transition-all absolute right-0 top-0 h-[100%] bg-blue-400 bg-opacity-30 "+(l[7]?"w-[68%]":"w-[100%]"))},m(a,g){f&&f.m(a,g),h(a,e,g),h(a,t,g),r=!0,s||(u=R(t,"click",l[15]),s=!0)},p(a,g){a[7]?f?(f.p(a,g),g&128&&p(f,1)):(f=Ve(a),f.c(),p(f,1),f.m(e.parentNode,e)):f&&(Z(),m(f,1,1,()=>{f=null}),K()),(!r||g&128&&n!==(n="transition-all absolute right-0 top-0 h-[100%] bg-blue-400 bg-opacity-30 "+(a[7]?"w-[68%]":"w-[100%]")))&&P(t,"class",n)},i(a){r||(p(f),te(()=>{o||(o=Q(t,le,{},!0)),o.run(1)}),r=!0)},o(a){m(f),o||(o=Q(t,le,{},!1)),o.run(0),r=!1},d(a){f&&f.d(a),a&&k(e),a&&k(t),a&&o&&o.end(),s=!1,u()}}}function Vt(l){let e,t,n;return{c(){e=j("button"),P(e,"class","absolute left-0 top-0 w-[30%] h-[100%] bg-red-400 bg-opacity-30")},m(o,r){h(o,e,r),t||(n=R(e,"click",l[13]),t=!0)},p:G,i:G,o:G,d(o){o&&k(e),t=!1,n()}}}function Ft(l){let e,t,n,o,r;return{c(){e=j("button"),P(e,"class","transition-all absolute right-0 top-0 bg-violet-400 bg-opacity-30 w-full h-full")},m(s,u){h(s,e,u),n=!0,o||(r=R(e,"click",l[12]),o=!0)},p:G,i(s){n||(te(()=>{t||(t=Q(e,le,{},!0)),t.run(1)}),n=!0)},o(s){t||(t=Q(e,le,{},!1)),t.run(0),n=!1},d(s){s&&k(e),s&&t&&t.end(),o=!1,r()}}}function Ve(l){let e,t,n,o,r;return{c(){e=j("button"),P(e,"class","absolute left-0 top-0 w-[30%] h-[100%] bg-red-400 bg-opacity-30")},m(s,u){h(s,e,u),n=!0,o||(r=R(e,"click",l[14]),o=!0)},p:G,i(s){n||(te(()=>{t||(t=Q(e,le,{},!0)),t.run(1)}),n=!0)},o(s){t||(t=Q(e,le,{},!1)),t.run(0),n=!1},d(s){s&&k(e),s&&t&&t.end(),o=!1,r()}}}function Fe(l){let e,t,n;return t=new ve({props:{weight:"light",space:"tight",align:"left",size:"xs",$$slots:{default:[Gt]},$$scope:{ctx:l}}}),{c(){e=j("div"),N(t.$$.fragment),P(e,"class","absolute pointer-events-none p-1 pl-2")},m(o,r){h(o,e,r),O(t,e,null),n=!0},p(o,r){const s={};r&1048578&&(s.$$scope={dirty:r,ctx:o}),t.$set(s)},i(o){n||(p(t.$$.fragment,o),n=!0)},o(o){m(t.$$.fragment,o),n=!1},d(o){o&&k(e),I(t)}}}function Gt(l){let e=l[1]+1+"",t;return{c(){t=L(e)},m(n,o){h(n,t,o)},p(n,o){o&2&&e!==(e=n[1]+1+"")&&se(t,e)},d(n){n&&k(t)}}}function Jt(l){let e,t,n;return t=new ve({props:{size:"lg",align:"center",$$slots:{default:[Yt]},$$scope:{ctx:l}}}),{c(){e=j("div"),N(t.$$.fragment),P(e,"class","centerrr noselect")},m(o,r){h(o,e,r),O(t,e,null),n=!0},p(o,r){const s={};r&1048577&&(s.$$scope={dirty:r,ctx:o}),t.$set(s)},i(o){n||(p(t.$$.fragment,o),n=!0)},o(o){m(t.$$.fragment,o),n=!1},d(o){o&&k(e),I(t)}}}function Xt(l){let e=l[0].count,t,n,o,r,s=Je(l);return o=new ve({props:{size:"xs",align:"center",class:"text-gray-600 dark:text-gray-300 ",$$slots:{default:[Kt]},$$scope:{ctx:l}}}),{c(){s.c(),t=M(),n=j("div"),N(o.$$.fragment),P(n,"class","absolute bottom-0 w-full noselect")},m(u,f){s.m(u,f),h(u,t,f),h(u,n,f),O(o,n,null),r=!0},p(u,f){f&1&&ee(e,e=u[0].count)?(Z(),m(s,1,1,G),K(),s=Je(u),s.c(),p(s,1),s.m(t.parentNode,t)):s.p(u,f);const a={};f&1048577&&(a.$$scope={dirty:f,ctx:u}),o.$set(a)},i(u){r||(p(s),p(o.$$.fragment,u),r=!0)},o(u){m(s),m(o.$$.fragment,u),r=!1},d(u){s.d(u),u&&k(t),u&&k(n),I(o)}}}function Ge(l){let e,t=l[0].count+"",n,o;return{c(){e=j("span"),n=L(t),P(e,"class","absolute")},m(r,s){h(r,e,s),T(e,n)},p(r,s){s&1&&t!==(t=r[0].count+"")&&se(n,t)},i(r){o||te(()=>{o=Be(e,ke,{y:-10}),o.start()})},o:G,d(r){r&&k(e)}}}function Yt(l){let e=l[0].name+"",t,n,o=l[0].count,r,s=Ge(l);return{c(){t=L(e),n=L(`: \xA0\r
          `),s.c(),r=rt()},m(u,f){h(u,t,f),h(u,n,f),s.m(u,f),h(u,r,f)},p(u,f){f&1&&e!==(e=u[0].name+"")&&se(t,e),f&1&&ee(o,o=u[0].count)?(Z(),m(s,1,1,G),K(),s=Ge(u),s.c(),p(s,1),s.m(r.parentNode,r)):s.p(u,f)},i(u){p(s)},o(u){m(s)},d(u){u&&k(t),u&&k(n),u&&k(r),s.d(u)}}}function Zt(l){let e=l[0].count+"",t;return{c(){t=L(e)},m(n,o){h(n,t,o)},p(n,o){o&1&&e!==(e=n[0].count+"")&&se(t,e)},d(n){n&&k(t)}}}function Je(l){let e,t,n,o;return t=new ve({props:{size:"2xl",$$slots:{default:[Zt]},$$scope:{ctx:l}}}),{c(){e=j("span"),N(t.$$.fragment),P(e,"class","centerrr noselect")},m(r,s){h(r,e,s),O(t,e,null),o=!0},p(r,s){const u={};s&1048577&&(u.$$scope={dirty:s,ctx:r}),t.$set(u)},i(r){o||(p(t.$$.fragment,r),r&&(n||te(()=>{n=Be(e,ke,{y:-10}),n.start()})),o=!0)},o(r){m(t.$$.fragment,r),o=!1},d(r){r&&k(e),I(t)}}}function Kt(l){let e=l[0].name+"",t;return{c(){t=L(e)},m(n,o){h(n,t,o)},p(n,o){o&1&&e!==(e=n[0].name+"")&&se(t,e)},d(n){n&&k(t)}}}function Xe(l){let e,t,n,o,r=l[7]&&Ye(l);return n=new re({props:{size:"lg",$$slots:{default:[Ut]},$$scope:{ctx:l}}}),n.$on("click",l[17]),{c(){r&&r.c(),e=M(),t=j("div"),N(n.$$.fragment),P(t,"class","absolute bottom-0 right-0 p-2")},m(s,u){r&&r.m(s,u),h(s,e,u),h(s,t,u),O(n,t,null),o=!0},p(s,u){s[7]?r?(r.p(s,u),u&128&&p(r,1)):(r=Ye(s),r.c(),p(r,1),r.m(e.parentNode,e)):r&&(Z(),m(r,1,1,()=>{r=null}),K());const f={};u&1048576&&(f.$$scope={dirty:u,ctx:s}),n.$set(f)},i(s){o||(p(r),p(n.$$.fragment,s),o=!0)},o(s){m(r),m(n.$$.fragment,s),o=!1},d(s){r&&r.d(s),s&&k(e),s&&k(t),I(n)}}}function Ye(l){let e,t,n;return t=new re({props:{size:"lg",color:"green",$$slots:{default:[Qt]},$$scope:{ctx:l}}}),t.$on("click",l[16]),{c(){e=j("div"),N(t.$$.fragment),P(e,"class","absolute bottom-0 p-2")},m(o,r){h(o,e,r),O(t,e,null),n=!0},p(o,r){const s={};r&1048576&&(s.$$scope={dirty:r,ctx:o}),t.$set(s)},i(o){n||(p(t.$$.fragment,o),n=!0)},o(o){m(t.$$.fragment,o),n=!1},d(o){o&&k(e),I(t)}}}function Qt(l){let e;return{c(){e=L("-1")},m(t,n){h(t,e,n)},d(t){t&&k(e)}}}function Ut(l){let e;return{c(){e=L("+1")},m(t,n){h(t,e,n)},d(t){t&&k(e)}}}function xt(l){let e,t,n,o;return n=new ot({props:{name:"name",placeholder:l[0].name}}),{c(){e=j("span"),e.textContent="Name",t=M(),N(n.$$.fragment)},m(r,s){h(r,e,s),h(r,t,s),O(n,r,s),o=!0},p(r,s){const u={};s&1&&(u.placeholder=r[0].name),n.$set(u)},i(r){o||(p(n.$$.fragment,r),o=!0)},o(r){m(n.$$.fragment,r),o=!1},d(r){r&&k(e),r&&k(t),I(n,r)}}}function en(l){let e,t,n,o;return n=new ot({props:{type:"number",name:"count",placeholder:l[0].count}}),{c(){e=j("span"),e.textContent="Value",t=M(),N(n.$$.fragment)},m(r,s){h(r,e,s),h(r,t,s),O(n,r,s),o=!0},p(r,s){const u={};s&1&&(u.placeholder=r[0].count),n.$set(u)},i(r){o||(p(n.$$.fragment,r),o=!0)},o(r){m(n.$$.fragment,r),o=!1},d(r){r&&k(e),r&&k(t),I(n,r)}}}function tn(l){let e;return{c(){e=L("Set")},m(t,n){h(t,e,n)},d(t){t&&k(e)}}}function nn(l){let e,t,n,o,r,s,u,f,a,g,i;return o=new ie({props:{class:"space-y-2",$$slots:{default:[xt]},$$scope:{ctx:l}}}),s=new ie({props:{class:"space-y-2",$$slots:{default:[en]},$$scope:{ctx:l}}}),f=new re({props:{type:"submit",class:"w-full1",$$slots:{default:[tn]},$$scope:{ctx:l}}}),{c(){e=j("form"),t=j("h3"),t.textContent="Rename Counter",n=M(),N(o.$$.fragment),r=M(),N(s.$$.fragment),u=M(),N(f.$$.fragment),P(t,"class","text-xl font-medium text-gray-900 dark:text-white p-0"),P(e,"class","flex flex-col space-y-6")},m($,C){h($,e,C),T(e,t),T(e,n),O(o,e,null),T(e,r),O(s,e,null),T(e,u),O(f,e,null),a=!0,g||(i=R(e,"submit",_t(l[18])),g=!0)},p($,C){const b={};C&1048577&&(b.$$scope={dirty:C,ctx:$}),o.$set(b);const c={};C&1048577&&(c.$$scope={dirty:C,ctx:$}),s.$set(c);const q={};C&1048576&&(q.$$scope={dirty:C,ctx:$}),f.$set(q)},i($){a||(p(o.$$.fragment,$),p(s.$$.fragment,$),p(f.$$.fragment,$),a=!0)},o($){m(o.$$.fragment,$),m(s.$$.fragment,$),m(f.$$.fragment,$),a=!1},d($){$&&k(e),I(o),I(s),I(f),g=!1,i()}}}function ln(l){let e,t,n,o,r,s,u,f,a,g,i,$,C,b,c;const q=[Ft,Vt,Wt],w=[];function A(d,B){return d[4]?0:d[5]?1:d[6]?2:-1}~(t=A(l))&&(n=w[t]=q[t](l));let z=l[8]&&Fe(l);const E=[Xt,Jt],_=[];function S(d,B){return d[9]?0:1}u=S(l),f=_[u]=E[u](l);let y=!l[6]&&Xe(l);function V(d){l[19](d)}let H={size:"xs",class:"h-min",$$slots:{default:[nn]},$$scope:{ctx:l}};return l[2]!==void 0&&(H.open=l[2]),C=new zt({props:H}),J.push(()=>X(C,"open",V,l[2])),{c(){e=j("div"),n&&n.c(),o=M(),z&&z.c(),r=M(),s=j("div"),f.c(),g=M(),y&&y.c(),$=M(),N(C.$$.fragment),P(s,"class","pointer-events-none h-full"),P(e,"class","relative overflow-hidden rounded-lg dark:bg-slate-800"),P(e,"style",i=` width: ${l[3].x}px; 
  height: ${l[3].y}px`)},m(d,B){h(d,e,B),~t&&w[t].m(e,null),T(e,o),z&&z.m(e,null),T(e,r),T(e,s),_[u].m(s,null),T(e,g),y&&y.m(e,null),h(d,$,B),O(C,d,B),c=!0},p(d,[B]){let D=t;t=A(d),t===D?~t&&w[t].p(d,B):(n&&(Z(),m(w[D],1,1,()=>{w[D]=null}),K()),~t?(n=w[t],n?n.p(d,B):(n=w[t]=q[t](d),n.c()),p(n,1),n.m(e,o)):n=null),d[8]?z?(z.p(d,B),B&256&&p(z,1)):(z=Fe(d),z.c(),p(z,1),z.m(e,r)):z&&(Z(),m(z,1,1,()=>{z=null}),K());let v=u;u=S(d),u===v?_[u].p(d,B):(Z(),m(_[v],1,1,()=>{_[v]=null}),K(),f=_[u],f?f.p(d,B):(f=_[u]=E[u](d),f.c()),p(f,1),f.m(s,null)),d[6]?y&&(Z(),m(y,1,1,()=>{y=null}),K()):y?(y.p(d,B),B&64&&p(y,1)):(y=Xe(d),y.c(),p(y,1),y.m(e,null)),(!c||B&8&&i!==(i=` width: ${d[3].x}px; 
  height: ${d[3].y}px`))&&P(e,"style",i);const U={};B&1048577&&(U.$$scope={dirty:B,ctx:d}),!b&&B&4&&(b=!0,U.open=d[2],Y(()=>b=!1)),C.$set(U)},i(d){c||(p(n),p(z),p(f),d&&te(()=>{a||(a=Q(s,ke,{x:10},!0)),a.run(1)}),p(y),p(C.$$.fragment,d),c=!0)},o(d){m(n),m(z),m(f),d&&(a||(a=Q(s,ke,{x:10},!1)),a.run(0)),m(y),m(C.$$.fragment,d),c=!1},d(d){d&&k(e),~t&&w[t].d(),z&&z.d(),_[u].d(),d&&a&&a.end(),y&&y.d(),d&&k($),I(C,d)}}}function sn(l,e,t){let n,o,r,s,u,f,a;F(l,ae,y=>t(3,n=y)),F(l,me,y=>t(4,o=y)),F(l,$e,y=>t(5,r=y)),F(l,Ne,y=>t(6,s=y)),F(l,Oe,y=>t(7,u=y)),F(l,Ie,y=>t(8,f=y)),F(l,Se,y=>t(9,a=y));let g=st(),{item:i={id:0,count:0,name:"Counter Name"}}=e,{i:$=0}=e,C=!1;function b(y){let V=Ct(y,["name","count"]);console.log(V.count),V.count===""&&(V.count=i.count),g("update",V),t(2,C=!1)}const c=()=>t(2,C=!0),q=()=>g("delete",i.id),w=()=>g("down"),A=()=>g("up"),z=()=>g("down"),E=()=>g("up"),_=y=>b(y);function S(y){C=y,t(2,C)}return l.$$set=y=>{"item"in y&&t(0,i=y.item),"i"in y&&t(1,$=y.i)},[i,$,C,n,o,r,s,u,f,a,g,b,c,q,w,A,z,E,_,S]}class rn extends oe{constructor(e){super(),ue(this,e,sn,ln,ee,{item:0,i:1})}}const on={width:24,height:24,body:'<path fill="currentColor" d="M19.42 4.71a.996.996 0 0 0-1.41 0L9.53 13.2L5.99 9.66a.996.996 0 1 0-1.41 1.41l4.24 4.24c.39.39 1.02.39 1.41 0l9.19-9.19c.4-.39.4-1.02 0-1.41zM6 20h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1z"/>'};var Me=on;function un(l){let e;return{c(){e=j("span"),P(e,"class","fas fa-bars flex-grow px-2")},m(t,n){h(t,e,n)},p:G,d(t){t&&k(e)}}}function fn(l){let e;return{c(){e=L("Delete mode")},m(t,n){h(t,e,n)},d(t){t&&k(e)}}}function an(l){let e,t,n;function o(s){l[10](s)}let r={size:"small",$$slots:{default:[fn]},$$scope:{ctx:l}};return l[2]!==void 0&&(r.checked=l[2]),e=new fe({props:r}),J.push(()=>X(e,"checked",o,l[2])),{c(){N(e.$$.fragment)},m(s,u){O(e,s,u),n=!0},p(s,u){const f={};u&8388608&&(f.$$scope={dirty:u,ctx:s}),!t&&u&4&&(t=!0,f.checked=s[2],Y(()=>t=!1)),e.$set(f)},i(s){n||(p(e.$$.fragment,s),n=!0)},o(s){m(e.$$.fragment,s),n=!1},d(s){I(e,s)}}}function cn(l){let e;return{c(){e=L("Rename mode")},m(t,n){h(t,e,n)},d(t){t&&k(e)}}}function _n(l){let e,t,n;function o(s){l[11](s)}let r={size:"small",$$slots:{default:[cn]},$$scope:{ctx:l}};return l[3]!==void 0&&(r.checked=l[3]),e=new fe({props:r}),J.push(()=>X(e,"checked",o,l[3])),{c(){N(e.$$.fragment)},m(s,u){O(e,s,u),n=!0},p(s,u){const f={};u&8388608&&(f.$$scope={dirty:u,ctx:s}),!t&&u&8&&(t=!0,f.checked=s[3],Y(()=>t=!1)),e.$set(f)},i(s){n||(p(e.$$.fragment,s),n=!0)},o(s){m(e.$$.fragment,s),n=!1},d(s){I(e,s)}}}function dn(l){let e;return{c(){e=L("Smart mode")},m(t,n){h(t,e,n)},d(t){t&&k(e)}}}function pn(l){let e,t,n;function o(s){l[12](s)}let r={size:"small",class:"inline",$$slots:{default:[dn]},$$scope:{ctx:l}};return l[4]!==void 0&&(r.checked=l[4]),e=new fe({props:r}),J.push(()=>X(e,"checked",o,l[4])),{c(){N(e.$$.fragment)},m(s,u){O(e,s,u),n=!0},p(s,u){const f={};u&8388608&&(f.$$scope={dirty:u,ctx:s}),!t&&u&16&&(t=!0,f.checked=s[4],Y(()=>t=!1)),e.$set(f)},i(s){n||(p(e.$$.fragment,s),n=!0)},o(s){m(e.$$.fragment,s),n=!1},d(s){I(e,s)}}}function gn(l){let e;return{c(){e=L("Smart text")},m(t,n){h(t,e,n)},d(t){t&&k(e)}}}function mn(l){let e,t,n;function o(s){l[13](s)}let r={size:"small",class:"inline",$$slots:{default:[gn]},$$scope:{ctx:l}};return l[5]!==void 0&&(r.checked=l[5]),e=new fe({props:r}),J.push(()=>X(e,"checked",o,l[5])),{c(){N(e.$$.fragment)},m(s,u){O(e,s,u),n=!0},p(s,u){const f={};u&8388608&&(f.$$scope={dirty:u,ctx:s}),!t&&u&32&&(t=!0,f.checked=s[5],Y(()=>t=!1)),e.$set(f)},i(s){n||(p(e.$$.fragment,s),n=!0)},o(s){m(e.$$.fragment,s),n=!1},d(s){I(e,s)}}}function $n(l){let e;return{c(){e=L("Minus mode")},m(t,n){h(t,e,n)},d(t){t&&k(e)}}}function bn(l){let e,t,n;function o(s){l[14](s)}let r={size:"small",$$slots:{default:[$n]},$$scope:{ctx:l}};return l[6]!==void 0&&(r.checked=l[6]),e=new fe({props:r}),J.push(()=>X(e,"checked",o,l[6])),{c(){N(e.$$.fragment)},m(s,u){O(e,s,u),n=!0},p(s,u){const f={};u&8388608&&(f.$$scope={dirty:u,ctx:s}),!t&&u&64&&(t=!0,f.checked=s[6],Y(()=>t=!1)),e.$set(f)},i(s){n||(p(e.$$.fragment,s),n=!0)},o(s){m(e.$$.fragment,s),n=!1},d(s){I(e,s)}}}function hn(l){let e;return{c(){e=L("Edit Counters size")},m(t,n){h(t,e,n)},d(t){t&&k(e)}}}function kn(l){let e,t,n;function o(s){l[15](s)}let r={size:"small",class:"inline",$$slots:{default:[hn]},$$scope:{ctx:l}};return l[7]!==void 0&&(r.checked=l[7]),e=new fe({props:r}),J.push(()=>X(e,"checked",o,l[7])),{c(){N(e.$$.fragment)},m(s,u){O(e,s,u),n=!0},p(s,u){const f={};u&8388608&&(f.$$scope={dirty:u,ctx:s}),!t&&u&128&&(t=!0,f.checked=s[7],Y(()=>t=!1)),e.$set(f)},i(s){n||(p(e.$$.fragment,s),n=!0)},o(s){m(e.$$.fragment,s),n=!1},d(s){I(e,s)}}}function wn(l){let e;return{c(){e=L("Show counter id")},m(t,n){h(t,e,n)},d(t){t&&k(e)}}}function vn(l){let e,t,n;function o(s){l[16](s)}let r={size:"small",class:"inline",$$slots:{default:[wn]},$$scope:{ctx:l}};return l[8]!==void 0&&(r.checked=l[8]),e=new fe({props:r}),J.push(()=>X(e,"checked",o,l[8])),{c(){N(e.$$.fragment)},m(s,u){O(e,s,u),n=!0},p(s,u){const f={};u&8388608&&(f.$$scope={dirty:u,ctx:s}),!t&&u&256&&(t=!0,f.checked=s[8],Y(()=>t=!1)),e.$set(f)},i(s){n||(p(e.$$.fragment,s),n=!0)},o(s){m(e.$$.fragment,s),n=!1},d(s){I(e,s)}}}function zn(l){let e;return{c(){e=L("Reset all")},m(t,n){h(t,e,n)},d(t){t&&k(e)}}}function Cn(l){let e,t,n,o,r,s,u,f,a,g,i,$,C,b,c,q,w,A,z,E;return e=new ne({props:{$$slots:{default:[an]},$$scope:{ctx:l}}}),n=new ne({props:{$$slots:{default:[_n]},$$scope:{ctx:l}}}),r=new Ee({}),u=new ne({props:{$$slots:{default:[pn]},$$scope:{ctx:l}}}),a=new ne({props:{$$slots:{default:[mn]},$$scope:{ctx:l}}}),i=new ne({props:{$$slots:{default:[bn]},$$scope:{ctx:l}}}),C=new ne({props:{$$slots:{default:[kn]},$$scope:{ctx:l}}}),c=new ne({props:{$$slots:{default:[vn]},$$scope:{ctx:l}}}),w=new Ee({}),z=new ne({props:{$$slots:{default:[zn]},$$scope:{ctx:l}}}),z.$on("click",l[17]),{c(){N(e.$$.fragment),t=M(),N(n.$$.fragment),o=M(),N(r.$$.fragment),s=M(),N(u.$$.fragment),f=M(),N(a.$$.fragment),g=M(),N(i.$$.fragment),$=M(),N(C.$$.fragment),b=M(),N(c.$$.fragment),q=M(),N(w.$$.fragment),A=M(),N(z.$$.fragment)},m(_,S){O(e,_,S),h(_,t,S),O(n,_,S),h(_,o,S),O(r,_,S),h(_,s,S),O(u,_,S),h(_,f,S),O(a,_,S),h(_,g,S),O(i,_,S),h(_,$,S),O(C,_,S),h(_,b,S),O(c,_,S),h(_,q,S),O(w,_,S),h(_,A,S),O(z,_,S),E=!0},p(_,S){const y={};S&8388612&&(y.$$scope={dirty:S,ctx:_}),e.$set(y);const V={};S&8388616&&(V.$$scope={dirty:S,ctx:_}),n.$set(V);const H={};S&8388624&&(H.$$scope={dirty:S,ctx:_}),u.$set(H);const d={};S&8388640&&(d.$$scope={dirty:S,ctx:_}),a.$set(d);const B={};S&8388672&&(B.$$scope={dirty:S,ctx:_}),i.$set(B);const D={};S&8388736&&(D.$$scope={dirty:S,ctx:_}),C.$set(D);const v={};S&8388864&&(v.$$scope={dirty:S,ctx:_}),c.$set(v);const U={};S&8388608&&(U.$$scope={dirty:S,ctx:_}),z.$set(U)},i(_){E||(p(e.$$.fragment,_),p(n.$$.fragment,_),p(r.$$.fragment,_),p(u.$$.fragment,_),p(a.$$.fragment,_),p(i.$$.fragment,_),p(C.$$.fragment,_),p(c.$$.fragment,_),p(w.$$.fragment,_),p(z.$$.fragment,_),E=!0)},o(_){m(e.$$.fragment,_),m(n.$$.fragment,_),m(r.$$.fragment,_),m(u.$$.fragment,_),m(a.$$.fragment,_),m(i.$$.fragment,_),m(C.$$.fragment,_),m(c.$$.fragment,_),m(w.$$.fragment,_),m(z.$$.fragment,_),E=!1},d(_){I(e,_),_&&k(t),I(n,_),_&&k(o),I(r,_),_&&k(s),I(u,_),_&&k(f),I(a,_),_&&k(g),I(i,_),_&&k($),I(C,_),_&&k(b),I(c,_),_&&k(q),I(w,_),_&&k(A),I(z,_)}}}function yn(l){let e,t,n;return t=new re({props:{class:"min-h-full overflow-visible",$$slots:{default:[Sn]},$$scope:{ctx:l}}}),t.$on("click",l[21]),{c(){e=j("div"),N(t.$$.fragment),P(e,"class","relative")},m(o,r){h(o,e,r),O(t,e,null),n=!0},p(o,r){const s={};r&8388610&&(s.$$scope={dirty:r,ctx:o}),t.$set(s)},i(o){n||(p(t.$$.fragment,o),n=!0)},o(o){m(t.$$.fragment,o),n=!1},d(o){o&&k(e),I(t)}}}function Nn(l){let e,t;return e=new re({props:{$$slots:{default:[Dn]},$$scope:{ctx:l}}}),e.$on("click",l[20]),{c(){N(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},p(n,o){const r={};o&8388608&&(r.$$scope={dirty:o,ctx:n}),e.$set(r)},i(n){t||(p(e.$$.fragment,n),t=!0)},o(n){m(e.$$.fragment,n),t=!1},d(n){I(e,n)}}}function On(l){let e,t;return e=new re({props:{$$slots:{default:[qn]},$$scope:{ctx:l}}}),e.$on("click",l[19]),{c(){N(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},p(n,o){const r={};o&8388608&&(r.$$scope={dirty:o,ctx:n}),e.$set(r)},i(n){t||(p(e.$$.fragment,n),t=!0)},o(n){m(e.$$.fragment,n),t=!1},d(n){I(e,n)}}}function In(l){let e,t;return e=new re({props:{$$slots:{default:[Bn]},$$scope:{ctx:l}}}),e.$on("click",l[18]),{c(){N(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},p(n,o){const r={};o&8388608&&(r.$$scope={dirty:o,ctx:n}),e.$set(r)},i(n){t||(p(e.$$.fragment,n),t=!0)},o(n){m(e.$$.fragment,n),t=!1},d(n){I(e,n)}}}function Ze(l){let e,t;return e=new pe({props:{icon:Ot,class:" absolute top-1 right-1 "}}),{c(){N(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},p:G,i(n){t||(p(e.$$.fragment,n),t=!0)},o(n){m(e.$$.fragment,n),t=!1},d(n){I(e,n)}}}function Sn(l){let e,t,n,o;e=new pe({props:{icon:Nt,class:"text-lg"}});let r=!l[1]&&Ze();return{c(){N(e.$$.fragment),t=M(),r&&r.c(),n=rt()},m(s,u){O(e,s,u),h(s,t,u),r&&r.m(s,u),h(s,n,u),o=!0},p(s,u){s[1]?r&&(Z(),m(r,1,1,()=>{r=null}),K()):r?(r.p(s,u),u&2&&p(r,1)):(r=Ze(),r.c(),p(r,1),r.m(n.parentNode,n))},i(s){o||(p(e.$$.fragment,s),p(r),o=!0)},o(s){m(e.$$.fragment,s),m(r),o=!1},d(s){I(e,s),s&&k(t),r&&r.d(s),s&&k(n)}}}function Dn(l){let e,t;return e=new pe({props:{icon:Me,class:"text-lg"}}),{c(){N(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},p:G,i(n){t||(p(e.$$.fragment,n),t=!0)},o(n){m(e.$$.fragment,n),t=!1},d(n){I(e,n)}}}function qn(l){let e,t;return e=new pe({props:{icon:Me,class:"text-lg"}}),{c(){N(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},p:G,i(n){t||(p(e.$$.fragment,n),t=!0)},o(n){m(e.$$.fragment,n),t=!1},d(n){I(e,n)}}}function Bn(l){let e,t;return e=new pe({props:{icon:Me,class:"text-lg"}}),{c(){N(e.$$.fragment)},m(n,o){O(e,n,o),t=!0},p:G,i(n){t||(p(e.$$.fragment,n),t=!0)},o(n){m(e.$$.fragment,n),t=!1},d(n){I(e,n)}}}function Mn(l){let e;return{c(){e=L("+1")},m(t,n){h(t,e,n)},d(t){t&&k(e)}}}function jn(l){let e,t,n,o,r,s,u,f,a,g,i,$,C;o=new dt({props:{class:"options_dropdown text-gray-900 bg-white dark:text-white dark:bg-gray-800 aspect-square",$$slots:{default:[un]},$$scope:{ctx:l}}}),s=new yt({props:{transition:de,triggeredBy:".options_dropdown",class:"w-fit noselect",$$slots:{default:[Cn]},$$scope:{ctx:l}}});const b=[In,On,Nn,yn],c=[];function q(w,A){return w[2]?0:w[7]?1:w[3]?2:3}return f=q(l),a=c[f]=b[f](l),$=new re({props:{$$slots:{default:[Mn]},$$scope:{ctx:l}}}),$.$on("click",l[22]),{c(){e=j("div"),t=j("div"),n=j("div"),N(o.$$.fragment),r=M(),N(s.$$.fragment),u=M(),a.c(),g=M(),i=j("div"),N($.$$.fragment),P(n,"class","flex gap-1"),P(t,"class","flex justify-between"),P(e,"class","p-4 bg-gray-200 dark:bg-gray-900 h-fit w-full sticky top-0 z-10 shadow")},m(w,A){h(w,e,A),T(e,t),T(t,n),O(o,n,null),T(n,r),O(s,n,null),T(n,u),c[f].m(n,null),T(t,g),T(t,i),O($,i,null),C=!0},p(w,[A]){const z={};A&8388608&&(z.$$scope={dirty:A,ctx:w}),o.$set(z);const E={};A&8389116&&(E.$$scope={dirty:A,ctx:w}),s.$set(E);let _=f;f=q(w),f===_?c[f].p(w,A):(Z(),m(c[_],1,1,()=>{c[_]=null}),K(),a=c[f],a?a.p(w,A):(a=c[f]=b[f](w),a.c()),p(a,1),a.m(n,null));const S={};A&8388608&&(S.$$scope={dirty:A,ctx:w}),$.$set(S)},i(w){C||(p(o.$$.fragment,w),p(s.$$.fragment,w),p(a),p($.$$.fragment,w),C=!0)},o(w){m(o.$$.fragment,w),m(s.$$.fragment,w),m(a),m($.$$.fragment,w),C=!1},d(w){w&&k(e),I(o),I(s),c[f].d(),I($)}}}function An(l,e,t){let n,o,r,s,u,f,a;F(l,$e,d=>t(2,n=d)),F(l,me,d=>t(3,o=d)),F(l,Ne,d=>t(4,r=d)),F(l,Se,d=>t(5,s=d)),F(l,Oe,d=>t(6,u=d)),F(l,be,d=>t(7,f=d)),F(l,Ie,d=>t(8,a=d));let{anything_changed:g=!1}=e,i=st(),{noOfCounters:$}=e;function C(d){n=d,$e.set(n)}function b(d){o=d,me.set(o)}function c(d){r=d,Ne.set(r)}function q(d){s=d,Se.set(s)}function w(d){u=d,Oe.set(u)}function A(d){f=d,be.set(f)}function z(d){a=d,Ie.set(a)}const E=()=>{localStorage.clear(),i("reset")},_=()=>ze($e,n=!1,n),S=()=>ze(be,f=!1,f),y=()=>ze(me,o=!1,o),V=()=>{i("save_data")},H=()=>{t(0,$+=1),i("create_counter")};return l.$$set=d=>{"anything_changed"in d&&t(1,g=d.anything_changed),"noOfCounters"in d&&t(0,$=d.noOfCounters)},[$,g,n,o,r,s,u,f,a,i,C,b,c,q,w,A,z,E,_,S,y,V,H]}class Hn extends oe{constructor(e){super(),ue(this,e,An,jn,ee,{anything_changed:1,noOfCounters:0})}}function Pn(l){let e,t=l[0].x+"",n,o;return{c(){e=L("Height: "),n=L(t),o=L(" px")},m(r,s){h(r,e,s),h(r,n,s),h(r,o,s)},p(r,s){s&1&&t!==(t=r[0].x+"")&&se(n,t)},d(r){r&&k(e),r&&k(n),r&&k(o)}}}function Rn(l){let e,t=l[0].y+"",n,o;return{c(){e=L("Width: "),n=L(t),o=L(" px")},m(r,s){h(r,e,s),h(r,n,s),h(r,o,s)},p(r,s){s&1&&t!==(t=r[0].y+"")&&se(n,t)},d(r){r&&k(e),r&&k(n),r&&k(o)}}}function Ln(l){let e,t=l[0].gap+"",n,o;return{c(){e=L("Width: "),n=L(t),o=L(" px")},m(r,s){h(r,e,s),h(r,n,s),h(r,o,s)},p(r,s){s&1&&t!==(t=r[0].gap+"")&&se(n,t)},d(r){r&&k(e),r&&k(n),r&&k(o)}}}function En(l){let e,t,n,o,r,s,u,f,a,g,i,$,C,b,c,q,w,A,z,E,_;t=new ie({props:{class:" align-middle text-center p-2",$$slots:{default:[Pn]},$$scope:{ctx:l}}});function S(D){l[1](D)}let y={min:"50",max:"350",class:"bg-slate-300"};l[0].x!==void 0&&(y.value=l[0].x),r=new ye({props:y}),J.push(()=>X(r,"value",S,l[0].x)),f=new ie({props:{class:"align-middle text-center  p-2",$$slots:{default:[Rn]},$$scope:{ctx:l}}});function V(D){l[2](D)}let H={min:"50",max:"100",step:"5",class:"bg-slate-300"};l[0].y!==void 0&&(H.value=l[0].y),i=new ye({props:H}),J.push(()=>X(i,"value",V,l[0].y)),b=new ie({props:{class:"align-middle text-center  p-2",$$slots:{default:[Ln]},$$scope:{ctx:l}}});function d(D){l[3](D)}let B={min:"0",max:"10",step:"1",class:"bg-slate-300"};return l[0].gap!==void 0&&(B.value=l[0].gap),w=new ye({props:B}),J.push(()=>X(w,"value",d,l[0].gap)),E=new Dt({}),{c(){e=j("div"),N(t.$$.fragment),n=M(),o=j("div"),N(r.$$.fragment),u=M(),N(f.$$.fragment),a=M(),g=j("div"),N(i.$$.fragment),C=M(),N(b.$$.fragment),c=M(),q=j("div"),N(w.$$.fragment),z=M(),N(E.$$.fragment),P(o,"class","flex-grow p-1 pr-2"),P(g,"class","flex-grow p-1 pr-2"),P(q,"class","flex-grow p-1 pr-2"),P(e,"class","w-full grid grid-cols-[150px_auto]")},m(D,v){h(D,e,v),O(t,e,null),T(e,n),T(e,o),O(r,o,null),T(e,u),O(f,e,null),T(e,a),T(e,g),O(i,g,null),T(e,C),O(b,e,null),T(e,c),T(e,q),O(w,q,null),h(D,z,v),O(E,D,v),_=!0},p(D,[v]){const U={};v&17&&(U.$$scope={dirty:v,ctx:D}),t.$set(U);const ge={};!s&&v&1&&(s=!0,ge.value=D[0].x,Y(()=>s=!1)),r.$set(ge);const je={};v&17&&(je.$$scope={dirty:v,ctx:D}),f.$set(je);const Ae={};!$&&v&1&&($=!0,Ae.value=D[0].y,Y(()=>$=!1)),i.$set(Ae);const He={};v&17&&(He.$$scope={dirty:v,ctx:D}),b.$set(He);const Pe={};!A&&v&1&&(A=!0,Pe.value=D[0].gap,Y(()=>A=!1)),w.$set(Pe)},i(D){_||(p(t.$$.fragment,D),p(r.$$.fragment,D),p(f.$$.fragment,D),p(i.$$.fragment,D),p(b.$$.fragment,D),p(w.$$.fragment,D),p(E.$$.fragment,D),_=!0)},o(D){m(t.$$.fragment,D),m(r.$$.fragment,D),m(f.$$.fragment,D),m(i.$$.fragment,D),m(b.$$.fragment,D),m(w.$$.fragment,D),m(E.$$.fragment,D),_=!1},d(D){D&&k(e),I(t),I(r),I(f),I(i),I(b),I(w),D&&k(z),I(E,D)}}}function Tn(l,e,t){let n;F(l,ae,u=>t(0,n=u));function o(u){l.$$.not_equal(n.x,u)&&(n.x=u,ae.set(n))}function r(u){l.$$.not_equal(n.y,u)&&(n.y=u,ae.set(n))}function s(u){l.$$.not_equal(n.gap,u)&&(n.gap=u,ae.set(n))}return[n,o,r,s]}class Wn extends oe{constructor(e){super(),ue(this,e,Tn,En,ee,{})}}function Ke(l,e,t){const n=l.slice();return n[24]=e[t],n[25]=e,n[26]=t,n}function Qe(l){let e,t,n,o;return t=new Wn({}),{c(){e=j("div"),N(t.$$.fragment)},m(r,s){h(r,e,s),O(t,e,null),o=!0},i(r){o||(p(t.$$.fragment,r),te(()=>{n||(n=Q(e,de,{},!0)),n.run(1)}),o=!0)},o(r){m(t.$$.fragment,r),n||(n=Q(e,de,{},!1)),n.run(0),o=!1},d(r){r&&k(e),I(t),r&&n&&n.end()}}}function Ue(l,e){let t,n,o,r,s,u,f=G,a;function g(){return e[13](e[24])}function i(...c){return e[14](e[24],...c)}function $(){return e[15](e[24],e[25],e[26])}function C(){return e[16](e[24],e[25],e[26])}function b(){return e[17](e[24],e[25],e[26])}return n=new rn({props:{item:e[24],i:e[26]}}),n.$on("delete",g),n.$on("update",i),n.$on("up",$),n.$on("down",C),n.$on("reset_this_counter",b),{key:l,first:null,c(){t=j("div"),N(n.$$.fragment),o=M(),this.first=t},m(c,q){h(c,t,q),O(n,t,null),T(t,o),a=!0},p(c,q){e=c;const w={};q&1&&(w.item=e[24]),q&1&&(w.i=e[26]),n.$set(w)},r(){u=t.getBoundingClientRect()},f(){mt(t),f(),$t(t,u)},a(){f(),f=bt(t,u,St,{duration:300,easing:vt})},i(c){a||(p(n.$$.fragment,c),te(()=>{s&&s.end(1),r=Be(t,de,{delay:e[2]?e[26]*100:0}),r.start()}),a=!0)},o(c){m(n.$$.fragment,c),r&&r.invalidate(),c&&(s=ht(t,de,{})),a=!1},d(c){c&&k(t),I(n),c&&s&&s.end()}}}function Vn(l){let e,t,n,o,r=[],s=new Map,u,f,a,g;e=new Hn({props:{noOfCounters:l[3],anything_changed:l[1]}}),e.$on("create_counter",l[10]),e.$on("save_data",l[11]),e.$on("reset",l[12]);let i=l[4]&&Qe(),$=l[0];const C=b=>b[24].id;for(let b=0;b<$.length;b+=1){let c=Ke(l,$,b),q=C(c);s.set(q,r[b]=Ue(q,c))}return{c(){N(e.$$.fragment),t=M(),i&&i.c(),n=M(),o=j("div");for(let b=0;b<r.length;b+=1)r[b].c();P(o,"class","flex-row p-4 pt-2 inline-flex flex-wrap gap-3 justify-evenly"),Le(o,"gap",l[5].gap+"px")},m(b,c){O(e,b,c),h(b,t,c),i&&i.m(b,c),h(b,n,c),h(b,o,c);for(let q=0;q<r.length;q+=1)r[q].m(o,null);f=!0,a||(g=[R(o,"introend",l[18]),R(o,"outroend",l[19])],a=!0)},p(b,[c]){const q={};if(c&8&&(q.noOfCounters=b[3]),c&2&&(q.anything_changed=b[1]),e.$set(q),b[4]?i?c&16&&p(i,1):(i=Qe(),i.c(),p(i,1),i.m(n.parentNode,n)):i&&(Z(),m(i,1,1,()=>{i=null}),K()),c&385){$=b[0],Z();for(let w=0;w<r.length;w+=1)r[w].r();r=pt(r,c,C,1,b,$,s,o,kt,Ue,null,Ke);for(let w=0;w<r.length;w+=1)r[w].a();K()}(!f||c&32)&&Le(o,"gap",b[5].gap+"px")},i(b){if(!f){p(e.$$.fragment,b),p(i);for(let c=0;c<$.length;c+=1)p(r[c]);te(()=>{u||(u=Q(o,le,{},!0)),u.run(1)}),f=!0}},o(b){m(e.$$.fragment,b),m(i);for(let c=0;c<r.length;c+=1)m(r[c]);u||(u=Q(o,le,{},!1)),u.run(0),f=!1},d(b){I(e,b),b&&k(t),i&&i.d(b),b&&k(n),b&&k(o);for(let c=0;c<r.length;c+=1)r[c].d();b&&u&&u.end(),a=!1,qe(g)}}}function Fn(l,e,t){let n,o,r;F(l,be,H=>t(4,o=H)),F(l,ae,H=>t(5,r=H));function s(H){Ce.set(H),t(1,g=!1)}var u=[{id:1,count:0,name:"Counter Name"}],f=1,a=!0,g=!0;gt(()=>{localStorage.getItem("counters_saved")!==null&&(t(0,u=Array.from(wt(Ce))),f=u[u.length-1].id)});function i(){u.push({id:f+1,count:0,name:"Counter name"}),f+=1,t(0,u)}function $(H){let d=u.map(B=>B.id).indexOf(H);It(u,d),t(0,u)}function C(H,d){let B={id:H,name:d.detail.name,count:d.detail.count};const D=u.findIndex(v=>v.id===H);t(0,u[D]={...u[D],...B},u),t(0,u)}function b(){s(u)}const c=()=>i(),q=()=>b(),w=()=>t(0,u=[{id:1,count:0,name:"Counter Name"}]),A=H=>{$(H.id)},z=(H,d)=>C(H.id,d),E=(H,d,B)=>t(0,d[B].count+=1,u),_=(H,d,B)=>t(0,d[B].count-=1,u),S=(H,d,B)=>t(0,d[B].count=0,u),y=()=>{t(2,a=!1)},V=()=>{t(2,a=!0)};return l.$$.update=()=>{if(l.$$.dirty&1&&t(1,g=!0),l.$$.dirty&3){e:{if(g==!1)break e;t(1,g=Array.from(Ce)!==Array.from(u))}}l.$$.dirty&1&&t(3,n=u.length)},[u,g,a,n,o,r,i,$,C,b,c,q,w,A,z,E,_,S,y,V]}class Kn extends oe{constructor(e){super(),ue(this,e,Fn,Vn,ee,{})}}export{Kn as default};