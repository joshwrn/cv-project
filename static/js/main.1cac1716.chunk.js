(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(6),i=a.n(c),l=a(3),h=a(5),o=a(7),r=a(8),j=a(2),m=a(10),d=a(9),b=a(0),u=function(e){var t=e.name,a=e.placeholder,n=e.onChange,s=e.value;return Object(b.jsx)("input",{onChange:n,name:t,placeholder:a,value:s,className:"input-box"})},O=function(e){var t=e.onChange,a=e.item;return Object(b.jsxs)("div",{className:"section",children:[Object(b.jsx)("h2",{className:"header",children:"Personal"}),Object(b.jsx)(u,{onChange:t,value:a.name,name:"name",placeholder:"name"}),Object(b.jsx)(u,{onChange:t,value:a.email,name:"email",placeholder:"email"}),Object(b.jsx)(u,{onChange:t,value:a.phone,name:"phone",placeholder:"phone"})]})},p=function(e){var t=e.onChange,a=e.item;return Object(b.jsxs)("div",{className:"section",children:[Object(b.jsx)("h2",{className:"header",children:"Education"}),Object(b.jsx)(u,{onChange:t,value:a.school,name:"school",placeholder:"School"}),Object(b.jsx)(u,{onChange:t,value:a.title,name:"study",placeholder:"Study"}),Object(b.jsx)(u,{onChange:t,value:a.date,name:"date",placeholder:"Date Studied"})]})},x=function(e){var t=e.onChange,a=e.item;return Object(b.jsxs)("div",{className:"section practical",children:[Object(b.jsx)("h2",{className:"header",children:"Job Experience"}),Object(b.jsx)(u,{onChange:t,value:a.company,name:"company",placeholder:"Company"}),Object(b.jsx)(u,{onChange:t,value:a.position,name:"position",placeholder:"Position"}),Object(b.jsx)(u,{onChange:t,value:a.tasks,name:"tasks",placeholder:"Main Tasks of Your Jobs"}),Object(b.jsx)(u,{onChange:t,value:a.start,name:"start",placeholder:"Job Start Date"}),Object(b.jsx)(u,{onChange:t,value:a.end,name:"end",placeholder:"Job End Date"})]})},v=function(e){var t=e.onChange,a=e.item;return Object(b.jsxs)("div",{className:"main",children:[Object(b.jsx)(O,{onChange:t,item:a}),Object(b.jsx)(x,{onChange:t,item:a}),Object(b.jsx)(p,{onChange:t,item:a})]})},g=function(e){var t=e.item;return Object(b.jsxs)("div",{className:"main",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"header",children:"Personal"}),Object(b.jsxs)("p",{className:"item",children:[" Name: ",t.name]}),Object(b.jsxs)("p",{className:"item",children:[" Email: ",t.email]}),Object(b.jsxs)("p",{className:"item",children:[" Phone: ",t.phone]})]}),Object(b.jsxs)("div",{className:"practical",children:[Object(b.jsx)("h2",{className:"header",children:"Job Experience"}),Object(b.jsxs)("p",{className:"item",children:[" Company: ",t.company]}),Object(b.jsxs)("p",{className:"item",children:[" Position: ",t.position]}),Object(b.jsxs)("p",{className:"item",children:[" Tasks: ",t.tasks]}),Object(b.jsxs)("p",{className:"item",children:[" Start Date: ",t.start]}),Object(b.jsxs)("p",{className:"item",children:[" End Date: ",t.end]})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"header",children:"Education"}),Object(b.jsxs)("p",{className:"item",children:[" Name: ",t.school]}),Object(b.jsxs)("p",{className:"item",children:[" Email: ",t.study]}),Object(b.jsxs)("p",{className:"item",children:[" Phone: ",t.date]})]})]})},C=(a(16),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleSubmit=e.handleSubmit.bind(Object(j.a)(e)),e.handleEdit=e.handleEdit.bind(Object(j.a)(e)),e.handleChangeGeneral=e.handleChangeGeneral.bind(Object(j.a)(e)),e.state={visible:!0,itemObject:{name:"",email:"",phone:"",school:"",study:"",date:"",company:"",position:"",tasks:"",start:"",end:""}},e}return Object(r.a)(a,[{key:"handleChangeGeneral",value:function(e){e.preventDefault();var t=e.target,a=t.name,n=t.value;this.setState((function(e){return{itemObject:Object(h.a)(Object(h.a)({},e.itemObject),{},Object(l.a)({},a,n))}}))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({visible:!1})}},{key:"handleEdit",value:function(e){e.preventDefault(),this.setState({visible:!0})}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("form",{className:"form",onSubmit:this.state.visible?this.handleSubmit:this.handleEdit,children:[Object(b.jsx)("h2",{className:"main-header",children:"CV Form"}),this.state.visible?Object(b.jsx)("div",{children:Object(b.jsx)(v,{onChange:this.handleChangeGeneral,item:this.state.itemObject})}):Object(b.jsx)(g,{item:this.state.itemObject}),Object(b.jsx)("button",{className:"submit-button",type:this.state.visible?"submit":"edit",children:this.state.visible?"Submit Form":"Edit Form"})]})})}}]),a}(n.Component)),N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root")),N()}},[[17,1,2]]]);
//# sourceMappingURL=main.1cac1716.chunk.js.map