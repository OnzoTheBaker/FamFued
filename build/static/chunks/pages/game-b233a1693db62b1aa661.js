_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"07wX":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/game",function(){return n("OzVs")}])},OzVs:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return x}));var a=n("ODXe"),s=n("nKUr"),c=n("q1tI"),i=n("9Koi"),l=(n("uXJ4"),n("omVU"));function o(e){var t=Object(c.useState)("10%"),n=t[0],a=t[1];function i(t){var n=[];return console.debug(e.game),Object.keys(e.game.registeredPlayers).forEach((function(a){console.debug(a),e.game.registeredPlayers[a].team===t&&n.push(e.game.registeredPlayers[a].name)})),console.debug(n),n}return Object(c.useEffect)((function(){setTimeout(a(.7*window.innerWidth),2e3)}),[]),Object(s.jsx)("div",{class:"bg-gradient-to-t items-center justify-center from-blue-500 flex via-blue-300 to-blue-500 min-h-screen min-w-screen",children:Object(s.jsx)("div",{style:{width:n,transition:"width 2s"},class:"align-middle inline-block",children:Object(s.jsxs)("div",{class:"flex flex-col space-y-10",children:[Object(s.jsx)("div",{class:"flex-grow",children:Object(s.jsx)(l.a,{insert:e.game.title_text,size:n})}),Object(s.jsx)("div",{class:"flex flex-row justify-center text-center",children:Object(s.jsx)("p",{class:"text-4xl font-bold p-5 bg-blue-200 rounded",children:e.game.room})}),Object(s.jsxs)("div",{class:"flex flex-row text-center",children:[Object(s.jsxs)("div",{class:"flex-grow",children:[Object(s.jsxs)("p",{class:"text-4xl flex-grow text-white",children:[" ",e.game.teams[0].name]}),i(0).map((function(e){return Object(s.jsx)("div",{class:"bg-blue-200 m-2 rounded",children:Object(s.jsx)("p",{class:"font-bold",children:e})})}))]}),Object(s.jsxs)("div",{class:"flex-grow",children:[Object(s.jsxs)("p",{class:"text-4xl flex-grow text-white",children:[" ",e.game.teams[1].name]}),i(1).map((function(e){return Object(s.jsx)("div",{class:"bg-blue-200 m-2 rounded",children:Object(s.jsx)("p",{class:"font-bold",children:e})})}))]})]})]})})})}var r=n("po1S"),d=n("LDWk"),u=n("At9n"),f=n("PeLG"),m=n("b7xY"),j=n.n(m),b=null;function x(e){var t,n=Object(i.a)(),l=n.i18n,m=n.t,x=Object(c.useState)({}),g=x[0],w=x[1],O=Object(c.useState)(0),p=O[0],h=O[1],v=Object(c.useState)(""),y=v[0],_=v[1],S=Object(c.useRef)(null),N=0;return Object(c.useEffect)((function(){fetch("/api/ws").finally((function(){S.current=new WebSocket("wss://".concat(window.location.host,"/api/ws")),S.current.onopen=function(){console.log("game connected to server");var e=j.a.get("session");console.debug(e),null!=e&&(console.debug("found user session",e),S.current.send(JSON.stringify({action:"game_window",session:e})),setInterval((function(){console.debug("sending pong in game window");var t=e.split(":"),n=Object(a.a)(t,2),s=n[0],c=n[1];S.current.send(JSON.stringify({action:"pong",id:c,room:s}))}),5e3))},S.current.onmessage=function(e){var t=e.data,n=JSON.parse(t);if(console.debug(n),"data"===n.action)"Change Me"===n.data.title_text&&(n.data.title_text=m("Change Me")),"Team 1"===n.data.teams[0].name&&(n.data.teams[0].name="".concat(m("team")," ").concat(m("number",{count:1}))),"Team 2"===n.data.teams[1].name&&(n.data.teams[1].name="".concat(m("team")," ").concat(m("number",{count:2}))),w(n.data);else if("mistake"===n.action){new Audio("wrong.mp3").play()}else if("quit"===n.action)w({}),window.close();else if("reveal"===n.action){new Audio("good-answer.mp3").play()}else if("final_reveal"===n.action){new Audio("fm-answer-reveal.mp3").play()}else if("final_submit"===n.action){new Audio("good-answer.mp3").play()}else if("final_wrong"===n.action){new Audio("try-again.mp3").play()}else if("set_timer"===n.action)h(n.data);else if("stop_timer"===n.action)clearInterval(b);else if("start_timer"===n.action){var a=n.data;b=setInterval((function(){a>0?h(a-=1):(new Audio("try-again.mp3").play(),clearInterval(b),h(n.data))}),1e3)}else"change_lang"===n.action?(console.debug("Language Change",n.data),l.changeLanguage(n.data)):console.error("didn't expect",n)},setInterval((function(){1!==S.current.readyState?(_("lost connection to server refreshing in ".concat(10-N)),++N>=10&&(console.debug("game reload()"),location.reload())):_("")}),1e3)}))}),[]),null!=g.teams?(t=g.title?Object(s.jsx)(o,{game:g}):g.is_final_round?Object(s.jsx)("div",{class:"flex w-full justify-center",children:Object(s.jsx)("div",{class:"lg:w-5/6 sm:w-11/12 sm:px-8 md:w-4/6 w-11/12 flex flex-col space-y-6 pt-5",children:Object(s.jsx)(f.a,{game:g,timer:p})})}):Object(s.jsxs)("div",{class:"flex flex-col space-y-10 py-5",children:[Object(s.jsx)(r.a,{game:g}),Object(s.jsx)(u.a,{round:g.rounds[g.round]}),Object(s.jsxs)("div",{class:"flex flex-row justify-around",children:[Object(s.jsx)(d.a,{game:g,team:0}),Object(s.jsx)(d.a,{game:g,team:1})]})]}),Object(s.jsxs)(s.Fragment,{children:[t,""!==y?Object(s.jsx)("p",{class:"text-2xl text-red-700",children:y}):null]})):Object(s.jsx)("div",{class:"flex flex-col justify-center items-center min-h-screen",children:Object(s.jsx)("p",{children:m("No game session. retry from the admin window")})})}}},[["07wX",0,1,2,3,4]]]);