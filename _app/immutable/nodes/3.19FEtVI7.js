import{s as it,w as we,x as Ue,e as h,a as w,c as b,b as q,g as B,f as m,y as We,p as c,z as Xe,i as S,h as _,A as P,B as qe,C as Fe,D as He,E as ut,F as Ze,G as gt,H as xe,I as $,r as ke,t as _e,J as ie,d as ge,n as Le,l as $e,K as ht,L as re,M as Se,N as bt,O as Me,j as vt}from"../chunks/scheduler.DvcFW9aP.js";import{S as ct,i as ft,a as H,g as Be,t as K,c as Pe,f as Ne,b as Ie,d as ye,m as De,e as Te}from"../chunks/index.hHxTvmnv.js";import{p as Ve}from"../chunks/ProgressBar.svelte_svelte_type_style_lang.BKAwSylO.js";import{A as Ae,P as kt,s as ae}from"../chunks/supabaseClient.CNkdpLlc.js";function It(t,e){const l={},n={},a={$$scope:1};let o=t.length;for(;o--;){const s=t[o],u=e[o];if(u){for(const d in s)d in u||(n[d]=1);for(const d in u)a[d]||(l[d]=u[d],a[d]=1);t[o]=u}else for(const d in s)a[d]=1}for(const s in n)s in l||(l[s]=void 0);return l}const yt=t=>({}),et=t=>({}),Dt=t=>({}),tt=t=>({}),Tt=t=>({}),lt=t=>({});function st(t){let e,l,n;const a=t[18].lead,o=Ue(a,t,t[17],lt);return{c(){e=h("div"),o&&o.c(),this.h()},l(s){e=b(s,"DIV",{class:!0});var u=q(e);o&&o.l(u),u.forEach(m),this.h()},h(){c(e,"class",l="dropzone-lead "+t[5])},m(s,u){S(s,e,u),o&&o.m(e,null),n=!0},p(s,u){o&&o.p&&(!n||u[0]&131072)&&qe(o,a,s,s[17],n?He(a,s[17],u,Tt):Fe(s[17]),lt),(!n||u[0]&32&&l!==(l="dropzone-lead "+s[5]))&&c(e,"class",l)},i(s){n||(H(o,s),n=!0)},o(s){K(o,s),n=!1},d(s){s&&m(e),o&&o.d(s)}}}function zt(t){let e,l="Upload a file",n;return{c(){e=h("strong"),e.textContent=l,n=_e(" or drag and drop")},l(a){e=b(a,"STRONG",{"data-svelte-h":!0}),ie(e)!=="svelte-13uz6lq"&&(e.textContent=l),n=ge(a," or drag and drop")},m(a,o){S(a,e,o),S(a,n,o)},p:Le,d(a){a&&(m(e),m(n))}}}function nt(t){let e,l,n;const a=t[18].meta,o=Ue(a,t,t[17],et);return{c(){e=h("small"),o&&o.c(),this.h()},l(s){e=b(s,"SMALL",{class:!0});var u=q(e);o&&o.l(u),u.forEach(m),this.h()},h(){c(e,"class",l="dropzone-meta "+t[7])},m(s,u){S(s,e,u),o&&o.m(e,null),n=!0},p(s,u){o&&o.p&&(!n||u[0]&131072)&&qe(o,a,s,s[17],n?He(a,s[17],u,yt):Fe(s[17]),et),(!n||u[0]&128&&l!==(l="dropzone-meta "+s[7]))&&c(e,"class",l)},i(s){n||(H(o,s),n=!0)},o(s){K(o,s),n=!1},d(s){s&&m(e),o&&o.d(s)}}}function Et(t){let e,l,n,a,o,s,u,d,C,v,I,T,E,k,Y,R,V=[{type:"file"},{name:t[2]},{class:n="dropzone-input "+t[9]},t[11]()],Q={};for(let p=0;p<V.length;p+=1)Q=we(Q,V[p]);let D=t[13].lead&&st(t);const N=t[18].message,W=Ue(N,t,t[17],tt),M=W||zt();let g=t[13].meta&&nt(t);return{c(){e=h("div"),l=h("input"),a=w(),o=h("div"),s=h("div"),D&&D.c(),u=w(),d=h("div"),M&&M.c(),v=w(),g&&g.c(),this.h()},l(p){e=b(p,"DIV",{class:!0,"data-testid":!0});var z=q(e);l=b(z,"INPUT",{type:!0,name:!0,class:!0}),a=B(z),o=b(z,"DIV",{class:!0});var F=q(o);s=b(F,"DIV",{class:!0});var A=q(s);D&&D.l(A),u=B(A),d=b(A,"DIV",{class:!0});var le=q(d);M&&M.l(le),le.forEach(m),v=B(A),g&&g.l(A),A.forEach(m),F.forEach(m),z.forEach(m),this.h()},h(){We(l,Q),c(d,"class",C="dropzone-message "+t[6]),c(s,"class",I="dropzone-interface-text "+t[4]),c(o,"class",T="dropzone-interface "+t[8]+" "+t[3]),c(e,"class",E="dropzone "+t[10]),c(e,"data-testid","file-dropzone"),Xe(e,"opacity-50",t[12].disabled)},m(p,z){S(p,e,z),_(e,l),l.autofocus&&l.focus(),t[32](l),_(e,a),_(e,o),_(o,s),D&&D.m(s,null),_(s,u),_(s,d),M&&M.m(d,null),_(s,v),g&&g.m(s,null),k=!0,Y||(R=[P(l,"change",t[31]),P(l,"change",t[19]),P(l,"dragenter",t[20]),P(l,"dragover",t[21]),P(l,"dragleave",t[22]),P(l,"drop",t[23]),P(l,"click",t[24]),P(l,"keydown",t[25]),P(l,"keyup",t[26]),P(l,"keypress",t[27]),P(l,"focus",t[28]),P(l,"focusin",t[29]),P(l,"focusout",t[30])],Y=!0)},p(p,z){We(l,Q=It(V,[{type:"file"},(!k||z[0]&4)&&{name:p[2]},(!k||z[0]&512&&n!==(n="dropzone-input "+p[9]))&&{class:n},p[11]()])),p[13].lead?D?(D.p(p,z),z[0]&8192&&H(D,1)):(D=st(p),D.c(),H(D,1),D.m(s,u)):D&&(Be(),K(D,1,1,()=>{D=null}),Pe()),W&&W.p&&(!k||z[0]&131072)&&qe(W,N,p,p[17],k?He(N,p[17],z,Dt):Fe(p[17]),tt),(!k||z[0]&64&&C!==(C="dropzone-message "+p[6]))&&c(d,"class",C),p[13].meta?g?(g.p(p,z),z[0]&8192&&H(g,1)):(g=nt(p),g.c(),H(g,1),g.m(s,null)):g&&(Be(),K(g,1,1,()=>{g=null}),Pe()),(!k||z[0]&16&&I!==(I="dropzone-interface-text "+p[4]))&&c(s,"class",I),(!k||z[0]&264&&T!==(T="dropzone-interface "+p[8]+" "+p[3]))&&c(o,"class",T),(!k||z[0]&1024&&E!==(E="dropzone "+p[10]))&&c(e,"class",E),(!k||z[0]&5120)&&Xe(e,"opacity-50",p[12].disabled)},i(p){k||(H(D),H(M,p),H(g),k=!0)},o(p){K(D),K(M,p),K(g),k=!1},d(p){p&&m(e),t[32](null),D&&D.d(),M&&M.d(p),g&&g.d(),Y=!1,ut(R)}}}const Ct="textarea relative flex justify-center items-center",Mt="w-full absolute top-0 left-0 right-0 bottom-0 z-[1] opacity-0 disabled:!opacity-0 cursor-pointer",Nt="flex justify-center items-center text-center";function Lt(t,e,l){let n,a,o;const s=["files","fileInput","name","border","padding","rounded","regionInterface","regionInterfaceText","slotLead","slotMessage","slotMeta"];let u=Ze(e,s),{$$slots:d={},$$scope:C}=e;const v=gt(d);let{files:I=void 0}=e,{fileInput:T=void 0}=e,{name:E}=e,{border:k="border-2 border-dashed"}=e,{padding:Y="p-4 py-8"}=e,{rounded:R="rounded-container-token"}=e,{regionInterface:V=""}=e,{regionInterfaceText:Q=""}=e,{slotLead:D="mb-4"}=e,{slotMessage:N=""}=e,{slotMeta:W="opacity-75"}=e;function M(){return delete u.class,u}function g(i){$.call(this,t,i)}function p(i){$.call(this,t,i)}function z(i){$.call(this,t,i)}function F(i){$.call(this,t,i)}function A(i){$.call(this,t,i)}function le(i){$.call(this,t,i)}function oe(i){$.call(this,t,i)}function j(i){$.call(this,t,i)}function ue(i){$.call(this,t,i)}function ee(i){$.call(this,t,i)}function J(i){$.call(this,t,i)}function ce(i){$.call(this,t,i)}function fe(){I=this.files,l(0,I)}function X(i){ke[i?"unshift":"push"](()=>{T=i,l(1,T)})}return t.$$set=i=>{l(33,e=we(we({},e),xe(i))),l(12,u=Ze(e,s)),"files"in i&&l(0,I=i.files),"fileInput"in i&&l(1,T=i.fileInput),"name"in i&&l(2,E=i.name),"border"in i&&l(14,k=i.border),"padding"in i&&l(15,Y=i.padding),"rounded"in i&&l(16,R=i.rounded),"regionInterface"in i&&l(3,V=i.regionInterface),"regionInterfaceText"in i&&l(4,Q=i.regionInterfaceText),"slotLead"in i&&l(5,D=i.slotLead),"slotMessage"in i&&l(6,N=i.slotMessage),"slotMeta"in i&&l(7,W=i.slotMeta),"$$scope"in i&&l(17,C=i.$$scope)},t.$$.update=()=>{l(10,n=`${Ct} ${k} ${Y} ${R} ${e.class??""}`)},l(9,a=`${Mt}`),l(8,o=`${Nt}`),e=xe(e),[I,T,E,V,Q,D,N,W,o,a,n,M,u,v,k,Y,R,C,d,g,p,z,F,A,le,oe,j,ue,ee,J,ce,fe,X]}class St extends ct{constructor(e){super(),ft(this,e,Lt,Et,it,{files:0,fileInput:1,name:2,border:14,padding:15,rounded:16,regionInterface:3,regionInterfaceText:4,slotLead:5,slotMessage:6,slotMeta:7},null,[-1,-1])}}function at(t){let e,l,n='<span class="block text-gray-700 font-bold mb-2 text-center p-2">Notes uploaded successfully!</span>',a,o,s,u="Dismiss",d,C;return{c(){e=h("aside"),l=h("div"),l.innerHTML=n,a=w(),o=h("div"),s=h("button"),s.textContent=u,this.h()},l(v){e=b(v,"ASIDE",{class:!0});var I=q(e);l=b(I,"DIV",{class:!0,"data-svelte-h":!0}),ie(l)!=="svelte-19jrnro"&&(l.innerHTML=n),a=B(I),o=b(I,"DIV",{class:!0});var T=q(o);s=b(T,"BUTTON",{class:!0,"data-svelte-h":!0}),ie(s)!=="svelte-14a44zx"&&(s.textContent=u),T.forEach(m),I.forEach(m),this.h()},h(){c(l,"class","alert-message"),c(s,"class","btn w-full bg-red-400 text-black p-2 rounded-md text-center text-sm"),c(o,"class","alert-actions"),c(e,"class","alert max-w-xs mx-auto h-22 p-4 bg-gray-300 shadow-md rounded-md space-x-4")},m(v,I){S(v,e,I),_(e,l),_(e,a),_(e,o),_(o,s),d||(C=P(s,"click",t[20]),d=!0)},p:Le,d(v){v&&m(e),d=!1,C()}}}function Vt(t){let e,l,n;return{c(){e=_e("Select or Drag and Drop one file... "),l=h("br"),n=_e(" (docx, pdf)")},l(a){e=ge(a,"Select or Drag and Drop one file... "),l=b(a,"BR",{}),n=ge(a," (docx, pdf)")},m(a,o){S(a,e,o),S(a,l,o),S(a,n,o)},p:Le,d(a){a&&(m(e),m(l),m(n))}}}function ot(t){let e,l,n=t[2][0].name+"",a,o;return{c(){e=h("span"),l=_e("File: "),a=_e(n),o=_e(" accepted!"),this.h()},l(s){e=b(s,"SPAN",{class:!0});var u=q(e);l=ge(u,"File: "),a=ge(u,n),o=ge(u," accepted!"),u.forEach(m),this.h()},h(){c(e,"class","block text-gray-700 font-bold mb-2 text-center p-2")},m(s,u){S(s,e,u),_(e,l),_(e,a),_(e,o)},p(s,u){u[0]&4&&n!==(n=s[2][0].name+"")&&vt(a,n)},d(s){s&&m(e)}}}function At(t){let e,l='<span class="block text-gray-700 font-bold mb-2 text-center p-2">File is too big, upload something under 50MB!</span>';return{c(){e=h("div"),e.innerHTML=l,this.h()},l(n){e=b(n,"DIV",{class:!0,"data-svelte-h":!0}),ie(e)!=="svelte-1lv0z17"&&(e.innerHTML=l),this.h()},h(){c(e,"class","mt-6 p-8 grid grid-cols-1 gap-2")},m(n,a){S(n,e,a)},d(n){n&&m(e)}}}function wt(t){let e,l='<button type="submit" class="w-full bg-gray-300 text-black p-2 rounded-md">Upload!</button>';return{c(){e=h("div"),e.innerHTML=l,this.h()},l(n){e=b(n,"DIV",{class:!0,"data-svelte-h":!0}),ie(e)!=="svelte-1l3190s"&&(e.innerHTML=l),this.h()},h(){c(e,"class","mt-6 p-8 grid grid-cols-1 gap-2")},m(n,a){S(n,e,a)},d(n){n&&m(e)}}}function rt(t){let e,l,n;return l=new kt({props:{meter:"bg-sky-500",track:" bg-sky-500/30",class:"w-10/12 mx-auto",value:void 0}}),{c(){e=h("div"),Ie(l.$$.fragment)},l(a){e=b(a,"DIV",{});var o=q(e);ye(l.$$.fragment,o),o.forEach(m)},m(a,o){S(a,e,o),De(l,e,null),n=!0},p:Le,i(a){n||(H(l.$$.fragment,a),n=!0)},o(a){K(l.$$.fragment,a),n=!1},d(a){a&&m(e),Te(l)}}}function Bt(t){let e,l,n,a,o,s,u,d,C,v,I="Class Number:",T,E,k,Y,R,V,Q,D,N,W,M,g,p,z,F,A,le="Teacher:",oe,j,ue,ee,J,ce,fe,X,i,ze="Name Tag:",he,f,U,Z,se,pe,be,Re,O=t[1]&&at(t);function dt(r){t[21](r)}let je={name:"file_in",accept:".docx, .pdf",class:"h-80 text-4xl max-w-xl mx-auto p-8 bg-white shadow-md rounded-md p-4",$$slots:{message:[Vt]},$$scope:{ctx:t}};t[2]!==void 0&&(je.files=t[2]),a=new St({props:je}),ke.push(()=>Ne(a,"files",dt)),a.$on("change",t[22]);let G=t[2]&&!t[3]&&ot(t);function pt(r){t[24](r)}let Oe={options:t[8]};t[4]!==void 0&&(Oe.input=t[4]),V=new Ae({props:Oe}),ke.push(()=>Ne(V,"input",pt)),V.$on("selection",t[11]);function mt(r){t[26](r)}let Ge={options:t[9]};t[5]!==void 0&&(Ge.input=t[5]),g=new Ae({props:Ge}),ke.push(()=>Ne(g,"input",mt)),g.$on("selection",t[12]);function _t(r){t[28](r)}let Je={options:t[10]};t[6]!==void 0&&(Je.input=t[6]),J=new Ae({props:Je}),ke.push(()=>Ne(J,"input",_t)),J.$on("selection",t[13]);function Ke(r,y){return r[3]?At:wt}let Ee=Ke(t),ne=Ee(t),L=t[0]&&rt();return{c(){e=h("meta"),l=w(),O&&O.c(),n=w(),Ie(a.$$.fragment),s=w(),G&&G.c(),u=w(),d=h("form"),C=h("div"),v=h("label"),v.textContent=I,T=w(),E=h("div"),k=h("input"),Y=w(),R=h("div"),Ie(V.$$.fragment),D=w(),N=h("input"),W=w(),M=h("div"),Ie(g.$$.fragment),z=w(),F=h("div"),A=h("label"),A.textContent=le,oe=w(),j=h("input"),ue=w(),ee=h("div"),Ie(J.$$.fragment),fe=w(),X=h("div"),i=h("label"),i.textContent=ze,he=w(),f=h("input"),U=w(),ne.c(),Z=w(),L&&L.c(),se=$e(),this.h()},l(r){const y=ht("svelte-fsr6ac",document.head);e=b(y,"META",{name:!0,content:!0}),y.forEach(m),l=B(r),O&&O.l(r),n=B(r),ye(a.$$.fragment,r),s=B(r),G&&G.l(r),u=B(r),d=b(r,"FORM",{class:!0});var x=q(d);C=b(x,"DIV",{class:!0});var de=q(C);v=b(de,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),ie(v)!=="svelte-ygpps7"&&(v.textContent=I),T=B(de),E=b(de,"DIV",{class:!0});var te=q(E);k=b(te,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0}),Y=B(te),R=b(te,"DIV",{"data-popup":!0,class:!0});var ve=q(R);ye(V.$$.fragment,ve),ve.forEach(m),D=B(te),N=b(te,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0}),W=B(te),M=b(te,"DIV",{"data-popup":!0,class:!0});var Ye=q(M);ye(g.$$.fragment,Ye),Ye.forEach(m),te.forEach(m),de.forEach(m),z=B(x),F=b(x,"DIV",{class:!0});var me=q(F);A=b(me,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),ie(A)!=="svelte-1ghxucu"&&(A.textContent=le),oe=B(me),j=b(me,"INPUT",{class:!0,type:!0,name:!0,placeholder:!0}),ue=B(me),ee=b(me,"DIV",{"data-popup":!0,class:!0});var Qe=q(ee);ye(J.$$.fragment,Qe),Qe.forEach(m),me.forEach(m),fe=B(x),X=b(x,"DIV",{class:!0});var Ce=q(X);i=b(Ce,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),ie(i)!=="svelte-v0b4f7"&&(i.textContent=ze),he=B(Ce),f=b(Ce,"INPUT",{type:!0,placeholder:!0,class:!0}),Ce.forEach(m),U=B(x),ne.l(x),x.forEach(m),Z=B(r),L&&L.l(r),se=$e(),this.h()},h(){document.title="Peer To Peer Notes - Upload",c(e,"name","description"),c(e,"content","Information To Enter"),c(v,"for","class"),c(v,"class","bg-gray-300 block text-gray-700 mb-2 text-center w-30 p-2 border rounded-md"),c(k,"class","input autocomplete border-0 bg-gray-300 rounded-md"),c(k,"type","search"),c(k,"name","autocomplete-search-dept"),c(k,"placeholder","CSCI"),c(R,"data-popup","popupAutocompleteDept"),c(R,"class","bg-gray-400 text-gray-700 mb-2 text-center w-30 p-2 rounded-md"),c(N,"class","input autocomplete border-0 bg-gray-300 rounded-md"),c(N,"type","search"),c(N,"name","autocomplete-search-num"),c(N,"placeholder","400"),c(M,"data-popup","popupAutocompleteNum"),c(M,"class","bg-gray-400 text-gray-700 mb-2 text-center w-30 p-2 rounded-md"),c(E,"class","grid grid-cols-2 space-x-4"),c(C,"class","mb-4 grid grid-cols-2 space-x-4"),c(A,"for","teacher_name"),c(A,"class","bg-gray-300 block text-gray-700 mb-2 text-center w-30 p-2 border rounded-md"),c(j,"class","input autocomplete border-0 bg-gray-300 rounded-md"),c(j,"type","search"),c(j,"name","autocomplete-search-num"),c(j,"placeholder","Neil Dantam"),c(ee,"data-popup","popupAutocompleteTeacher"),c(ee,"class","bg-gray-400 text-gray-700 mb-2 text-center w-70 p-2 rounded-md"),c(F,"class","mb-4 grid grid-cols-2 space-x-4"),c(i,"for","name_tag"),c(i,"class","bg-gray-300 block text-gray-700 mb-2 text-center w-30 p-2 border rounded-md"),c(f,"type","text"),c(f,"placeholder","Midterm 2 Review"),c(f,"class","border-0 bg-gray-300 rounded-md"),c(X,"class","mb-4 grid grid-cols-2 space-x-8"),c(d,"class","max-w-xl mx-auto p-8 shadow-md rounded-md")},m(r,y){_(document.head,e),S(r,l,y),O&&O.m(r,y),S(r,n,y),De(a,r,y),S(r,s,y),G&&G.m(r,y),S(r,u,y),S(r,d,y),_(d,C),_(C,v),_(C,T),_(C,E),_(E,k),re(k,t[4]),_(E,Y),_(E,R),De(V,R,null),_(E,D),_(E,N),re(N,t[5]),_(E,W),_(E,M),De(g,M,null),_(d,z),_(d,F),_(F,A),_(F,oe),_(F,j),re(j,t[6]),_(F,ue),_(F,ee),De(J,ee,null),_(d,fe),_(d,X),_(X,i),_(X,he),_(X,f),re(f,t[7]),_(d,U),ne.m(d,null),S(r,Z,y),L&&L.m(r,y),S(r,se,y),pe=!0,be||(Re=[P(k,"input",t[23]),Se(Ve.call(null,k,t[14])),P(N,"input",t[25]),Se(Ve.call(null,N,t[15])),P(j,"input",t[27]),Se(Ve.call(null,j,t[16])),P(f,"input",t[29]),P(d,"submit",bt(t[17]))],be=!0)},p(r,y){r[1]?O?O.p(r,y):(O=at(r),O.c(),O.m(n.parentNode,n)):O&&(O.d(1),O=null);const x={};y[1]&64&&(x.$$scope={dirty:y,ctx:r}),!o&&y[0]&4&&(o=!0,x.files=r[2],Me(()=>o=!1)),a.$set(x),r[2]&&!r[3]?G?G.p(r,y):(G=ot(r),G.c(),G.m(u.parentNode,u)):G&&(G.d(1),G=null),y[0]&16&&k.value!==r[4]&&re(k,r[4]);const de={};!Q&&y[0]&16&&(Q=!0,de.input=r[4],Me(()=>Q=!1)),V.$set(de),y[0]&32&&N.value!==r[5]&&re(N,r[5]);const te={};!p&&y[0]&32&&(p=!0,te.input=r[5],Me(()=>p=!1)),g.$set(te),y[0]&64&&j.value!==r[6]&&re(j,r[6]);const ve={};!ce&&y[0]&64&&(ce=!0,ve.input=r[6],Me(()=>ce=!1)),J.$set(ve),y[0]&128&&f.value!==r[7]&&re(f,r[7]),Ee!==(Ee=Ke(r))&&(ne.d(1),ne=Ee(r),ne&&(ne.c(),ne.m(d,null))),r[0]?L?(L.p(r,y),y[0]&1&&H(L,1)):(L=rt(),L.c(),H(L,1),L.m(se.parentNode,se)):L&&(Be(),K(L,1,1,()=>{L=null}),Pe())},i(r){pe||(H(a.$$.fragment,r),H(V.$$.fragment,r),H(g.$$.fragment,r),H(J.$$.fragment,r),H(L),pe=!0)},o(r){K(a.$$.fragment,r),K(V.$$.fragment,r),K(g.$$.fragment,r),K(J.$$.fragment,r),K(L),pe=!1},d(r){r&&(m(l),m(n),m(s),m(u),m(d),m(Z),m(se)),m(e),O&&O.d(r),Te(a,r),G&&G.d(r),Te(V),Te(g),Te(J),ne.d(),L&&L.d(r),be=!1,ut(Re)}}}function Pt(t,e,l){let{data:n}=e,a=!1,o=!1,s,u=1;const d=1024*1024*50;let C=!1,v="",I="",T="",E="",k=n.props.departments,Y=n.props.class_numbers,R=n.props.professors;function V(f){l(4,v=f.detail.label)}function Q(f){l(5,I=f.detail.label)}function D(f){l(6,T=f.detail.label)}let N={event:"click",target:"popupAutocompleteDept",placement:"bottom"},W={event:"click",target:"popupAutocompleteNum",placement:"bottom"},M={event:"click",target:"popupAutocompleteTeacher",placement:"bottom"};async function g(){await ae.storage.from("notes").upload("/"+v+I+T+u,s[0])}async function p(){const{data:f,error:U}=await ae.schema("all_info").from("notes").select("document_name").eq("department",v).eq("class_number",I).eq("professor",T);let Z=[];if((f==null?void 0:f.length)>0){f==null||f.forEach(be=>{Z.push(be.document_name)}),Z.sort();let se=Z[Z.length-1],pe=se[se.length-1];u=parseInt(pe)+1}}async function z(f){const{data:U,error:Z}=await ae.schema("all_info").from("departments").select("*").eq("department",f);(U==null?void 0:U.length)==0&&await ae.schema("all_info").from("departments").insert({department:f})}async function F(f){const{data:U,error:Z}=await ae.schema("all_info").from("class_numbers").select("*").eq("class_number",f);(U==null?void 0:U.length)==0&&await ae.schema("all_info").from("class_numbers").insert({class_number:f})}async function A(f){const{data:U,error:Z}=await ae.schema("all_info").from("professors").select("*").eq("full_name",f);(U==null?void 0:U.length)==0&&await ae.schema("all_info").from("professors").insert({full_name:f})}async function le(){console.log(s),p(),l(0,a=!0),setTimeout(async()=>{g();let f=new Date,U=f.getFullYear()+"-"+(f.getMonth()+1)+"-"+f.getDate();await ae.schema("all_info").from("notes").insert({department:v,class_number:I,professor:T,document_name:v+I+T+u,upload_date:U,current_rating:0,number_of_ratings:0,name_tag:E})},5e3),z(v),F(I),A(T),setTimeout(()=>{l(0,a=!1),l(1,o=!0)},5e3)}function oe(){s[0].size>d?l(3,C=!0):l(3,C=!1)}const j=()=>{l(1,o=!1)};function ue(f){s=f,l(2,s)}const ee=()=>oe();function J(){v=this.value,l(4,v)}function ce(f){v=f,l(4,v)}function fe(){I=this.value,l(5,I)}function X(f){I=f,l(5,I)}function i(){T=this.value,l(6,T)}function ze(f){T=f,l(6,T)}function he(){E=this.value,l(7,E)}return t.$$set=f=>{"data"in f&&l(19,n=f.data)},[a,o,s,C,v,I,T,E,k,Y,R,V,Q,D,N,W,M,le,oe,n,j,ue,ee,J,ce,fe,X,i,ze,he]}class Rt extends ct{constructor(e){super(),ft(this,e,Pt,Bt,it,{data:19},null,[-1,-1])}}export{Rt as component};