(function(){"use strict";var t={244:function(t,e,a){var i=a(768),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("header",[e("img",{attrs:{src:a(656)}}),e("nav",[e("ul",[e("li",{staticClass:"lli"},[e("router-link",{staticClass:"rL",attrs:{to:"/"}},[t._v("Home")])],1),e("li",{staticClass:"lli"},[e("router-link",{staticClass:"rL",attrs:{to:"/partneri"}},[t._v("Partneri")])],1),e("li",{staticClass:"lli"},[e("router-link",{staticClass:"rL",attrs:{to:"/pitanja-informacije"}},[t._v("Kontakt")])],1),t.token?e("li",{staticClass:"lli",attrs:{id:"kor"}},[e("img",{attrs:{src:a(400)}}),e("label",{attrs:{for:"username"}},[t._v("User:")]),e("span",{attrs:{id:"username"}},[t._v(t._s(t.$store.state.korisnik))])]):t._e(),e("li",{staticClass:"lli"},[t.token?t._e():e("router-link",{staticClass:"btn2",attrs:{to:"/register"}},[t._v("Register")]),t.token?t._e():e("p",[t._v(" | ")]),t.token?e("button",{staticClass:"btn2",on:{click:function(e){return t.logout()}}},[t._v("Log Out")]):e("router-link",{staticClass:"btn2",attrs:{to:"/login"}},[t._v("Log In")])],1)])])]),e("router-view")],1)},r=[],s=a(416),o={computed:{...(0,s.ys)(["token"])},methods:{...(0,s.sR)(["removeToken"]),...(0,s.ae)(["setToken"]),logout(){this.removeToken()}},mounted(){localStorage.token?this.setToken(localStorage.token):console.log("nema tokena nazalost")}},l=o,c=a(528),u=(0,c.c)(l,n,r,!1,null,null,null),m=u.exports,d=a(408),p=function(){var t=this,e=t._self._c;return e("div",[e("HeaderH",{staticClass:"glavni",attrs:{title:"Destinacije u Ponudi"}}),e("div",{staticClass:"telo"},[t._m(0),e("div",{staticClass:"dugmad"},[e("button",{staticClass:"btn1",attrs:{disabled:0===t.current},on:{click:function(e){return t.prev()}}},[t._v("Prethodna strana")]),e("button",{staticClass:"btn1",attrs:{disabled:t.current>=14},on:{click:function(e){return t.next()}}},[t._v("Sledeca strana")])]),e("ListDestination",{attrs:{destinacije:t.sveDestinacije.slice(t.current,t.current+6)}})],1)],1)},f=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"naslov2"},[e("h2",[t._v("Destinacije u ponudi: ")])])}],h=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header"},[e("h1",{staticClass:"prvi"},[t._v(t._s(t.title))])])},v=[],b={name:"HeaderH",props:{title:String}},g=b,k=(0,c.c)(g,h,v,!1,null,"27693022",null),j=k.exports,_=function(){var t=this,e=t._self._c;return e("div",{staticClass:"destinacije"},t._l(t.destinacije,(function(t){return e("SingleDestination",{key:t.id,attrs:{destinacija:t}})})),1)},P=[],C=function(){var t=this,e=t._self._c;return e("div",{staticClass:"destinacija",on:{click:function(e){return t.kliknutaDestinacija(t.destinacija.id)}}},[e("img",{attrs:{src:"/destinacije/"+t.destinacija.putanja,width:"350",height:"200"}}),e("h3",[t._v(t._s(t.destinacija.drzava))])])},w=[],y={name:"SingleDestination",props:{destinacija:Object},methods:{kliknutaDestinacija(t){this.$router.push({name:"Destinacija",params:{id:t}})}}},x=y,D=(0,c.c)(x,C,w,!1,null,"d9d2db4a",null),S=D.exports,z={name:"ListDestination",components:{SingleDestination:S},props:{destinacije:Array}},H=z,T=(0,c.c)(H,_,P,!1,null,"caf126a6",null),O=T.exports,$={name:"App",components:{HeaderH:j,ListDestination:O},data(){return{headerTitle:"IBooking sajt",sveDestinacije:null,current:0}},methods:{next(){this.current<this.sveDestinacije.length-6&&(this.current+=6)},prev(){this.current>=6&&(this.current-=6)},getPathForDestination(t){const e=this.sveDestinacije.find((e=>e.id===t));return e?e.putanja:"Destinacija nije pronađena"}},mounted(){fetch("http://localhost:9000/destinacije/").then((t=>t.json())).then((t=>{this.sveDestinacije=t}))}},I=$,L=(0,c.c)(I,p,f,!1,null,null,null),E=L.exports,B=function(){var t=this,e=t._self._c;return e("div",{staticClass:"glavni"},[e("div",{staticClass:"destinacija"},[e("h1",{staticClass:"i"},[t._v("Korisne informacije o destinaciji")]),e("img",{staticClass:"slika",attrs:{src:"/destinacije/"+t.destinacija.putanja,width:"350",height:"200"}})]),e("div",{staticClass:"info"},[e("h2",[t._v("Drzava:")]),e("h3",[t._v(t._s(t.destinacija.drzava))]),e("h2",[t._v("Jezik:")]),e("h3",[t._v(t._s(t.destinacija.jezik))]),e("h2",[t._v("Valuta:")]),e("h3",[t._v(t._s(t.destinacija.valuta))]),e("h2",[t._v("Popularna mesta:")]),e("h3",[t._v(t._s(t.destinacija.restorani))])])])},K=[],N={name:"Destinacija",components:{HeaderH:j},data(){return{destinacija:null}},mounted(){let t=this.$route.params.id;fetch(`http://localhost:9000/destinacije/${t}`).then((t=>t.json())).then((t=>{this.destinacija=t}))}},q=N,R=(0,c.c)(q,B,K,!1,null,null,null),A=R.exports,F=function(){var t=this,e=t._self._c;return e("div",[e("HeaderH",{staticClass:"glavni",attrs:{title:"Partneri sa kojima saradjuje IBooking"}}),t.paginatedPartneri?e("b-table",{attrs:{striped:"",hover:"",items:t.paginatedPartneri,fields:t.fields,id:"tabelaPartneri"},scopedSlots:t._u([{key:"cell(naziv)",fn:function(a){return[e("div",{staticClass:"partneri-item"},[e("img",{staticClass:"partneri-slika",attrs:{src:"/partneri/"+a.item.putanja,alt:"Slika partnera"}}),e("span",{staticClass:"partneriNaziv"},[t._v(t._s(a.item.naziv))])])]}}],null,!1,4256146977)}):t._e(),e("b-pagination",{attrs:{"total-rows":20,"per-page":5},on:{change:t.handlePageChange},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)},M=[],U={name:"Partneri",components:{HeaderH:j},data(){return{paginatedPartneri:[],currentPage:1,fields:[{key:"naziv",label:"Naziv"},{key:"adresa",label:"Adresa"}]}},mounted(){fetch("http://localhost:9000/partneri/").then((t=>t.json())).then((t=>{this.partneri=t,this.paginateData()}))},computed:{...(0,s.ys)(["kompanije"])},methods:{paginateData(){const t=5*(this.currentPage-1),e=t+5;this.paginatedPartneri=this.partneri.slice(t,e)},handlePageChange(t){this.currentPage=t,this.paginateData()}}},J=U,G=(0,c.c)(J,F,M,!1,null,"0c446a42",null),V=G.exports,Q=function(){var t=this,e=t._self._c;return e("div",{staticClass:"telo"},[e("HeaderH",{staticClass:"glavni",attrs:{title:"Kontakt servis IBooking"}}),e("b-alert",{attrs:{variant:t.statusnaPorukaTip,show:null!==t.statusnaPoruka}},[t._v(" "+t._s(t.statusnaPoruka)+" ")]),e("div",[e("b-container",{attrs:{fluid:""}},[e("b-row",[e("b-col",{attrs:{sm:"3"}},[e("label",{attrs:{for:"ime"}},[t._v("Ime")])]),e("b-col",{attrs:{sm:"9"}},[e("b-form-input",{attrs:{id:"ime",state:t.validnoIme},model:{value:t.forma.ime,callback:function(e){t.$set(t.forma,"ime",e)},expression:"forma.ime"}})],1)],1),e("b-row",[e("b-col",{attrs:{sm:"3"}},[e("label",[t._v("Prezime")])]),e("b-col",{attrs:{sm:"9"}},[e("b-form-input",{attrs:{id:"prezime",state:t.validnoPrezime},model:{value:t.forma.prezime,callback:function(e){t.$set(t.forma,"prezime",e)},expression:"forma.prezime"}})],1)],1),e("b-row",[e("b-col",{attrs:{sm:"3"}},[e("label",[t._v("Email")])]),e("b-col",{attrs:{sm:"9"}},[e("b-form-input",{attrs:{id:"email",state:t.validnoEmail},model:{value:t.forma.email,callback:function(e){t.$set(t.forma,"email",e)},expression:"forma.email"}})],1)],1),e("b-row",[e("b-col",{attrs:{sm:"3"}},[e("label",[t._v("Vase pitanje upisite ovde:")])]),e("b-col",{attrs:{sm:"9"}},[e("b-form-textarea",{attrs:{id:"textarea",state:t.validnaPrijava,rows:4},model:{value:t.forma.prijava,callback:function(e){t.$set(t.forma,"prijava",e)},expression:"forma.prijava"}})],1)],1)],1),e("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.posalji()}}},[t._v("Posalji")])],1)],1)},W=[],X={name:"App",components:{HeaderH:j},data(){return{headerTitle:"IBooking Kontakt/Info",statusnaPoruka:null,statusnaPorukaTip:null,forma:{ime:null,prezime:null,email:null,prijava:null}}},computed:{validnoIme(){return this.forma.ime&&this.forma.ime.length>2},validnoPrezime(){return this.forma.prezime&&this.forma.prezime.length>2},validnoEmail(){return this.forma.email&&this.forma.email.includes("@")},validnaPrijava(){return this.forma.prijava&&this.forma.prijava.length>2}},methods:{posalji(){this.validnoIme&&this.validnoPrezime&&this.validnoEmail&&this.validnaPrijava?setTimeout((()=>{this.statusnaPoruka="Uspesno ste poslali vase pitanje, neko ce vam uskoro odgovoriti, vas IBooking hvala sto birate nas!",this.statusnaPorukaTip="success",this.resetForme()}),1e3):(this.statusnaPoruka="Molimo vas da ispravno popunite sva polja",this.statusnaPorukaTip="danger")},resetForme(){this.forma.ime="",this.forma.prezime="",this.forma.email="",this.forma.prijava=""}}},Y=X,Z=(0,c.c)(Y,Q,W,!1,null,"00298f28",null),tt=Z.exports,et=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"naslov"},[e("HeaderH",{staticClass:"naslov",attrs:{title:"Log In"}}),e("b-form",{on:{submit:t.onSubmit}},[e("b-form-group",{attrs:{label:"User Name:","label-for":"name"}},[e("b-form-input",{attrs:{id:"name",placeholder:"Enter name",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),e("b-form-group",{attrs:{label:"Password:","label-for":"password"}},[e("b-form-input",{attrs:{id:"password",type:"password",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),e("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Login")])],1)],1)])},at=[],it={name:"Login",components:{HeaderH:j},data(){return{form:{name:"",password:""}}},methods:{...(0,s.ae)(["login"]),onSubmit(t){t.preventDefault(),this.login({username:this.form.name,password:this.form.password}).then((()=>{this.$router.push({name:"home"})})).catch((t=>{console.error("Greška prilikom prijave korisnika:",t)}))}}},nt=it,rt=(0,c.c)(nt,et,at,!1,null,"67885099",null),st=rt.exports,ot=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("HeaderH",{staticClass:"naslov",attrs:{title:"Create account"}}),e("b-form",{on:{submit:t.onSubmit}},[e("b-form-group",{attrs:{label:"Email address:","label-for":"email"}},[e("b-form-input",{attrs:{id:"email",type:"email",placeholder:"Enter email",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),e("b-form-group",{attrs:{label:"User Name:","label-for":"name"}},[e("b-form-input",{attrs:{id:"name",placeholder:"Enter name",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),e("b-form-group",{attrs:{label:"Password:","label-for":"password"}},[e("b-form-input",{attrs:{id:"password",type:"password",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),e("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Register")])],1)],1)},lt=[],ct={name:"Register",components:{HeaderH:j},data(){return{form:{email:"",name:"",password:""}}},methods:{...(0,s.ae)(["register"]),onSubmit(t){t.preventDefault(),this.register({username:this.form.name,password:this.form.password,admin:!1,email:this.form.email}).then((()=>{this.$router.push({name:"home"})})).catch((t=>{console.error("Greška prilikom prijave korisnika:",t)}))}}},ut=ct,mt=(0,c.c)(ut,ot,lt,!1,null,"78c9793e",null),dt=mt.exports;i["default"].use(d.cp);const pt=[{path:"/",name:"home",component:E},{path:"/destinacija/:id",name:"Destinacija",component:A},{path:"/partneri",name:"Partneri",component:V},{path:"/pitanja-informacije",name:"Informacije",component:tt},{path:"/login",name:"Login",component:st},{path:"/register",name:"Register",component:dt}],ft=new d.cp({mode:"history",base:"/",routes:pt});var ht=ft;i["default"].use(s.cp);var vt=new s.cp.Store({state:{partneri:[],destinacije:[],token:"",korisnik:""},mutations:{setToken(t,e){t.token=e,localStorage.token=e},setKorisnik(t,e){t.korisnik=e},removeToken(t){t.token="",t.korisnik="",localStorage.token=""},addPartneri(t,e){t.partneri=e},addDestinacije(t,e){t.destinacije=e}},actions:{async fetchPartneri({commit:t}){fetch("http://localhost:9000/partneri/").then((t=>t.json())).then((e=>t("addPartneri",e)))},async fetchDestinacije({commit:t}){fetch("http://localhost:9000/destinacije/").then((t=>t.json())).then((e=>t("addDestinacije",e)))},async register({commit:t},e){const a=document.cookie.split("=");a[a.length-1];fetch("http://localhost:9001/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((t=>t.json())).then((e=>{t("setToken",e.token),localStorage.setItem("token",e.token)}))},async login({commit:t},e){const a=document.cookie.split("=");a[a.length-1];fetch("http://localhost:9001/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((t=>t.json())).then((a=>{a.msg?alert(a.msg+"nije uspeo da izvadi datuu"):(t("setToken",a.token),console.log(e.username),t("setKorisnik",e.username),localStorage.setItem("token",a.token))}))}}}),bt=a(16),gt=a(124);a(224);i["default"].use(bt.MBy),i["default"].use(gt.u2),i["default"].config.productionTip=!1,new i["default"]({router:ht,store:vt,render:function(t){return t(m)}}).$mount("#app")},400:function(t,e,a){t.exports=a.p+"img/korisnik.7aeda411.png"},656:function(t,e,a){t.exports=a.p+"img/logo.c270ac92.png"}},e={};function a(i){var n=e[i];if(void 0!==n)return n.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(e,i,n,r){if(!i){var s=1/0;for(u=0;u<t.length;u++){i=t[u][0],n=t[u][1],r=t[u][2];for(var o=!0,l=0;l<i.length;l++)(!1&r||s>=r)&&Object.keys(a.O).every((function(t){return a.O[t](i[l])}))?i.splice(l--,1):(o=!1,r<s&&(s=r));if(o){t.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[i,n,r]}}(),function(){a.d=function(t,e){for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,i){var n,r,s=i[0],o=i[1],l=i[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(n in o)a.o(o,n)&&(a.m[n]=o[n]);if(l)var u=l(a)}for(e&&e(i);c<s.length;c++)r=s[c],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(u)},i=self["webpackChunkvezba4vue3"]=self["webpackChunkvezba4vue3"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=a.O(void 0,[999],(function(){return a(244)}));i=a.O(i)})();
//# sourceMappingURL=app.ae2f942b.js.map