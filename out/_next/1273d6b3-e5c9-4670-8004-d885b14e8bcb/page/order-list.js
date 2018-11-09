module.exports=__NEXT_REGISTER_PAGE("/order-list",function(){return{page:webpackJsonp([12],{1231:function(e,t,r){e.exports=r(1232)},1232:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=r.n(n),o=r(2),i=r(18),c=r(21),s=r(26),l=r.n(s),p=r(19),u=r.n(p),y=r(27),m=r(39),f=r(67),d=r(58),g=r(53),h=r.n(g),b=r(40),S=r.n(b),v=r(41),E=r.n(v),O=r(3),w=r.n(O),x=r(28);function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var _=Object(o.withStyles)(function(e){return{wrapperStyle:{justifyContent:"space-between",display:"flex",flexDirection:"row",paddingLeft:3*e.spacing.unit,paddingRight:3*e.spacing.unit,paddingTop:e.spacing.unit,paddingBottom:e.spacing.unit},orderNoStyle:{color:e.palette.customGrey.grey500},orderIdStyle:{color:e.palette.customGreen.green300,marginLeft:e.spacing.unit,marginRight:e.spacing.unit,cursor:"pointer"},orderWrapper:{display:"flex"},iconButtonStyle:{color:e.palette.customGreen.green300,height:2*e.spacing.unit,marginTop:e.spacing.unit/4},trackWrapper:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){j(e,t,r[t])})}return e}({},e.typography.caption,{color:e.palette.customGrey.grey500,justifyContent:"space-between",display:"flex",flexDirection:"row"}),assuredImage:{marginRight:e.spacing.unit}}})(function(e){return a.a.createElement("div",{className:e.classes.wrapperStyle},a.a.createElement("div",{className:e.classes.orderWrapper},a.a.createElement(w.a,{variant:"caption",className:e.classes.orderNoStyle},"Order No."),a.a.createElement(w.a,{variant:"caption",className:e.classes.orderIdStyle,onClick:e.redirectToOrderDeatails},e.orderDetails.id),e.orderDetails.service_type===x.j&&a.a.createElement("img",{src:"/static/images/assured-service.svg",className:e.classes.assuredImage}),e.orderDetails.delivery_option!==x.b&&a.a.createElement("img",{src:"/static/images/express-delivery-icon.svg"})))}),L=r(377),P=r.n(L),N=r(10),C=r(64);function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function k(e,t){return!t||"object"!==D(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var R=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),k(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var r,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),r=t,(o=[{key:"render",value:function(){var e=this,t=this.props.orderDetails.items.length-3,r=this.props.orderDetails.prescriptions.length&&this.props.orderDetails.prescriptions[0].location;return a.a.createElement("div",null,a.a.createElement("div",{className:this.props.classes.userDetailWrapper},a.a.createElement("div",null,a.a.createElement(w.a,{variant:"caption",className:this.props.classes.userNameStyle},a.a.createElement(P.a,{className:this.props.classes.userIconStyle}),a.a.createElement("div",{className:this.props.classes.customerFullName},this.props.orderDetails.customer_full_name))),a.a.createElement("div",null,a.a.createElement(w.a,{variant:"caption",className:"Payment Pending"===this.props.orderDetails.viewStatus?this.props.classes.orangeStyle:this.props.classes.statusStyle},this.props.orderDetails.viewStatus))),a.a.createElement("div",{className:this.props.classes.medicineDetailWrapper},a.a.createElement("img",{src:r,className:this.props.classes.prescriptionStyle,onError:function(e){e.target.src="/static/images/placeholder.svg"}}),a.a.createElement("div",null,this.props.orderDetails.items.map(function(t,r){return r<3&&a.a.createElement(w.a,{variant:"caption",className:e.props.classes.medicineNameStyle},t.name)}),a.a.createElement(w.a,{variant:"caption",className:this.props.classes.quantityStyle},t>0&&"+".concat(t," Items")))),this.props.orderDetails.status===C.f&&a.a.createElement("div",{className:this.props.classes.buttonWrapperStyle},a.a.createElement(N.a,{size:"small",variant:"outlined",color:"primary",classes:{root:this.props.classes.buttonRoot,label:this.props.classes.buttonLabel},className:this.props.classes.codButtonStyle,onClick:this.props.retryPayment,label:"RETRY PAYMENT"}),a.a.createElement(N.a,{size:"small",variant:"raised",color:"primary",onClick:this.props.placeOrder,className:this.props.classes.codButtonStyle,label:"CONVERT TO COD"})))}}])&&T(r.prototype,o),i&&T(r,i),t}(),W=Object(o.withStyles)(function(e){return{userDetailWrapper:{paddingTop:2*e.spacing.unit,paddingLeft:3*e.spacing.unit,paddingRight:2*e.spacing.unit,justifyContent:"space-between",display:"flex",flexDirection:"row"},userIconStyle:{color:e.palette.customGrey.grey300,height:3*e.spacing.unit,marginTop:e.spacing.unit/8},userNameStyle:{color:e.palette.customGrey.grey500,fontWeight:e.typography.fontWeightBold,fontSize:e.typography.pxToRem(16),display:"flex",flexDirection:"row",alignItems:"center"},statusStyle:{color:e.palette.customGreen.green300,paddingRight:e.spacing.unit},pendingStyle:{color:e.palette.customRed.red200,paddingRight:e.spacing.unit},orangeStyle:{color:e.palette.customYellow.yellow400,paddingRight:e.spacing.unit},prescriptionStyle:{width:10*e.spacing.unit,height:10*e.spacing.unit,marginRight:2*e.spacing.unit},medicineDetailWrapper:{paddingTop:3*e.spacing.unit,paddingLeft:3*e.spacing.unit,display:"flex",flexDirection:"row",paddingBottom:3*e.spacing.unit},medicineNameStyle:{color:e.palette.customGrey.grey500},quantityStyle:{color:e.palette.customGrey.grey500,fontWeight:e.typography.fontWeightBold},buttonRoot:{border:"1px solid ".concat(e.palette.primary.main)},buttonLabel:{color:e.palette.primary.main},buttonWrapperStyle:{textAlign:"right",marginRight:2*e.spacing.unit,display:"flex",justifyContent:"flex-end",marginBottom:2*e.spacing.unit},codButtonStyle:{marginLeft:2*e.spacing.unit},customerFullName:{marginLeft:e.spacing.unit}}})(R),B=r(134);function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){M(e,t,r[t])})}return e}function M(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var A=Object(o.withStyles)(function(e){return{wrapperStyle:{justifyContent:"space-between",display:"flex",flexDirection:"row",paddingLeft:3*e.spacing.unit,paddingRight:3*e.spacing.unit,paddingTop:e.spacing.unit,paddingBottom:e.spacing.unit},labelStyle:G({},e.typography.body4,{fontWeight:e.typography.fontWeightBold,color:e.palette.customGrey.grey700}),valueStyle:G({},e.typography.body3,{color:e.palette.customGrey.grey500})}})(function(e){return a.a.createElement("div",{className:e.classes.wrapperStyle},a.a.createElement("div",null,a.a.createElement(w.a,{variant:"caption",className:e.classes.labelStyle},"Placed On"),a.a.createElement(w.a,{variant:"caption",className:e.classes.valueStyle},Object(B.b)(e.orderDetails.created_at))),a.a.createElement("div",null,a.a.createElement(w.a,{variant:"caption",className:e.classes.labelStyle},"Delivery Date"),a.a.createElement(w.a,{variant:"caption",className:e.classes.valueStyle},Object(B.b)(e.orderDetails.delivery_date))),a.a.createElement("div",null,a.a.createElement(w.a,{variant:"caption",className:e.classes.labelStyle},"Payment"),a.a.createElement(w.a,{variant:"caption",className:e.classes.valueStyle},e.orderDetails.payment_method)),a.a.createElement("div",null,a.a.createElement(w.a,{variant:"caption",className:e.classes.labelStyle},"Total Amount"),a.a.createElement(w.a,{variant:"caption",className:e.classes.valueStyle},e.orderDetails.total_payable_amount)))}),I=r(36);function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var q=Object(o.withStyles)(function(e){return{loaderWrapper:{border:"0.5px solid ".concat(e.palette.customGrey.grey250),borderRadius:e.spacing.unit/2,marginBottom:3*e.spacing.unit,marginLeft:2*e.spacing.unit,marginTop:6*e.spacing.unit,marginRight:2*e.spacing.unit}}})(function(e){return a.a.createElement("div",{className:e.classes.loaderWrapper},a.a.createElement(I.a,z({height:140,width:380,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},e),a.a.createElement("rect",{x:"14",y:"9.32",rx:"0",ry:"0",width:"47.3",height:"4.47"}),a.a.createElement("rect",{x:"103",y:"122.77",rx:"0",ry:"0",width:"0",height:"0"}),a.a.createElement("rect",{x:"77",y:"9.15",rx:"0",ry:"0",width:"22.32",height:"4.32"}),a.a.createElement("rect",{x:"346",y:"12.18",rx:"0",ry:"0",width:"3",height:"0"}),a.a.createElement("rect",{x:"296",y:"9.18",rx:"0",ry:"0",width:"44",height:"6"}),a.a.createElement("rect",{x:"0",y:"23.02",rx:"0",ry:"0",width:"396.36",height:"1.08"}),a.a.createElement("rect",{x:"30",y:"33.18",rx:"0",ry:"0",width:"38",height:"4"}),a.a.createElement("circle",{cx:"19.807886552931954",cy:"34.987886552931954",r:"3.8078865529319543"}),a.a.createElement("rect",{x:"17",y:"52.57",rx:"0",ry:"0",width:"36.14",height:"31.08"}),a.a.createElement("rect",{x:"60",y:"53.05",rx:"0",ry:"0",width:"23",height:"4.5"}),a.a.createElement("rect",{x:"60",y:"60.57",rx:"0",ry:"0",width:"31",height:"4"}),a.a.createElement("rect",{x:"-3",y:"117.05",rx:"0",ry:"0",width:"400",height:"1"}),a.a.createElement("rect",{x:"17",y:"123.05",rx:"0",ry:"0",width:"32",height:"3"}),a.a.createElement("rect",{x:"17",y:"130.05",rx:"0",ry:"0",width:"42",height:"3"}),a.a.createElement("rect",{x:"344",y:"120.05",rx:"0",ry:"0",width:"22",height:"3"}),a.a.createElement("rect",{x:"NaN",y:"NaN",rx:"0",ry:"0",width:"NaN",height:"NaN"}),a.a.createElement("rect",{x:"327",y:"127.05",rx:"0",ry:"0",width:"40",height:"3"}),a.a.createElement("rect",{x:"124",y:"122.05",rx:"0",ry:"0",width:"24",height:"3"}),a.a.createElement("rect",{x:"123",y:"128.05",rx:"0",ry:"0",width:"35",height:"3"}),a.a.createElement("rect",{x:"241",y:"120.05",rx:"0",ry:"0",width:"23",height:"3"}),a.a.createElement("rect",{x:"234",y:"126.05",rx:"0",ry:"0",width:"31",height:"3"})))}),H=r(17),Y=r(37),F=r(51),J=r(35),U=r(30),V=r(125);function X(e){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function K(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Q(e,t){return!t||"object"!==X(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){$(e,t,r[t])})}return e}function $(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ee=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=Q(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).state={page:0,isShowMore:!1},r}var r,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),r=t,(o=[{key:"componentDidUpdate",value:function(e){if(this.props.cartState.isOrderSubmitted!==e.cartState.isOrderSubmitted&&this.props.cartState.isOrderSubmitted&&this.props.cartState.orderResponse.payload.order_type===C.a){this.props.resetCartState();var t=Object(J.a)(U.q),r="".concat(t,"?payment-status=success"),n="".concat(t,"?payment-status=success");u.a.push(n,r)}}},{key:"onClickOfShowMore",value:function(){this.props.getOrderListDetailsLoading(this.props.orderListState,this.props.customerState.payload.id,this.state.page+1,10),this.setState({page:this.state.page+1,isShowMore:!0})}},{key:"tryAgain",value:function(){this.props.getOrderListDetailsLoading(this.props.orderListState,this.props.customerState.payload.id,0,10),this.setState({isShowMore:!1})}},{key:"redirectToOrderDeatails",value:function(e){var t={order_id:e},r=Object(J.a)(U.i,t);u.a.push(r)}},{key:"placeOrder",value:function(e){var t=C.a;this.props.paymentInitiateLoading(this.props.cartState,e,t)}},{key:"retryPayment",value:function(e){var t={order_id:e};this.props.resetCartState();var r=Object(J.a)(U.q,t),n="".concat(r,"?payment-status=retry"),a="".concat(r,"?payment-status=retry");u.a.push(a,n)}},{key:"render",value:function(){var e=this,t=this.props.orderListState,r=this.state.page+1!==this.props.orderListState.totalPages;return a.a.createElement(S.a,{elevation:"1",className:this.props.classes.card},a.a.createElement(E.a,{className:this.props.classes.cardContent},a.a.createElement(w.a,{gutterBottom:!0,variant:"title",component:"h1",className:this.props.classes.title},"My Orders"),a.a.createElement(H.a,{isLoading:t.isLoading,LoaderComp:a.a.createElement(q,null),bottomLoader:this.state.isShowMore,isError:t.errorState.isError,ErrorComp:this.state.isShowMore?a.a.createElement(F.a,{error:this.props.globalErrorState}):a.a.createElement(Y.a,{error:t.errorState.error,tryAgain:this.tryAgain.bind(this)}),bottomError:this.state.isShowMore},this.props.orderListState.payload.length?this.props.orderListState.payload.map(function(t){return a.a.createElement("div",{className:e.props.classes.orderDetailWrapper},a.a.createElement(_,{orderDetails:t,redirectToOrderDeatails:e.redirectToOrderDeatails.bind(e,t.id)}),a.a.createElement(h.a,null),a.a.createElement(W,{orderDetails:t,placeOrder:e.placeOrder.bind(e,t.id),retryPayment:e.retryPayment.bind(e,t.id)}),a.a.createElement(h.a,null),a.a.createElement(A,{orderDetails:t}))}):a.a.createElement(w.a,{gutterBottom:!0,variant:"body2",className:this.props.classes.noContent},V.b),this.props.orderListState.payload.length&&r?a.a.createElement("div",{className:this.props.classes.buttonWrapper},a.a.createElement(N.a,{size:"medium",loaderColor:"primary",variant:"outlined",className:this.props.classes.button,classes:{root:this.props.classes.buttonRoot,label:this.props.classes.buttonLabel},onClick:this.onClickOfShowMore.bind(this),label:"Show more"})):null)))}}])&&K(r.prototype,o),i&&K(r,i),t}(),te=Object(o.withStyles)(function(e){return{card:{marginLeft:6*e.spacing.unit},cardContent:{paddingBottom:0},orderDetailWrapper:{border:"0.5px solid ".concat(e.palette.customGrey.grey250),borderRadius:e.spacing.unit/2,marginBottom:3*e.spacing.unit,marginLeft:2*e.spacing.unit,marginRight:2*e.spacing.unit},title:Z({},e.typography.headline,{color:e.palette.customGrey.grey500,marginLeft:2*e.spacing.unit,marginBottom:7*e.spacing.unit}),buttonRoot:{backgroundColor:e.palette.common.white,border:"0.5px solid ".concat(e.palette.customGrey.grey200)},buttonLabel:Z({},e.typography.body3,{color:e.palette.customGrey.grey200}),buttonWrapper:{display:"flex",justifyContent:"center"},button:{marginBottom:14*e.spacing.unit},noContent:{color:e.palette.customGrey.grey500,textAlign:"center",marginTop:1.25*e.spacing.unit,fontWeight:e.typography.fontWeightBold}}})(ee),re=r(20),ne=r.n(re);function ae(e){return(ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function oe(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ie(e,t){return!t||"object"!==ae(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var ce=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),ie(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var r,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),r=t,(o=[{key:"render",value:function(){var e=this.props,t=e.orderListState,r=e.getOrderListDetailsLoading,n=e.customerState;return a.a.createElement("div",null,a.a.createElement(ne.a,{container:!0,spacing:24},a.a.createElement(ne.a,{item:!0,xs:2},a.a.createElement("aside",null,a.a.createElement(d.a,{isLoading:t.isLoading}))),a.a.createElement(ne.a,{item:!0,xs:10},a.a.createElement(te,{orderListState:t,getOrderListDetailsLoading:r,customerState:n,paymentInitiateLoading:this.props.paymentInitiateLoading,resetCartState:this.props.resetCartState,cartState:this.props.cartState,globalErrorState:this.props.globalErrorState}))))}}])&&oe(r.prototype,o),i&&oe(r,i),t}(),se=r(300),le=r(42);function pe(e){return(pe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ue(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ye(e,t){return!t||"object"!==pe(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var me=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),ye(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var r,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),r=t,(o=[{key:"render",value:function(){var e=this.props,t=e.orderListState,r=e.customerState,n=e.actions;return a.a.createElement("div",null,a.a.createElement(f.a,{isLoading:t.isLoading}),a.a.createElement("section",null,a.a.createElement(ce,{orderListState:t,getOrderListDetailsLoading:n.getOrderListDetailsLoading,customerState:r,paymentInitiateLoading:n.paymentInitiateLoading,resetCartState:n.resetCartState,cartState:this.props.cartState,globalErrorState:this.props.globalErrorState})))}}])&&ue(r.prototype,o),i&&ue(r,i),t}();var fe=Object(c.b)(function(e){return{cartState:e.cartState,orderListState:e.orderListState,customerState:e.customerState,globalErrorState:e.globalErrorState}},function(e){return{actions:Object(i.b)({getOrderListDetailsLoading:se.b,paymentInitiateLoading:le.E,resetCartState:le.M},e)}})(me),de=r(43);function ge(e){return(ge="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function he(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function be(e,t){return!t||"object"!==ge(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var Se=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),be(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.a.Component),r=t,(n=[{key:"componentDidMount",value:function(){var e=u.a.query;this.props.actions.getOrderListDetailsLoading(this.props.orderListState,e.customer_id,0,10)}},{key:"render",value:function(){var e=this.props.addToCartHandler;return a.a.createElement(m.a,{title:de.k.title,addToCartHandler:e},a.a.createElement("div",{className:this.props.classes.wrapperStyle},a.a.createElement(l.a,{className:this.props.classes.root,elevation:1},a.a.createElement(fe,null))))}}])&&he(r.prototype,n),o&&he(r,o),t}();t.default=Object(c.b)(function(e){return{orderListState:e.orderListState,customerState:e.customerState}},function(e){return{actions:Object(i.b)({getOrderListDetailsLoading:se.b},e)}})(Object(y.a)(Object(o.withStyles)(function(e){return{root:{paddingTop:3*e.spacing.unit,paddingBottom:3*e.spacing.unit,paddingLeft:7*e.spacing.unit,paddingRight:7*e.spacing.unit,margin:"0 auto",marginTop:7.5*e.spacing.unit,maxWidth:e.breakpoints.values.lg,minWidth:e.breakpoints.values.md},title:{fontWeight:e.typography.fontWeightBold},wrapperStyle:{paddingBottom:3*e.spacing.unit,minHeight:100*e.spacing.unit}}})(Se)))},125:function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"c",function(){return a}),r.d(t,"b",function(){return o}),r.d(t,"d",function(){return i});var n="No medicine available by this name!",a="No prescription present!",o="No order placed!",i="No refill medicine available!"},37:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(2),i=(r.n(o),r(3)),c=r.n(i),s=r(10),l=r(32);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(e){function t(){var e,r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return y(n,(r=n=y(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),Object.defineProperty(m(n),"onClickOfTryAgain",{configurable:!0,enumerable:!0,writable:!0,value:function(){n.props.tryAgain()}}),r))}var r,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),r=t,(o=[{key:"render",value:function(){return a.a.createElement("div",{className:this.props.classes.errorWrapper},a.a.createElement(c.a,{variant:"subheading",className:this.props.classes.textStyle},l.g),a.a.createElement(c.a,{variant:"subheading",className:this.props.classes.anotherTextStyle},l.f),!this.props.noButton&&a.a.createElement(s.a,{size:"small",color:"primary",variant:"outline",classes:{root:this.props.classes.buttonRoot,label:this.props.classes.buttonLabel},className:this.props.classes.buttonStyle,onClick:this.onClickOfTryAgain,label:"Try Again"}))}}])&&u(r.prototype,o),i&&u(r,i),t}();t.a=Object(o.withStyles)(function(e){return{textStyle:{marginTop:6*e.spacing.unit,fontSize:e.typography.pxToRem(16),fontWeight:e.typography.fontWeightBold,color:e.palette.customGrey.grey350},errorWrapper:{textAlign:"center",margin:3*e.spacing.unit},buttonRoot:{border:"1px solid ".concat(e.palette.primary.main)},buttonLabel:{color:e.palette.primary.main,fontWeight:e.typography.fontWeightBold},buttonStyle:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){f(e,t,r[t])})}return e}({},e.typography.body2,{paddingLeft:4*e.spacing.unit,paddingRight:4*e.spacing.unit,paddingTop:e.spacing.unit/4,paddingBottom:e.spacing.unit/4,textAlign:"center",marginTop:5*e.spacing.unit}),anotherTextStyle:{marginTop:e.spacing.unit/2,fontSize:e.typography.pxToRem(12),color:e.palette.customGrey.grey400}}})(d)},377:function(e,t,r){"use strict";var n=r(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(0)),o=(0,n(r(66)).default)(a.default.createElement("g",null,a.default.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"})),"Person");t.default=o},54:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(36);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.a=function(e){return a.a.createElement(o.a,i({height:300,width:180,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},e),a.a.createElement("rect",{x:"2",y:"17.49",rx:"3",ry:"3",width:"95.2",height:"10.1097"}),a.a.createElement("circle",{cx:"59",cy:"20.05",r:"1"}),a.a.createElement("rect",{x:"5",y:"53.82",rx:"0",ry:"0",width:"71.28",height:"11.76"}),a.a.createElement("rect",{x:"241",y:"20.05",rx:"0",ry:"0",width:"35",height:"8.01"}),a.a.createElement("circle",{cx:"235.86154146165802",cy:"53.911541461658004",r:"9.86154146165801"}),a.a.createElement("circle",{cx:"271.28591269649905",cy:"54.33591269649903",r:"10.285912696499032"}),a.a.createElement("rect",{x:"6",y:"92.18",rx:"0",ry:"0",width:"56.43",height:"10.56"}),a.a.createElement("rect",{x:"6",y:"133.05",rx:"0",ry:"0",width:"115.84",height:"10.799999999999999"}),a.a.createElement("rect",{x:"7",y:"174.05",rx:"0",ry:"0",width:"84",height:"12"}),a.a.createElement("rect",{x:"47",y:"23.05",rx:"0",ry:"0",width:"0",height:"0"}),a.a.createElement("rect",{x:"9",y:"216.05",rx:"0",ry:"0",width:"102.08",height:"11.06"}),a.a.createElement("rect",{x:"10",y:"253.05",rx:"0",ry:"0",width:"139",height:"11"}))}},58:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(2),i=(r.n(o),r(21)),c=r(18),s=r(27),l=r(103),p=r(54),u=r(17),y=r(86);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){b(e,t,r[t])})}return e}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var S=function(e){function t(){var e,r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return d(n,(r=n=d(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),Object.defineProperty(g(n),"logout",{configurable:!0,enumerable:!0,writable:!0,value:function(){Object(y.a)()}}),r))}var r,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n["Component"]),r=t,(o=[{key:"render",value:function(){var e=this.props.isLoading;return a.a.createElement(u.a,{isLoading:e,LoaderComp:a.a.createElement(p.a,null)},a.a.createElement("div",null,a.a.createElement("p",{className:this.props.classes.nameStyle},this.props.customerState.payload.full_name),a.a.createElement(l.a,{customOrderStyle:this.props.classes.orderStyle,customMenuStyle:this.props.classes.menuStyle,isSideMenu:!0,logout:this.logout})))}}])&&f(r.prototype,o),i&&f(r,i),t}();t.a=Object(i.b)(function(e){return{customerState:e.customerState}},function(e){return{actions:Object(c.b)({},e)}})(Object(s.a)(Object(o.withStyles)(function(e){return{nameStyle:h({},e.typography.subheading,{marginBottom:2*e.spacing.unit,color:e.palette.customGrey.grey500}),orderStyle:h({},e.typography.caption,{color:e.palette.customGrey.grey500,marginTop:e.spacing.unit,marginLeft:-2*e.spacing.unit}),menuStyle:h({},e.typography.caption,{color:e.palette.customGrey.grey500,paddingTop:e.spacing.unit,marginLeft:-2*e.spacing.unit})}})(S)))}},[1231]).default}});