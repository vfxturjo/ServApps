import{ag as P,S as ne,i as le,s as H,C as Ce,e as O,c as C,a as S,b as m,m as T,t as b,f as w,d as g,g as z,h as L,o as ke,P as G,p as D,q as se,r as q,u as I,v as R,w as A,x as Y,y as K,z as E,n as F,A as B,B as we,D as y,E as he,T as Te,F as Z,J as oe,K as re,L as fe,M as ze,O as Oe,Q as De,R as Se,U as ve,V as Be}from"./index.3a6f0d77.js";import{B as ie,D as Ne,a as J,b as W,T as ue,c as je,S as ye}from"./ArrowUp.svelte_svelte_type_style_lang.e7aeab6e.js";P("Current_app","MultiCounter");let X=P("counters_saved",{id:0,count:0}),x=P("counter_smart_mode",!0),ee=P("counter_minus_mode",!1),te=P("counter_delete_mode",!1);function ae(r){let e,t,n,o,l,s,i,f=r[4]&&ce(r);return{c(){f&&f.c(),e=D(),t=O("button"),S(t,"class",n="transition-all absolute right-0 top-0 h-[100%] bg-blue-400 bg-opacity-30 "+(r[4]?"w-[68%]":"w-[100%]"))},m(d,u){f&&f.m(d,u),m(d,e,u),m(d,t,u),l=!0,s||(i=K(t,"click",r[7]),s=!0)},p(d,u){d[4]?f?(f.p(d,u),u&16&&b(f,1)):(f=ce(d),f.c(),b(f,1),f.m(e.parentNode,e)):f&&(q(),w(f,1,1,()=>{f=null}),I()),(!l||u&16&&n!==(n="transition-all absolute right-0 top-0 h-[100%] bg-blue-400 bg-opacity-30 "+(d[4]?"w-[68%]":"w-[100%]")))&&S(t,"class",n)},i(d){l||(b(f),R(()=>{o||(o=A(t,E,{},!0)),o.run(1)}),l=!0)},o(d){w(f),o||(o=A(t,E,{},!1)),o.run(0),l=!1},d(d){f&&f.d(d),d&&g(e),d&&g(t),d&&o&&o.end(),s=!1,i()}}}function ce(r){let e,t,n,o,l;return{c(){e=O("button"),S(e,"class","absolute left-0 top-0 w-[30%] h-[100%] bg-red-400 bg-opacity-30")},m(s,i){m(s,e,i),n=!0,o||(l=K(e,"click",r[6]),o=!0)},p:F,i(s){n||(R(()=>{t||(t=A(e,E,{},!0)),t.run(1)}),n=!0)},o(s){t||(t=A(e,E,{},!1)),t.run(0),n=!1},d(s){s&&g(e),s&&t&&t.end(),o=!1,l()}}}function _e(r){let e,t,n;return{c(){e=O("button"),S(e,"class","absolute left-0 top-0 w-[30%] h-[100%] bg-red-400 bg-opacity-30")},m(o,l){m(o,e,l),t||(n=K(e,"click",r[8]),t=!0)},p:F,d(o){o&&g(e),t=!1,n()}}}function Ae(r){let e,t=r[1]+1+"",n;return{c(){e=B("Counter "),n=B(t)},m(o,l){m(o,e,l),m(o,n,l)},p(o,l){l&2&&t!==(t=o[1]+1+"")&&we(n,t)},d(o){o&&g(e),o&&g(n)}}}function $e(r){let e,t=r[0].count+"",n,o;return{c(){e=O("span"),n=B(t),S(e,"class","inline-block")},m(l,s){m(l,e,s),y(e,n)},p(l,s){s&1&&t!==(t=l[0].count+"")&&we(n,t)},i(l){o||R(()=>{o=he(e,Y,{y:-10}),o.start()})},o:F,d(l){l&&g(e)}}}function Me(r){let e,t=r[0].count,n,o=$e(r);return{c(){e=B(`Current value =\r
        `),o.c(),n=se()},m(l,s){m(l,e,s),o.m(l,s),m(l,n,s)},p(l,s){s&1&&H(t,t=l[0].count)?(q(),w(o,1,1,F),I(),o=$e(l),o.c(),b(o,1),o.m(n.parentNode,n)):o.p(l,s)},i(l){b(o)},o(l){w(o)},d(l){l&&g(e),l&&g(n),o.d(l)}}}function de(r){let e,t,n,o,l,s=r[4]&&pe(r);return o=new ie({props:{size:"lg",$$slots:{default:[Ie]},$$scope:{ctx:r}}}),o.$on("click",r[10]),{c(){e=O("div"),s&&s.c(),t=D(),n=O("div"),C(o.$$.fragment),S(e,"class","flex flex-row-reverse justify-between")},m(i,f){m(i,e,f),s&&s.m(e,null),y(e,t),y(e,n),T(o,n,null),l=!0},p(i,f){i[4]?s?(s.p(i,f),f&16&&b(s,1)):(s=pe(i),s.c(),b(s,1),s.m(e,t)):s&&(q(),w(s,1,1,()=>{s=null}),I());const d={};f&2048&&(d.$$scope={dirty:f,ctx:i}),o.$set(d)},i(i){l||(b(s),b(o.$$.fragment,i),l=!0)},o(i){w(s),w(o.$$.fragment,i),l=!1},d(i){i&&g(e),s&&s.d(),z(o)}}}function pe(r){let e,t;return e=new ie({props:{size:"sm",color:"green",$$slots:{default:[qe]},$$scope:{ctx:r}}}),e.$on("click",r[9]),{c(){C(e.$$.fragment)},m(n,o){T(e,n,o),t=!0},p(n,o){const l={};o&2048&&(l.$$scope={dirty:o,ctx:n}),e.$set(l)},i(n){t||(b(e.$$.fragment,n),t=!0)},o(n){w(e.$$.fragment,n),t=!1},d(n){z(e,n)}}}function qe(r){let e;return{c(){e=B("-1")},m(t,n){m(t,e,n)},d(t){t&&g(e)}}}function Ie(r){let e;return{c(){e=B("+1")},m(t,n){m(t,e,n)},d(t){t&&g(e)}}}function Ee(r){let e,t,n,o,l,s,i,f,d,u,c,_=r[2]&&!r[3]&&ae(r),k=r[3]&&_e(r);o=new G({props:{weight:"light",space:"tight",align:"left",size:"xs",$$slots:{default:[Ae]},$$scope:{ctx:r}}}),i=new G({props:{size:"lg",align:"center",$$slots:{default:[Me]},$$scope:{ctx:r}}});let p=!r[2]&&de(r);return{c(){_&&_.c(),e=D(),k&&k.c(),t=D(),n=O("div"),C(o.$$.fragment),l=D(),s=O("div"),C(i.$$.fragment),d=D(),p&&p.c(),u=se(),S(n,"class","relative pointer-events-none"),S(s,"class","p-4 pointer-events-none")},m(a,v){_&&_.m(a,v),m(a,e,v),k&&k.m(a,v),m(a,t,v),m(a,n,v),T(o,n,null),m(a,l,v),m(a,s,v),T(i,s,null),m(a,d,v),p&&p.m(a,v),m(a,u,v),c=!0},p(a,v){a[2]&&!a[3]?_?(_.p(a,v),v&12&&b(_,1)):(_=ae(a),_.c(),b(_,1),_.m(e.parentNode,e)):_&&(q(),w(_,1,1,()=>{_=null}),I()),a[3]?k?k.p(a,v):(k=_e(a),k.c(),k.m(t.parentNode,t)):k&&(k.d(1),k=null);const $={};v&2050&&($.$$scope={dirty:v,ctx:a}),o.$set($);const h={};v&2049&&(h.$$scope={dirty:v,ctx:a}),i.$set(h),a[2]?p&&(q(),w(p,1,1,()=>{p=null}),I()):p?(p.p(a,v),v&4&&b(p,1)):(p=de(a),p.c(),b(p,1),p.m(u.parentNode,u))},i(a){c||(b(_),b(o.$$.fragment,a),b(i.$$.fragment,a),R(()=>{f||(f=A(s,Y,{x:10},!0)),f.run(1)}),b(p),c=!0)},o(a){w(_),w(o.$$.fragment,a),w(i.$$.fragment,a),f||(f=A(s,Y,{x:10},!1)),f.run(0),w(p),c=!1},d(a){_&&_.d(a),a&&g(e),k&&k.d(a),a&&g(t),a&&g(n),z(o),a&&g(l),a&&g(s),z(i),a&&f&&f.end(),a&&g(d),p&&p.d(a),a&&g(u)}}}function Le(r){let e,t,n;return t=new Ce({props:{class:"min-w-[300px] max-w-[90%] relative overflow-hidden",$$slots:{default:[Ee]},$$scope:{ctx:r}}}),{c(){e=O("div"),C(t.$$.fragment),S(e,"class","p-2 flex justify-center select-none")},m(o,l){m(o,e,l),T(t,e,null),n=!0},p(o,[l]){const s={};l&2079&&(s.$$scope={dirty:l,ctx:o}),t.$set(s)},i(o){n||(b(t.$$.fragment,o),n=!0)},o(o){w(t.$$.fragment,o),n=!1},d(o){o&&g(e),z(t)}}}function Re(r,e,t){let n,o,l;L(r,x,p=>t(2,n=p)),L(r,te,p=>t(3,o=p)),L(r,ee,p=>t(4,l=p));let s=ke(),{item:i={id:0,count:0}}=e,{i:f=0}=e;const d=()=>s("down"),u=()=>s("up"),c=()=>s("delete",i.id),_=()=>s("down"),k=()=>s("up");return r.$$set=p=>{"item"in p&&t(0,i=p.item),"i"in p&&t(1,f=p.i)},[i,f,n,o,l,s,d,u,c,_,k]}class Fe extends ne{constructor(e){super(),le(this,e,Re,Le,H,{item:0,i:1})}}function Je(r){let e;return{c(){e=O("span"),S(e,"class","fas fa-bars flex-grow px-2")},m(t,n){m(t,e,n)},p:F,d(t){t&&g(e)}}}function Ke(r){let e;return{c(){e=B("Save values")},m(t,n){m(t,e,n)},d(t){t&&g(e)}}}function me(r){let e;return{c(){e=O("span"),S(e,"class","fas fa-check text-lg text-end")},m(t,n){m(t,e,n)},d(t){t&&g(e)}}}function Pe(r){let e,t=!r[1]&&me();return{c(){t&&t.c(),e=se()},m(n,o){t&&t.m(n,o),m(n,e,o)},p(n,o){n[1]?t&&(t.d(1),t=null):t||(t=me(),t.c(),t.m(e.parentNode,e))},d(n){t&&t.d(n),n&&g(e)}}}function Qe(r){let e,t,n,o;return e=new G({props:{$$slots:{default:[Ke]},$$scope:{ctx:r}}}),n=new G({props:{class:"inline-block",$$slots:{default:[Pe]},$$scope:{ctx:r}}}),{c(){C(e.$$.fragment),t=D(),C(n.$$.fragment)},m(l,s){T(e,l,s),m(l,t,s),T(n,l,s),o=!0},p(l,s){const i={};s&4096&&(i.$$scope={dirty:s,ctx:l}),e.$set(i);const f={};s&4098&&(f.$$scope={dirty:s,ctx:l}),n.$set(f)},i(l){o||(b(e.$$.fragment,l),b(n.$$.fragment,l),o=!0)},o(l){w(e.$$.fragment,l),w(n.$$.fragment,l),o=!1},d(l){z(e,l),l&&g(t),z(n,l)}}}function Ue(r){let e;return{c(){e=B("Delete mode")},m(t,n){m(t,e,n)},d(t){t&&g(e)}}}function Ve(r){let e,t,n;function o(s){r[7](s)}let l={size:"small",class:"inline",$$slots:{default:[Ue]},$$scope:{ctx:r}};return r[2]!==void 0&&(l.checked=r[2]),e=new ue({props:l}),oe.push(()=>re(e,"checked",o)),{c(){C(e.$$.fragment)},m(s,i){T(e,s,i),n=!0},p(s,i){const f={};i&4096&&(f.$$scope={dirty:i,ctx:s}),!t&&i&4&&(t=!0,f.checked=s[2],fe(()=>t=!1)),e.$set(f)},i(s){n||(b(e.$$.fragment,s),n=!0)},o(s){w(e.$$.fragment,s),n=!1},d(s){z(e,s)}}}function Ge(r){let e;return{c(){e=B("Smart mode")},m(t,n){m(t,e,n)},d(t){t&&g(e)}}}function He(r){let e,t,n;function o(s){r[8](s)}let l={size:"small",class:"inline",$$slots:{default:[Ge]},$$scope:{ctx:r}};return r[3]!==void 0&&(l.checked=r[3]),e=new ue({props:l}),oe.push(()=>re(e,"checked",o)),{c(){C(e.$$.fragment)},m(s,i){T(e,s,i),n=!0},p(s,i){const f={};i&4096&&(f.$$scope={dirty:i,ctx:s}),!t&&i&8&&(t=!0,f.checked=s[3],fe(()=>t=!1)),e.$set(f)},i(s){n||(b(e.$$.fragment,s),n=!0)},o(s){w(e.$$.fragment,s),n=!1},d(s){z(e,s)}}}function We(r){let e;return{c(){e=B("Minus mode")},m(t,n){m(t,e,n)},d(t){t&&g(e)}}}function Xe(r){let e,t,n;function o(s){r[9](s)}let l={size:"small",$$slots:{default:[We]},$$scope:{ctx:r}};return r[4]!==void 0&&(l.checked=r[4]),e=new ue({props:l}),oe.push(()=>re(e,"checked",o)),{c(){C(e.$$.fragment)},m(s,i){T(e,s,i),n=!0},p(s,i){const f={};i&4096&&(f.$$scope={dirty:i,ctx:s}),!t&&i&16&&(t=!0,f.checked=s[4],fe(()=>t=!1)),e.$set(f)},i(s){n||(b(e.$$.fragment,s),n=!0)},o(s){w(e.$$.fragment,s),n=!1},d(s){z(e,s)}}}function Ye(r){let e;return{c(){e=B("Reset all")},m(t,n){m(t,e,n)},d(t){t&&g(e)}}}function Ze(r){let e,t,n,o,l,s,i,f,d,u,c,_,k,p,a,v;return e=new J({props:{class:"w-full flex justify-between",$$slots:{default:[Qe]},$$scope:{ctx:r}}}),e.$on("click",r[6]),n=new W({}),l=new J({props:{$$slots:{default:[Ve]},$$scope:{ctx:r}}}),i=new W({}),d=new J({props:{$$slots:{default:[He]},$$scope:{ctx:r}}}),c=new J({props:{$$slots:{default:[Xe]},$$scope:{ctx:r}}}),k=new W({}),a=new J({props:{$$slots:{default:[Ye]},$$scope:{ctx:r}}}),a.$on("click",r[10]),{c(){C(e.$$.fragment),t=D(),C(n.$$.fragment),o=D(),C(l.$$.fragment),s=D(),C(i.$$.fragment),f=D(),C(d.$$.fragment),u=D(),C(c.$$.fragment),_=D(),C(k.$$.fragment),p=D(),C(a.$$.fragment)},m($,h){T(e,$,h),m($,t,h),T(n,$,h),m($,o,h),T(l,$,h),m($,s,h),T(i,$,h),m($,f,h),T(d,$,h),m($,u,h),T(c,$,h),m($,_,h),T(k,$,h),m($,p,h),T(a,$,h),v=!0},p($,h){const Q={};h&4098&&(Q.$$scope={dirty:h,ctx:$}),e.$set(Q);const U={};h&4100&&(U.$$scope={dirty:h,ctx:$}),l.$set(U);const V={};h&4104&&(V.$$scope={dirty:h,ctx:$}),d.$set(V);const N={};h&4112&&(N.$$scope={dirty:h,ctx:$}),c.$set(N);const j={};h&4096&&(j.$$scope={dirty:h,ctx:$}),a.$set(j)},i($){v||(b(e.$$.fragment,$),b(n.$$.fragment,$),b(l.$$.fragment,$),b(i.$$.fragment,$),b(d.$$.fragment,$),b(c.$$.fragment,$),b(k.$$.fragment,$),b(a.$$.fragment,$),v=!0)},o($){w(e.$$.fragment,$),w(n.$$.fragment,$),w(l.$$.fragment,$),w(i.$$.fragment,$),w(d.$$.fragment,$),w(c.$$.fragment,$),w(k.$$.fragment,$),w(a.$$.fragment,$),v=!1},d($){z(e,$),$&&g(t),z(n,$),$&&g(o),z(l,$),$&&g(s),z(i,$),$&&g(f),z(d,$),$&&g(u),z(c,$),$&&g(_),z(k,$),$&&g(p),z(a,$)}}}function xe(r){let e;return{c(){e=B("+1")},m(t,n){m(t,e,n)},d(t){t&&g(e)}}}function et(r){let e,t,n,o,l,s,i,f,d,u;return o=new Te({props:{class:"options_dropdown text-gray-900 bg-white dark:text-white dark:bg-gray-800 aspect-square",$$slots:{default:[Je]},$$scope:{ctx:r}}}),s=new Ne({props:{transition:Z,triggeredBy:".options_dropdown",class:"w-fit",$$slots:{default:[Ze]},$$scope:{ctx:r}}}),d=new ie({props:{$$slots:{default:[xe]},$$scope:{ctx:r}}}),d.$on("click",r[11]),{c(){e=O("div"),t=O("div"),n=O("div"),C(o.$$.fragment),l=D(),C(s.$$.fragment),i=D(),f=O("div"),C(d.$$.fragment),S(n,"class","flex gap-1"),S(t,"class","flex justify-between"),S(e,"class","p-4 bg-gray-200 dark:bg-gray-900 h-fit w-full sticky top-0 z-10 shadow")},m(c,_){m(c,e,_),y(e,t),y(t,n),T(o,n,null),y(n,l),T(s,n,null),y(t,i),y(t,f),T(d,f,null),u=!0},p(c,[_]){const k={};_&4096&&(k.$$scope={dirty:_,ctx:c}),o.$set(k);const p={};_&4126&&(p.$$scope={dirty:_,ctx:c}),s.$set(p);const a={};_&4096&&(a.$$scope={dirty:_,ctx:c}),d.$set(a)},i(c){u||(b(o.$$.fragment,c),b(s.$$.fragment,c),b(d.$$.fragment,c),u=!0)},o(c){w(o.$$.fragment,c),w(s.$$.fragment,c),w(d.$$.fragment,c),u=!1},d(c){c&&g(e),z(o),z(s),z(d)}}}function tt(r,e,t){let n,o,l;L(r,te,a=>t(2,n=a)),L(r,x,a=>t(3,o=a)),L(r,ee,a=>t(4,l=a));let{anything_changed:s=!1}=e,i=ke(),{noOfCounters:f}=e;const d=()=>{i("save_data")};function u(a){n=a,te.set(n)}function c(a){o=a,x.set(o)}function _(a){l=a,ee.set(l)}const k=()=>{localStorage.clear(),i("reset")},p=()=>{t(0,f+=1),i("create_counter")};return r.$$set=a=>{"anything_changed"in a&&t(1,s=a.anything_changed),"noOfCounters"in a&&t(0,f=a.noOfCounters)},[f,s,n,o,l,i,d,u,c,_,k,p]}class nt extends ne{constructor(e){super(),le(this,e,tt,et,H,{anything_changed:1,noOfCounters:0})}}function ge(r,e,t){const n=r.slice();return n[19]=e[t],n[20]=e,n[21]=t,n}function lt(r){let e,t=[],n=new Map,o,l,s,i,f=r[0];const d=u=>u[19].id;for(let u=0;u<f.length;u+=1){let c=ge(r,f,u),_=d(c);n.set(_,t[u]=be(_,c))}return{c(){e=O("div");for(let u=0;u<t.length;u+=1)t[u].c()},m(u,c){m(u,e,c);for(let _=0;_<t.length;_+=1)t[_].m(e,null);l=!0,s||(i=[K(e,"introend",r[15]),K(e,"outroend",r[16])],s=!0)},p(u,c){c&65&&(f=u[0],q(),t=De(t,c,d,1,u,f,n,e,Be,be,null,ge),I())},i(u){if(!l){for(let c=0;c<f.length;c+=1)b(t[c]);R(()=>{o||(o=A(e,E,{},!0)),o.run(1)}),l=!0}},o(u){for(let c=0;c<t.length;c+=1)w(t[c]);o||(o=A(e,E,{},!1)),o.run(0),l=!1},d(u){u&&g(e);for(let c=0;c<t.length;c+=1)t[c].d();u&&o&&o.end(),s=!1,Se(i)}}}function st(r){let e,t,n,o;return t=new ye({props:{color:"green"}}),{c(){e=O("div"),C(t.$$.fragment),S(e,"class","flex fixed w-screen h-80 flex-grow items-center justify-center")},m(l,s){m(l,e,s),T(t,e,null),o=!0},p:F,i(l){o||(b(t.$$.fragment,l),n&&n.end(1),o=!0)},o(l){w(t.$$.fragment,l),n=ve(e,E,{}),o=!1},d(l){l&&g(e),z(t),l&&n&&n.end()}}}function be(r,e){let t,n,o,l,s,i;function f(){return e[11](e[19])}function d(){return e[12](e[19],e[20],e[21])}function u(){return e[13](e[19],e[20],e[21])}function c(){return e[14](e[19],e[20],e[21])}return n=new Fe({props:{item:e[19],i:e[21]}}),n.$on("delete",f),n.$on("up",d),n.$on("down",u),n.$on("reset_this_counter",c),{key:r,first:null,c(){t=O("div"),C(n.$$.fragment),o=D(),S(t,"class","w-full "),this.first=t},m(_,k){m(_,t,k),T(n,t,null),y(t,o),i=!0},p(_,k){e=_;const p={};k&1&&(p.item=e[19]),k&1&&(p.i=e[21]),n.$set(p)},i(_){i||(b(n.$$.fragment,_),R(()=>{s&&s.end(1),l=he(t,Z,{delay:e[3]?e[21]*100:0}),l.start()}),i=!0)},o(_){w(n.$$.fragment,_),l&&l.invalidate(),_&&(s=ve(t,Z,{})),i=!1},d(_){_&&g(t),z(n),_&&s&&s.end()}}}function ot(r){let e,t,n,o,l,s;e=new nt({props:{noOfCounters:r[4],anything_changed:r[1]}}),e.$on("create_counter",r[8]),e.$on("save_data",r[9]),e.$on("reset",r[10]);const i=[st,lt],f=[];function d(u,c){return u[2]?0:1}return o=d(r),l=f[o]=i[o](r),{c(){C(e.$$.fragment),t=D(),n=O("div"),l.c(),S(n,"class","flex flex-col pt-2")},m(u,c){T(e,u,c),m(u,t,c),m(u,n,c),f[o].m(n,null),s=!0},p(u,[c]){const _={};c&16&&(_.noOfCounters=u[4]),c&2&&(_.anything_changed=u[1]),e.$set(_);let k=o;o=d(u),o===k?f[o].p(u,c):(q(),w(f[k],1,1,()=>{f[k]=null}),I(),l=f[o],l?l.p(u,c):(l=f[o]=i[o](u),l.c()),b(l,1),l.m(n,null))},i(u){s||(b(e.$$.fragment,u),b(l),s=!0)},o(u){w(e.$$.fragment,u),w(l),s=!1},d(u){z(e,u),u&&g(t),u&&g(n),f[o].d()}}}function rt(r,e,t){let n;function o(N){X.set(N)}var l=[{id:1,count:0}],s=1,i=!0,f=!0,d=!0;ze(()=>{localStorage.getItem("Timers_saved")!==null&&(t(0,l=Array.from(Oe(X))),s=l[l.length-1].id),t(2,i=!1)});function u(){l.push({id:s+1,count:0}),s+=1,t(0,l)}function c(N){let j=l.map(M=>M.id).indexOf(N);je(l,j),t(0,l)}function _(){o(l)}const k=()=>u(),p=()=>_(),a=()=>t(0,l=[{id:1,count:0}]),v=N=>{c(N.id)},$=(N,j,M)=>t(0,j[M].count+=1,l),h=(N,j,M)=>t(0,j[M].count-=1,l),Q=(N,j,M)=>t(0,j[M].count=0,l),U=()=>{t(3,f=!1)},V=()=>{t(3,f=!0)};return r.$$.update=()=>{if(r.$$.dirty&3){e:{if(d==!1)break e;t(1,d=Array.from(X)!==Array.from(l))}}r.$$.dirty&1&&t(4,n=l.length)},[l,d,i,f,n,u,c,_,k,p,a,v,$,h,Q,U,V]}class ut extends ne{constructor(e){super(),le(this,e,rt,ot,H,{})}}export{ut as default};
