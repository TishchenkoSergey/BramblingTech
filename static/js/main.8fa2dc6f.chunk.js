(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(1),s=r.n(a),c=r(7),i=r.n(c),u=r(3),o=r.n(u),j=r(5),l=r(4),d=r(8),b=r.n(d),p=Object(a.memo)((function(){return Object(n.jsx)("div",{className:"error",children:"Server not responding! Reload the page!"})})),h=function(){var e=Object(j.a)(o.a.mark((function e(){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cors-anywhere.herokuapp.com/http://43.240.103.34/api.shadhin/api/search?keyword=valo");case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=r(2),m=r.n(O),f=Object(a.memo)((function(e){var t=e.handleClose,r=e.handleChange,a=e.query;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{name:"",type:"",value:a,onChange:r,placeholder:"Search artist, songs, videos..."}),Object(n.jsx)("button",{type:"submit",className:"btn-submit",children:Object(n.jsx)("i",{className:"fa fa-search"})}),Object(n.jsx)("button",{type:"submit",className:"search-cancil",onClick:t,children:Object(n.jsx)("img",{src:"img/icon-cross.png",alt:""})})]})}));f.propTypes={handleChange:m.a.func.isRequired,handleClose:m.a.func.isRequired,query:m.a.string.isRequired}.isRequired;var x=Object(a.memo)((function(e){var t=e.tracks;return Object(n.jsx)("div",{className:"search-reasult",children:t.length<1?Object(n.jsx)("div",{className:"spinner-border text-primary"}):Object(n.jsx)("ul",{children:t.map((function(e){return Object(n.jsx)("li",{children:Object(n.jsxs)("a",{href:"#!",children:[Object(n.jsx)("img",{src:e.image.replace("<$size$>","300"),alt:""}),Object(n.jsx)("span",{children:e.Artist})," - ",e.title]})},e.ContentID)}))})})}));x.propTypes={tracks:m.a.arrayOf({ContentID:m.a.number.isRequired,image:m.a.string.isRequired,Artist:m.a.string.isRequired,title:m.a.string.isRequired}).isRequired}.isRequired;var v=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),r=t[0],s=t[1],c=Object(a.useState)([]),i=Object(l.a)(c,2),u=i[0],d=i[1],O=Object(a.useState)(""),m=Object(l.a)(O,2),v=m[0],g=m[1],y=Object(a.useState)(!1),C=Object(l.a)(y,2),k=C[0],q=C[1];function w(){return(w=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h();case 3:t=e.sent,d(t.Track.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s(!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var R=Object(a.useMemo)((function(){return u.filter((function(e){return e.Artist.toLowerCase().includes(v.toLowerCase())||e.title.toLowerCase().includes(v.toLowerCase())}))}),[v,u]),N=Object(a.useCallback)(b()((function(){return w.apply(this,arguments)}),1e3),[]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"src d-none d-md-block",children:Object(n.jsx)("form",{children:r?Object(n.jsx)(p,{}):Object(n.jsx)(f,{handleClose:function(e){e.preventDefault(),g(""),q(!1)},handleChange:function(e){var t=e.target.value;g(t),N(),q(""!==t)},query:v})})}),k&&Object(n.jsx)(x,{tracks:R})]})};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.8fa2dc6f.chunk.js.map