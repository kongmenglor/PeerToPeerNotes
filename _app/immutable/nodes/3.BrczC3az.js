import{s as it,w as Be,x as Ue,e as b,a as B,c as v,b as U,g as P,f as p,y as We,p as c,z as Xe,i as L,h as _,A as H,B as qe,C as Fe,D as Re,E as ut,F as Ze,G as gt,H as xe,I as te,r as ye,t as ge,J as oe,d as he,n as we,l as $e,K as ht,L as re,M as Se,N as bt,O as Ne,j as vt}from"../chunks/scheduler.DvcFW9aP.js";import{S as ct,i as ft,a as R,g as Pe,t as Q,c as He,f as Le,b as Ie,d as De,m as Te,e as ze}from"../chunks/index.hHxTvmnv.js";import{p as Ve}from"../chunks/ProgressBar.svelte_svelte_type_style_lang.BKAwSylO.js";import{A as Ae,P as kt,s as ae}from"../chunks/supabaseClient.CNkdpLlc.js";function yt(t,e){const l={},n={},o={$$scope:1};let r=t.length;for(;r--;){const s=t[r],u=e[r];if(u){for(const f in s)f in u||(n[f]=1);for(const f in u)o[f]||(l[f]=u[f],o[f]=1);t[r]=u}else for(const f in s)o[f]=1}for(const s in n)s in l||(l[s]=void 0);return l}const It=t=>({}),et=t=>({}),Dt=t=>({}),tt=t=>({}),Tt=t=>({}),lt=t=>({});function st(t){let e,l,n;const o=t[18].lead,r=Ue(o,t,t[17],lt);return{c(){e=b("div"),r&&r.c(),this.h()},l(s){e=v(s,"DIV",{class:!0});var u=U(e);r&&r.l(u),u.forEach(p),this.h()},h(){c(e,"class",l="dropzone-lead "+t[5])},m(s,u){L(s,e,u),r&&r.m(e,null),n=!0},p(s,u){r&&r.p&&(!n||u[0]&131072)&&qe(r,o,s,s[17],n?Re(o,s[17],u,Tt):Fe(s[17]),lt),(!n||u[0]&32&&l!==(l="dropzone-lead "+s[5]))&&c(e,"class",l)},i(s){n||(R(r,s),n=!0)},o(s){Q(r,s),n=!1},d(s){s&&p(e),r&&r.d(s)}}}function zt(t){let e,l="Upload a file",n;return{c(){e=b("strong"),e.textContent=l,n=ge(" or drag and drop")},l(o){e=v(o,"STRONG",{"data-svelte-h":!0}),oe(e)!=="svelte-13uz6lq"&&(e.textContent=l),n=he(o," or drag and drop")},m(o,r){L(o,e,r),L(o,n,r)},p:we,d(o){o&&(p(e),p(n))}}}function nt(t){let e,l,n;const o=t[18].meta,r=Ue(o,t,t[17],et);return{c(){e=b("small"),r&&r.c(),this.h()},l(s){e=v(s,"SMALL",{class:!0});var u=U(e);r&&r.l(u),u.forEach(p),this.h()},h(){c(e,"class",l="dropzone-meta "+t[7])},m(s,u){L(s,e,u),r&&r.m(e,null),n=!0},p(s,u){r&&r.p&&(!n||u[0]&131072)&&qe(r,o,s,s[17],n?Re(o,s[17],u,It):Fe(s[17]),et),(!n||u[0]&128&&l!==(l="dropzone-meta "+s[7]))&&c(e,"class",l)},i(s){n||(R(r,s),n=!0)},o(s){Q(r,s),n=!1},d(s){s&&p(e),r&&r.d(s)}}}function Et(t){let e,l,n,o,r,s,u,f,E,M,y,T,k,g,W,j,S=[{type:"file"},{name:t[2]},{class:n="dropzone-input "+t[9]},t[11]()],X={};for(let d=0;d<S.length;d+=1)X=Be(X,S[d]);let D=t[13].lead&&st(t);const N=t[18].message,Z=Ue(N,t,t[17],tt),C=Z||zt();let h=t[13].meta&&nt(t);return{c(){e=b("div"),l=b("input"),o=B(),r=b("div"),s=b("div"),D&&D.c(),u=B(),f=b("div"),C&&C.c(),M=B(),h&&h.c(),this.h()},l(d){e=v(d,"DIV",{class:!0,"data-testid":!0});var z=U(e);l=v(z,"INPUT",{type:!0,name:!0,class:!0}),o=P(z),r=v(z,"DIV",{class:!0});var q=U(r);s=v(q,"DIV",{class:!0});var V=U(s);D&&D.l(V),u=P(V),f=v(V,"DIV",{class:!0});var ne=U(f);C&&C.l(ne),ne.forEach(p),M=P(V),h&&h.l(V),V.forEach(p),q.forEach(p),z.forEach(p),this.h()},h(){We(l,X),c(f,"class",E="dropzone-message "+t[6]),c(s,"class",y="dropzone-interface-text "+t[4]),c(r,"class",T="dropzone-interface "+t[8]+" "+t[3]),c(e,"class",k="dropzone "+t[10]),c(e,"data-testid","file-dropzone"),Xe(e,"opacity-50",t[12].disabled)},m(d,z){L(d,e,z),_(e,l),l.autofocus&&l.focus(),t[32](l),_(e,o),_(e,r),_(r,s),D&&D.m(s,null),_(s,u),_(s,f),C&&C.m(f,null),_(s,M),h&&h.m(s,null),g=!0,W||(j=[H(l,"change",t[31]),H(l,"change",t[19]),H(l,"dragenter",t[20]),H(l,"dragover",t[21]),H(l,"dragleave",t[22]),H(l,"drop",t[23]),H(l,"click",t[24]),H(l,"keydown",t[25]),H(l,"keyup",t[26]),H(l,"keypress",t[27]),H(l,"focus",t[28]),H(l,"focusin",t[29]),H(l,"focusout",t[30])],W=!0)},p(d,z){We(l,X=yt(S,[{type:"file"},(!g||z[0]&4)&&{name:d[2]},(!g||z[0]&512&&n!==(n="dropzone-input "+d[9]))&&{class:n},d[11]()])),d[13].lead?D?(D.p(d,z),z[0]&8192&&R(D,1)):(D=st(d),D.c(),R(D,1),D.m(s,u)):D&&(Pe(),Q(D,1,1,()=>{D=null}),He()),Z&&Z.p&&(!g||z[0]&131072)&&qe(Z,N,d,d[17],g?Re(N,d[17],z,Dt):Fe(d[17]),tt),(!g||z[0]&64&&E!==(E="dropzone-message "+d[6]))&&c(f,"class",E),d[13].meta?h?(h.p(d,z),z[0]&8192&&R(h,1)):(h=nt(d),h.c(),R(h,1),h.m(s,null)):h&&(Pe(),Q(h,1,1,()=>{h=null}),He()),(!g||z[0]&16&&y!==(y="dropzone-interface-text "+d[4]))&&c(s,"class",y),(!g||z[0]&264&&T!==(T="dropzone-interface "+d[8]+" "+d[3]))&&c(r,"class",T),(!g||z[0]&1024&&k!==(k="dropzone "+d[10]))&&c(e,"class",k),(!g||z[0]&5120)&&Xe(e,"opacity-50",d[12].disabled)},i(d){g||(R(D),R(C,d),R(h),g=!0)},o(d){Q(D),Q(C,d),Q(h),g=!1},d(d){d&&p(e),t[32](null),D&&D.d(),C&&C.d(d),h&&h.d(),W=!1,ut(j)}}}const Mt="textarea relative flex justify-center items-center",Ct="w-full absolute top-0 left-0 right-0 bottom-0 z-[1] opacity-0 disabled:!opacity-0 cursor-pointer",Nt="flex justify-center items-center text-center";function Lt(t,e,l){let n,o,r;const s=["files","fileInput","name","border","padding","rounded","regionInterface","regionInterfaceText","slotLead","slotMessage","slotMeta"];let u=Ze(e,s),{$$slots:f={},$$scope:E}=e;const M=gt(f);let{files:y=void 0}=e,{fileInput:T=void 0}=e,{name:k}=e,{border:g="border-2 border-dashed"}=e,{padding:W="p-4 py-8"}=e,{rounded:j="rounded-container-token"}=e,{regionInterface:S=""}=e,{regionInterfaceText:X=""}=e,{slotLead:D="mb-4"}=e,{slotMessage:N=""}=e,{slotMeta:Z="opacity-75"}=e;function C(){return delete u.class,u}function h(i){te.call(this,t,i)}function d(i){te.call(this,t,i)}function z(i){te.call(this,t,i)}function q(i){te.call(this,t,i)}function V(i){te.call(this,t,i)}function ne(i){te.call(this,t,i)}function ie(i){te.call(this,t,i)}function F(i){te.call(this,t,i)}function ue(i){te.call(this,t,i)}function le(i){te.call(this,t,i)}function J(i){te.call(this,t,i)}function ce(i){te.call(this,t,i)}function fe(){y=this.files,l(0,y)}function x(i){ye[i?"unshift":"push"](()=>{T=i,l(1,T)})}return t.$$set=i=>{l(33,e=Be(Be({},e),xe(i))),l(12,u=Ze(e,s)),"files"in i&&l(0,y=i.files),"fileInput"in i&&l(1,T=i.fileInput),"name"in i&&l(2,k=i.name),"border"in i&&l(14,g=i.border),"padding"in i&&l(15,W=i.padding),"rounded"in i&&l(16,j=i.rounded),"regionInterface"in i&&l(3,S=i.regionInterface),"regionInterfaceText"in i&&l(4,X=i.regionInterfaceText),"slotLead"in i&&l(5,D=i.slotLead),"slotMessage"in i&&l(6,N=i.slotMessage),"slotMeta"in i&&l(7,Z=i.slotMeta),"$$scope"in i&&l(17,E=i.$$scope)},t.$$.update=()=>{l(10,n=`${Mt} ${g} ${W} ${j} ${e.class??""}`)},l(9,o=`${Ct}`),l(8,r=`${Nt}`),e=xe(e),[y,T,k,S,X,D,N,Z,r,o,n,C,u,M,g,W,j,E,f,h,d,z,q,V,ne,ie,F,ue,le,J,ce,fe,x]}class wt extends ct{constructor(e){super(),ft(this,e,Lt,Et,it,{files:0,fileInput:1,name:2,border:14,padding:15,rounded:16,regionInterface:3,regionInterfaceText:4,slotLead:5,slotMessage:6,slotMeta:7},null,[-1,-1])}}function at(t){let e,l,n='<span class="block text-gray-700 font-bold mb-2 text-center p-2">Notes uploaded successfully!</span>',o,r,s,u="Dismiss",f,E;return{c(){e=b("aside"),l=b("div"),l.innerHTML=n,o=B(),r=b("div"),s=b("button"),s.textContent=u,this.h()},l(M){e=v(M,"ASIDE",{class:!0});var y=U(e);l=v(y,"DIV",{class:!0,"data-svelte-h":!0}),oe(l)!=="svelte-19jrnro"&&(l.innerHTML=n),o=P(y),r=v(y,"DIV",{class:!0});var T=U(r);s=v(T,"BUTTON",{class:!0,"data-svelte-h":!0}),oe(s)!=="svelte-14a44zx"&&(s.textContent=u),T.forEach(p),y.forEach(p),this.h()},h(){c(l,"class","alert-message"),c(s,"class","btn w-full bg-red-400 text-black p-2 rounded-md text-center text-sm"),c(r,"class","alert-actions"),c(e,"class","alert max-w-xs mx-auto h-22 p-4 bg-gray-300 shadow-md rounded-md space-x-4")},m(M,y){L(M,e,y),_(e,l),_(e,o),_(e,r),_(r,s),f||(E=H(s,"click",t[21]),f=!0)},p:we,d(M){M&&p(e),f=!1,E()}}}function St(t){let e,l,n;return{c(){e=ge("Select or Drag and Drop one file... "),l=b("br"),n=ge(" (docx, pdf)")},l(o){e=he(o,"Select or Drag and Drop one file... "),l=v(o,"BR",{}),n=he(o," (docx, pdf)")},m(o,r){L(o,e,r),L(o,l,r),L(o,n,r)},p:we,d(o){o&&(p(e),p(l),p(n))}}}function ot(t){let e,l,n=t[2][0].name+"",o,r;return{c(){e=b("span"),l=ge("File: "),o=ge(n),r=ge(" accepted!"),this.h()},l(s){e=v(s,"SPAN",{class:!0});var u=U(e);l=he(u,"File: "),o=he(u,n),r=he(u," accepted!"),u.forEach(p),this.h()},h(){c(e,"class","block text-gray-700 font-bold mb-2 text-center p-2")},m(s,u){L(s,e,u),_(e,l),_(e,o),_(e,r)},p(s,u){u[0]&4&&n!==(n=s[2][0].name+"")&&vt(o,n)},d(s){s&&p(e)}}}function Vt(t){let e,l='<button type="button" class="w-full bg-gray-300 text-black p-2 rounded-md">Select a file to upload!</button>';return{c(){e=b("div"),e.innerHTML=l,this.h()},l(n){e=v(n,"DIV",{class:!0,"data-svelte-h":!0}),oe(e)!=="svelte-hwvz7m"&&(e.innerHTML=l),this.h()},h(){c(e,"class","mt-6 p-8 grid grid-cols-1 gap-2")},m(n,o){L(n,e,o)},d(n){n&&p(e)}}}function At(t){let e,l='<span class="block text-gray-700 font-bold mb-2 text-center p-2">File is too big, upload something under 50MB!</span>';return{c(){e=b("div"),e.innerHTML=l,this.h()},l(n){e=v(n,"DIV",{class:!0,"data-svelte-h":!0}),oe(e)!=="svelte-wu1wz"&&(e.innerHTML=l),this.h()},h(){c(e,"class","mt-6 p-8 grid grid-cols-1 gap-2")},m(n,o){L(n,e,o)},d(n){n&&p(e)}}}function Bt(t){let e,l='<button type="submit" class="w-full bg-gray-300 text-black p-2 rounded-md">Upload!</button>';return{c(){e=b("div"),e.innerHTML=l,this.h()},l(n){e=v(n,"DIV",{class:!0,"data-svelte-h":!0}),oe(e)!=="svelte-1l3190s"&&(e.innerHTML=l),this.h()},h(){c(e,"class","mt-6 p-8 grid grid-cols-1 gap-2")},m(n,o){L(n,e,o)},d(n){n&&p(e)}}}function rt(t){let e,l,n;return l=new kt({props:{meter:"bg-sky-500",track:" bg-sky-500/30",class:"w-10/12 mx-auto",value:void 0}}),{c(){e=b("div"),Ie(l.$$.fragment)},l(o){e=v(o,"DIV",{});var r=U(e);De(l.$$.fragment,r),r.forEach(p)},m(o,r){L(o,e,r),Te(l,e,null),n=!0},p:we,i(o){n||(R(l.$$.fragment,o),n=!0)},o(o){Q(l.$$.fragment,o),n=!1},d(o){o&&p(e),ze(l)}}}function Pt(t){let e,l,n,o,r,s,u,f,E,M,y="Class Number:",T,k,g,W,j,S,X,D,N,Z,C,h,d,z,q,V,ne="Teacher:",ie,F,ue,le,J,ce,fe,x,i,Ee="Name Tag:",be,$,m,A,K,de,ve,Me,O=t[1]&&at(t);function dt(a){t[22](a)}let je={name:"file_in",accept:".docx, .pdf",class:"h-80 text-4xl max-w-xl mx-auto p-8 bg-white shadow-md rounded-md p-4",$$slots:{message:[St]},$$scope:{ctx:t}};t[2]!==void 0&&(je.files=t[2]),o=new wt({props:je}),ye.push(()=>Le(o,"files",dt)),o.$on("change",t[23]);let G=t[2]&&!t[3]&&ot(t);function pt(a){t[25](a)}let Oe={options:t[9]};t[5]!==void 0&&(Oe.input=t[5]),S=new Ae({props:Oe}),ye.push(()=>Le(S,"input",pt)),S.$on("selection",t[12]);function mt(a){t[27](a)}let Ge={options:t[10]};t[6]!==void 0&&(Ge.input=t[6]),h=new Ae({props:Ge}),ye.push(()=>Le(h,"input",mt)),h.$on("selection",t[13]);function _t(a){t[29](a)}let Je={options:t[11]};t[7]!==void 0&&(Je.input=t[7]),J=new Ae({props:Je}),ye.push(()=>Le(J,"input",_t)),J.$on("selection",t[14]);function Ke(a,I){if(!a[3]&&!a[4])return Bt;if(a[3]&&!a[4])return At;if(a[4])return Vt}let me=Ke(t),Y=me&&me(t),w=t[0]&&rt();return{c(){e=b("meta"),l=B(),O&&O.c(),n=B(),Ie(o.$$.fragment),s=B(),G&&G.c(),u=B(),f=b("form"),E=b("div"),M=b("label"),M.textContent=y,T=B(),k=b("div"),g=b("input"),W=B(),j=b("div"),Ie(S.$$.fragment),D=B(),N=b("input"),Z=B(),C=b("div"),Ie(h.$$.fragment),z=B(),q=b("div"),V=b("label"),V.textContent=ne,ie=B(),F=b("input"),ue=B(),le=b("div"),Ie(J.$$.fragment),fe=B(),x=b("div"),i=b("label"),i.textContent=Ee,be=B(),$=b("input"),m=B(),Y&&Y.c(),A=B(),w&&w.c(),K=$e(),this.h()},l(a){const I=ht("svelte-fsr6ac",document.head);e=v(I,"META",{name:!0,content:!0}),I.forEach(p),l=P(a),O&&O.l(a),n=P(a),De(o.$$.fragment,a),s=P(a),G&&G.l(a),u=P(a),f=v(a,"FORM",{class:!0});var ee=U(f);E=v(ee,"DIV",{class:!0});var pe=U(E);M=v(pe,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),oe(M)!=="svelte-ygpps7"&&(M.textContent=y),T=P(pe),k=v(pe,"DIV",{class:!0});var se=U(k);g=v(se,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0}),W=P(se),j=v(se,"DIV",{"data-popup":!0,class:!0});var ke=U(j);De(S.$$.fragment,ke),ke.forEach(p),D=P(se),N=v(se,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0}),Z=P(se),C=v(se,"DIV",{"data-popup":!0,class:!0});var Ye=U(C);De(h.$$.fragment,Ye),Ye.forEach(p),se.forEach(p),pe.forEach(p),z=P(ee),q=v(ee,"DIV",{class:!0});var _e=U(q);V=v(_e,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),oe(V)!=="svelte-1ghxucu"&&(V.textContent=ne),ie=P(_e),F=v(_e,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0}),ue=P(_e),le=v(_e,"DIV",{"data-popup":!0,class:!0});var Qe=U(le);De(J.$$.fragment,Qe),Qe.forEach(p),_e.forEach(p),fe=P(ee),x=v(ee,"DIV",{class:!0});var Ce=U(x);i=v(Ce,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),oe(i)!=="svelte-v0b4f7"&&(i.textContent=Ee),be=P(Ce),$=v(Ce,"INPUT",{type:!0,placeholder:!0,class:!0}),Ce.forEach(p),m=P(ee),Y&&Y.l(ee),ee.forEach(p),A=P(a),w&&w.l(a),K=$e(),this.h()},h(){document.title="Peer To Peer Notes - Upload",c(e,"name","description"),c(e,"content","Information To Enter"),c(M,"for","class"),c(M,"class","bg-gray-300 block text-gray-700 mb-2 text-center w-30 p-2 border rounded-md"),c(g,"class","input autocomplete border-0 bg-gray-300 rounded-md"),c(g,"type","search"),c(g,"name","autocomplete-search-dept"),c(g,"placeholder","CSCI"),c(j,"data-popup","popupAutocompleteDept"),c(j,"class","bg-gray-400 text-gray-700 mb-2 text-center w-30 p-2 rounded-md"),c(N,"class","input autocomplete border-0 bg-gray-300 rounded-md"),c(N,"type","search"),c(N,"name","autocomplete-search-num"),c(N,"placeholder","400"),c(C,"data-popup","popupAutocompleteNum"),c(C,"class","bg-gray-400 text-gray-700 mb-2 text-center w-30 p-2 rounded-md"),c(k,"class","grid grid-cols-2 space-x-4"),c(E,"class","mb-4 grid grid-cols-2 space-x-4"),c(V,"for","teacher_name"),c(V,"class","bg-gray-300 block text-gray-700 mb-2 text-center w-30 p-2 border rounded-md"),c(F,"class","input autocomplete border-0 bg-gray-300 rounded-md"),c(F,"type","search"),c(F,"name","autocomplete-search-num"),c(F,"placeholder","Neil Dantam"),c(le,"data-popup","popupAutocompleteTeacher"),c(le,"class","bg-gray-400 text-gray-700 mb-2 text-center w-70 p-2 rounded-md"),c(q,"class","mb-4 grid grid-cols-2 space-x-4"),c(i,"for","name_tag"),c(i,"class","bg-gray-300 block text-gray-700 mb-2 text-center w-30 p-2 border rounded-md"),c($,"type","text"),c($,"placeholder","Midterm 2 Review"),c($,"class","border-0 bg-gray-300 rounded-md"),c(x,"class","mb-4 grid grid-cols-2 space-x-8"),c(f,"class","max-w-xl mx-auto p-8 shadow-md rounded-md")},m(a,I){_(document.head,e),L(a,l,I),O&&O.m(a,I),L(a,n,I),Te(o,a,I),L(a,s,I),G&&G.m(a,I),L(a,u,I),L(a,f,I),_(f,E),_(E,M),_(E,T),_(E,k),_(k,g),re(g,t[5]),_(k,W),_(k,j),Te(S,j,null),_(k,D),_(k,N),re(N,t[6]),_(k,Z),_(k,C),Te(h,C,null),_(f,z),_(f,q),_(q,V),_(q,ie),_(q,F),re(F,t[7]),_(q,ue),_(q,le),Te(J,le,null),_(f,fe),_(f,x),_(x,i),_(x,be),_(x,$),re($,t[8]),_(f,m),Y&&Y.m(f,null),L(a,A,I),w&&w.m(a,I),L(a,K,I),de=!0,ve||(Me=[H(g,"input",t[24]),Se(Ve.call(null,g,t[15])),H(N,"input",t[26]),Se(Ve.call(null,N,t[16])),H(F,"input",t[28]),Se(Ve.call(null,F,t[17])),H($,"input",t[30]),H(f,"submit",bt(t[18]))],ve=!0)},p(a,I){a[1]?O?O.p(a,I):(O=at(a),O.c(),O.m(n.parentNode,n)):O&&(O.d(1),O=null);const ee={};I[1]&128&&(ee.$$scope={dirty:I,ctx:a}),!r&&I[0]&4&&(r=!0,ee.files=a[2],Ne(()=>r=!1)),o.$set(ee),a[2]&&!a[3]?G?G.p(a,I):(G=ot(a),G.c(),G.m(u.parentNode,u)):G&&(G.d(1),G=null),I[0]&32&&g.value!==a[5]&&re(g,a[5]);const pe={};!X&&I[0]&32&&(X=!0,pe.input=a[5],Ne(()=>X=!1)),S.$set(pe),I[0]&64&&N.value!==a[6]&&re(N,a[6]);const se={};!d&&I[0]&64&&(d=!0,se.input=a[6],Ne(()=>d=!1)),h.$set(se),I[0]&128&&F.value!==a[7]&&re(F,a[7]);const ke={};!ce&&I[0]&128&&(ce=!0,ke.input=a[7],Ne(()=>ce=!1)),J.$set(ke),I[0]&256&&$.value!==a[8]&&re($,a[8]),me!==(me=Ke(a))&&(Y&&Y.d(1),Y=me&&me(a),Y&&(Y.c(),Y.m(f,null))),a[0]?w?(w.p(a,I),I[0]&1&&R(w,1)):(w=rt(),w.c(),R(w,1),w.m(K.parentNode,K)):w&&(Pe(),Q(w,1,1,()=>{w=null}),He())},i(a){de||(R(o.$$.fragment,a),R(S.$$.fragment,a),R(h.$$.fragment,a),R(J.$$.fragment,a),R(w),de=!0)},o(a){Q(o.$$.fragment,a),Q(S.$$.fragment,a),Q(h.$$.fragment,a),Q(J.$$.fragment,a),Q(w),de=!1},d(a){a&&(p(l),p(n),p(s),p(u),p(f),p(A),p(K)),p(e),O&&O.d(a),ze(o,a),G&&G.d(a),ze(S),ze(h),ze(J),Y&&Y.d(),w&&w.d(a),ve=!1,ut(Me)}}}function Ht(t,e,l){let{data:n}=e,o=!1,r=!1,s,u=1;const f=1024*1024*50;let E=!1,M=!0,y="",T="",k="",g="",W=n.props.departments,j=n.props.class_numbers,S=n.props.professors;function X(m){l(5,y=m.detail.label)}function D(m){l(6,T=m.detail.label)}function N(m){l(7,k=m.detail.label)}let Z={event:"click",target:"popupAutocompleteDept",placement:"bottom"},C={event:"click",target:"popupAutocompleteNum",placement:"bottom"},h={event:"click",target:"popupAutocompleteTeacher",placement:"bottom"};async function d(){await ae.storage.from("notes").upload("/"+y+T+k+u,s[0])}async function z(){const{data:m,error:A}=await ae.schema("all_info").from("notes").select("document_name").eq("department",y).eq("class_number",T).eq("professor",k);let K=[];if((m==null?void 0:m.length)>0){m==null||m.forEach(Me=>{K.push(Me.document_name)}),K.sort();let de=K[K.length-1],ve=de[de.length-1];u=parseInt(ve)+1}}async function q(m){const{data:A,error:K}=await ae.schema("all_info").from("departments").select("*").eq("department",m);(A==null?void 0:A.length)==0&&await ae.schema("all_info").from("departments").insert({department:m})}async function V(m){const{data:A,error:K}=await ae.schema("all_info").from("class_numbers").select("*").eq("class_number",m);(A==null?void 0:A.length)==0&&await ae.schema("all_info").from("class_numbers").insert({class_number:m})}async function ne(m){const{data:A,error:K}=await ae.schema("all_info").from("professors").select("*").eq("full_name",m);(A==null?void 0:A.length)==0&&await ae.schema("all_info").from("professors").insert({full_name:m})}async function ie(){z(),l(0,o=!0),setTimeout(async()=>{d();let m=new Date,A=m.getFullYear()+"-"+(m.getMonth()+1)+"-"+m.getDate();await ae.schema("all_info").from("notes").insert({department:y,class_number:T,professor:k,document_name:y+T+k+u,upload_date:A,current_rating:0,number_of_ratings:0,name_tag:g})},5e3),q(y),V(T),ne(k),setTimeout(()=>{l(0,o=!1),l(1,r=!0)},5e3)}function F(){s?(l(4,M=!1),s[0].size>f?l(3,E=!0):l(3,E=!1)):(l(4,M=!0),l(3,E=!1))}const ue=()=>{l(1,r=!1)};function le(m){s=m,l(2,s)}const J=()=>F();function ce(){y=this.value,l(5,y)}function fe(m){y=m,l(5,y)}function x(){T=this.value,l(6,T)}function i(m){T=m,l(6,T)}function Ee(){k=this.value,l(7,k)}function be(m){k=m,l(7,k)}function $(){g=this.value,l(8,g)}return t.$$set=m=>{"data"in m&&l(20,n=m.data)},[o,r,s,E,M,y,T,k,g,W,j,S,X,D,N,Z,C,h,ie,F,n,ue,le,J,ce,fe,x,i,Ee,be,$]}class jt extends ct{constructor(e){super(),ft(this,e,Ht,Pt,it,{data:20},null,[-1,-1])}}export{jt as component};