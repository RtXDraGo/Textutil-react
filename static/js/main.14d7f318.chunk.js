(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(4),s=n.n(r),l=(n(9),n(2)),o=(n(10),n(0));function i(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("nav",{class:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{class:"container-fluid",children:[Object(o.jsx)("a",{class:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{class:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{class:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{class:"nav-item",children:Object(o.jsx)("a",{class:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(o.jsxs)("div",{class:"form-check form-switch",children:[Object(o.jsx)("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.toggle}),Object(o.jsx)("label",{class:"form-check-label",style:{color:"dark"===e.mode?"white":"black"},for:"flexSwitchCheckDefault",children:"dark"==e.mode?"Enable Light mode":"Enable dark mode"})]}),Object(o.jsxs)("form",{class:"d-flex",children:[Object(o.jsx)("input",{class:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(o.jsx)("button",{class:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})})}function b(e){var t=Object(c.useState)("Enter your text here"),n=Object(l.a)(t,2),a=n[0],r=n[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{children:Object(o.jsxs)("div",{class:"mb-3",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h1",{children:e.head}),Object(o.jsx)("textarea",{class:"form-control",id:"myBox",rows:"11",style:{backgroundColor:"dark"===e.mode?"grey":"white"},value:a,onChange:function(e){return r(e.target.value)}}),Object(o.jsx)("button",{type:"button",class:"btn btn-primary mx-2",onClick:function(){r(a.toUpperCase()),e.alert("Converted to upperCase","success")},children:"Convert to upperCase"}),Object(o.jsx)("button",{type:"button",class:"btn btn-warning mx-2",onClick:function(){r(a.toLowerCase()),e.alert("Converted to lowerCase","success")},children:"Convert to lowerCase"}),Object(o.jsx)("button",{type:"button",class:"btn btn-danger mx-2",onClick:function(){r(""),e.alert("Text is Cleared","success")},children:"Clear Text"}),Object(o.jsx)("button",{type:"button",class:"btn btn-success mx-2",onClick:function(){r(a.trim()),e.alert("Text is trimed","success")},children:"Trim Text"}),Object(o.jsx)("button",{type:"button",class:"btn btn-secondary mx-2",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.alert("Text is copied","Success")},children:"Copy Text"}),Object(o.jsx)("button",{type:"button",class:"btn btn-dark mx-2",onClick:function(){var t=a.split(/[ ]+/);r(t.join(" ")),e.alert("Space has been removed","Success")},children:"Remove Space"}),Object(o.jsx)("button",{type:"button",class:"btn btn-light mx-2",onClick:function(){for(var t=a.split("."),n=0;n<t.length;n++)t[n]=t[n].charAt(0).toUpperCase()+t[n].slice(1,t[n].length);var c=t.join(".");r(c),e.alert("Text is proper","Success")},children:"Make proper"})]})}),Object(o.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h1",{children:"Tour paragraph Analyzer"}),Object(o.jsxs)("p",{children:["Your paragraph has ",a.length," charecters and ",a.split(" ").filter((function(e){return""!=e})).length," words"]}),Object(o.jsxs)("p",{children:["Total time to read the paragraph ",.008*a.length]}),Object(o.jsx)("h1",{children:"Your text preview"}),Object(o.jsx)("p",{children:a.length>0?a:"Enter Something to preview"})]})]})}var d=function(e){return e.alert&&Object(o.jsxs)("div",{class:"alert alert-".concat(e.alert.data," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:e.alert.data}),":",e.alert.title,Object(o.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})};var u=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),s=Object(l.a)(r,2),u=s[0],j=s[1],h=function(e,t){j({title:e,data:t}),setTimeout((function(){j(null)}),2e3)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"TextUTILS",mode:n,toggle:function(){"dark"==n?(a("light"),document.body.style.backgroundColor="white",h("Light mode is enabled","success"),document.title="TextUtils-Light Mode"):(document.body.style.backgroundColor="#0D134A",a("dark"),h("Dark mode is enabled","success"),document.title="TextUtils-Dark Mode")}}),Object(o.jsx)(d,{alert:u}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(b,{head:"Enter your text to Analyze",mode:n,alert:h})})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root")),j()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.14d7f318.chunk.js.map