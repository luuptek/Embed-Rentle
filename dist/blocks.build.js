!function(e){function t(l){if(n[l])return n[l].exports;var o=n[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:l})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(1)},function(e,t,n){"use strict";var l=n(2),o=n.n(l),a=n(3),r=(n.n(a),n(4)),i=(n.n(r),n(5)),c=n(6),s=n(7),__=wp.i18n.__,u=wp.blocks.registerBlockType,p=wp.blockEditor.InspectorControls,d=wp.element,h=d.Fragment,m=(d.RawHTML,wp.components),g=m.TextControl,w=m.ToggleControl,b=m.SelectControl,f=m.PanelBody,y=m.PanelRow;u("embed-rentle/shop-block",{title:__("Rentle shop block"),icon:Object(c.a)(),category:"widgets",keywords:[__("rentle")],supports:{html:!1,reusable:!0,align:["full","wide"]},attributes:{shopId:{type:"string"},locationId:{type:"string"},categoryId:{type:"string"},productId:{type:"string"},paddingSize:{type:"string"},disableAutoScroll:{type:"boolean",default:!1},disableHeightAnimation:{type:"boolean",default:!1},locationsView:{type:"boolean",default:!1}},edit:function(e){var t=e.attributes,n=e.className,l=e.setAttributes;return wp.element.createElement(h,null,wp.element.createElement(p,null,wp.element.createElement(f,null,wp.element.createElement(y,null,wp.element.createElement(g,{value:t.shopId,type:"string",onChange:function(e){return l({shopId:e})},placeholder:"Shop ID",label:"Shop ID"})),wp.element.createElement(y,null,wp.element.createElement(g,{value:t.locationId,type:"string",onChange:function(e){return l({locationId:e})},placeholder:"Location ID",label:"Location ID"})),wp.element.createElement(y,null,wp.element.createElement(g,{value:t.categoryId,type:"string",onChange:function(e){return l({categoryId:e})},placeholder:"Category ID",label:"Category ID"})),wp.element.createElement(y,null,wp.element.createElement(g,{value:t.productId,type:"string",onChange:function(e){return l({productId:e})},placeholder:"Product ID",label:"Product ID"})),wp.element.createElement(y,null,wp.element.createElement(w,{label:__("Disable auto scroll"),checked:t.disableAutoScroll,help:"By default, your website user is automatically scrolled to the top of the embedded store when the page changes or a dialog is shown inside the embed. This improves user experience in most cases, but you can disable this by enabling this setting.",onChange:function(){return l({disableAutoScroll:!t.disableAutoScroll})}})),wp.element.createElement(y,null,wp.element.createElement(w,{label:__("Disable height animation"),checked:t.disableHeightAnimation,help:"By default, when the height of the embedded store changes, the height is animated to its new value to prevent stutter. You can disable by enabling this setting.",onChange:function(){return l({disableHeightAnimation:!t.disableHeightAnimation})}})),wp.element.createElement(y,null,wp.element.createElement(w,{label:__("Locations view"),checked:t.locationsView,help:"If you have multiple stores and want to display all the store options for the customer, enable this setting.",onChange:function(){return l({locationsView:!t.locationsView})}})),wp.element.createElement(y,null,wp.element.createElement(b,{label:__("Padding"),value:t.paddingSize,options:[{label:"No padding",value:"no-padding"},{label:"Small padding",value:"small-padding"},{label:"Medium padding",value:"medium-padding"},{label:"Large padding",value:"large-padding"}],onChange:function(e){return l({paddingSize:e})}})))),wp.element.createElement("div",{className:o()(n,t.paddingSize)},Object(i.a)(),!t.shopId&&Object(s.a)(t.shopId,t.locationId,t.categoryId,t.productId)&&wp.element.createElement("p",{className:"wp-block-embed-rentle-shop-block__warning"},__("You need to define shop id.")),t.shopId&&!Object(s.a)(t.shopId,t.locationId,t.categoryId,t.productId)&&wp.element.createElement("p",{className:"wp-block-embed-rentle-shop-block__warning"},__("There is something wrong with the settings. Shop, location, category or product ID should include only letters or numbers.")),t.shopId&&Object(s.a)(t.shopId,t.locationId,t.categoryId,t.productId)&&wp.element.createElement("p",null,__("Your widget is ready. Just preview the page and see it in action."))))},save:function(e){return null}})},function(e,t,n){var l,o;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var o=typeof l;if("string"===o||"number"===o)e.push(l);else if(Array.isArray(l)&&l.length){var r=n.apply(null,l);r&&e.push(r)}else if("object"===o)for(var i in l)a.call(l,i)&&l[i]&&e.push(i)}}return e.join(" ")}var a={}.hasOwnProperty;"undefined"!==typeof e&&e.exports?(n.default=n,e.exports=n):(l=[],void 0!==(o=function(){return n}.apply(t,l))&&(e.exports=o))}()},function(e,t){},function(e,t){},function(e,t,n){"use strict";function l(){return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"306",height:"84",viewBox:"0 0 306 84"},wp.element.createElement("path",{d:"M40.126 41.833l20.49 41.833H23.164c-15.06 0-24.792-4.723-22.938-19.342 1.622-16.643 13.67-22.49 28.731-22.49h11.169zm122.6-10.143c7.375 0 16.612 4.845 16.612 16.704 0 2.242-.214 4.483-.787 6.942h-26.28c1.146 3.978 4.082 5.858 8.736 5.858 4.797 0 6.588-1.23 8.95-2.387l5.444 6.147c-3.582 3.471-8.022 5.712-15.252 5.712-8.952 0-18.762-5.929-18.762-17.644 0-11.931 10.168-21.332 21.339-21.332zm126.161 0c7.375 0 16.613 4.845 16.613 16.704 0 2.242-.214 4.483-.788 6.942h-26.28c1.147 3.978 4.082 5.858 8.736 5.858 4.798 0 6.589-1.23 8.952-2.387l5.442 6.147c-3.58 3.471-8.02 5.712-15.252 5.712-8.95 0-18.762-5.929-18.762-17.644 0-11.931 10.168-21.332 21.34-21.332zM123.236 19.381c11.236 0 18.178 7.037 16.962 17.879-.644 6.39-4.08 11.272-9.59 14.072l9.661 18.309h-11.88l-8.374-16.442h-6.442l-1.717 16.442h-11.522l5.295-50.26h17.606zM207.87 31.69c6.886 0 13.56 4.744 12.353 16.676l-2.272 21.275h-11.216l2.2-20.772c.71-5.895-2.13-7.332-5.184-7.332-5.252 0-8.305 4.959-8.66 6.541l-2.485 21.563H181.39l3.905-37.376h11.218l-.71 6.253c.852-1.797 5.04-6.828 12.07-6.828zm34.141-12.309l-.94 11.961h8.04l-.87 9.466h-8.04l-1.666 15.29c-.216 1.675-.144 3.495 2.535 3.495 2.029 0 3.405-.219 5.506-.51l-.797 9.32c-1.883.801-4.49 1.238-8.113 1.238-6.52 0-11.734-2.33-10.577-13.979l1.666-14.854h-5.286l.869-9.466h5.286l.944-8.884 11.444-3.077zm24.512 0l-5.284 50.26h-11.127l5.281-50.26h11.13zm-103.575 21.54c-3.904 0-7.302 1.9-9.254 6.155h16.412c-.868-4.407-3.47-6.155-7.157-6.155zm126.162 0c-3.904 0-7.301 1.9-9.253 6.155h16.41c-.866-4.407-3.47-6.155-7.156-6.155zM121.838 29.639h-5.773l-1.371 13.334h5.34c4.69 0 8.443-1.864 8.948-7.169.578-4.66-2.454-6.165-7.144-6.165zM60.503 0c15.06 0 24.791 4.723 22.938 19.342-1.622 16.643-13.67 22.491-28.731 22.491H40.126L19.636 0h40.867z"}))}t.a=l},function(e,t,n){"use strict";function l(){return wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},wp.element.createElement("path",{fillRule:"evenodd",d:"M16.85 0c2.884 0 4.85.64 6.011 1.959.941 1.067 1.302 2.528 1.072 4.34-.429 4.402-3.479 6.833-8.587 6.833H13.37L18.695 24H7.15c-2.884 0-4.85-.64-6.011-1.959-.941-1.067-1.302-2.528-1.072-4.34.429-4.402 3.479-6.833 8.588-6.833h1.087L4.418 0h12.433zm-6 13.132H8.655c-3.95 0-6.023 1.577-6.339 4.821-.149 1.181.022 2.025.521 2.592.697.79 2.148 1.191 4.313 1.191h7.915l-4.215-8.604zm6-10.868H8.049l4.214 8.604h3.084c3.948 0 6.021-1.577 6.337-4.82.15-1.182-.02-2.026-.52-2.593-.697-.79-2.148-1.191-4.312-1.191z"}))}t.a=l},function(e,t,n){"use strict";n.d(t,"a",function(){return o});var l=function(e){return e.match("^[A-Za-z0-9]+$")},o=function(e,t,n,o){return!(e&&!l(e))&&(!(t&&!l(t))&&(!(n&&!l(n))&&!(o&&!l(o))))}}]);