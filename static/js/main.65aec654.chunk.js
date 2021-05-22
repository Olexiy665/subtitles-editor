(this["webpackJsonpsubtitle-editor"]=this["webpackJsonpsubtitle-editor"]||[]).push([[0],{18:function(e,t,r){e.exports={VideoPlayerWrapper:"VideoPlayer_VideoPlayerWrapper__143mN",VideoWrapper:"VideoPlayer_VideoWrapper__e0xaF",VideoControl:"VideoPlayer_VideoControl__25TA6",PlayButton:"VideoPlayer_PlayButton__HaSCN",SliderWrapper:"VideoPlayer_SliderWrapper__2ACHg",TimeWrapper:"VideoPlayer_TimeWrapper__3_MKc"}},20:function(e,t,r){e.exports={SubtitleCard:"SubtitleCard_SubtitleCard__1ds_Z",Text:"SubtitleCard_Text__166xB",CardBottom:"SubtitleCard_CardBottom__3R_0G",StartTime:"SubtitleCard_StartTime__vUX6q",EndTime:"SubtitleCard_EndTime__ObLjv"}},35:function(e,t,r){e.exports={SubtitlesWrapper:"SubtitlesPlayer_SubtitlesWrapper__23RXz",SubtitleItem:"SubtitlesPlayer_SubtitleItem__3iPdg"}},40:function(e,t,r){e.exports={MainScreen:"MainScreen_MainScreen__3q2rv"}},48:function(e,t,r){e.exports={VideoSubtitlesPlayerWrapper:"VideoSubtitlesPlayer_VideoSubtitlesPlayerWrapper__3Sg47"}},49:function(e,t,r){e.exports={SubtitlesList:"SubtitleList_SubtitlesList__3fsrS"}},61:function(e,t,r){},65:function(e,t,r){"use strict";r.r(t);var i=r(0),a=r.n(i),n=r(14),c=r.n(n),s=r(16),u=(r(61),r(40)),o=r.n(u),d=r(27),l=r(83),b=r(41),m=r.n(b),j=r(47),p=r.n(j),x=r(84),T=r(46),S=r.n(T),_=r(18),O=r.n(_),f=r.p+"static/media/video.8c727da6.mp4",v=r(31),h=Object(v.b)({name:"player",initialState:{videoDuration:0,currentTime:0},reducers:{updateDuration:function(e,t){e.videoDuration=t.payload.videoDuration},updateCurrentTime:function(e,t){e.currentTime=t.payload.currentTime}}}),y=h.actions,C=y.updateDuration,P=y.updateCurrentTime,N=h.reducer,V=r(2),W=function(){var e=Object(i.useState)(!1),t=Object(d.a)(e,2),r=t[0],a=t[1],n=Object(i.useState)(0),c=Object(d.a)(n,2),u=c[0],o=c[1],b=Object(i.useRef)(null),j=Object(s.b)(),T=Object(s.c)((function(e){return e.player.videoDuration})),_=Object(s.c)((function(e){return e.player.currentTime}));Object(i.useEffect)((function(){if(b.current){var e=b.current.duration;Number.isNaN(e)||j(C({videoDuration:e}))}}),[b.current]);var v=function(){b.current&&(r?b.current.pause():b.current.play())};return Object(V.jsx)("div",{className:O.a.VideoPlayerWrapper,children:Object(V.jsxs)("div",{className:O.a.VideoWrapper,children:[Object(V.jsx)("video",{onPlay:function(){a(!0)},onClick:v,onPauseCapture:function(){a(!1)},onTimeUpdate:function(e){var t=e.target.currentTime,r=t/T*100;Math.abs(r-u)>1&&o(r),Math.abs(_-t)>.5&&j(P({currentTime:t}))},ref:b,src:f,controls:!1,children:Object(V.jsx)("track",{kind:"captions"})}),Object(V.jsxs)("div",{className:O.a.VideoControl,children:[Object(V.jsx)(l.a,{className:O.a.PlayButton,size:"medium",color:"primary",onClick:v,children:r?Object(V.jsx)(S.a,{fontSize:"14px"}):Object(V.jsx)(p.a,{fontSize:"14px"})}),Object(V.jsx)("div",{className:O.a.SliderWrapper,children:Object(V.jsx)(x.a,{value:u,onChange:m()((function(e,t){var r=t/100;b.current&&(b.current.currentTime=T*r)}),250),"aria-labelledby":"continuous-slider",max:100,min:0})}),Object(V.jsx)("div",{className:O.a.TimeWrapper,children:new Date(1e3*_).toISOString().substr(11,8)})]})]})})},g=r(36),D=[{text:"* \u0437\u0432\u0443\u043a \u0442\u044f\u0436\u0435\u043b\u043e\u0433\u043e \u0431\u0435\u0433\u0430*",startTime:0,endTime:1.5},{text:"* \u0437\u0432\u0443\u043a\u0438 \u043a\u0440\u0443\u0442\u043e\u0441\u0442\u0438 *",startTime:4,endTime:5.5},{text:"* \u0437\u0432\u0443\u043a \u043f\u0440\u0438\u0431\u043b\u0438\u0436\u0430\u044e\u0449\u0435\u0433\u043e\u0441\u044f \u0434\u0435\u0434\u043b\u0430\u0439\u043d\u0430 * ",startTime:6,endTime:8},{text:"* \u0437\u0432\u0443\u0447\u0438\u0442 \u043a\u0430\u0437\u0430\u0445\u0441\u043a\u0430\u044f \u043c\u0443\u0437\u044b\u043a\u0430 * ",startTime:9,endTime:15},{text:"* \u043f\u0438\u0443-\u043f\u0438\u0443-\u043f\u0438\u0443 * ",startTime:19,endTime:21},{text:"* \u043f\u043e\u0435\u0442 \u043d\u0430 \u0438\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u043d\u043e\u043c * ",startTime:26,endTime:28},{text:" \u043e\u0442\u0441\u044b\u043b\u043a\u0430 \u043a \u043c\u0430\u0442\u0440\u0438\u0446\u0435  ",startTime:34,endTime:37},{text:"* \u0446\u044b\u0444\u0440\u044b \u0437\u043d\u0430\u0435\u0448\u044c - \u043d\u0430\u0431\u0435\u0440\u0438 * ",startTime:39,endTime:41},{text:"* \u0437\u0432\u0443\u043a\u0438 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u043a\u0440\u0443\u0442\u044b\u0435 \u043f\u0430\u0440\u043d\u0438 \u043d\u0435 \u0441\u043c\u043e\u0442\u0440\u044f\u0442 \u043d\u0430 \u0432\u0437\u0440\u044b\u0432 * ",startTime:64.57,endTime:70},{text:"C\u0435\u0440\u0438\u0430\u043b \u0411\u0420\u0418\u0413\u0410\u0414\u0410",startTime:71.5,endTime:73}],B=r(35),I=r.n(B),M=function(){var e=Object(s.c)((function(e){return e.player.currentTime})),t=Object(i.useState)(new g.a),r=Object(d.a)(t,2),a=r[0],n=r[1];Object(i.useEffect)((function(){var e=new g.a;D.forEach((function(t){e.insert([t.startTime,t.endTime],t.text)})),n(e)}),[]);var c=a.search([e,e]);return Object(V.jsx)("div",{className:I.a.SubtitlesWrapper,children:c.map((function(e){return Object(V.jsx)("div",{className:I.a.SubtitleItem,children:e})}))})},w=r(48),E=r.n(w),L=function(){return Object(V.jsxs)("div",{className:E.a.VideoSubtitlesPlayerWrapper,children:[Object(V.jsx)(W,{}),Object(V.jsx)(M,{})]})},k=r(85),F=r(82),z=r(20),R=r.n(z),q=function(e){var t=e.text,r=e.startTime,i=e.endTime;return Object(V.jsx)("div",{className:R.a.SubtitleCard,children:Object(V.jsxs)(F.a,{elevation:3,children:[Object(V.jsx)("p",{className:R.a.Text,children:t}),Object(V.jsxs)("div",{className:R.a.CardBottom,children:[Object(V.jsx)("span",{className:R.a.StartTime,children:new Date(1e3*r).toISOString().substr(11,11)}),Object(V.jsx)("span",{className:R.a.EndTime,children:new Date(1e3*i).toISOString().substr(11,11)})]})]})})},A=r(49),H=r.n(A),J=function(){return Object(V.jsx)("div",{className:H.a.SubtitlesList,children:Object(V.jsx)(k.a,{children:D.map((function(e){var t=e.text,r=e.startTime,i=e.endTime;return Object(V.jsx)(q,{text:t,startTime:r,endTime:i},"".concat(String(r),"-").concat(String(i)))}))})})},U=function(){return Object(V.jsxs)("div",{className:o.a.MainScreen,children:[Object(V.jsx)(L,{}),Object(V.jsx)(J,{})]})},X=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,87)).then((function(t){var r=t.getCLS,i=t.getFID,a=t.getFCP,n=t.getLCP,c=t.getTTFB;r(e),i(e),a(e),n(e),c(e)}))},G=Object(v.a)({reducer:{player:N}});c.a.render(Object(V.jsx)(a.a.StrictMode,{children:Object(V.jsx)(s.a,{store:G,children:Object(V.jsx)(U,{})})}),document.getElementById("root")),X()}},[[65,1,2]]]);
//# sourceMappingURL=main.65aec654.chunk.js.map