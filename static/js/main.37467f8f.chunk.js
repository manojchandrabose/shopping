(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(3),c=a(5),l=a(4),i=a(6),o=a(0),s=a.n(o),u=a(8),m=a.n(u),d=(a(14),a(1)),p=(a(16),"https://i.picsum.photos/id/".concat("_id_","/200/200.jpg")),f=[];[1,2,3,4,5,6,7,8,9,10,11,12].map(function(e){f.push({id:e,name:"Product".concat(e),price:Math.floor(900*Math.random()+100),img:p.replace(/_id_/gi,e),qty:1})});var h=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={home:!0,cart:!1,subtotal:"",inputVal:"",cartArr:[]},a.clickMe=function(e){a.setState({cartArr:Object(d.a)(a.state.cartArr).concat(Object(d.a)(f.filter(function(t){return t.id===e})))},function(){return a.setState({subtotal:a.state.cartArr.reduce(function(e,t){var a=t.price;return e+parseInt(a)},0)})}),setTimeout(function(){alert("Product Added To Cart Sucessfully!!")},500)},a.gotoCart=function(){!0===confirm("Are You Sure You Wanna Go To Cart")&&a.setState({cart:!0,home:!1})},a.gotoHome=function(){!0===confirm("Are You Sure You Wanna Go To Home")&&a.setState({cart:!1,home:!0})},a.removeMe=function(e){!0===confirm("Are You Sure You Wanna Remove This Product")&&a.setState({cartArr:a.state.cartArr.filter(function(t){return t!==e})})},a.checkOut=function(){var e=Math.floor(1e6*Math.random()+99999);alert("Your Order is Success. Order id is 7000"+e),window.location.reload()},a.decreseCnt=function(e){var t=a.state.cartArr[e];t.qty=t.qty-1,t.price=t.price*t.qty,console.log(t)},a.increseCnt=function(e){var t=a.state.cartArr[e];t.qty=t.qty+1,t.price=t.price*t.qty,a.setState({cartArr:Object(d.a)(a.state.cartArr).concat(Object(d.a)(t))})},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.cartArr,n=t.subtotal;return console.log(a),s.a.createElement("div",{className:"products"},s.a.createElement("div",{className:"page-title"},s.a.createElement("span",{style:{float:"left",cursor:"pointer"},onClick:this.gotoHome},"HOME"),s.a.createElement("span",{style:{float:"right",cursor:"pointer"},onClick:this.gotoCart},"CART(",this.state.cartArr.length,")")),!0===this.state.home&&s.a.createElement("div",null,s.a.createElement("div",{className:"product-filter"},s.a.createElement("div",{className:"filter-info"},s.a.createElement("h5",null,"Filters"))),s.a.createElement("div",{className:"products-grid"},s.a.createElement("div",{className:"product-sort"}),f.map(function(t){return s.a.createElement("div",{className:"product-card",key:t.id},s.a.createElement("div",{className:"product-image"},s.a.createElement("img",{src:t.img,alt:t.name})),s.a.createElement("div",{className:"product-info"},s.a.createElement("h5",null,t.name),s.a.createElement("h6",null,"$",t.price,".00"),s.a.createElement("button",{onClick:function(){return e.clickMe(t.id)},disabled:-1!==e.state.cartArr.indexOf(t.id)},"Add To Cart")))}))),!0===this.state.cart&&s.a.createElement("div",{style:{float:"left",width:"100%",paddingTop:"25px"}},s.a.createElement("h4",null,"SHOPPING CART"),s.a.createElement("div",{className:"product-cart",style:{width:"75%",float:"left"}},a.length>0&&a.map(function(t,a){return s.a.createElement("div",{className:"product-card",style:{width:"100%",float:"left"},key:t.id},s.a.createElement("div",{className:"product-image"},s.a.createElement("div",{style:{float:"left"}},s.a.createElement("img",{src:t.img,alt:t.name})),s.a.createElement("div",{style:{float:"left",padding:"30px"}},s.a.createElement("h5",{style:{paddingBottom:"25px"}},t.name),s.a.createElement("h6",null,"$",t.price,".00")),s.a.createElement("div",{style:{float:"left",padding:"50px"}},s.a.createElement("button",{style:{width:"35px",marginRight:"10px"},onClick:function(){return e.decreseCnt(a)}},"-"),s.a.createElement("input",{onChange:function(t){return e.setState({inputVal:t.target.value})},style:{width:"75px",marginRight:"10px"},type:"text",value:t.qty}),s.a.createElement("button",{style:{width:"35px"},onClick:function(){return e.increseCnt(a)}},"+")),s.a.createElement("div",{style:{float:"left",padding:"50px"}},s.a.createElement("input",{onClick:function(){return e.removeMe(t.id)},type:"button",style:{borderRadius:"none",marginRight:"10px"},value:"Remove"}))))})),a.length>0&&s.a.createElement("div",{className:"price-details"},s.a.createElement("h5",null,"PRICE DETAILS"),s.a.createElement("div",null,s.a.createElement("span",null,"Price :"),s.a.createElement("span",{style:{float:"right"}},"$",n)),s.a.createElement("div",null,s.a.createElement("span",null,"Qty :"),s.a.createElement("span",{style:{float:"right"}},a.length)),s.a.createElement("br",null),s.a.createElement("div",null,s.a.createElement("span",null,"Total Payable :"),s.a.createElement("span",{style:{float:"right"}},"$",n)),s.a.createElement("br",null),s.a.createElement("button",{style:{width:"100%",height:"40px"},onClick:this.checkOut},"Checkout")),!a&&s.a.createElement("div",null,s.a.createElement("span",null,"Oops!! Your cart is empty."))))}}]),t}(o.Component),E=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(h,null))}}]),t}(s.a.Component);m.a.render(s.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.37467f8f.chunk.js.map