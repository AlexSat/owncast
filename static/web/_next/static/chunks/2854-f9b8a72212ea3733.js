(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2854],{30896:function(e,t,n){"use strict";n.d(t,{e:function(){return x}});var i=n(26042),r=n(69396),a=n(85893),s=n(71577),o=n(34447),l=n(67294),c=n(4480),u=n(32365),h=n(47568),d=n(70655),f=n(26713),m=n(11382),v=n(14670),p=n(69677),g=n(13840),y=n.n(g);var b=function(e){var t=e.handleClose,n=e.account,i=e.name,r=(0,l.useState)(null),o=r[0],c=r[1],u=(0,l.useState)(!1),g=u[0],b=u[1],k=(0,l.useState)(!1),w=k[0],T=k[1],x=(0,l.useState)(null),j=x[0],_=x[1],C=function(e){c(e),!function(e){var t=e.replace(/^@+/,"");return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())}(e)?b(!1):b(!0)},B=function(){var e=(0,h.Z)((function(){var e,n,i,r;return(0,d.__generator)(this,(function(a){switch(a.label){case 0:if(!g)return[2];T(!0),a.label=1;case 1:return a.trys.push([1,4,,5]),e=o.replace(/^@+/,""),n={account:e},[4,fetch("/api/remotefollow",{method:"POST",body:JSON.stringify(n)})];case 2:return[4,a.sent().json()];case 3:return(i=a.sent()).redirectUrl&&(window.open(i.redirectUrl,"_blank"),t()),i.success?i.redirectUrl?[3,5]:(_("Unable to follow."),T(!1),[2]):(_(i.message),T(!1),[2]);case 4:return r=a.sent(),_(r.message),[3,5];case 5:return T(!1),[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,a.jsxs)(f.Z,{direction:"vertical",children:[(0,a.jsxs)("div",{className:y().header,children:["By following this stream you'll get notified on the Fediverse when it goes live. Now is a great time to",(0,a.jsx)("a",{href:"https://owncast.online/join-fediverse",target:"_blank",rel:"noreferrer",children:"learn about the Fediverse"}),"if it's new to you."]}),(0,a.jsxs)(m.Z,{spinning:w,children:[j&&(0,a.jsx)(v.Z,{message:"Follow Error",description:j,type:"error",showIcon:!0}),(0,a.jsxs)("div",{className:y().account,children:[(0,a.jsx)("img",{src:"/logo",alt:"logo",className:y().logo}),(0,a.jsxs)("div",{className:y().username,children:[(0,a.jsx)("div",{className:y().name,children:i}),(0,a.jsx)("div",{children:n})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:y().instructions,children:"Enter your username @server to follow"}),(0,a.jsx)(p.Z,{value:o,size:"large",onChange:function(e){return C(e.target.value)},placeholder:"Your fediverse account @account@server",defaultValue:o}),(0,a.jsx)("div",{className:y().footer,children:"You'll be redirected to your Fediverse server and asked to confirm the action."})]}),(0,a.jsxs)(f.Z,{className:y().buttons,children:[(0,a.jsx)(s.Z,{disabled:!g,type:"primary",onClick:B,children:"Follow"}),(0,a.jsx)(s.Z,{onClick:function(){window.open("https://owncast.online/join-fediverse","_blank")},type:"primary",children:"Join the Fediverse"})]})]})]})},k=n(36879),w=n.n(k),T=n(1899),x=function(e){var t=(0,l.useState)(!1),n=t[0],h=t[1],d=(0,c.sJ)(T.g1),f=d.name,m=d.federation.account;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Z,(0,r.Z)((0,i.Z)({},e),{type:"primary",className:w().button,icon:(0,a.jsx)(o.Z,{}),onClick:function(){return h(!0)},children:"Follow"})),(0,a.jsx)(u.Modal,{title:"Follow ".concat(f),open:n,handleCancel:function(){return h(!1)},width:"550px",height:"200px",children:(0,a.jsx)(b,{account:m,name:f,handleClose:function(){return h(!1)}})})]})}},52437:function(e,t,n){"use strict";n.d(t,{E:function(){return l}});var i=n(85893),r=n(71577),a=n(71578),s=n(36879),o=n.n(s),l=function(e){var t=e.onClick,n=e.text;return(0,i.jsx)(r.Z,{type:"primary",className:"".concat(o().button),icon:(0,i.jsx)(a.Z,{}),onClick:t,children:n||"Notify"})}},32365:function(e,t,n){"use strict";n.r(t),n.d(t,{Modal:function(){return u}});var i=n(85893),r=n(85402),a=n(26303),s=n(11382),o=n(67294),l=n(78890),c=n.n(l),u=function(e){var t=e.title,n=e.url,l=e.open,u=e.handleOk,h=e.handleCancel,d=e.afterClose,f=e.height,m=e.width,v=e.children,p=(0,o.useState)(!!n),g=p[0],y=p[1],b={padding:"0px",minHeight:f,height:null!==f&&void 0!==f?f:"100%"},k=n&&(0,i.jsx)("iframe",{title:t,src:n,width:"100%",height:"100%",sandbox:"allow-same-origin allow-scripts allow-popups allow-forms",frameBorder:"0",allowFullScreen:!0,onLoad:function(){return y(!1)}}),w=g?"none":"inline";return(0,i.jsx)(r.Z,{title:t,open:l,onOk:u,onCancel:h,afterClose:d,bodyStyle:b,width:m,zIndex:9999,footer:null,centered:!0,destroyOnClose:!0,children:(0,i.jsxs)(i.Fragment,{children:[g&&(0,i.jsx)(a.Z,{active:g,style:{padding:"10px"},paragraph:{rows:10}}),k&&(0,i.jsx)("div",{style:{display:w},children:k}),v&&(0,i.jsx)("div",{className:c().content,children:v}),g&&(0,i.jsx)(s.Z,{className:c().spinner,spinning:g,size:"large"})]})})};t.default=u,u.defaultProps={url:void 0,children:void 0,handleOk:void 0,handleCancel:void 0,afterClose:void 0,height:"40vh",width:"70%"}},1698:function(e,t,n){"use strict";n.d(t,{R:function(){return h}});var i=n(85893),r=n(27049),a=n(24019),s=n(45938),o=n(29316),l=n.n(o),c=n(30896),u=n(52437),h=function(e){var t,n=e.streamName,o=e.customText,h=e.lastLive,d=e.notificationsEnabled,f=e.fediverseAccount,m=e.onNotifyClick;return t=o||(!o&&d&&f?"This stream is offline. You can be notified the next time ".concat(n," goes live or follow ").concat(f," on the Fediverse."):!o&&d?"This stream is offline. Be notified the next time ".concat(n," goes live."):"This stream is offline. Check back soon!"),(0,i.jsx)("div",{className:l().outerContainer,children:(0,i.jsxs)("div",{className:l().innerContainer,children:[(0,i.jsx)("div",{className:l().header,children:n}),(0,i.jsx)(r.Z,{className:l().separator}),(0,i.jsx)("div",{className:l().bodyText,children:t}),h&&(0,i.jsxs)("div",{className:l().lastLiveDate,children:[(0,i.jsx)(a.Z,{className:l().clockIcon}),"Last live ".concat((0,s.Z)(new Date(h))," ago.")]}),(0,i.jsxs)("div",{className:l().footer,children:[f&&(0,i.jsx)(c.e,{}),d&&(0,i.jsx)(u.E,{text:"Notify when live",onClick:m})]})]})})}},43125:function(e,t,n){"use strict";n.d(t,{X:function(){return u}});var i=n(85893),r=n(45938),a=n(68730),s=n(67294),o=n(99611),l=n(93132),c=n.n(l);var u=function(e){var t=e.online,n=e.lastConnectTime,l=e.lastDisconnectTime,u=e.viewerCount,h=(0,s.useState)(new Date)[1];(0,s.useEffect)((function(){var e=setInterval((function(){return h(new Date)}),1e3);return function(){clearInterval(e)}}),[]);var d,f="";if(t&&n){var m=function(e){var t=(0,a.Z)({start:e,end:new Date});return t.days>1?"".concat(t.days," days ").concat(t.hours," hours"):t.hours>=1?"".concat(t.hours," hours ").concat(t.minutes," minutes"):"".concat(t.minutes," minutes ").concat(t.seconds," seconds")}(new Date(n));f=t?"Live for  ".concat(m):"Offline",d=u>0&&(0,i.jsxs)("span",{children:[(0,i.jsx)(o.Z,{})," ",u]})}else t||(f="Offline",l&&(d="Last live ".concat((0,r.Z)(new Date(l))," ago.")));return(0,i.jsxs)("div",{className:c().statusbar,children:[(0,i.jsx)("div",{children:f}),(0,i.jsx)("div",{children:d})]})};u.defaultProps={lastConnectTime:null,lastDisconnectTime:null}},83818:function(e,t,n){"use strict";n.d(t,{M:function(){return z}});var i=n(47568),r=n(828),a=n(70655),s=n(85893),o=n(67294),l=n(4480),c=n(49218),u=n(85215),h=n(55206),d=n.n(h);n(33108);var f=function(e){var t=e.options,n=e.onReady,i=o.useRef(null),r=o.useRef(null);return o.useEffect((function(){if(!r.current){var e=i.current,a=r.current=(0,u.Z)(e,t,(function(){return a.log("player is ready"),n&&n(a,u.Z)}));a.autoplay(t.autoplay),a.src(t.sources)}}),[t,i]),o.useEffect((function(){var e=r.current;return function(){e&&(e.dispose(),r.current=null)}}),[r]),(0,s.jsx)("div",{"data-vjs-player":!0,children:(0,s.jsx)("video",{ref:i,className:"video-js vjs-big-play-centered vjs-show-big-play-button-on-pause ".concat(d().player," vjs-owncast")})})},m=n(51438);var v=function(){function e(){(0,m.Z)(this,e)}var t=e.prototype;return t.start=function(){this.stop(),this.timer=setInterval((function(){!function(){try{fetch("/api/ping")}catch(e){console.error(e)}}()}),4e3)},t.stop=function(){clearInterval(this.timer)},e}(),p=n(26042),g=n(69396),y=n(29815),b={position:"absolute",width:"100%",height:"100%"},k=function(e){var t=e.src,n=void 0===t?"":t,i=e.width,r=e.height,a=e.objectFit,l=void 0===a?"fill":a,c=e.duration,u=void 0===c?"1s":c,h=(0,o.useMemo)((function(){return{display:"inline-block",position:"relative",width:i,height:r}}),[i,r]),d=(0,o.useMemo)((function(){return[(0,g.Z)((0,p.Z)({},b),{objectFit:l,opacity:0,transition:"opacity ".concat(u)}),(0,g.Z)((0,p.Z)({},b),{objectFit:l,opacity:1,transition:"opacity ".concat(u)}),(0,g.Z)((0,p.Z)({},b),{objectFit:l,opacity:0})]}),[l,u]),f=(0,o.useState)(0),m=f[0],v=f[1],k=(0,o.useState)(["",""]),w=k[0],T=k[1],x=n!==w[1]?n:"",j=function(){v((m+1)%3),T([w[1],x])};return(0,s.jsx)("span",{style:h,children:(0,y.Z)(w).concat([x]).map((function(e,t){return""!==e&&(0,s.jsx)("img",{src:e,alt:"",style:d[t],onLoad:2===t?j:void 0},e)}))})};k.defaultProps={objectFit:"fill",duration:"3s"};var w=n(1125),T=n.n(w),x=function(e){var t,n=e.online,i=e.initialSrc,r=e.src,a=(0,o.useState)(i),l=a[0],c=a[1],u=(0,o.useState)("0s"),h=u[0],d=u[1];return(0,o.useEffect)((function(){clearInterval(t),t=setInterval((function(){"0s"===h&&d("3s"),c("".concat(r,"?").concat(Date.now()))}),2e4)}),[]),(0,s.jsxs)("div",{className:T().poster,children:[!n&&(0,s.jsx)("img",{src:i,alt:"logo"}),n&&(0,s.jsx)(k,{src:l,duration:h,objectFit:"cover",width:"100%",height:"100%"})]})},j=n(73682),_=n(1899),C=n(52951);var B=function(){function e(t,n){var i=this;(0,m.Z)(this,e),this.player=t,this.supportsDetailedMetrics=!1,this.hasPerformedInitialVariantChange=!1,this.clockSkewMs=0,this.segmentDownloadTime=[],this.bandwidthTracking=[],this.latencyTracking=[],this.errors=0,this.qualityVariantChanges=0,this.isBuffering=!1,this.bufferingDurationTimer=0,this.collectPlaybackMetricsTimer=0,this.videoJSReady=this.videoJSReady.bind(this),this.handlePlaying=this.handlePlaying.bind(this),this.handleBuffering=this.handleBuffering.bind(this),this.handleEnded=this.handleEnded.bind(this),this.handleError=this.handleError.bind(this),this.send=this.send.bind(this),this.collectPlaybackMetrics=this.collectPlaybackMetrics.bind(this),this.handleNoLongerBuffering=this.handleNoLongerBuffering.bind(this),this.sendMetricsTimer=0,this.player.on("canplaythrough",this.handleNoLongerBuffering),this.player.on("error",this.handleError),this.player.on("stalled",this.handleBuffering),this.player.on("waiting",this.handleBuffering),this.player.on("playing",this.handlePlaying),this.player.on("ended",this.handleEnded);var r=n.xhr;n.Vhs.xhr=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(t[0].uri.match(".ts")){var a=new Date,s=t[1];t[1]=function(e,t,n){var r=(new Date).getTime()-a.getTime();i.trackSegmentDownloadTime(r),s(e,t,n)}}return r.apply(void 0,(0,y.Z)(t))},this.videoJSReady(),this.sendMetricsTimer=setInterval((function(){i.send()}),1e4)}return(0,C.Z)(e,[{key:"stop",value:function(){clearInterval(this.sendMetricsTimer),this.player.off()}},{key:"setClockSkew",value:function(e){this.clockSkewMs=e}},{key:"videoJSReady",value:function(){var e=this,t=this.player.tech({IWillNotUseThisInPlugins:!0});this.supportsDetailedMetrics=!!t,t.on("usage",(function(t){"vhs-unknown-waiting"===t.name&&e.setIsBuffering(!0),"vhs-rendition-change-abr"===t.name&&e.incrementQualityVariantChanges()})),this.player.textTracks().addEventListener("cuechange",(function(){e.incrementQualityVariantChanges()}))}},{key:"handlePlaying",value:function(){var e=this;clearInterval(this.collectPlaybackMetricsTimer),this.collectPlaybackMetricsTimer=setInterval((function(){e.collectPlaybackMetrics()}),5e3)}},{key:"handleEnded",value:function(){clearInterval(this.collectPlaybackMetricsTimer)}},{key:"handleBuffering",value:function(){this.incrementErrorCount(1),this.setIsBuffering(!0)}},{key:"handleNoLongerBuffering",value:function(){this.setIsBuffering(!1)}},{key:"handleError",value:function(){this.incrementErrorCount(1)}},{key:"incrementErrorCount",value:function(e){this.errors+=e}},{key:"incrementQualityVariantChanges",value:function(){this.hasPerformedInitialVariantChange?this.qualityVariantChanges++:this.hasPerformedInitialVariantChange=!0}},{key:"setIsBuffering",value:function(e){var t=this;this.isBuffering=e,e?this.bufferingDurationTimer=setTimeout((function(){t.incrementErrorCount(1)}),500):clearTimeout(this.bufferingDurationTimer)}},{key:"trackSegmentDownloadTime",value:function(e){this.segmentDownloadTime.push(e)}},{key:"trackBandwidth",value:function(e){this.bandwidthTracking.push(e)}},{key:"trackLatency",value:function(e){this.latencyTracking.push(e)}},{key:"collectPlaybackMetrics",value:function(){var e=this.player.tech({IWillNotUseThisInPlugins:!0});if(e&&e.vhs&&(!this.player.paused()&&2===this.player.networkState())){var t=e.vhs.systemBandwidth;this.trackBandwidth(t);try{var n=function(e){for(var t,n=e.vhs.playlists.media(),i=e.currentTime(),a=0,s=n.segments.length;a<s;a++)if(i<n.segments[a].end){t=n.segments[a];break}return t||(t=(0,r.Z)(n.segments,1)[0]),t}(e);if(!n||!n.dateTimeObject)return;var i=n.dateTimeObject.getTime(),a=(new Date).getTime()+this.clockSkewMs-i;if(a<0||a/1e3>=40)return;this.trackLatency(a)}catch(s){console.warn(s)}}}},{key:"send",value:function(){var e=this;return(0,i.Z)((function(){var t,n,i,r,s,o,l,c,u,h,d;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:if(0===e.segmentDownloadTime.length)return[2];if(!e.player||e.player.paused())return[2];t=e.errors,e.supportsDetailedMetrics?(r=(i=function(e){return e.reduce((function(e,t){return e+t}),0)/e.length})(e.segmentDownloadTime)/1e3,s=Math.round(1e3*r)/1e3,o=i(e.bandwidthTracking)/1e3,l=Math.round(1e3*o)/1e3,c=i(e.latencyTracking)/1e3,u=Math.round(1e3*c)/1e3,n={bandwidth:l,latency:u,downloadDuration:s,errors:t+(e.isBuffering?1:0),qualityVariantChanges:e.qualityVariantChanges}):n={errors:t+(e.isBuffering?1:0)},e.errors=0,e.qualityVariantChanges=0,e.segmentDownloadTime=[],e.bandwidthTracking=[],e.latencyTracking=[],h={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)},a.label=1;case 1:return a.trys.push([1,3,,4]),[4,fetch("/api/metrics/playback",h)];case 2:return a.sent(),[3,4];case 3:return d=a.sent(),console.error(d),[3,4];case 4:return[2]}}))}))()}}]),e}(),Z=B,M=n(45785),I=n(82662),S=n(88029),E=n(91224);var N=function(e,t,n,i){var r=t.getComponent("MenuItem"),a=t.getComponent("MenuItem"),s=t.getComponent("MenuButton"),o=function(e){(0,S.Z)(n,e);var t=(0,E.Z)(n);function n(e,i){return(0,m.Z)(this,n),t.call(this,e,i)}return n.prototype.createEl=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"button",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=(0,M.Z)((0,I.Z)(n.prototype),"createEl",this).call(this,e,t,i);return r.innerHTML='<hr style="opacity: 0.3; margin-left: 10px; margin-right: 10px;" />',r},n}(r),l=new a(e,{selectable:!0});l.setAttribute("class","latency-toggle-item"),l.on("click",(function(){i()}));var c=new o(e,{selectable:!1}),u=t.extend(s,{constructor:function(){s.call(this,e)},createItems:function(){var t=e.tech({IWillNotUseThisInPlugins:!0}),i=new a(e,{selectable:!0,label:"Auto"}),r=n.map((function(n){var i=new a(e,{selectable:!0,label:n.name});return i.on("click",(function(){t?(t.vhs.representations().forEach((function(e,t){e.enabled(t===n.index)})),i.selected(!1)):console.warn("Invalid attempt to access null player tech")})),i}));i.on("click",(function(){t.vhs.representations().forEach((function(e){e.enabled(!0)})),i.selected(!1)}));var s=!!t&&!!t.vhs;return n.length<2&&s?[l]:n.length>1&&s?[i].concat((0,y.Z)(r),[c,l]):s||1!==n.length?[i].concat((0,y.Z)(r)):[]}}),h=e.tech({IWillNotUseThisInPlugins:!0});if(!(n.length<2)||h&&h.vhs){var d=new u;return d.addClass("vjs-quality-selector"),d}};var P=function(){function e(t){(0,m.Z)(this,e),this.player=t,this.playing=!1,this.enabled=!1,this.running=!1,this.inTimeout=!1,this.jumpingToLiveIgnoreBuffer=!1,this.timeoutTimer=0,this.checkTimer=0,this.bufferingCounter=0,this.bufferingTimer=0,this.playbackRate=1,this.lastJumpOccurred=null,this.startupTime=new Date,this.clockSkewMs=0,this.currentLatency=null,this.bufferedAtLatency=[],this.player.on("playing",this.handlePlaying.bind(this)),this.player.on("pause",this.handlePause.bind(this)),this.player.on("error",this.handleError.bind(this)),this.player.on("waiting",this.handleBuffering.bind(this)),this.player.on("stalled",this.handleBuffering.bind(this)),this.player.on("ended",this.handleEnded.bind(this)),this.player.on("canplaythrough",this.handlePlaying.bind(this)),this.player.on("canplay",this.handlePlaying.bind(this)),this.check=this.check.bind(this),this.start=this.start.bind(this),this.enable=this.enable.bind(this),this.countBufferingEvent=this.countBufferingEvent.bind(this)}return(0,C.Z)(e,[{key:"setClockSkew",value:function(e){this.clockSkewMs=e}},{key:"check",value:function(){if(!((new Date).getTime()-this.startupTime.getTime()<1e4)&&!this.player.paused()&&!this.player.seeking()&&!this.inTimeout&&this.enabled){var e=this.player.tech({IWillNotUseThisInPlugins:!0});if(e&&e.vhs)if(2===this.player.networkState()){var t=0;try{if(0===e.vhs.stats.buffered.length)return void this.timeout();e.vhs.stats.buffered.forEach((function(e){t+=e.end-e.start}))}catch(p){console.error(p)}var n=e.vhs.playlists.media().attributes.BANDWIDTH,i=e.vhs.systemBandwidth/n;try{var a=function(e){for(var t,n=e.vhs.playlists.media(),i=e.currentTime(),a=0,s=n.segments.length;a<s;a++)if(i<n.segments[a].end){t=n.segments[a];break}return t||(t=(0,r.Z)(n.segments,1)[0]),t}(e);if(!a)return;if(i<1.8&&t<6*a.duration)return void this.timeout();var s=Math.max(4e3,1e3*a.duration*1.8),o=this.bufferedAtLatency.concat([s]),l=o.reduce((function(e,t){return e+t}),0)/o.length,c=Math.max(1.4*l,Math.min(1e3*a.duration*2.6,15e3));l>=c&&(c=l+3e3);var u=a.dateTimeObject.getTime(),h=(new Date).getTime()+this.clockSkewMs-u;if(this.currentLatency=h,Math.abs(h)>8e4)return void this.timeout();if(h>c){if(this.shouldJumpToLive()&&h>c+5e3){var d=h/1e3-3*a.duration,f=this.player.currentTime()+d;console.info("latency",h/1e3,"jumping",d,"to live from ",this.player.currentTime()," to ",f);var m=e.vhs.stats.buffered[0].end;if(f>e.vhs.stats.buffered[0].start<m)return void this.jump(f)}var v=.33*i;(v=Math.max(Math.min(v,1.08),1))>this.playbackRate+.02&&(v=this.playbackRate+.02),v=Math.round(v*Math.pow(10,3))/Math.pow(10,3),this.start(v)}else h<=l&&this.stop();console.info("latency",h/1e3,"min",l/1e3,"max",c/1e3,"playback rate",this.playbackRate,"enabled:",this.enabled,"running: ",this.running,"skew: ",this.clockSkewMs,"rebuffer events: ",this.bufferingCounter)}catch(g){}}}}},{key:"shouldJumpToLive",value:function(){return!(this.bufferingCounter>1)&&(new Date).getTime()-this.lastJumpOccurred>2e4}},{key:"jump",value:function(e){var t=this;this.jumpingToLiveIgnoreBuffer=!0,this.performedInitialLiveJump=!0,this.lastJumpOccurred=new Date,console.info("current time",this.player.currentTime(),"seeking to",e),this.player.currentTime(e),setTimeout((function(){t.jumpingToLiveIgnoreBuffer=!1}),5e3)}},{key:"setPlaybackRate",value:function(e){this.playbackRate=e,this.player.playbackRate(e)}},{key:"start",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;!this.inTimeout&&this.enabled&&e!==this.playbackRate&&(this.running=!0,this.setPlaybackRate(e))}},{key:"stop",value:function(){this.running&&console.log("stopping latency compensator..."),this.running=!1,this.setPlaybackRate(1)}},{key:"enable",value:function(){var e=this;this.enabled=!0,clearInterval(this.checkTimer),clearTimeout(this.bufferingTimer),this.checkTimer=setInterval((function(){e.check()}),3e3)}},{key:"disable",value:function(){clearInterval(this.checkTimer),clearTimeout(this.timeoutTimer),this.stop(),this.enabled=!1}},{key:"timeout",value:function(){var e=this;this.jumpingToLiveIgnoreBuffer||(this.inTimeout=!0,this.stop(),clearTimeout(this.timeoutTimer),this.timeoutTimer=setTimeout((function(){e.endTimeout()}),3e4))}},{key:"endTimeout",value:function(){clearTimeout(this.timeoutTimer),this.inTimeout=!1}},{key:"handlePlaying",value:function(){var e=this.playing;this.playing=!0,clearTimeout(this.bufferingTimer),this.enabled&&this.shouldJumpToLive()&&(e||(this.jumpingToLiveIgnoreBuffer=!0,this.player.liveTracker.seekToLiveEdge(),this.lastJumpOccurred=new Date))}},{key:"handlePause",value:function(){this.playing=!1}},{key:"handleEnded",value:function(){this.enabled&&this.disable()}},{key:"handleError",value:function(){this.enabled&&this.timeout()}},{key:"countBufferingEvent",value:function(){var e=this;this.bufferingCounter+=1,this.bufferingCounter>4?this.disable():(this.bufferedAtLatency.push(this.currentLatency),console.log("latency compensation timeout due to buffering:",this.bufferingCounter,"buffering events of",4),setTimeout((function(){e.bufferingCounter>0&&(e.bufferingCounter-=1)}),18e4))}},{key:"handleBuffering",value:function(){var e=this;this.enabled&&!this.inTimeout&&(this.jumpingToLiveIgnoreBuffer?this.jumpingToLiveIgnoreBuffer=!1:(this.timeout(),clearTimeout(this.bufferingTimer),this.bufferingTimer=setTimeout((function(){e.countBufferingEvent()}),200)))}}]),e}(),D=P,L="/api/video/variants",F="owncast_volume",O="latencyCompensatorEnabled",R=new v,A=null,J=null,V=!1;function q(){return U.apply(this,arguments)}function U(){return(U=(0,i.Z)((function(){var e,t;return(0,a.__generator)(this,(function(n){switch(n.label){case 0:e=[],n.label=1;case 1:return n.trys.push([1,4,,5]),[4,fetch(L)];case 2:return[4,n.sent().json()];case 3:return e=n.sent(),[3,5];case 4:return t=n.sent(),console.error(t),[3,5];case 5:return[2,e]}}))}))).apply(this,arguments)}var z=function(e){var t=e.source,n=e.online,u=o.useRef(null),h=(0,r.Z)((0,l.FV)(_.We),2),d=h[0],m=h[1],v=(0,l.sJ)(_.g8),p=function(){(0,j.qQ)(F,u.current.muted()?0:u.current.volume())},g=function(e){var t=document.querySelector(".latency-toggle-item > .vjs-menu-item-text");t&&(t.innerHTML=e)},y=function(){J&&J.stop(),V=!0,(J=new D(u.current)).setClockSkew(v),J.enable(),(0,j.qQ)(O,!0),g("disable minimized latency")},b=function(){J&&J.disable(),J=null,V=!1,(0,j.qQ)(O,!1),g('<span style="font-size: 0.8em">enable minimized latency (experimental)</span>')},k=function(){V?b():y()},w=function(){var e=(0,i.Z)((function(e,t){var n,i;return(0,a.__generator)(this,(function(r){switch(r.label){case 0:return[4,q()];case 1:return n=r.sent(),i=N(e,t,n,k),e.controlBar.addChild(i,{},e.controlBar.children_.length-2),function(e){var t=e.tech({IWillNotUseThisInPlugins:!0});t&&t.vhs&&("true"===(0,j.$o)(O)&&t&&t.vhs?y():b())}(e),[2]}}))}));return function(t,n){return e.apply(this,arguments)}}();(0,c.y1)("space",(function(e){e.preventDefault(),u.current.paused()?u.current.play():u.current.pause()})),(0,c.y1)("f",(function(){u.current.isFullscreen()?u.current.exitFullscreen():u.current.requestFullscreen()}),{enableOnContentEditable:!1}),(0,c.y1)("m",(function(){u.current.muted()||0===u.current.volume()?u.current.volume(.7):u.current.volume(0)}),{enableOnContentEditable:!1}),(0,c.y1)("0",(function(){return u.current.volume(u.current.volume()+.1)}),{enableOnContentEditable:!1}),(0,c.y1)("9",(function(){return u.current.volume(u.current.volume()-.1)}),{enableOnContentEditable:!1});var T={autoplay:!1,controls:!0,responsive:!0,fluid:!1,playsinline:!0,liveui:!0,preload:"auto",controlBar:{progressControl:{seekBar:!1}},html5:{vhs:{enableLowInitialPlaylist:!0,experimentalBufferBasedABR:!0,useNetworkInformationApi:!0,maxPlaylistRetries:30}},liveTracker:{trackingThreshold:0,liveTolerance:15},sources:[{src:t,type:"application/x-mpegURL"}]};return(0,o.useEffect)((function(){A&&A.setClockSkew(v)}),[v]),(0,o.useEffect)((function(){return function(){b(),A.stop()}}),[]),(0,s.jsxs)("div",{style:{display:"grid"},children:[n&&(0,s.jsx)("div",{style:{gridColumn:1,gridRow:1},children:(0,s.jsx)(f,{options:T,onReady:function(e,t){u.current=e,function(){try{u.current.volume((0,j.$o)(F)||1)}catch(e){console.warn(e)}}(),function(e,t){if(window.hasOwnProperty("WebKitPlaybackTargetAvailabilityEvent")){var n=t.getComponent("Button"),i=t.extend(n,{constructor:function(){n.call(this,e)},handleClick:function(){try{document.getElementsByTagName("video")[0].webkitShowPlaybackTargetPicker()}catch(e){console.error(e)}}});e.controlBar.addChild(new i).addClass("vjs-airplay")}}(e,t),e.on("waiting",(function(){e.log("player is waiting")})),e.on("dispose",(function(){e.log("player will dispose"),R.stop()})),e.on("playing",(function(){e.log("player is playing"),R.start(),m(!0)})),e.on("pause",(function(){e.log("player is paused"),R.stop(),m(!1)})),e.on("ended",(function(){e.log("player is ended"),R.stop(),m(!1)})),t.hookOnce(),e.on("volumechange",p),(A=new Z(e,t)).setClockSkew(v),w(e,t)}})}),(0,s.jsx)("div",{style:{gridColumn:1,gridRow:1},children:!d&&(0,s.jsx)(x,{online:n,initialSrc:"/thumbnail.jpg",src:"/thumbnail.jpg"})})]})}},36879:function(e){e.exports={button:"ActionButton_button__z5Z2c",icon:"ActionButton_icon__EPp7Q"}},13840:function(e){e.exports={header:"FollowModal_header__la1ji",buttons:"FollowModal_buttons__tt4Mc",instructions:"FollowModal_instructions__HiKFF",footer:"FollowModal_footer__AjucH",account:"FollowModal_account__cmHkm",logo:"FollowModal_logo__Ew8xK",username:"FollowModal_username__A_OTw",name:"FollowModal_name__Sf_TP"}},78890:function(e){e.exports={spinner:"Modal_spinner__GiSS0",content:"Modal_content__h9my9"}},29316:function(e){e.exports={outerContainer:"OfflineBanner_outerContainer__3AbsB",innerContainer:"OfflineBanner_innerContainer__zTm13",bodyText:"OfflineBanner_bodyText__nNNy0",separator:"OfflineBanner_separator___j_Ss",lastLiveDate:"OfflineBanner_lastLiveDate___UZdO",clockIcon:"OfflineBanner_clockIcon__s0DB_",header:"OfflineBanner_header__Vu20o",footer:"OfflineBanner_footer__o3Zl5"}},93132:function(e){e.exports={statusbar:"Statusbar_statusbar__AtVnB"}},55206:function(e){e.exports={player:"VideoJS_player__GT8FN",poster:"VideoJS_poster__nlmqm"}},1125:function(e){e.exports={poster:"VideoPoster_poster__RDkSk"}},25893:function(){}}]);