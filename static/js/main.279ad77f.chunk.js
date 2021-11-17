(this["webpackJsonpcronos-webtool"]=this["webpackJsonpcronos-webtool"]||[]).push([[0],{350:function(e){e.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')},369:function(e,t,n){},460:function(e,t){},462:function(e,t){},464:function(e,t){},468:function(e,t){},492:function(e,t){},494:function(e,t){},503:function(e,t){},505:function(e,t){},515:function(e,t){},517:function(e,t){},631:function(e,t){},633:function(e,t){},640:function(e,t){},641:function(e,t){},659:function(e,t){},738:function(e,t,n){},739:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(49),s=n.n(r),o=(n(369),n(106)),i=n(66),u=n(52),l=n(34),d=n(346),b=n(238),p=n(9),f=b.a.TabPane;function j(){var e=Object(l.g)(),t=Object(l.h)(),n=e.pathname.slice(1);return Object(p.jsxs)(c.a.Fragment,{children:[Object(p.jsxs)(b.a,{defaultActiveKey:n,onChange:function(e){switch(e){case"accounts":t("/accounts");break;case"transaction":t("/transaction");break;case"settings":t("/settings")}},children:[Object(p.jsx)(f,{tab:"Accounts Balances",children:" "},"accounts"),Object(p.jsx)(f,{tab:"Query Transaction Status",children:" "},"transaction"),Object(p.jsx)(f,{tab:"Settings"},"settings")]}),Object(p.jsx)(l.b,{})]})}var m,h=n(43),y=n.n(h),x=n(81),O=n(748),v=n(355),g=n(743),A=n(746),w=n(357),k=n(750),S=n(751),C=n(752),F=n(349),T=n.n(F),B=n(25),D=n(27),E=n(350),P=n(154),I=n.n(P),R=n(235),V=n.n(R);!function(e){e.NotOnChain="Not on Chain",e.SuccessOnChain="Success on chain",e.FailedOnChain="Failed on chain"}(m||(m={}));var N=function(){function e(t){Object(B.a)(this,e),this.url=t,this.web3=void 0,this.web3=new V.a(new V.a.providers.HttpProvider(t))}return Object(D.a)(e,[{key:"getTransactionRecord",value:function(){var e=Object(x.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.web3.eth.getTransactionReceipt(t);case 2:if(null!==(n=e.sent)){e.next=5;break}return e.abrupt("return",{status:m.NotOnChain});case 5:if(n.status){e.next=7;break}return e.abrupt("return",{status:m.FailedOnChain,receipt:n});case 7:return e.abrupt("return",{status:m.SuccessOnChain,receipt:n});case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getBlockHeight",value:function(){var e=Object(x.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.web3.eth.getBlockNumber());case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getBalance",value:function(){var e=Object(x.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.web3.eth.getBalance(t);case 2:return n=e.sent,e.abrupt("return",new I.a(n));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCRC20Balance",value:function(){var e=Object(x.a)(y.a.mark((function e(t,n){var a,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new this.web3.eth.Contract(E,n),e.next=3,a.methods.balanceOf(t).call();case 3:return c=e.sent,e.abrupt("return",new I.a(c));case 5:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"isValidAddress",value:function(e){return this.web3.utils.isAddress(e)}}]),e}();function L(e){var t=c.a.useState([]),n=Object(u.a)(t,2),a=n[0],r=n[1],s=function(){var t=Object(x.a)(y.a.mark((function t(n){var c,s;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==n){t.next=2;break}return t.abrupt("return");case 2:return c=new Date,t.prev=3,t.next=6,e.cronosService.getTransactionRecord(n);case 6:s=t.sent,i={key:Date.now(),txHash:n,requestedAt:c,status:s.status,receipt:s.receipt},r([i].concat(Object(o.a)(a))),t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(3),W("Get Transaction Error",t.t0.toString()),t.abrupt("return");case 14:case"end":return t.stop()}var i}),t,null,[[3,10]])})));return function(e){return t.apply(this,arguments)}}();return Object(p.jsxs)(c.a.Fragment,{children:[Object(p.jsx)(O.b,{direction:"vertical",children:Object(p.jsx)(v.a.Search,{placeholder:"Transaction Hash",enterButton:"Query",size:"large",onSearch:s,style:{width:650}})}),Object(p.jsx)(g.a,{dataSource:a,columns:H,pagination:!1})]})}var H=[{title:"Requested At",dataIndex:"requestedAt",key:"requestedAt",render:function(e){return Object(p.jsx)("span",{children:e.toLocaleString()})}},{title:"Status",dataIndex:"status",key:"status",render:function(e){switch(e){case m.NotOnChain:return Object(p.jsx)(k.a,{style:{fontSize:22}});case m.SuccessOnChain:return Object(p.jsx)(S.a,{twoToneColor:"#52c41a",style:{fontSize:22}});case m.FailedOnChain:return Object(p.jsx)(C.a,{twoToneColor:"#eb2f96",style:{fontSize:22}})}}},{title:"Transaction Hash",dataIndex:"txHash",key:"txHash",render:function(e,t,n){return Object(p.jsxs)(c.a.Fragment,{children:[Object(p.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://cronos.crypto.org/explorer/tx/".concat(e),children:e}),Object(p.jsx)(A.a,{children:Object(p.jsx)(A.a.Panel,{header:"Transaction Receipt",children:!!t.receipt&&Object(p.jsx)(T.a,{iconStyle:"square",collapsed:1,src:t.receipt})},"receipt")})]})}}],W=function(e,t){w.a.error({message:e,description:t})},_=(n(738),{name:"CRO",symbol:"CRO",contractAddress:"",decimalPlaces:18}),M={version:1,accounts:[],tokens:[{name:"Dai Stablecoin",symbol:"DAI",contractAddress:"0xf2001b145b43032aaf5ee2884e456ccd805f677d",decimalPlaces:18},{name:"Tether USD",symbol:"USDT",contractAddress:"0x66e428c3f67a68878562e79A0234c1F83c208770",decimalPlaces:6},{name:"USD Coin",symbol:"USDC",contractAddress:"0xc21223249CA28397B4B6541dfFaEcC539BfF0c59",decimalPlaces:6},{name:"VVSToken",symbol:"VVS",contractAddress:"0x2D03bECE6747ADC00E1a131BBA1469C15fD11e03",decimalPlaces:18},{name:"Wrapped BTC",symbol:"WBTC",contractAddress:"0x062E66477Faf219F25D27dCED647BF57C3107d52",decimalPlaces:8},{name:"Wrapped ETH",symbol:"WETH",contractAddress:"0xe44Fd7fCb2b1581822D0c862B68222998a0c299a",decimalPlaces:18},{name:"Shiba",symbol:"SHIB",contractAddress:"0xbED48612BC69fA1CaB67052b42a95FB30C1bcFee",decimalPlaces:18},{name:"Doge",symbol:"DOGE",contractAddress:"0x1a8E39ae59e5556B56b76fCBA98d22c9ae557396",decimalPlaces:8},{name:"Binance",symbol:"BNB",contractAddress:"0xfA9343C3897324496A05fC75abeD6bAC29f8A40f",decimalPlaces:18}]},q=n(749),z=n(753),U=n(747),G=n(82);function J(e){var t=c.a.useState({time:new Date,blockNumber:0}),n=Object(u.a)(t,2),a=n[0],r=n[1],s=c.a.useState([]),l=Object(u.a)(s,2),d=l[0],b=l[1],f=function(){var t=Object(x.a)(y.a.mark((function t(){var n,a,c,s,u;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.cronosService.getBlockHeight();case 2:return n=t.sent,a=[_].concat(Object(o.a)(e.tokens)),c=a.map((function(t){return t===_?e.cronosService.getBalance(e.account):e.cronosService.getCRC20Balance(e.account,t.contractAddress)})),t.next=7,Promise.all(c);case 7:s=t.sent,u=s.map((function(e,t){var n=a[t];return{key:n.contractAddress,name:n.name,balance:e.dividedBy(new I.a(10).pow(n.decimalPlaces)).toFormat(n.decimalPlaces,Object(i.a)(Object(i.a)({},K),{},{suffix:" ".concat(n.symbol)}))}})),b(u),r({time:new Date,blockNumber:n});case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return c.a.useEffect((function(){0===d.length&&f();var e=setInterval((function(){f()}),15e3);return function(){return clearInterval(e)}})),Object(p.jsx)(U.a,{title:Object(p.jsxs)(c.a.Fragment,{children:[Object(p.jsx)("div",{children:Object(p.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://cronos.crypto.org/explorer/address/".concat(e.account),children:e.account})}),Object(p.jsxs)("div",{children:[a.time.toLocaleString()," at Block #",a.blockNumber]})]}),extra:Object(p.jsx)(G.a,{onClick:function(){return e.onRemoveFromWishList()},children:"Remove"}),style:{width:600},children:Object(p.jsx)(g.a,{dataSource:d,columns:Q,pagination:!1})})}var Q=[{title:"Token",dataIndex:"name",key:"name"},{title:"Balance",dataIndex:"balance",key:"balance",align:"right",render:function(e){return Object(p.jsx)("span",{style:{fontFamily:"Nunito,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol"},children:e})}}],K={prefix:"",decimalSeparator:".",groupSeparator:",",groupSize:3,secondaryGroupSize:0,fractionGroupSeparator:" ",fractionGroupSize:0,suffix:""};function X(e){var t=c.a.useState(""),n=Object(u.a)(t,2),a=n[0],r=n[1];return Object(p.jsxs)(c.a.Fragment,{children:[Object(p.jsx)("div",{children:Object(p.jsx)(O.b,{direction:"vertical",children:Object(p.jsx)(v.a.Search,{style:{width:500},placeholder:"Add Account to Watch List",enterButton:"Add",size:"large",onSearch:function(t){try{e.onAddAccountToWatchList(t)}catch(n){Y("Cannot Add Account to Watch List",n.toString())}}})})}),Object(p.jsx)("div",{style:{textAlign:"right"},children:Object(p.jsxs)(O.b,{direction:"vertical",children:[Object(p.jsxs)("div",{children:["Auto Refresh ",Object(p.jsx)(q.a,{checked:!0,disabled:!0})]}),Object(p.jsx)(v.a,{placeholder:"Filter Account",prefix:Object(p.jsx)(z.a,{}),size:"large",onChange:function(e){r(e.target.value)}})]})}),e.accounts.reduce((function(t,n){return n.includes(a)?(t.push(Object(p.jsx)(O.b,{children:Object(p.jsx)(J,{cronosService:e.cronosService,onRemoveFromWishList:function(){return e.onRemoveAccountFromWishList(n)},account:n,tokens:e.tokens})},n)),t):t}),[])]})}var Y=function(e,t){w.a.error({message:e,description:t})},Z=n(744),$=n(745);function ee(e){var t,n,a,c,r=e.disabled;return Object(p.jsxs)(Z.a,{name:"basic",labelCol:{span:6},wrapperCol:{span:18},initialValues:{remember:!0},onFinish:function(t){try{e.onAdd&&e.onAdd(t)}catch(n){w.a.error({message:"Add Token Error",description:n.toString()})}},children:[Object(p.jsx)(Z.a.Item,{label:"Token Name",name:"name",rules:[{required:!0}],children:Object(p.jsx)(v.a,{disabled:r,defaultValue:null===(t=e.defaultValue)||void 0===t?void 0:t.name})}),Object(p.jsx)(Z.a.Item,{label:"Symbol",name:"symbol",rules:[{required:!0}],children:Object(p.jsx)(v.a,{disabled:r,defaultValue:null===(n=e.defaultValue)||void 0===n?void 0:n.symbol})}),Object(p.jsx)(Z.a.Item,{label:"Decimal Places",name:"decimalPlaces",rules:[{required:!0}],children:Object(p.jsx)($.a,{min:0,disabled:r,defaultValue:null===(a=e.defaultValue)||void 0===a?void 0:a.decimalPlaces})}),Object(p.jsx)(Z.a.Item,{label:"Contract Address",name:"contractAddress",rules:[{required:!0}],children:Object(p.jsx)(v.a,{disabled:r,defaultValue:null===(c=e.defaultValue)||void 0===c?void 0:c.contractAddress})}),!r&&Object(p.jsx)(Z.a.Item,{children:Object(p.jsx)(G.a,{type:"primary",htmlType:"submit",children:"Add Token"})})]})}function te(e){return Object(p.jsxs)(c.a.Fragment,{children:[Object(p.jsx)(U.a,{title:"Add Token",style:{width:600},children:Object(p.jsx)(ee,{onAdd:e.onAddTokenToSettings})}),e.settings.tokens.map((function(t,n){return Object(p.jsx)(O.b,{direction:"vertical",children:Object(p.jsx)(U.a,{title:t.name,extra:Object(p.jsx)(G.a,{onClick:function(){return e.onRemoveTokenFromSettings(n)},children:"Remove"}),style:{width:600},children:Object(p.jsx)(ee,{defaultValue:t,disabled:!0})})},n)}))]})}function ne(){var e=Object(d.useLocalStorage)("settings"),t=Object(u.a)(e,2),n=t[0],a=t[1];if(!n)return a(M),Object(p.jsx)(c.a.Fragment,{});var r=new N("https://evm-cronos.crypto.org");return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(l.e,{children:Object(p.jsxs)(l.c,{path:"/",element:Object(p.jsx)(j,{}),children:[Object(p.jsx)(l.c,{path:"accounts",element:Object(p.jsx)(X,{cronosService:r,onAddAccountToWatchList:function(e){if(!r.isValidAddress(e))throw new Error("invalid address");if(-1!==n.accounts.indexOf(e))throw new Error("account already added");a(Object(i.a)(Object(i.a)({},n),{},{accounts:[].concat(Object(o.a)(n.accounts),[e])}))},onRemoveAccountFromWishList:function(e){a(Object(i.a)(Object(i.a)({},n),{},{accounts:n.accounts.filter((function(t){return t!==e}))}))},accounts:n.accounts,tokens:n.tokens})}),Object(p.jsx)(l.c,{path:"transaction",element:Object(p.jsx)(L,{cronosService:r})}),Object(p.jsx)(l.c,{path:"settings",element:Object(p.jsx)(te,{settings:n,onAddTokenToSettings:function(e){if(!r.isValidAddress(e.contractAddress))throw new Error("invalid contract address");if(n.tokens.find((function(t){return t.contractAddress===e.contractAddress})))throw new Error("token already added");a(Object(i.a)(Object(i.a)({},n),{},{tokens:[].concat(Object(o.a)(n.tokens),[e])}))},onRemoveTokenFromSettings:function(e){a(Object(i.a)(Object(i.a)({},n),{},{tokens:n.tokens.filter((function(t,n){return n!==e}))}))}})}),Object(p.jsx)(l.c,{index:!0,element:Object(p.jsx)(l.a,{to:"accounts"})})]})})})}var ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,754)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},ce=n(179);s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(ce.a,{basename:"/cronos-webtool",children:Object(p.jsx)(ne,{})})}),document.getElementById("root")),ae()}},[[739,1,2]]]);
//# sourceMappingURL=main.279ad77f.chunk.js.map