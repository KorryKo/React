(this["webpackJsonpmarina-chat"]=this["webpackJsonpmarina-chat"]||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){},115:function(e,t,n){},116:function(e,t,n){},117:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){},142:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(8),i=n.n(s),r=(n(104),n(105),n(177)),o=n(181),l=n(182),u=n(79),h=n.n(u),d=n(80),j=n.n(d),b=n(26),p=n(16),m=n(3),g=function(){var e=Object(p.c)((function(e){return e.profile.name}));return Object(m.jsx)("div",{children:Object(m.jsx)(r.a,{position:"static",className:"navBar",children:Object(m.jsxs)(o.a,{children:[Object(m.jsx)(b.b,{to:"/profile",children:Object(m.jsx)(l.a,{edge:"start",color:"inherit",children:Object(m.jsx)(h.a,{})})}),Object(m.jsxs)("span",{className:"name",children:[e," "]}),Object(m.jsx)(b.b,{to:"/",children:Object(m.jsx)(l.a,{edge:"start",color:"inherit",children:Object(m.jsx)(j.a,{})})})]})})})},f=(n(113),n(114),n(144)),O=(n(115),n(183)),x=n(187),v=n(34),w=n.n(v),y=n(189),N=n(185),k=n(184),S=(n(116),n(186)),M="human",I="bot",A=Object(O.a)((function(){return{root:{color:"#FFFFFF"},lastMessage:{fontSize:"12px",opacity:"0.6"},pictureMobile:{width:"30px",height:"30px",marginRight:"8px"},pictureDesktop:{width:"50px",height:"50px",marginRight:"16px"}}})),C=function(e){var t=A(),n=Object(p.c)((function(e){return e.chats.latestMessage}));return Object(m.jsxs)(k.a,{className:void 0!==n&&n.chatId===e.chat.chatId&&n.author===I?"animateChat":"",alignItems:"flex-start",children:[Object(m.jsxs)("div",{className:"mobile",children:[Object(m.jsx)(y.a,{className:t.pictureMobile,alt:e.chat.name,src:e.chat.picture}),Object(m.jsx)(N.a,{component:"p",variant:"caption",color:"initial",children:e.chat.name})]}),Object(m.jsxs)("div",{className:"desktop",children:[Object(m.jsx)(y.a,{className:t.pictureDesktop,alt:e.chat.name,src:e.chat.picture}),Object(m.jsx)(N.a,{component:"span",variant:"body2",className:t.root,color:"initial",children:e.chat.name}),Object(m.jsx)(N.a,{component:"span",className:w()(t.root,t.lastMessage),children:" \u2014 I'll be in your neighborhood doing errands this\u2026"})]}),Object(m.jsx)(S.a,{variant:"inset",component:"hr"})]})},F=Object(O.a)((function(){return{root:{color:"#FFFFFF"},lastMessage:{fontSize:"12px",opacity:"0.6"}}})),L=function(){var e=F(),t=Object(p.c)((function(e){return e.chats.chatList}));return Object(m.jsx)(x.a,{className:w()("chatList",e.root),children:t.map((function(e,t){return Object(m.jsx)("div",{children:Object(m.jsx)(b.b,{to:"/chats/".concat(e.chatId),children:Object(m.jsx)(C,{chat:e})})},t)}))})},E=n(57),D=(n(117),n(188)),T=n(81),H=n.n(T),_=function(e){var t=e.onAddMessage,n=Object(a.useState)(""),c=Object(E.a)(n,2),s=c[0],i=c[1],r=Object(a.useRef)();return Object(a.useEffect)((function(){r.current.focus()}),[]),Object(a.useEffect)((function(){return function(){console.log("unmounting")}}),[]),Object(m.jsxs)("form",{className:"messageBar",onSubmit:function(e){e.preventDefault(),t({author:M,text:s}),i("")},children:[Object(m.jsx)(D.a,{className:"inputMessage",label:"Message",onChange:function(e){i(e.target.value)},fullWidth:!0,value:s,inputRef:r}),Object(m.jsx)(l.a,{type:"submit","aria-label":"send",children:Object(m.jsx)(H.a,{})})]})},W=n(12),B=n(25),P=n.n(B),G=n(46),R="CHATS::ADD_CHAT",U="CHATS::LATEST_MESSAGE",J=function(e,t){return{type:U,payload:{chaId:e,author:t}}},Y=n(63),z=n.n(Y);function Q(e,t){return V.apply(this,arguments)}function V(){return(V=Object(G.a)(P.a.mark((function e(t,n){var a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.get("https://acobot-brainshop-ai-v1.p.rapidapi.com/get?bid=178&key=sX5A2PcYZbsN5EY6&uid=".concat(t,"&msg=").concat(n.text),{headers:{"x-rapidapi-host":"acobot-brainshop-ai-v1.p.rapidapi.com","x-rapidapi-key":"18edf81068msh90ed868beeb69eep118634jsn934c9c3ee307"}});case 2:return a=e.sent,e.abrupt("return",a.data.cnt);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(){return(q=Object(G.a)(P.a.mark((function e(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.get("https://randomuser.me/api/");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Z="MESSAGES::ADD_MESSAGE",K=function(e,t){return{type:Z,payload:{message:e,chatId:t}}},X=function e(t,n){return function(){var a=Object(G.a)(P.a.mark((function a(c){return P.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(c(K(t,n)),t.author===I){a.next=13;break}return c(J(n,t.author)),a.t0=c,a.t1=e,a.t2=I,a.next=8,Q(n,t);case 8:a.t3=a.sent,a.t4={author:a.t2,text:a.t3},a.t5=n,a.t6=(0,a.t1)(a.t4,a.t5),(0,a.t0)(a.t6);case 13:t.author===I&&c(J(n,t.author));case 14:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},$=(n(137),function(e){return e.message.author!==I?Object(m.jsxs)("div",{className:w()("messageContainer","youContainer"),children:[Object(m.jsx)("img",{alt:"profile-img",className:"messageImg",src:"https://upload.wikimedia.org/wikipedia/commons/8/82/Damon_cropped.jpg"}),Object(m.jsxs)("p",{className:"yourMessage",children:[e.message.author,": ",e.message.text]})]}):Object(m.jsxs)("div",{className:w()("messageContainer","botContainer"),children:[Object(m.jsxs)("p",{className:"botMessage",children:[e.message.author,": ",e.message.text]}),Object(m.jsx)("img",{alt:"bot-img",className:"messageImg",src:"https://images-na.ssl-images-amazon.com/images/G/01/toys/detail-page/B001E95SQ2-1-lg.jpg"})]})}),ee=function(){var e=Object(p.c)((function(e){return e.messages.messageList})),t=Object(W.g)().chatId,n=Object(p.b)(),c=Object(a.useCallback)((function(e){n(X(e,t))}),[t,n]);return t&&e[t]?Object(m.jsxs)(f.a,{elevation:1,className:"chatBox",children:[Object(m.jsx)(L,{}),Object(m.jsxs)("div",{className:"messageField",children:[Object(m.jsx)("div",{className:"messages",children:e[t].map((function(e,t){return Object(m.jsx)($,{message:e},t)}))}),Object(m.jsx)(_,{onAddMessage:c})]})]}):Object(m.jsx)(W.a,{to:"/"})},te=n(82),ne=n(83),ae=n(90),ce=n(89),se=n(84),ie=n.n(se),re=(n(138),function(e){Object(ae.a)(n,e);var t=Object(ce.a)(n);function n(){var e;Object(te.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={isShown:!1},e.handleShow=function(){e.setState({isShown:!0})},e.handleHide=function(){e.setState({isShown:!1})},e}return Object(ne.a)(n,[{key:"componentDidMount",value:function(){!function(){var e=window.navigator.userAgent.toLowerCase();return/iphone/.test(e)}()||"standalone"in window.navigator&&window.navigator.standalone||this.handleShow()}},{key:"render",value:function(){return Object(m.jsx)("div",{style:{display:this.state.isShown?"block":"none"},className:"speech-bubble-container",children:Object(m.jsxs)("div",{className:"speech-bubble",children:[Object(m.jsx)(ie.a,{className:"close-install-message-icon",onClick:this.handleHide}),Object(m.jsx)("div",{style:{paddingRight:"15px"},children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0430 \u0441\u0432\u043e\u0439 iPhone: \u043d\u0430\u0436\u043c\u0438 \xab\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f\xbb, \u0430 \u0437\u0430\u0442\u0435\u043c \u043d\u0430 \u044d\u043a\u0440\u0430\u043d \xab\u0414\u043e\u043c\u043e\u0439\xbb"})]})})}}]),n}(c.a.Component)),oe=(n(139),function(){var e=Object(a.useState)({picture:{medium:"",large:""},name:{first:"",last:""}}),t=Object(E.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){(function(){return q.apply(this,arguments)})().then((function(e){c(e.data.results[0])}))}),[]),Object(m.jsx)(f.a,{elevation:1,className:"profile",children:Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("h1",{children:"Profile"}),Object(m.jsx)("img",{className:"img",src:n.picture.large,alt:""}),Object(m.jsxs)("p",{children:["Name: ",n.name.first]}),Object(m.jsxs)("p",{children:["Last Name: ",n.name.last]})]})})}),le=function(){var e=Object(p.b)();return Object(a.useEffect)((function(){e(J("",""))}),[]),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)(b.a,{children:[Object(m.jsx)(g,{profile:""}),Object(m.jsxs)(W.d,{children:[Object(m.jsx)(W.b,{path:"/profile",children:Object(m.jsx)(oe,{})}),Object(m.jsx)(W.b,{path:"/chats/:chatId?",children:Object(m.jsx)(ee,{})}),Object(m.jsx)(W.b,{path:"/",children:Object(m.jsx)(L,{})}),Object(m.jsx)(W.b,{path:"*",children:Object(m.jsx)("div",{children:"Not Found 404"})})]})]}),Object(m.jsx)(re,{})]})},ue=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)),he=function(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=window.atob(t),a=new Uint8Array(n.length),c=0;c<n.length;++c)a[c]=n.charCodeAt(c);return a}("BH7a3-Hbnm4iD6jITVtZbkGM-Yg5lMaI0LCB29KRl-JuInektRmq0gb_gaGQC5UWQb4GmBhTs12DLm20DxLNYws"),de=function(e){return fetch("".concat("https://hidden-refuge-89127.herokuapp.com","/notifications/subscribe"),{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})};function je(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,191)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))},pe=n(29),me=n(56),ge=n(58),fe=n(23),Oe={messageList:{brendon1:[{author:M,text:"Hello"},{author:I,text:"Hey yow!"}],yoh1:[{author:M,text:"Hello"},{author:I,text:"Hola q tal"}],marina1:[{author:M,text:"Hello"},{author:I,text:"My name is Marina"}]}},xe={name:"Matt Damon"},ve={chatList:[{chatId:"brendon1",name:"Brendon Urie",picture:"https://pbs.twimg.com/media/EzHjJGOXAAIpTWb.jpg"},{chatId:"yoh1",name:"Yoh Asakura",picture:"https://s4.anilist.co/file/anilistcdn/character/large/b167-mVViZcSWQxDn.png"},{chatId:"marina1",name:"Marina Diamandis",picture:"https://upload.wikimedia.org/wikipedia/commons/a/ad/Marina_Diamandis_%2814091068631%29_%28cropped%29_at_Fendi_close_crop.jpg"}],latestMessage:{}},we=n(64),ye=n(85),Ne=n(86),ke=n.n(Ne),Se=n(87),Me={key:"marinaMessenger",storage:ke.a},Ie=Object(we.a)(Me,Object(pe.b)({chats:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(fe.a)(Object(fe.a)({},e),{},{chats:[].concat(Object(ge.a)(e.chatList),[t.payload.newChat])});case U:return Object(fe.a)(Object(fe.a)({},e),{},{latestMessage:{chatId:t.payload.chaId,author:t.payload.author}});default:return e}},messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:return Object(fe.a)(Object(fe.a)({},e),{},{messageList:Object(fe.a)(Object(fe.a)({},e.messageList),{},Object(me.a)({},t.payload.chatId,[].concat(Object(ge.a)(e.messageList[t.payload.chatId]),[t.payload.message])))});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe;return e}})),Ae=Object(pe.c)(Ie,Object(pe.a)(ye.a,Se.apiMiddleware)),Ce=Object(we.b)(Ae),Fe=n(88);i.a.render(Object(m.jsx)(p.a,{store:Ae,children:Object(m.jsx)(Fe.a,{persistor:Ce,loading:null,children:Object(m.jsx)(le,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");ue?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):je(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(e){e.pushManager?(e.pushManager.getSubscription().then((function(t){null===t?(console.log("No subscription detected, make a request."),e.pushManager.subscribe({applicationServerKey:he,userVisibleOnly:!0}).then((function(e){console.log("New subscription added."),de(e)})).catch((function(e){"granted"!==Notification.permission?console.log("Permission was not granted."):console.error("An error ocurred during the subscription process.",e)}))):(console.log("Existed subscription detected."),de(t))})),console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")):console.log("Push manager unavailable.")}))):je(t,e)}))}}(),be()}},[[142,1,2]]]);
//# sourceMappingURL=main.ef9e631c.chunk.js.map