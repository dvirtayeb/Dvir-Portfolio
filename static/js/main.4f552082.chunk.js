(this.webpackJsonpweb_application=this.webpackJsonpweb_application||[]).push([[0],{13:function(e,t,c){},31:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){"use strict";c.r(t);var i=c(0),s=c(1),n=c.n(s),a=c(14),r=c.n(a),j=c(2),o=c(4),l=c(5);c(31);var b=function(e){return Object(i.jsx)(o.a,{children:Object(i.jsxs)("div",{className:"hello",children:[Object(i.jsx)("h1",{children:"Welcome!"}),Object(i.jsx)("h4",{children:"This is a part of my journy in Software Engineer."}),Object(i.jsxs)("h4",{children:["on this website you can see some of my projects I did while studing at the academy,",Object(i.jsx)("br",{}),"in my free time and as part of the courses I took.",Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),"* This website is written in JavaScript - React",Object(i.jsx)("br",{})]})]})})},d=c.p+"static/media/logo_Jems.32f6ff45.png",h=c.p+"static/media/management.b425c912.jpg";c(13);var m=function(e){return Object(i.jsx)("div",{className:"project_thumbnail",children:Object(i.jsxs)(o.b,{to:e.link,children:[Object(i.jsx)("div",{className:"project-image",children:Object(i.jsx)("img",{src:e.image,alt:"project_image"})}),Object(i.jsx)("div",{className:"title",children:e.title}),Object(i.jsx)("div",{className:"category",children:e.category})]})})},O=c.p+"static/media/example_tips_jems.b3d19ba8.png",p=c.p+"static/media/After_search.68360385.png";var x=function(e){return Object(i.jsxs)("div",{className:"jemsPage",children:[Object(i.jsx)("h1",{children:"Jems - Calculate tips Project"}),Object(i.jsxs)("h4",{children:["the purpose of the project was to improve the way we count the money in the end of the shift",Object(i.jsx)("br",{}),", by calculate the money more faster.",Object(i.jsx)("br",{})," I wrote this project in Python, using Flask, SQLAlchemy, HTML, CSS.",Object(i.jsx)("br",{})]}),Object(i.jsx)("img",{id:"tips",src:O,alt:""}),Object(i.jsx)("br",{}),Object(i.jsx)("img",{id:"tips",src:p,alt:""})]})},u=c.p+"static/media/1.1.250ec430.png",g=c.p+"static/media/1.2.dee221f6.png",f=c.p+"static/media/2.710dac23.png",v=c.p+"static/media/3.0edd09f1.png",y=c.p+"static/media/4.08e0ef3d.png";var P=function(e){return Object(i.jsx)(o.a,{children:Object(i.jsxs)("div",{className:"Championship",children:[Object(i.jsx)("h1",{children:"Championship Management - Project "}),Object(i.jsxs)("h4",{children:["This project presents the uses of the elements of OOP that I learned in the academy.",Object(i.jsx)("br",{}),"the purpse of the project is to management the competition until one of the team\\player win,",Object(i.jsx)("br",{}),"we got 3 types of games: Basketball, Tennis, Soccer.",Object(i.jsx)("br",{}),' I wrote the project in Java, using JavaFX and the Model "MVC".']}),Object(i.jsx)("br",{}),Object(i.jsx)("img",{id:"management",src:u,alt:""}),Object(i.jsx)("img",{id:"management",src:g,alt:""}),Object(i.jsx)("img",{id:"management",src:f,alt:""}),Object(i.jsx)("img",{id:"management",src:v,alt:""}),Object(i.jsx)("img",{id:"management",src:y,alt:""})]})})};function C(e){document.getElementById("current_project").scrollIntoView()}var w=function(){var e=Object(j.g)().type;return Object(i.jsxs)("div",{className:"projects",onClick:C,children:[Object(i.jsxs)("div",{className:"Management",children:[Object(i.jsx)("h1",{children:"Projects"}),Object(i.jsx)(m,{link:"/Dvir-Portfolio/Projects/Championship",image:h,title:"Championship Management",category:"App"})]}),Object(i.jsx)("div",{className:"Jems",children:Object(i.jsx)(m,{link:"/Dvir-Portfolio/Projects/JemsPage",image:d,title:"Jems-Calculate tips",category:"Web app"})}),Object(i.jsxs)("div",{id:"current_project",children:[Object(i.jsxs)(j.c,{children:[Object(i.jsx)(j.a,{path:"/Dvir-Portfolio/Projects/:type",children:Object(i.jsx)(x,{})}),Object(i.jsx)(j.a,{path:"/Dvir-Portfolio/Projects/:type",children:Object(i.jsx)(P,{})})]}),"Championship"===e&&Object(i.jsx)(P,{}),"JemsPage"===e&&Object(i.jsx)(x,{})]})]})};var N=function(e){return Object(i.jsxs)("div",{className:"courses",children:[Object(i.jsx)("h1",{children:"Courses"}),Object(i.jsx)("li",{children:"1."}),Object(i.jsx)("br",{}),Object(i.jsx)("li",{children:"2."}),Object(i.jsx)("br",{}),Object(i.jsx)("li",{children:"3."}),Object(i.jsx)("br",{})]})};var S=function(e){return Object(i.jsx)("div",{className:"About",children:Object(i.jsx)("h1",{children:"About"})})};var k=function(e){return Object(i.jsx)("div",{className:"menu",children:Object(i.jsxs)(j.c,{children:[Object(i.jsx)(j.a,{exact:!0,path:"/Dvir-Portfolio",component:b}),Object(i.jsx)(j.a,{path:"/Dvir-Portfolio/Projects",component:w}),Object(i.jsx)(j.a,{path:"/Dvir-Portfolio/Courses",component:N}),Object(i.jsx)(j.a,{path:"/Dvir-Portfolio/About",component:S})]})})},D=c(21),_=c(22),I=c(25),J=c(24),A=c(23),M=function(e){Object(I.a)(c,e);var t=Object(J.a)(c);function c(e){var i;return Object(D.a)(this,c),(i=t.call(this,e)).state={sidebar:!1},i}return Object(_.a)(c,[{key:"handleStateChange",value:function(e){this.setState({sidebar:e.isOpen})}},{key:"closeSidebar",value:function(){this.setState({sidebar:!1})}},{key:"toggleSidebar",value:function(){this.setState((function(e){return{sidebar:!e.sidebar}}))}},{key:"render",value:function(){var e=this;return Object(i.jsx)("div",{className:"navigation",children:Object(i.jsxs)("div",{className:"navigation-sub",children:[Object(i.jsx)("li",{id:"nav_item",children:Object(i.jsx)(o.b,{to:"/Dvir-Portfolio",className:"item",children:"Home "})}),Object(i.jsxs)(A.elastic,{isOpen:this.state.sidebar,onStateChange:function(t){return e.handleStateChange(t)},children:[Object(i.jsx)("li",{children:Object(i.jsx)(o.b,{to:"/Dvir-Portfolio/Projects",className:"bm-item",onClick:function(){return e.closeSidebar()},children:"Projects"})}),Object(i.jsx)("li",{children:Object(i.jsx)(o.b,{to:"/Dvir-Portfolio/Courses",className:"bm-item",onClick:function(){return e.closeSidebar()},children:"Courses"})}),Object(i.jsx)("li",{children:Object(i.jsx)(o.b,{to:"/Dvir-Portfolio/About",className:"bm-item",onClick:function(){return e.closeSidebar()},children:"About"})})]})]})})}}]),c}(s.Component),T=(c(52),c(53),c.p+"static/media/header5_black.90c4db91.jpg");var F=function(){var e=Object(j.f)();return console.log(e),Object(i.jsxs)("div",{children:[Object(i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),Object(i.jsx)(M,{pageWrapId:"page-wrap",outerContainerId:"outer-container"}),Object(i.jsxs)("div",{className:"portfolio-header",children:[Object(i.jsx)("h1",{id:"portfolio",children:"My Portfolio!"}),Object(i.jsx)("picture",{children:Object(i.jsx)("img",{id:"header-img",src:T,alt:""})})]}),Object(i.jsx)(k,{})]})},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,55)).then((function(t){var c=t.getCLS,i=t.getFID,s=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),i(e),s(e),n(e),a(e)}))};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(j.b,{history:Object(l.a)(),children:Object(i.jsx)(o.a,{children:Object(i.jsx)(F,{})})})}),document.getElementById("root")),B()}},[[54,1,2]]]);
//# sourceMappingURL=main.4f552082.chunk.js.map