(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{12:function(e,a,t){"use strict";t.r(a);var n=t(1),s=t.n(n),c=t(6),i=t.n(c),l=t(2),o=t(4),j=t(5),r=t(0),m=function(e){var a=e.name,t=e.placeholder,n=e.onChange,s=e.value;return Object(r.jsx)("input",{onChange:n,name:a,placeholder:t,value:s,className:"input-box"})},h=function(e){var a=e.onChange,t=e.item;return Object(r.jsxs)("div",{className:"section",children:[Object(r.jsx)("h2",{className:"header",children:"Personal"}),Object(r.jsx)(m,{onChange:a,value:t.name,name:"name",placeholder:"name"}),Object(r.jsx)(m,{onChange:a,value:t.email,name:"email",placeholder:"email"}),Object(r.jsx)(m,{onChange:a,value:t.phone,name:"phone",placeholder:"phone"})]})},d=function(e){var a=e.onChange,t=e.item;return Object(r.jsxs)("div",{className:"section",children:[Object(r.jsx)("h2",{className:"header",children:"Education"}),Object(r.jsx)(m,{onChange:a,value:t.school,name:"school",placeholder:"School"}),Object(r.jsx)(m,{onChange:a,value:t.title,name:"study",placeholder:"Study"}),Object(r.jsx)("input",{onChange:a,value:t.date,name:"date",placeholder:"Date Studied",type:"date",className:"input-box"})]})},b=function(e){var a=e.onChange,t=e.item;return Object(r.jsxs)("div",{className:"section practical",children:[Object(r.jsx)("h2",{className:"header",children:"Job Experience"}),Object(r.jsx)(m,{onChange:a,value:t.company,name:"company",placeholder:"Company"}),Object(r.jsx)(m,{onChange:a,value:t.position,name:"position",placeholder:"Position"}),Object(r.jsx)(m,{onChange:a,value:t.tasks,name:"tasks",placeholder:"Main Tasks of Your Jobs"}),Object(r.jsx)("input",{onChange:a,value:t.start,name:"start",placeholder:"Job Start Date",type:"date",className:"input-box"}),Object(r.jsx)("input",{onChange:a,value:t.end,name:"end",placeholder:"Job End Date",type:"date",className:"input-box"})]})},u=function(e){var a=e.onChange,t=e.item;return Object(r.jsxs)("div",{className:"main",children:[Object(r.jsx)(h,{onChange:a,item:t}),Object(r.jsx)(b,{onChange:a,item:t}),Object(r.jsx)(d,{onChange:a,item:t})]})},p=function(e){var a=e.item;return Object(r.jsxs)("div",{className:"main",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{className:"header",children:"Personal"}),Object(r.jsxs)("p",{className:"item",children:["Name: ",a.name]}),Object(r.jsxs)("p",{className:"item",children:["Email: ",a.email]}),Object(r.jsxs)("p",{className:"item",children:["Phone: ",a.phone]})]}),Object(r.jsxs)("div",{className:"practical",children:[Object(r.jsx)("h2",{className:"header",children:"Job Experience"}),Object(r.jsxs)("p",{className:"item",children:["Company: ",a.company]}),Object(r.jsxs)("p",{className:"item",children:["Position: ",a.position]}),Object(r.jsxs)("p",{className:"item",children:["Tasks: ",a.tasks]}),Object(r.jsxs)("p",{className:"item",children:["Start Date: ",a.start]}),Object(r.jsxs)("p",{className:"item",children:["End Date: ",a.end]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{className:"header",children:"Education"}),Object(r.jsxs)("p",{className:"item",children:["School: ",a.school]}),Object(r.jsxs)("p",{className:"item",children:["Study: ",a.study]}),Object(r.jsxs)("p",{className:"item",children:["Date: ",a.date]})]})]})},O={name:"",email:"",phone:"",school:"",study:"",date:"",company:"",position:"",tasks:"",start:"",end:""};var x=function(){var e=Object(n.useState)(!0),a=Object(j.a)(e,2),t=a[0],s=a[1],c=Object(n.useState)(O),i=Object(j.a)(c,2),m=i[0],h=i[1];return Object(r.jsx)("div",{children:Object(r.jsxs)("form",{className:"form",onSubmit:t?function(e){e.preventDefault(),s(!1)}:function(e){e.preventDefault(),s(!0)},children:[t?Object(r.jsx)("div",{children:Object(r.jsx)(u,{onChange:function(e){e.preventDefault();var a=e.target,t=a.name,n=a.value;h(Object(o.a)(Object(o.a)({},m),{},Object(l.a)({},t,n)))},item:m})}):Object(r.jsx)(p,{item:m}),Object(r.jsx)("button",{className:"submit-button",type:t?"submit":"edit",children:t?"Submit Form":"Edit Form"})]})})};var v=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h2",{className:"main-header",children:"CV Form"}),Object(r.jsx)(x,{})]})},N=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,13)).then((function(a){var t=a.getCLS,n=a.getFID,s=a.getFCP,c=a.getLCP,i=a.getTTFB;t(e),n(e),s(e),c(e),i(e)}))};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(v,{})}),document.getElementById("root")),N()}},[[12,1,2]]]);
//# sourceMappingURL=main.b4d5198c.chunk.js.map