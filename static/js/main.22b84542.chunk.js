(this.webpackJsonpweb_application=this.webpackJsonpweb_application||[]).push([[0],{17:function(e,t,i){},31:function(e,t,i){},52:function(e,t,i){},53:function(e,t,i){},54:function(e,t,i){"use strict";i.r(t);var c=i(0),n=i(1),a=i.n(n),s=i(18),r=i.n(s),j=i(2),o=i(5),b=(i(31),i(11)),l=i(12),h=i(14),d=i(13),m=i(4);var u=function(e){return Object(c.jsx)(m.a,{children:Object(c.jsxs)("div",{className:"hello",children:[Object(c.jsx)("h1",{children:"Welcome!"}),Object(c.jsx)("h4",{children:"This is a part of my journy in Software Engineer."}),Object(c.jsxs)("h4",{children:["on this website you can see some of my projects I did while studing at the academy,",Object(c.jsx)("br",{}),"in my free time and as part of the courses I took.",Object(c.jsx)("br",{}),"* This website is written in JavaScript - React"]})]})})},p=i.p+"static/media/logo_Jems.32f6ff45.png",O=i.p+"static/media/management.b425c912.jpg";i(17);var x=function(e){return Object(c.jsx)("div",{className:"project_thumbnail",children:Object(c.jsxs)(m.b,{to:e.link,children:[Object(c.jsx)("div",{className:"project-image",children:Object(c.jsx)("img",{src:e.image,alt:"project_image"})}),Object(c.jsx)("div",{className:"title",children:e.title}),Object(c.jsx)("div",{className:"category",children:e.category})]})})},g=i.p+"static/media/example_tips3.14420e99.png";var v=function(e){return Object(c.jsxs)("div",{className:"jemsPage",children:[Object(c.jsx)("h1",{children:"Jems - Calculate tips Project"}),Object(c.jsxs)("h4",{children:["the purpose of the project was to improve the way we count the money in the end of the shift",Object(c.jsx)("br",{}),", by calculate the money more faster.",Object(c.jsx)("br",{})," I wrote this project in Python, using Flask, SQLAlchemy, HTML, CSS.",Object(c.jsx)("br",{})]}),Object(c.jsx)("img",{id:"tips",src:g,alt:""})]})},f=i.p+"static/media/1.1.250ec430.png",y=i.p+"static/media/1.2.dee221f6.png",C=i.p+"static/media/2.710dac23.png",w=i.p+"static/media/3.0edd09f1.png",k=i.p+"static/media/4.08e0ef3d.png";var S=function(e){return Object(c.jsx)(m.a,{children:Object(c.jsxs)("div",{className:"Championship",children:[Object(c.jsx)("h1",{children:"Championship Management - Project "}),Object(c.jsxs)("h4",{children:["This project presents the uses of the elements of OOP that I learned in the academy.",Object(c.jsx)("br",{}),"the purpse of the project is to management the competition until one of the team\\player win,",Object(c.jsx)("br",{}),"we got 3 types of games: Basketball, Tennis, Soccer.",Object(c.jsx)("br",{}),' I wrote the project in Java, using JavaFX and the Model "MVC".']}),Object(c.jsx)("br",{}),Object(c.jsx)("img",{id:"management",src:f,alt:""}),Object(c.jsx)("img",{id:"management",src:y,alt:""}),Object(c.jsx)("img",{id:"management",src:C,alt:""}),Object(c.jsx)("img",{id:"management",src:w,alt:""}),Object(c.jsx)("img",{id:"management",src:k,alt:""})]})})};function N(e){document.getElementById("current_project").scrollIntoView()}var P=function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(){return Object(b.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"projects",onClick:N,children:Object(c.jsxs)(m.a,{children:[Object(c.jsxs)("div",{className:"Management",children:[Object(c.jsx)("h1",{children:"Projects"}),Object(c.jsx)(x,{link:"/dvirtayeb-github-.io/projects/Championship",image:O,title:"Championship Management",category:"App"})]}),Object(c.jsx)("div",{className:"Jems",children:Object(c.jsx)(x,{link:"/dvirtayeb-github-.io/projects/jemsPage",image:p,title:"Jems-Calculate tips",category:"Web app"})}),Object(c.jsx)("div",{id:"current_project",children:Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{exact:!0,path:"/dvirtayeb-github-.io/projects/JemsPage",component:v}),Object(c.jsx)(j.a,{exact:!0,path:"/dvirtayeb-github-.io/projects/Championship",component:S})]})})]})})}}]),i}(n.Component);var I=function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Courses"}),Object(c.jsx)("li",{children:"1."}),Object(c.jsx)("br",{}),Object(c.jsx)("li",{children:"2."}),Object(c.jsx)("br",{}),Object(c.jsx)("li",{children:"3."}),Object(c.jsx)("br",{})]})};var J=function(e){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"About"})})};var _=function(e){return Object(c.jsx)("div",{className:"menu",children:Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{exact:!0,path:"/dvirtayeb-github-.io",component:u}),Object(c.jsx)(j.a,{exact:!0,path:"/dvirtayeb-github-.io/projects",component:P}),Object(c.jsx)(j.a,{exact:!0,path:"/dvirtayeb-github-.io/Courses",component:I}),Object(c.jsx)(j.a,{exact:!0,path:"/dvirtayeb-github-.io/about",component:J})]})})},M=i(25),T=function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(e){var c;return Object(b.a)(this,i),(c=t.call(this,e)).state={sidebar:!1},c}return Object(l.a)(i,[{key:"handleStateChange",value:function(e){this.setState({sidebar:e.isOpen})}},{key:"closeSidebar",value:function(){this.setState({sidebar:!1})}},{key:"toggleSidebar",value:function(){this.setState((function(e){return{sidebar:!e.sidebar}}))}},{key:"render",value:function(){var e=this;return Object(c.jsx)("div",{className:"navigation",children:Object(c.jsxs)("div",{className:"navigation-sub",children:[Object(c.jsx)("li",{id:"nav_item",children:Object(c.jsx)(m.b,{to:"/dvirtayeb-github-.io",className:"item",children:"Home "})}),Object(c.jsxs)(M.elastic,{isOpen:this.state.sidebar,onStateChange:function(t){return e.handleStateChange(t)},children:[Object(c.jsx)("li",{children:Object(c.jsx)(m.b,{to:"/dvirtayeb-github-.io/projects",className:"bm-item",onClick:function(){return e.closeSidebar()},children:"Projects "})}),Object(c.jsx)("li",{children:Object(c.jsx)(m.b,{to:"/dvirtayeb-github-.io/Courses",className:"bm-item",onClick:function(){return e.closeSidebar()},children:"Courses "})}),Object(c.jsx)("li",{children:Object(c.jsx)(m.b,{to:"/dvirtayeb-github-.io/about",className:"bm-item",onClick:function(){return e.closeSidebar()},children:"About "})})]})]})})}}]),i}(n.Component),F=(i(52),i(53),i.p+"static/media/header5_black.90c4db91.jpg"),A=function(e){Object(h.a)(i,e);var t=Object(d.a)(i);function i(e){var c;return Object(b.a)(this,i),(c=t.call(this,e)).state={open:!1},c}return Object(l.a)(i,[{key:"render",value:function(){return Object(c.jsxs)(m.a,{children:[Object(c.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),Object(c.jsx)(T,{pageWrapId:"page-wrap",outerContainerId:"outer-container"}),Object(c.jsxs)("div",{className:"portfolio-header",children:[Object(c.jsx)("h1",{id:"portfolio",children:"My Portfolio!"}),Object(c.jsx)("picture",{children:Object(c.jsx)("img",{id:"header-img",src:F,alt:""})})]}),Object(c.jsx)(_,{})]})}}]),i}(n.Component),B=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,55)).then((function(t){var i=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;i(e),c(e),n(e),a(e),s(e)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(j.b,{history:Object(o.a)(),children:Object(c.jsx)(A,{})})}),document.getElementById("root")),B()}},[[54,1,2]]]);
//# sourceMappingURL=main.22b84542.chunk.js.map