(function(){"use strict";var t={640:function(t,a,e){var i=e(768),n=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"app"}},[t._m(0),a("nav",[a("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),a("router-link",{attrs:{to:"/partneri"}},[t._v("Partneri")]),t._v(" | "),a("router-link",{attrs:{to:"/pitanja-informacije"}},[t._v("Kontakt")])],1),a("router-view")],1)},r=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"logo"},[a("img",{attrs:{src:e(656),width:"300",height:"150"}})])}],s=e(528),o={},l=(0,s.c)(o,n,r,!1,null,null,null),c=l.exports,u=e(408),d=function(){var t=this,a=t._self._c;return a("div",{staticClass:"telo"},[a("HeaderH",{attrs:{title:"IBooking"}}),t._m(0),a("div",{staticClass:"dugmad"},[a("button",{staticClass:"btn1",attrs:{disabled:0===t.current},on:{click:function(a){return t.prev()}}},[t._v("Prethodno")]),a("button",{staticClass:"btn1",attrs:{disabled:t.current>=t.sveDestinacije.length-6},on:{click:function(a){return t.next()}}},[t._v("Sledeće")])]),a("ListDestination",{attrs:{destinacije:t.sveDestinacije.slice(t.current,t.current+6)}})],1)},p=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"naslov2"},[a("h2",{staticClass:"naslov"},[t._v("Destinacije u ponudi: ")])])}],m=function(){var t=this,a=t._self._c;return a("div",{staticClass:"header"},[a("h1",{staticClass:"prvi"},[t._v(t._s(t.title))])])},v=[],h={name:"HeaderH",props:{title:String}},f=h,j=(0,s.c)(f,m,v,!1,null,"27693022",null),b=j.exports,g=function(){var t=this,a=t._self._c;return a("div",{staticClass:"destinacije"},t._l(t.destinacije,(function(t){return a("SingleDestination",{key:t.id,attrs:{destinacija:t}})})),1)},_=[],k=function(){var t=this,a=t._self._c;return a("div",{staticClass:"destinacija",on:{click:function(a){return t.kliknutaDestinacija(t.destinacija.id)}}},[a("img",{attrs:{src:"/destinacije/"+t.destinacija.putanja,width:"350",height:"200"}}),a("h3",[t._v(t._s(t.destinacija.drzava))])])},P=[],y={name:"SingleDestination",props:{destinacija:Object},methods:{kliknutaDestinacija(t){this.$router.push({name:"Destinacija",params:{id:t}})}}},z=y,C=(0,s.c)(z,k,P,!1,null,"1bdc90e4",null),D=C.exports,w={name:"ListDestination",components:{SingleDestination:D},props:{destinacije:Array}},x=w,H=(0,s.c)(x,g,_,!1,null,"caf126a6",null),O=H.exports,S={name:"App",components:{HeaderH:b,ListDestination:O},data(){return{headerTitle:"IBooking sajt",sveDestinacije:null,current:0}},methods:{next(){this.current<this.sveDestinacije.length-6&&(this.current+=6)},prev(){this.current>=6&&(this.current-=6)},getPathForDestination(t){const a=this.sveDestinacije.find((a=>a.id===t));return a?a.putanja:"Destinacija nije pronađena"}},mounted(){fetch("http://localhost:9000/destinacije/").then((t=>t.json())).then((t=>{this.sveDestinacije=t}))}},I=S,T=(0,s.c)(I,d,p,!1,null,null,null),$=T.exports,B=function(){var t=this,a=t._self._c;return a("div",{staticClass:"glavni"},[a("div",{staticClass:"destinacija"},[a("h1",{staticClass:"i"},[t._v("Korisne informacije o destinaciji")]),a("img",{staticClass:"slika",attrs:{src:"/destinacije/"+t.destinacija.putanja,width:"350",height:"200"}})]),a("div",{staticClass:"info"},[a("h2",[t._v("Drzava:")]),a("h3",[t._v(t._s(t.destinacija.drzava))]),a("h2",[t._v("Jezik:")]),a("h3",[t._v(t._s(t.destinacija.jezik))]),a("h2",[t._v("Valuta:")]),a("h3",[t._v(t._s(t.destinacija.valuta))]),a("h2",[t._v("Popularna mesta:")]),a("h3",[t._v(t._s(t.destinacija.restorani))])])])},E=[],A={name:"Destinacija",components:{HeaderH:b},data(){return{destinacija:null}},mounted(){let t=this.$route.params.id;fetch(`http://localhost:9000/destinacije/${t}`).then((t=>t.json())).then((t=>{this.destinacija=t}))}},F=A,K=(0,s.c)(F,B,E,!1,null,null,null),M=K.exports,L=function(){var t=this,a=t._self._c;return a("div",[a("HeaderH",{attrs:{title:"Partneri sa kojima saradjuje IBooking"}}),t.paginatedPartneri?a("b-table",{attrs:{striped:"",hover:"",items:t.paginatedPartneri,fields:t.fields,id:"tabelaPartneri"},scopedSlots:t._u([{key:"cell(naziv)",fn:function(e){return[a("div",{staticClass:"partneri-item"},[a("img",{staticClass:"partneri-slika",attrs:{src:"/partneri/"+e.item.putanja,alt:"Slika partnera"}}),a("span",{staticClass:"partneriNaziv"},[t._v(t._s(e.item.naziv))])])]}}],null,!1,4256146977)}):t._e(),a("b-pagination",{attrs:{"total-rows":t.partneri.length,"per-page":5},on:{change:t.handlePageChange},model:{value:t.currentPage,callback:function(a){t.currentPage=a},expression:"currentPage"}})],1)},N=[],V=e(416),J={name:"Partneri",components:{HeaderH:b},data(){return{paginatedPartneri:[],currentPage:1,fields:[{key:"naziv",label:"Naziv"},{key:"adresa",label:"Adresa"}]}},mounted(){fetch("http://localhost:9000/partneri/").then((t=>t.json())).then((t=>{this.partneri=t,this.paginateData()}))},computed:{...(0,V.ys)(["kompanije"])},methods:{paginateData(){const t=5*(this.currentPage-1),a=t+5;this.paginatedPartneri=this.partneri.slice(t,a)},handlePageChange(t){this.currentPage=t,this.paginateData()}}},U=J,q=(0,s.c)(U,L,N,!1,null,"bb4683bc",null),G=q.exports,Q=function(){var t=this,a=t._self._c;return a("div",{staticClass:"telo"},[a("HeaderH",{attrs:{title:"Kontakt servis IBooking"}}),a("b-alert",{attrs:{variant:t.statusnaPorukaTip,show:null!==t.statusnaPoruka}},[t._v(" "+t._s(t.statusnaPoruka)+" ")]),a("div",[a("b-container",{attrs:{fluid:""}},[a("b-row",[a("b-col",{attrs:{sm:"3"}},[a("label",{attrs:{for:"ime"}},[t._v("Ime")])]),a("b-col",{attrs:{sm:"9"}},[a("b-form-input",{attrs:{id:"ime",state:t.validnoIme},model:{value:t.forma.ime,callback:function(a){t.$set(t.forma,"ime",a)},expression:"forma.ime"}})],1)],1),a("b-row",[a("b-col",{attrs:{sm:"3"}},[a("label",[t._v("Prezime")])]),a("b-col",{attrs:{sm:"9"}},[a("b-form-input",{attrs:{id:"prezime",state:t.validnoPrezime},model:{value:t.forma.prezime,callback:function(a){t.$set(t.forma,"prezime",a)},expression:"forma.prezime"}})],1)],1),a("b-row",[a("b-col",{attrs:{sm:"3"}},[a("label",[t._v("Email")])]),a("b-col",{attrs:{sm:"9"}},[a("b-form-input",{attrs:{id:"email",state:t.validnoEmail},model:{value:t.forma.email,callback:function(a){t.$set(t.forma,"email",a)},expression:"forma.email"}})],1)],1),a("b-row",[a("b-col",{attrs:{sm:"3"}},[a("label",[t._v("Vase pitanje upisite ovde:")])]),a("b-col",{attrs:{sm:"9"}},[a("b-form-textarea",{attrs:{id:"textarea",state:t.validnaPrijava,rows:4},model:{value:t.forma.prijava,callback:function(a){t.$set(t.forma,"prijava",a)},expression:"forma.prijava"}})],1)],1)],1),a("b-button",{attrs:{variant:"primary"},on:{click:function(a){return t.posalji()}}},[t._v("Posalji")])],1)],1)},R=[],W={name:"App",components:{HeaderH:b},data(){return{headerTitle:"IBooking Kontakt/Info",statusnaPoruka:null,statusnaPorukaTip:null,forma:{ime:null,prezime:null,email:null,prijava:null}}},computed:{validnoIme(){return this.forma.ime&&this.forma.ime.length>2},validnoPrezime(){return this.forma.prezime&&this.forma.prezime.length>2},validnoEmail(){return this.forma.email&&this.forma.email.includes("@")},validnaPrijava(){return this.forma.prijava&&this.forma.prijava.length>2}},methods:{posalji(){this.validnoIme&&this.validnoPrezime&&this.validnoEmail&&this.validnaPrijava?setTimeout((()=>{this.statusnaPoruka="Uspesno ste poslali vase pitanje, neko ce vam uskoro odgovoriti, vas IBooking hvala sto birate nas!",this.statusnaPorukaTip="success",this.resetForme()}),1e3):(this.statusnaPoruka="Molimo vas da ispravno popunite sva polja",this.statusnaPorukaTip="danger")},resetForme(){this.forma.ime="",this.forma.prezime="",this.forma.email="",this.forma.prijava=""}}},X=W,Y=(0,s.c)(X,Q,R,!1,null,"ece2cb46",null),Z=Y.exports;i["default"].use(u.cp);const tt=[{path:"/",name:"home",component:$},{path:"/destinacija/:id",name:"Destinacija",component:M},{path:"/partneri",name:"Partneri",component:G},{path:"/pitanja-informacije",name:"Informacije",component:Z}],at=new u.cp({mode:"history",base:"/",routes:tt});var et=at;i["default"].use(V.cp);var it=new V.cp.Store({state:{partneri:[]},getters:{},mutations:{addPartneri(t,a){t.partneri=a}},actions:{async fetchPartneri({commit:t}){fetch("http://localhost:9000/partneri/").then((t=>t.json())).then((a=>t("addPartneri",a)))}},modules:{}}),nt=e(16),rt=e(124);e(224);i["default"].use(nt.MBy),i["default"].use(rt.u2),i["default"].config.productionTip=!1,new i["default"]({router:et,store:it,render:function(t){return t(c)}}).$mount("#app")},656:function(t,a,e){t.exports=e.p+"img/logo.c270ac92.png"}},a={};function e(i){var n=a[i];if(void 0!==n)return n.exports;var r=a[i]={exports:{}};return t[i](r,r.exports,e),r.exports}e.m=t,function(){var t=[];e.O=function(a,i,n,r){if(!i){var s=1/0;for(u=0;u<t.length;u++){i=t[u][0],n=t[u][1],r=t[u][2];for(var o=!0,l=0;l<i.length;l++)(!1&r||s>=r)&&Object.keys(e.O).every((function(t){return e.O[t](i[l])}))?i.splice(l--,1):(o=!1,r<s&&(s=r));if(o){t.splice(u--,1);var c=n();void 0!==c&&(a=c)}}return a}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[i,n,r]}}(),function(){e.d=function(t,a){for(var i in a)e.o(a,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:a[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var t={524:0};e.O.j=function(a){return 0===t[a]};var a=function(a,i){var n,r,s=i[0],o=i[1],l=i[2],c=0;if(s.some((function(a){return 0!==t[a]}))){for(n in o)e.o(o,n)&&(e.m[n]=o[n]);if(l)var u=l(e)}for(a&&a(i);c<s.length;c++)r=s[c],e.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return e.O(u)},i=self["webpackChunkvezba4vue3"]=self["webpackChunkvezba4vue3"]||[];i.forEach(a.bind(null,0)),i.push=a.bind(null,i.push.bind(i))}();var i=e.O(void 0,[999],(function(){return e(640)}));i=e.O(i)})();
//# sourceMappingURL=app.b61d6e89.js.map