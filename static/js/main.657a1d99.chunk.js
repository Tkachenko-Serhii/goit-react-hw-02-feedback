(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(e,t,n){e.exports={list:"FeedbackOptions_list__1BCkn",item:"FeedbackOptions_item__3ZKc-",button:"FeedbackOptions_button__1de7O"}},,function(e,t,n){e.exports={section:"Section_section__2QcDf",title:"Section_title__3J7iX"}},function(e,t,n){e.exports={list:"Statistics_list__1sLG_",item:"Statistics_item__1jVg0"}},,,,,function(e,t,n){},,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(6),s=n.n(i),o=(n(17),n(7)),r=n(8),l=n(9),u=n(12),b=n(11);function d(e){return e?e[0].toUpperCase()+e.slice(1):e}var j=n(2),h=n.n(j),f=n(0);function O(e){var t=e.oneOfState,n=e.onChange;return Object(f.jsx)("ul",{className:h.a.list,children:t.map((function(e){return Object(f.jsx)("li",{className:h.a.item,children:Object(f.jsx)("button",{onClick:n,value:e,className:h.a.button,children:d(e)})},e)}))})}var v=n(4),k=n.n(v);function m(e){var t=e.title,n=e.children;return Object(f.jsxs)("section",{className:k.a.section,children:[Object(f.jsx)("h2",{className:k.a.title,children:t}),n]})}var _=n(10),p=n.n(_);function g(e){var t=e.message;return Object(f.jsx)("p",{className:p.a.notification,children:t})}var x=n(5),F=n.n(x);function N(e){return Object(f.jsx)("ul",{className:F.a.list,children:e.total>0?Object.keys(e).map((function(t){return Object(f.jsx)("li",{className:F.a.item,children:"positiveFeedback"!==t?d(t)+": "+e[t]:"Positive feedback: "+e[t]+"%"},t)})):Object(f.jsx)(g,{message:"No feedback given"})})}var S=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleChangeFeedback=function(t){var n=t.target.value;e.setState(Object(o.a)({},n,e.state[n]+1))},e.countTotalFeedback=function(){return Object.keys(e.state).reduce((function(t,n){return t+e.state[n]}),0)},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback();return t?Math.round(100*e.state.good/t):t},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.bad,a=e.neutral,c=this.countTotalFeedback(),i=Object.keys(this.state),s=this.countPositiveFeedbackPercentage();return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(m,{title:"Please leave feedback",children:Object(f.jsx)(O,{oneOfState:i,onChange:this.handleChangeFeedback})}),Object(f.jsx)(m,{title:"Statistics",children:Object(f.jsx)(N,{good:t,neutral:a,bad:n,total:c,positiveFeedback:s})})]})}}]),n}(c.a.Component);s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(S,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.657a1d99.chunk.js.map