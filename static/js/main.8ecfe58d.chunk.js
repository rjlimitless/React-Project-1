(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(t,e,i){},16:function(t,e,i){},18:function(t,e,i){"use strict";i.r(e);var s=i(0),a=i(1),c=i.n(a),n=i(9),r=i.n(n),l=(i(15),i(6)),u=(i(16),i(2)),d=i(3),m=i(5),o=i(4),p=(i(7),i.p+"static/media/TheLight.f2f2086a.mp3"),h=i.p+"static/media/Starstruck.51173137.mp3",b=i.p+"static/media/RemindMeOfTheSummer.10f04e9d.mp3",j=i.p+"static/media/OnYourMind.1d9107c7.mp3",f=i.p+"static/media/CaliGirl.5333118c.mp3",y=i.p+"static/media/PlayForKeeps.4fab4280.mp3",O=i.p+"static/media/Rental.8659e376.mp3",v=i.p+"static/media/24.fbbb1673.mp3",x=i.p+"static/media/AnyOtherWay.d3de892e.mp3",g=i.p+"static/media/BackInChicago.380cfe1c.mp3",N=i.p+"static/media/BankAccount.20477d66.mp3",k=i.p+"static/media/BeenAWhile.18bc2319.mp3";function S(t){if(!isNaN(t))return Math.floor(t/60)+":"+("0"+Math.floor(t%60)).slice(-2)}var F=function(t){Object(m.a)(i,t);var e=Object(o.a)(i);function i(){var t;Object(u.a)(this,i);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={currentSong:null,music:"stopped",currentTime:null,duration:null},t}return Object(d.a)(i,[{key:"render",value:function(){var t=this,e=S(this.state.currentTime),i=S(this.state.duration),a=[{id:1,title:"The Light",url:""},{id:2,title:"Starstruck",url:""},{id:3,title:"On Your Mind",url:""},{id:4,title:"Cali Girl",url:""},{id:5,title:"Play For Keeps",url:""},{id:6,title:"Rental",url:""},{id:7,title:"24",url:""},{id:8,title:"Any Other Way",url:""},{id:9,title:"Back In Chicago",url:""},{id:10,title:"Bank Account",url:""},{id:11,title:"Been a While",url:""}].map((function(e){return Object(s.jsx)("div",{className:"ui list",children:Object(s.jsx)("div",{className:"item",children:Object(s.jsx)("div",{className:"content",children:Object(s.jsx)("li",{className:"title",onClick:function(){return t.setState({currentSong:e.title})},children:e.title},e.id)})})})}));return Object(s.jsxs)(s.Fragment,{children:["playing"===this.state.music?Object(s.jsxs)("div",{className:"current-song",children:["~",this.state.currentSong,"~"]}):null,Object(s.jsx)("div",{className:"header"}),Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("div",{className:"ui card main-container",children:[Object(s.jsxs)("div",{className:"info-container",children:["paused"===this.state.music?Object(s.jsx)("div",{className:"current-song"}):null,"playing"===this.state.music||"paused"===this.state.music?Object(s.jsxs)("div",{className:"song-time",children:[e,Object(s.jsx)("br",{}),i]}):"",Object(s.jsxs)("div",{className:"button-container",children:["paused"===this.state.music&&Object(s.jsx)("button",{className:"play-btn",onClick:function(){return t.setState({music:"playing"})}}),"playing"===this.state.music&&Object(s.jsx)("button",{className:"pause-btn",onClick:function(){return t.setState({music:"paused"})}})]})]}),Object(s.jsx)("div",{className:"playlist",children:a}),Object(s.jsx)("audio",{ref:function(e){return t.music=e}})]})})]})}},{key:"componentDidUpdate",value:function(t,e){if(this.state.currentSong!==e.currentSong){var i;switch(this.state.currentSong){case"The Light":i=p;break;case"Starstruck":i=h;break;case"On Your Mind":i=j;break;case"Cali Girl":i=f;break;case"Play For Keeps":i=y;break;case"Rental":i=O;break;case"Twenty Four":i=v;break;case"Any Other Way":i=x;break;case"Back In Chicago":i=g;break;case"Bank Account":i=N;break;case"Been a While":i=k}i&&(this.music.src=i,this.music.play(),this.setState({music:"playing"}))}this.state.music!==e.music&&("paused"===this.state.music&&this.music.pause(),"playing"===this.state.music&&"paused"===e.music&&this.music.play(),"stop"===this.state.music&&(this.music.pause(),this.currentTime=0,this.setState({currentSong:null})))}},{key:"componentDidMount",value:function(){var t=this;this.music.addEventListener("timeupdate",(function(e){t.setState({currentTime:e.target.currentTime,duration:e.target.duration})}))}},{key:"componentWillUnmount",value:function(){this.music.removeEventListener("timeupdate",(function(){}))}}]),i}(c.a.Component),M=i.p+"static/media/FallInMyArms.091a18d3.mp3",A=i.p+"static/media/AllAlone.84a047d5.mp3",C=i.p+"static/media/PutMeDown.56ae234d.mp3",T=i.p+"static/media/Anxiety.07f8e72b.mp3",B=i.p+"static/media/Burn.7040261a.mp3",w=i.p+"static/media/Deprived.6b023cfb.mp3",D=i.p+"static/media/ElectricChair.372f5e5e.mp3",E=i.p+"static/media/Abyss.ff320f47.mp3",W=i.p+"static/media/AnotherWay.0bdf6eea.mp3",P=i.p+"static/media/BadEnergy.bde9486f.mp3",L=i.p+"static/media/Barbarian.6332016f.mp3",I=i.p+"static/media/BeenMyself.82004c08.mp3";function U(t){if(!isNaN(t))return Math.floor(t/60)+":"+("0"+Math.floor(t%60)).slice(-2)}var H=function(t){Object(m.a)(i,t);var e=Object(o.a)(i);function i(){var t;Object(u.a)(this,i);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={currentSong:null,music:"stopped",currentTime:null,duration:null},t}return Object(d.a)(i,[{key:"render",value:function(){var t=this,e=U(this.state.currentTime),i=U(this.state.duration),a=[{id:1,title:"Fall In My Arms",url:""},{id:2,title:"All Alone",url:""},{id:3,title:"Put Me Down",url:""},{id:4,title:"Anxiety",url:""},{id:5,title:"Burn",url:""},{id:6,title:"Deprived",url:""},{id:7,title:"Summer",url:""},{id:8,title:"Electric Chair",url:""},{id:9,title:"Abyss",url:""},{id:10,title:"Another Way",url:""},{id:11,title:"Bad Energy",url:""},{id:12,title:"Barbarian",url:""},{id:13,title:"Been Myself",url:""}].map((function(e){return Object(s.jsx)("div",{className:"ui list",children:Object(s.jsx)("div",{className:"item",children:Object(s.jsx)("div",{class:"content",children:Object(s.jsx)("li",{className:"title",onClick:function(){return t.setState({currentSong:e.title})},children:e.title},e.id)})})})}));return Object(s.jsxs)(s.Fragment,{children:["playing"===this.state.music?Object(s.jsxs)("div",{className:"current-song",children:["~",this.state.currentSong,"~"]}):null,Object(s.jsx)("div",{className:"header"}),Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("div",{className:"ui card main-container",children:[Object(s.jsxs)("div",{className:"info-container",children:["paused"===this.state.music?Object(s.jsx)("div",{className:"current-song"}):null,"playing"===this.state.music||"paused"===this.state.music?Object(s.jsxs)("div",{className:"song-time",children:[e,Object(s.jsx)("br",{}),i]}):"",Object(s.jsxs)("div",{className:"button-container",children:["paused"===this.state.music&&Object(s.jsx)("button",{className:"play-btn",onClick:function(){return t.setState({music:"playing"})}}),"playing"===this.state.music&&Object(s.jsx)("button",{className:"pause-btn",onClick:function(){return t.setState({music:"paused"})}})]})]}),Object(s.jsx)("div",{className:"playlist",children:a}),Object(s.jsx)("audio",{ref:function(e){return t.music=e}})]})})]})}},{key:"componentDidUpdate",value:function(t,e){if(this.state.currentSong!==e.currentSong){var i;switch(this.state.currentSong){case"Fall In My Arms":i=M;break;case"All Alone":i=A;break;case"Put Me Down":i=C;break;case"Anxiety":i=T;break;case"Burn":i=B;break;case"Deprived":i=w;break;case"Summer":i=b;break;case"Electric Chair":i=D;break;case"Abyss":i=E;break;case"Another Way":i=W;break;case"Bad Energy":i=P;break;case"Barbarian":i=L;break;case"Been Myself":i=I}i&&(this.music.src=i,this.music.play(),this.setState({music:"playing"}))}this.state.music!==e.music&&("paused"===this.state.music&&this.music.pause(),"playing"===this.state.music&&"paused"===e.music&&this.music.play(),"stop"===this.state.music&&(this.music.pause(),this.currentTime=0,this.setState({currentSong:null})))}},{key:"componentDidMount",value:function(){var t=this;this.music.addEventListener("timeupdate",(function(e){t.setState({currentTime:e.target.currentTime,duration:e.target.duration})}))}},{key:"componentWillUnmount",value:function(){this.music.removeEventListener("timeupdate",(function(){}))}}]),i}(c.a.Component),G=i.p+"static/media/HateHerFriends.4f8ff0f0.mp3",R=i.p+"static/media/Triple9.97ac35ab.mp3",X=i.p+"static/media/SorryMom.35fddf32.mp3",J=i.p+"static/media/Tempted.f661045b.mp3",K=i.p+"static/media/MrMiyagi.fbf9760b.mp3",Y=i.p+"static/media/PointGuard.ffacc257.mp3",z=i.p+"static/media/PurpleMoncler.bdc2d99f.mp3",q=i.p+"static/media/6.3f86ee6d.mp3",Q=i.p+"static/media/90210.29e9c286.mp3";i.p;function V(t){if(!isNaN(t))return Math.floor(t/60)+":"+("0"+Math.floor(t%60)).slice(-2)}var Z=function(t){Object(m.a)(i,t);var e=Object(o.a)(i);function i(){var t;Object(u.a)(this,i);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={currentSong:null,music:"stopped",currentTime:null,duration:null},t}return Object(d.a)(i,[{key:"render",value:function(){var t=this,e=V(this.state.currentTime),i=V(this.state.duration),a=[{id:1,title:"Hate Her Friends",url:""},{id:2,title:"Triple 9",url:""},{id:3,title:"Sorry Mom",url:""},{id:4,title:"Tempted",url:""},{id:5,title:"Mr Miyagi",url:""},{id:6,title:"Point Guard",url:""},{id:7,title:"Purple Moncler",url:""},{id:8,title:"Six",url:""},{id:9,title:"90210",url:""},{id:10,title:"Amazing",url:""}].map((function(e){return Object(s.jsx)("div",{className:"ui list",children:Object(s.jsx)("div",{className:"item",children:Object(s.jsx)("div",{className:"content",children:Object(s.jsx)("li",{className:"title",onClick:function(){return t.setState({currentSong:e.title})},children:e.title},e.id)})})})}));return Object(s.jsxs)(s.Fragment,{children:["playing"===this.state.music?Object(s.jsxs)("div",{className:"current-song2",children:["~",this.state.currentSong,"~"]}):null,Object(s.jsx)("div",{className:"header"}),Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("div",{className:"ui card main-container",children:[Object(s.jsxs)("div",{className:"info-container",children:["paused"===this.state.music?Object(s.jsx)("div",{className:"current-song2"}):null,"playing"===this.state.music||"paused"===this.state.music?Object(s.jsxs)("div",{className:"song-time2",children:[e,Object(s.jsx)("br",{}),i]}):"",Object(s.jsxs)("div",{className:"button-container",children:["paused"===this.state.music&&Object(s.jsx)("button",{className:"play-btn",onClick:function(){return t.setState({music:"playing"})}}),"playing"===this.state.music&&Object(s.jsx)("button",{className:"pause-btn",onClick:function(){return t.setState({music:"paused"})}})]})]}),Object(s.jsx)("div",{className:"playlist",children:a}),Object(s.jsx)("audio",{ref:function(e){return t.music=e}})]})})]})}},{key:"componentDidUpdate",value:function(t,e){if(this.state.currentSong!==e.currentSong){var i;switch(this.state.currentSong){case"Hate Her Friends":i=G;break;case"Triple 9":i=R;break;case"Sorry Mom":i=X;break;case"Tempted":i=J;break;case"Mr Miyagi":i=K;break;case"Point Guard":i=Y;break;case"Purple Moncler":i=z;break;case"Six":i=q;break;case"90210":case"Amazing":i=Q}i&&(this.music.src=i,this.music.play(),this.setState({music:"playing"}))}this.state.music!==e.music&&("paused"===this.state.music&&this.music.pause(),"playing"===this.state.music&&"paused"===e.music&&this.music.play(),"stop"===this.state.music&&(this.music.pause(),this.currentTime=0,this.setState({currentSong:null})))}},{key:"componentDidMount",value:function(){var t=this;this.music.addEventListener("timeupdate",(function(e){t.setState({currentTime:e.target.currentTime,duration:e.target.duration})}))}},{key:"componentWillUnmount",value:function(){this.music.removeEventListener("timeupdate",(function(){}))}}]),i}(c.a.Component),$=i.p+"static/media/Freestyle1.d2ae5350.mp3",_=i.p+"static/media/Freestyle2.94f239d7.mp3",tt=i.p+"static/media/Freestyle3.8e1a63b3.mp3",et=i.p+"static/media/Freestyle4.fd88ca34.mp3",it=i.p+"static/media/Freestyle5.20854f10.mp3",st=i.p+"static/media/Freestyle6.8fc237ec.mp3",at=i.p+"static/media/Freestyle7.e46938d6.mp3",ct=i.p+"static/media/Freestyle8.91f99a61.mp3";function nt(t){if(!isNaN(t))return Math.floor(t/60)+":"+("0"+Math.floor(t%60)).slice(-2)}var rt=function(t){Object(m.a)(i,t);var e=Object(o.a)(i);function i(){var t;Object(u.a)(this,i);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={currentSong:null,music:"stopped",currentTime:null,duration:null},t}return Object(d.a)(i,[{key:"render",value:function(){var t=this,e=nt(this.state.currentTime),i=nt(this.state.duration),a=[{id:1,title:"Freestyle 1",url:""},{id:2,title:"Freestyle 2",url:""},{id:3,title:"Freestyle 3",url:""},{id:4,title:"Freestyle 4",url:""},{id:5,title:"Freestyle 5",url:""},{id:6,title:"Freestyle 6",url:""},{id:7,title:"Freestyle 7",url:""},{id:8,title:"Freestyle 8",url:""}].map((function(e){return Object(s.jsx)("div",{className:"ui list",children:Object(s.jsx)("div",{className:"item",children:Object(s.jsx)("div",{className:"content",children:Object(s.jsx)("li",{className:"title",onClick:function(){return t.setState({currentSong:e.title})},children:e.title},e.id)})})})}));return Object(s.jsxs)(s.Fragment,{children:["playing"===this.state.music?Object(s.jsxs)("div",{className:"current-song2",children:["~",this.state.currentSong,"~"]}):null,Object(s.jsx)("div",{className:"header"}),Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("div",{className:"ui card main-container",children:[Object(s.jsxs)("div",{className:"info-container",children:["paused"===this.state.music?Object(s.jsx)("div",{className:"current-song2"}):null,"playing"===this.state.music||"paused"===this.state.music?Object(s.jsxs)("div",{className:"song-time2",children:[e,Object(s.jsx)("br",{}),i]}):"",Object(s.jsxs)("div",{className:"button-container",children:["paused"===this.state.music&&Object(s.jsx)("button",{className:"play-btn",onClick:function(){return t.setState({music:"playing"})}}),"playing"===this.state.music&&Object(s.jsx)("button",{className:"pause-btn",onClick:function(){return t.setState({music:"paused"})}})]})]}),Object(s.jsx)("div",{className:"playlist",children:a}),Object(s.jsx)("audio",{ref:function(e){return t.music=e}})]})})]})}},{key:"componentDidUpdate",value:function(t,e){if(this.state.currentSong!==e.currentSong){var i;switch(this.state.currentSong){case"Freestyle 1":i=$;break;case"Freestyle 2":i=_;break;case"Freestyle 3":i=tt;break;case"Freestyle 4":i=et;break;case"Freestyle 5":i=it;break;case"Freestyle 6":i=st;break;case"Freestyle 7":i=at;break;case"Freestyle 8":i=ct}i&&(this.music.src=i,this.music.play(),this.setState({music:"playing"}))}this.state.music!==e.music&&("paused"===this.state.music&&this.music.pause(),"playing"===this.state.music&&"paused"===e.music&&this.music.play(),"stop"===this.state.music&&(this.music.pause(),this.currentTime=0,this.setState({currentSong:null})))}},{key:"componentDidMount",value:function(){var t=this;this.music.addEventListener("timeupdate",(function(e){t.setState({currentTime:e.target.currentTime,duration:e.target.duration})}))}},{key:"componentWillUnmount",value:function(){this.music.removeEventListener("timeupdate",(function(){}))}}]),i}(c.a.Component);i(17);function lt(){var t=Object(a.useState)(!1),e=Object(l.a)(t,2),i=e[0],c=e[1],n=Object(a.useState)(!1),r=Object(l.a)(n,2),u=r[0],d=r[1],m=Object(a.useState)(!1),o=Object(l.a)(m,2),p=o[0],h=o[1],b=Object(a.useState)(!1),j=Object(l.a)(b,2),f=j[0],y=j[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:i?"showplaylist1":"",children:[Object(s.jsx)("button",{id:"playlist-btn",className:i?"":"hide",onClick:function(){return c(!i)},children:"X"}),Object(s.jsx)("li",{className:i?"":"hide",children:Object(s.jsx)("ul",{children:Object(s.jsx)(F,{})})})]}),Object(s.jsxs)("div",{className:u?"showplaylist2":"",children:[Object(s.jsx)("button",{id:"playlist-btn2",className:u?"":"hide",onClick:function(){return d(!u)},children:"X"}),Object(s.jsx)("li",{className:u?"":"hide",children:Object(s.jsx)("ul",{children:Object(s.jsx)(H,{})})})]}),Object(s.jsxs)("div",{className:"btn-container",children:[Object(s.jsx)("button",{className:"btn album-cover-1",onClick:function(){return c(!i)},children:"Chill"}),Object(s.jsx)("button",{className:"btn album-cover-2",onClick:function(){return d(!u)},children:"Somber"})]}),Object(s.jsxs)("div",{className:p?"showplaylist3":"",children:[Object(s.jsx)("button",{id:"playlist-btn3",className:p?"":"hide",onClick:function(){return h(!p)},children:"X"}),Object(s.jsx)("li",{className:p?"":"hide",children:Object(s.jsx)("ul",{children:Object(s.jsx)(Z,{})})})]}),Object(s.jsxs)("div",{className:f?"showplaylist4":"",children:[Object(s.jsx)("button",{id:"playlist-btn4",className:f?"":"hide",onClick:function(){return y(!f)},children:"X"}),Object(s.jsx)("li",{className:f?"":"hide",children:Object(s.jsx)("ul",{children:Object(s.jsx)(rt,{})})})]}),Object(s.jsxs)("div",{className:"btn-container",children:[Object(s.jsx)("button",{className:"btn album-cover-3",onClick:function(){return h(!p)},children:"Hype"}),Object(s.jsx)("button",{className:"btn album-cover-4",onClick:function(){return y(!f)},children:"Freestyle"})]})]})}var ut=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h3",{children:"Rest In Peace Juice WRLD 1998 - 2019"}),Object(s.jsx)(lt,{})]})};r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(ut,{})}),document.getElementById("root"))},7:function(t,e,i){}},[[18,1,2]]]);
//# sourceMappingURL=main.8ecfe58d.chunk.js.map