(this["webpackJsonpcryptocurrency-calculator"]=this["webpackJsonpcryptocurrency-calculator"]||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},41:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(16),i=c.n(r),s=(c(21),c(22),c(3)),u=c(6),o=c.n(u),l=(c(41),c(0));function j(e){for(var t=e.newsPerPage,c=e.totalNews,n=e.paginate,a=(e.active,e.currentPage,[]),r=1;r<=Math.ceil(c/t);r++)a.push(r);return Object(l.jsx)("div",{className:"pagination-container",children:Object(l.jsx)("span",{children:a.map((function(e,t){return Object(l.jsx)("a",{href:"!#",className:"number-pgn",onClick:function(){return n(e)},children:e},t)}))})})}function b(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(1),i=Object(s.a)(r,2),u=i[0],b=i[1],d=Object(n.useState)(10),p=Object(s.a)(d,2),h=p[0],O=(p[1],Object(n.useState)(!1)),x=Object(s.a)(O,2),f=x[0],m=x[1];Object(n.useEffect)((function(){o.a.request({method:"GET",url:"https://cryptocurrency-news-live.p.rapidapi.com/crypto-news",headers:{"x-rapidapi-host":"cryptocurrency-news-live.p.rapidapi.com","x-rapidapi-key":"d82d8cc75bmshc07b9ac0dd8b90dp1a6bdbjsn6a6323be1f18"}}).then((function(e){a(e.data)})).catch((function(e){console.error(e)}))}),[]);var v=u*h,g=v-h,y=c.slice(g,v);return Object(l.jsxs)("div",{className:"newsContent",children:[Object(l.jsx)("h2",{className:"newsTitle",children:"News"}),y.map((function(e,t){return Object(l.jsx)("div",{children:Object(l.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(l.jsx)("p",{children:e.title})})},t)})),Object(l.jsx)(j,{newsPerPage:h,totalNews:c.length,paginate:function(e){b(e),m(!0)},active:f,currentPage:u})]})}function d(){var e=["BTC","ETH","USD"],t=Object(n.useState)("BTC"),c=Object(s.a)(t,2),a=c[0],r=c[1],i=Object(n.useState)("BTC"),u=Object(s.a)(i,2),j=u[0],b=u[1],d=Object(n.useState)(""),p=Object(s.a)(d,2),h=p[0],O=p[1],x=Object(n.useState)(""),f=Object(s.a)(x,2),m=f[0],v=f[1];return Object(l.jsxs)("div",{className:"converter",children:[Object(l.jsx)("h3",{className:"converterTitle",children:"Converter"}),Object(l.jsxs)("div",{className:"initialArea",children:[Object(l.jsx)("span",{children:"InitialCurrency: "}),Object(l.jsx)("input",{type:"number",name:"curren-amount-1",value:h,onChange:function(e){return O(e.target.value)}}),Object(l.jsx)("span",{children:Object(l.jsx)("select",{className:"initeSelect",value:a,name:"curren-option-1",onChange:function(e){return r(e.target.value)},children:e.map((function(e,t){return Object(l.jsx)("option",{children:e},"index")}))})})]}),Object(l.jsxs)("div",{className:"finalArea",children:[Object(l.jsx)("span",{children:"You will get: "}),Object(l.jsx)("span",{italic:!0,children:m}),Object(l.jsx)("span",{children:Object(l.jsx)("select",{className:"finalSelect",value:j,name:"curren-option-2",onChange:function(e){return b(e.target.value)},children:e.map((function(e,t){return Object(l.jsx)("option",{children:e},"index")}))})})]}),Object(l.jsx)("button",{className:"convertButton",type:"button",onClick:function(){var e={method:"GET",url:"https://alpha-vantage.p.rapidapi.com/query",params:{from_currency:a,function:"CURRENCY_EXCHANGE_RATE",to_currency:j},headers:{"x-rapidapi-host":"alpha-vantage.p.rapidapi.com","x-rapidapi-key":"d82d8cc75bmshc07b9ac0dd8b90dp1a6bdbjsn6a6323be1f18"}};o.a.request(e).then((function(e){v(e.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]*h)})).catch((function(e){console.error(e)}))},children:"Convert"})]})}var p=function(){return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(b,{}),Object(l.jsx)(d,{})]})};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.b21c084b.chunk.js.map