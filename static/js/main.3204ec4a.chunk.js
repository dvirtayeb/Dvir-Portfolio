(this.webpackJsonpweb_application=this.webpackJsonpweb_application||[]).push([[0],{17:function(e,t,c){},31:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c(1),a=c.n(n),s=c(18),r=c.n(s),j=c(2),o=c(5),b=(c(31),c(11)),l=c(12),d=c(14),h=c(13),m=c(4);var u=function(e){return Object(i.jsx)(m.a,{children:Object(i.jsxs)("div",{className:"hello",children:[Object(i.jsx)("h1",{children:"Welcome!"}),Object(i.jsx)("h4",{children:"This is a part of my journy in Software Engineer."}),Object(i.jsxs)("h4",{children:["on this website you can see some of my projects I did while studing at the academy,",Object(i.jsx)("br",{}),"in my free time and as part of the courses I took.",Object(i.jsx)("br",{}),"* This website is written in JavaScript - React"]})]})})},p=c.p+"static/media/logo_Jems.32f6ff45.png",O=c.p+"static/media/management.b425c912.jpg";c(17);var x=function(e){return Object(i.jsx)("div",{className:"project_thumbnail",children:Object(i.jsxs)(m.b,{to:e.link,children:[Object(i.jsx)("div",{className:"project-image",children:Object(i.jsx)("img",{src:e.image,alt:"project_image"})}),Object(i.jsx)("div",{className:"title",children:e.title}),Object(i.jsx)("div",{className:"category",children:e.category})]})})},g=c.p+"static/media/example_tips3.14420e99.png";var v=function(e){return Object(i.jsxs)("div",{className:"jemsPage",children:[Object(i.jsx)("h1",{children:"Jems - Calculate tips Project"}),Object(i.jsxs)("h4",{children:["the purpose of the project was to improve the way we count the money in the end of the shift",Object(i.jsx)("br",{}),", by calculate the money more faster.",Object(i.jsx)("br",{})," I wrote this project in Python, using Flask, SQLAlchemy, HTML, CSS.",Object(i.jsx)("br",{})]}),Object(i.jsx)("img",{id:"tips",src:g,alt:""})]})},f=c.p+"static/media/1.1.250ec430.png",y=c.p+"static/media/1.2.dee221f6.png",C=c.p+"static/media/2.710dac23.png",w=c.p+"static/media/3.0edd09f1.png",k=c.p+"static/media/4.08e0ef3d.png";var S=function(e){return Object(i.jsx)(m.a,{children:Object(i.jsxs)("div",{className:"Championship",children:[Object(i.jsx)("h1",{children:"Championship Management - Project "}),Object(i.jsxs)("h4",{children:["This project presents the uses of the elements of OOP that I learned in the academy.",Object(i.jsx)("br",{}),"the purpse of the project is to management the competition until one of the team\\player win,",Object(i.jsx)("br",{}),"we got 3 types of games: Basketball, Tennis, Soccer.",Object(i.jsx)("br",{}),' I wrote the project in Java, using JavaFX and the Model "MVC".']}),Object(i.jsx)("br",{}),Object(i.jsx)("img",{id:"management",src:f,alt:""}),Object(i.jsx)("img",{id:"management",src:y,alt:""}),Object(i.jsx)("img",{id:"management",src:C,alt:""}),Object(i.jsx)("img",{id:"management",src:w,alt:""}),Object(i.jsx)("img",{id:"management",src:k,alt:""})]})})};function N(e){document.getElementById("current_project").scrollIntoView()}var P=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(){return Object(b.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"projects",onClick:N,children:Object(i.jsxs)(m.a,{children:[Object(i.jsxs)("div",{className:"Management",children:[Object(i.jsx)("h1",{children:"Projects"}),Object(i.jsx)(x,{link:"/dvirtayeb-github-.io/projects/Championship",image:O,title:"Championship Management",category:"App"})]}),Object(i.jsx)("div",{className:"Jems",children:Object(i.jsx)(x,{link:"/dvirtayeb-github-.io/projects/jemsPage",image:p,title:"Jems-Calculate tips",category:"Web app"})}),Object(i.jsx)("div",{id:"current_project",children:Object(i.jsxs)(j.c,{children:[Object(i.jsx)(j.a,{exact:!0,path:"/dvirtayeb-github-.io/projects/JemsPage",component:v}),Object(i.jsx)(j.a,{exact:!0,path:"/dvirtayeb-github-.io/projects/Championship",component:S})]})})]})})}}]),c}(n.Component);var I=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Courses"}),Object(i.jsx)("li",{children:"1."}),Object(i.jsx)("br",{}),Object(i.jsx)("li",{children:"2."}),Object(i.jsx)("br",{}),Object(i.jsx)("li",{children:"3."}),Object(i.jsx)("br",{})]})};var J=function(e){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"About"})})};var _=function(e){return Object(i.jsx)("div",{className:"menu",children:Object(i.jsxs)(j.c,{children:[Object(i.jsx)(j.a,{exact:!0,path:"/dvirtayeb-github-.io",component:u}),Object(i.jsx)(j.a,{exact:!0,path:"/dvirtayeb-github-.io/projects",component:P}),Object(i.jsx)(j.a,{exact:!0,path:"/dvirtayeb-github-.io/Courses",component:I}),Object(i.jsx)(j.a,{exact:!0,path:"/dvirtayeb-github-.io/about",component:J})]})})},M=c(25),T=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(e){var i;return Object(b.a)(this,c),(i=t.call(this,e)).state={sidebar:!1},i}return Object(l.a)(c,[{key:"handleStateChange",value:function(e){this.setState({sidebar:e.isOpen})}},{key:"closeSidebar",value:function(){this.setState({sidebar:!1})}},{key:"toggleSidebar",value:function(){this.setState((function(e){return{sidebar:!e.sidebar}}))}},{key:"render",value:function(){var e=this;return Object(i.jsx)("div",{className:"navigation",children:Object(i.jsxs)("div",{className:"navigation-sub",children:[Object(i.jsx)("li",{id:"nav_item",children:Object(i.jsx)(m.b,{to:"/dvirtayeb-github-.io",className:"item",children:"Home "})}),Object(i.jsx)(M.elastic,{isOpen:this.state.sidebar,onStateChange:function(t){return e.handleStateChange(t)},children:Object(i.jsxs)("ul",{className:"nav-menu-items",onClick:function(){return e.closeSidebar},children:[Object(i.jsx)("li",{children:Object(i.jsx)(m.b,{to:"/dvirtayeb-github-.io/projects",className:"bm-item",onClick:function(){return e.closeSidebar()},children:"Projects "})}),Object(i.jsx)("li",{children:Object(i.jsx)(m.b,{to:"/dvirtayeb-github-.io/Courses",className:"bm-item",onClick:function(){return e.closeSidebar()},children:"Courses "})}),Object(i.jsx)("li",{children:Object(i.jsx)(m.b,{to:"/dvirtayeb-github-.io/about",className:"bm-item",onClick:function(){return e.closeSidebar()},children:"About "})})]})})]})})}}]),c}(n.Component),F=(c(52),c(53),c.p+"static/media/header5_black.90c4db91.jpg"),A=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(e){var i;return Object(b.a)(this,c),(i=t.call(this,e)).state={open:!1},i}return Object(l.a)(c,[{key:"render",value:function(){return Object(i.jsxs)(m.a,{children:[Object(i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),Object(i.jsx)(T,{pageWrapId:"page-wrap",outerContainerId:"outer-container"}),Object(i.jsxs)("div",{className:"portfolio-header",children:[Object(i.jsx)("h1",{id:"portfolio",children:"My Portfolio!"}),Object(i.jsx)("picture",{children:Object(i.jsx)("img",{id:"header-img",src:F,alt:""})})]}),Object(i.jsx)(_,{})]})}}]),c}(n.Component),B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,55)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),i(e),n(e),a(e),s(e)}))};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(j.b,{history:Object(o.a)(),children:Object(i.jsx)(A,{})})}),document.getElementById("root")),B()}},[[54,1,2]]]);
//# sourceMappingURL=main.3204ec4a.chunk.js.map