(this["webpackJsonpdev-site"]=this["webpackJsonpdev-site"]||[]).push([[0],{38:function(e,t,n){e.exports=n(80)},71:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),i=n.n(c),o=n(4),l=n(1),s=n(9),u=n.n(s),d=n(12),m=n(11),b=n(28),g=n.n(b)()("9ffd3dad4fd54423ad22bc3ce3e1a2fd6bbc9081");function f(e){return g.post.list(e)}function h(e){return g.post.retrieve(e)}function p(e){return new Date(e).toLocaleString(void 0,{year:"numeric",month:"long",day:"numeric",hour:"numeric",hour12:!0,minute:"numeric"})}var j=n(5),O={color:{primary:"#377771",accent:"#4CE0B3",text:"#333",mutedText:"#707070",lightGray:"#999",background:"#e7ecef"},space:{xxs:"2px",xs:"4px",s:"8px",sm:"12px",m:"16px",l:"24px",xl:"32px",xxl:"64px",xxxl:"96px"},typography:{fontFamily:"Lato, sans-serif",baseFontSize:"16px",body:{size:"1em",weight:"400",lineHeight:1.61},small:{size:"0.8em",weight:"400",lineHeight:1.61},leading:{size:"1.15em",weight:"400",lineHeight:1.61},headline:{size:"2em",weight:"300",lineHeight:3.22},subheading:{size:"1.3em",weight:"400",lineHeight:2.415},title:{size:"1.5em",weight:"300",lineHeight:2.415},googleFonts:[{name:"Lato",styles:["300","400","700"]}]}},v=O,x="about",w="contact",y={base:"blog",post:{template:"post/:slug",link:function(e){return"/blog/post/".concat(e)}},category:{template:"category/:slug",link:function(e){return"/blog/category/".concat(e)}},tag:{template:"tag/:slug",link:function(e){return"/blog/tag/".concat(e)}}},E=n(8),k=n(7),N=n.n(k),z=r.a.forwardRef((function(e,t){var n=e.muted,a=void 0!==n&&n,c=e.className,i=Object(E.a)(e,["muted","className"]);return r.a.createElement("p",Object.assign({ref:t,className:N()({muted:a},c)},i))}));r.a.forwardRef((function(e,t){var n=e.muted,a=void 0!==n&&n,c=e.className,i=e.children,o=Object(E.a)(e,["muted","className","children"]);return r.a.createElement("h1",Object.assign({ref:t,className:N()({muted:a},c)},o),i)})),r.a.forwardRef((function(e,t){var n=e.muted,a=void 0!==n&&n,c=e.className,i=e.children,o=Object(E.a)(e,["muted","className","children"]);return r.a.createElement("h4",Object.assign({ref:t,className:N()({muted:a},c)},o),i)}));function S(){var e=Object(o.a)(["\n          font-size: ",";\n          font-weight: ",";\n        "]);return S=function(){return e},e}var _=v.typography,F=r.a.forwardRef((function(e,t){var n=e.muted,a=void 0!==n&&n,r=e.className,c=Object(E.a)(e,["muted","className"]);return Object(l.d)("p",Object.assign({css:Object(l.c)(S(),_.small.size,_.small.weight),ref:t,className:N()({muted:a},r)},c))})),R=r.a.forwardRef((function(e,t){var n=e.muted,a=void 0!==n&&n,c=e.className,i=e.children,o=Object(E.a)(e,["muted","className","children"]);return r.a.createElement("h3",Object.assign({ref:t,className:N()({muted:a},c)},o),i)})),L=r.a.forwardRef((function(e,t){var n=e.muted,a=void 0!==n&&n,c=e.className,i=e.children,o=Object(E.a)(e,["muted","className","children"]);return r.a.createElement("h2",Object.assign({ref:t,className:N()({muted:a},c)},o),i)})),T=function(e){return r.a.createElement("svg",Object.assign({xmlSpace:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},e),r.a.createElement("path",{d:"M0 10V2l2-2h8l10 10-10 10L0 10zm4.5-4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"}))};function H(){var e=Object(o.a)(["\n                display: flex;\n              "]);return H=function(){return e},e}function A(){var e=Object(o.a)(["\n  display: flex;\n  margin-top: ",";\n  .tag-icon {\n    width: ",";\n    height: ",";\n    fill: ",";\n  }\n  .tag-link {\n    color: ",";\n    text-decoration: none;\n    &:hover {\n      text-decoration: underline;\n    }\n    &:not(:last-child) {\n      margin-right: ",";\n    }\n    &:not(:first-child) {\n      margin-left: ",";\n    }\n  }\n"]);return A=function(){return e},e}function B(){var e=Object(o.a)(["\n  margin-bottom: ",";\n"]);return B=function(){return e},e}function C(){var e=Object(o.a)(["\n  display: block;\n  margin: 0 0 "," 0;\n  text-decoration: none;\n  &,\n  &:focus,\n  &:visited,\n  &:active {\n    color: ",";\n  }\n"]);return C=function(){return e},e}function I(){var e=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  img {\n    max-width: 200px;\n    max-height: 150px;\n    margin-right: ",";\n  }\n"]);return I=function(){return e},e}function M(){var e=Object(o.a)(["\n  max-width: 700px;\n  margin: ",";\n  padding: ",";\n  background-color: white;\n"]);return M=function(){return e},e}var G=v.space,J=v.color,P=Object(l.c)(M(),G.m,G.s),Q=Object(l.c)(I(),G.s),U=Object(l.c)(C(),G.xs,J.primary),Y=Object(l.c)(B(),G.sm),D=Object(l.c)(A(),G.s,G.m,G.m,J.lightGray,J.mutedText,G.xs,G.xs),K=function(e){var t=e.posts;return Object(l.d)("div",null,t.map((function(e){var t=e.categories&&e.categories.length>0?e.categories[0]:null;return Object(l.d)("div",{key:e.slug,css:P},Object(l.d)(j.b,{css:U,to:y.post.link(e.slug)},Object(l.d)(R,null,e.title)),Object(l.d)("div",{css:Object(l.c)(H())},Object(l.d)(F,{css:Y},p(e.published)),t&&Object(l.d)(r.a.Fragment,null,Object(l.d)(F,null,"\u2014"),Object(l.d)(j.b,{to:y.category.link(t.slug)},Object(l.d)(F,null,t.name)))),Object(l.d)("div",{css:Q},e.featured_image&&""!==e.featured_image&&Object(l.d)("img",{alt:"featured",src:e.featured_image}),Object(l.d)(z,null,e.summary)),e.tags.length>0&&Object(l.d)("div",{css:D},Object(l.d)(T,{className:"tag-icon"}),e.tags.map((function(e){return Object(l.d)(j.b,{className:"tag-link",key:e.slug,to:y.tag.link(e.slug)},Object(l.d)(F,null,e.name))}))))})))},V=function(e){var t=r.a.useState([]),n=Object(m.a)(t,2),a=n[0],c=n[1];return r.a.useEffect((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,c(t.data.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(l.d)("div",{style:{height:"100%"}},Object(l.d)(K,{posts:a}))},W=function(e){return r.a.createElement("div",null,r.a.createElement("p",null,"Nathan Smith is an Associate Software Developer at Bentley Systems where he writes full-stack enterprise ASP.NET Core and TypeScript + React web applications and maintains a CSS + React UI library. In his spare time he plays tabletop and video games and takes pictures of his cats."))},Z=n(2),$=n(29);function q(){var e=Object(o.a)(["\n  background-color: ",";\n  color: white;\n  padding: ",";\n  ul {\n    display: flex;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    li {\n      display: block;\n      margin: 0 ",";\n      cursor: pointer;\n      &:first-child {\n        margin-left: 0;\n      }\n      &:last-child {\n        margin-right: 0;\n      }\n\n      &.spacer {\n        cursor: initial;\n        flex-grow: 1;\n      }\n      a {\n        text-decoration: none;\n        &,\n        &:active,\n        &:hover,\n        &:visited {\n          color: white;\n        }\n        &:hover {\n          text-decoration: underline;\n        }\n      }\n    }\n  }\n"]);return q=function(){return e},e}var X=O.color,ee=O.space,te=Object(l.c)(q(),X.primary,ee.m,ee.sm),ne=function(e){return Object(l.d)("header",{css:te},Object(l.d)("ul",null,Object(l.d)("li",null,Object(l.d)(j.b,{to:"/"},Object(l.d)(L,null,"Nathan Smith"))),Object(l.d)("li",{className:"spacer"}),Object(l.d)("li",null,Object(l.d)(j.b,{to:"/about"},Object(l.d)(L,null,"About"))),Object(l.d)("li",null,Object(l.d)(j.b,{to:"/contact"},Object(l.d)(L,null,"Contact")))))};function ae(){var e=Object(o.a)(["\n  body {\n    background-color: ",";\n  }\n"]);return ae=function(){return e},e}var re=v.color,ce=Object(l.c)(ae(),re.background),ie=function(e){return r.a.createElement("div",null,r.a.createElement($.a,null,r.a.createElement("title",null,"Nathan Smith")),r.a.createElement(l.a,{styles:ce}),r.a.createElement(ne,null),r.a.createElement(Z.a,null))};function oe(){var e=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 550px;\n  height: 800px;\n\n  iframe {\n    border: 0;\n    width: 550px;\n    height: 800px;\n  }\n"]);return oe=function(){return e},e}var le=Object(l.c)(oe()),se=function(e){return Object(l.d)("div",{css:le},Object(l.d)("iframe",{title:"Contact Me",src:"https://docs.google.com/forms/d/e/1FAIpQLScLKJVojwvtY0TpBPYfaUQEhKjQfa2iAZsitp3iRxkEoAYvmw/viewform?embedded=true"}))},ue=n(37),de=n(32),me=n.n(de);n(71),n(72);function be(){var e=Object(o.a)(["\n  margin-bottom: ",";\n"]);return be=function(){return e},e}function ge(){var e=Object(o.a)(["\n  display: flex;\n  margin-bottom: ",";\n  .tag-icon {\n    width: ",";\n    height: ",";\n    fill: ",";\n  }\n  .tag-link {\n    color: ",";\n    text-decoration: none;\n    &:hover {\n      text-decoration: underline;\n    }\n    &:not(:last-child) {\n      margin-right: ",";\n    }\n    &:not(:first-child) {\n      margin-left: ",";\n    }\n  }\n"]);return ge=function(){return e},e}function fe(){var e=Object(o.a)(["\n  margin-bottom: ",";\n\n  p {\n    margin-bottom: ",";\n    margin-top: ",";\n  }\n  h1,\n  h2 {\n    margin-bottom: ",";\n  }\n  h3,\n  h4 {\n    margin-bottom: ",";\n  }\n"]);return fe=function(){return e},e}function he(){var e=Object(o.a)(["\n  margin-bottom: ",";\n"]);return he=function(){return e},e}function pe(){var e=Object(o.a)(["\n  margin-bottom: ",";\n"]);return pe=function(){return e},e}function je(){var e=Object(o.a)(["\n  margin-top: ",";\n  margin-bottom: ",";\n  max-width: 900px;\n  margin-left: auto;\n  margin-right: auto;\n"]);return je=function(){return e},e}n(73),n(74),n(75),n(76);var Oe=O.space,ve=O.color,xe=Object(l.c)(je(),Oe.l,Oe.m),we=Object(l.c)(pe(),Oe.xs),ye=Object(l.c)(he(),Oe.sm),Ee=Object(l.c)(fe(),Oe.l,Oe.m,Oe.xs,Oe.xs,Oe.m),ke=Object(l.c)(ge(),Oe.xs,Oe.m,Oe.m,ve.lightGray,ve.mutedText,Oe.xs,Oe.xs),Ne=Object(l.c)(be(),Oe.xs),ze=function(e){var t=r.a.useState(),n=Object(m.a)(t,2),c=n[0],i=n[1],o=r.a.useState(),s=Object(m.a)(o,2),b=s[0],g=s[1],f=Object(Z.i)().slug,O=r.a.useRef(null);!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];r.a.useEffect((function(){if(e.current){var n;if(t.length>0)(n=e.current.classList).add.apply(n,Object(ue.a)(t));me.a.highlightAllUnder(e.current)}}),[e,t])}(O,["line-numbers"]);var v=c&&c.categories.length>0?c.categories[0]:void 0;return r.a.useEffect((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(f);case 2:t=e.sent,i(t.data.data),g(t.data.meta);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[f]),Object(l.d)("div",{css:xe},c&&b&&Object(l.d)(a.Fragment,null,Object(l.d)("h1",{css:we},c.title),Object(l.d)("h4",{css:ye},p(c.published),v&&Object(l.d)(a.Fragment,null,"\u2014",Object(l.d)(j.b,{to:y.category.link(v.slug)},v.name))),Object(l.d)("div",{css:Ee,ref:O,dangerouslySetInnerHTML:{__html:c.body}}),c.tags.length>0&&Object(l.d)("div",{css:ke},Object(l.d)(T,{className:"tag-icon"}),c.tags.map((function(e){return Object(l.d)(j.b,{className:"tag-link",key:e.slug,to:y.tag.link(e.slug)},Object(l.d)(F,null,e.name))}))),b.previous_post&&Object(l.d)("div",{css:Ne},"Previous:\xa0",Object(l.d)(j.b,{to:y.post.link(b.previous_post.slug)},b.previous_post.title)),b.next_post&&Object(l.d)("div",{css:Ne},"Next:\xa0",Object(l.d)(j.b,{to:y.post.link(b.next_post.slug)},b.next_post.title))))},Se=function(e){var t=r.a.useState([]),n=Object(m.a)(t,2),a=n[0],c=n[1],i=Object(Z.i)().slug;return r.a.useEffect((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f({category_slug:i});case 2:t=e.sent,c(t.data.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]),r.a.createElement("div",null,r.a.createElement(K,{posts:a}))},_e=function(e){var t=r.a.useState([]),n=Object(m.a)(t,2),a=n[0],c=n[1],i=Object(Z.i)().slug;return r.a.useEffect((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f({tag_slug:i});case 2:t=e.sent,c(t.data.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]),r.a.createElement("div",null,r.a.createElement(K,{posts:a}))};function Fe(){var e=Object(o.a)(["\n  html {\n    box-sizing: border-box;\n    color: ",";\n    font-family: ",";\n    font-size: ",";\n  }\n  /* Headline */\n  h1 {\n    font-size: ",";\n    font-weight: ",";\n  }\n  /* Title */\n  h2 {\n    font-size: ",";\n    font-weight: ",";\n  }\n  /* Subheading */\n  h3 {\n    font-size: ",";\n    font-weight: ",";\n  }\n  /* Lead text */\n  h4 {\n    font-size: ",";\n    font-weight: ",";\n  }\n  p {\n    font-size: ",";\n    font-weight: ",";\n  }\n  h1,\n  h2,\n  h3,\n  h4,\n  p {\n    margin: 0;\n    .muted {\n      color: ",";\n    }\n  }\n  *,\n  *:before,\n  *:after {\n    box-sizing: inherit;\n  }\n"]);return Fe=function(){return e},e}var Re=O.color,Le=O.typography,Te=Object(l.c)(Fe(),Re.text,Le.fontFamily,Le.baseFontSize,Le.headline.size,Le.headline.weight,Le.title.size,Le.title.weight,Le.subheading.size,Le.subheading.weight,Le.leading.size,Le.leading.weight,Le.body.size,Le.body.weight,Re.mutedText),He=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{styles:Te}),r.a.createElement(j.a,null,r.a.createElement(Z.d,null,r.a.createElement(Z.b,{path:"/",element:r.a.createElement(ie,null)},r.a.createElement(Z.b,{path:"/",element:r.a.createElement(V,null)}),r.a.createElement(Z.b,{path:x,element:r.a.createElement(W,null)}),r.a.createElement(Z.b,{path:w,element:r.a.createElement(se,null)}),r.a.createElement(Z.b,{path:y.base},r.a.createElement(Z.b,{path:y.post.template,element:r.a.createElement(ze,null)}),r.a.createElement(Z.b,{path:y.category.template,element:r.a.createElement(Se,null)}),r.a.createElement(Z.b,{path:y.tag.template,element:r.a.createElement(_e,null)}))))))},Ae=n(33);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(79);var Be=document.getElementById("root"),Ce=r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ae.a,{theme:O},r.a.createElement(He,null)));Be.hasChildNodes()?i.a.hydrate(Ce,Be):i.a.render(Ce,Be),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.19daa060.chunk.js.map