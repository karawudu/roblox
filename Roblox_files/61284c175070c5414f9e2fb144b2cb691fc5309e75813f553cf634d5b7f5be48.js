!function(){"use strict";var e,t={n:function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},d:function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},n=Roblox,r=t.n(n),o=CoreUtilities,a={assetRootUrlTemplate:"catalog",bundleRootUrlTemplate:"bundles",getRecommendations:{url:n.EnvironmentUrls.catalogApi+"/v2/recommendations/complement-assets",retryable:!0,withCredentials:!0},postItemDetails:{url:n.EnvironmentUrls.catalogApi+"/v1/catalog/items/details",retryable:!0,withCredentials:!0},getItemOwnershipUrl:function(e,t,r){return n.EnvironmentUrls.inventoryApi+"/v1/users/"+e+"/items/"+t+"/"+r+"/is-owned"}};!function(e){e[e.DETAILS_NOT_HYDRATED=0]="DETAILS_NOT_HYDRATED",e[e.DETAILS_LOADING=1]="DETAILS_LOADING",e[e.DETAILS_HYDRATED=2]="DETAILS_HYDRATED"}(e||(e={}));var i=1e4,s=1e3,u=1e4,l=500,c="asset",f="bundle",d=CoreRobloxUtilities,p=function(e,t){return"ITEM_DETAILS_HYDRATION_"+t.toUpperCase()+"_"+e},v=function(e){return"ITEM_DETAILS_HYDRATION_"+e.toUpperCase()+"_TRACKING"},h=function(e){try{return d.localStorageService.getLocalStorage(v(e))}catch(e){return}},m=function(e,t){var n=h(e);null==n&&(n=function(e){var t=new Array;return d.localStorageService.setLocalStorage(v(e),t),t}(e)),n.push(t),d.localStorageService.setLocalStorage(v(e),n)},D=function(e,t){try{return d.localStorageService.getLocalStorage(p(e,t))}catch(e){return}},y=function(t,n,r){if(!r){var o={};o.status=e.DETAILS_LOADING,o.lastModifiedTimestamp=Date.now(),d.localStorageService.setLocalStorage(p(t,n),o),m(n,t)}},T=function(t,n,r,o){if(!o){var a={};a.status=e.DETAILS_HYDRATED,a.details=r,a.lastModifiedTimestamp=Date.now(),d.localStorageService.setLocalStorage(p(t,n),a),m(n,t)}},S=function(e){var t=h(e),n=new Array;null!=t&&t.forEach((function(t){var r=D(t,e);void 0===(null==r?void 0:r.lastModifiedTimestamp)||Date.now()-(null==r?void 0:r.lastModifiedTimestamp)>u?d.localStorageService.removeLocalStorage(p(t,e)):n.push(t)})),d.localStorageService.setLocalStorage(v(e),n)},A=function(){S(c),S(f)},g=function(e){return new Promise((function(t){return setTimeout((function(){return t(void 0)}),e)}))},E=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function s(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}u((r=r.apply(e,t||[])).next())}))},I=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},w=function(e){var t={items:e};return o.httpService.post(a.postItemDetails,t)},b=function(e,t){return E(void 0,void 0,Promise,(function(){var n;return I(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),t<=0?[2,void 0]:(n=new Array,[4,Promise.resolve(w(e))]);case 1:return r.sent().data.data.forEach((function(e){n.push(e)})),n.length===e.length?[2,n]:[3,3];case 2:return r.sent(),[2,b(e,t-1)];case 3:return[2,b(e,t-1)]}}))}))},L=function(t,n){return E(void 0,void 0,Promise,(function(){var r,o,a;return I(this,(function(i){switch(i.label){case 0:return r=new Array,o=new Array,t.forEach((function(t){var n=D(t.id,t.itemType);void 0!==n&&n.status===e.DETAILS_HYDRATED?r.push(n.details):o.push(t)})),o.length>0&&n>0?[4,g(l)]:[3,3];case 1:return i.sent(),[4,L(o,n-1)];case 2:return(a=i.sent()).hydratedItemDetails=r.concat(a.hydratedItemDetails),[2,a];case 3:return[2,{hydratedItemDetails:r,nonHydratedItemDetails:o}]}}))}))},_=function(t,n){return E(void 0,void 0,Promise,(function(){var r,o,a,u,l,c,f;return I(this,(function(d){switch(d.label){case 0:return r=null!=n&&n,A(),o=new Array,a=new Array,u=new Array,t.forEach((function(t){var n=D(t.id,t.itemType);null==n?(a.push(t),y(t.id,t.itemType,r)):n.status===e.DETAILS_LOADING||n.status===e.DETAILS_NOT_HYDRATED?Date.now()-n.lastModifiedTimestamp>s?(a.push(t),y(t.id,t.itemType,r)):u.push(t):Date.now()-n.lastModifiedTimestamp>i?(a.push(t),y(t.id,t.itemType,r)):o.push(n.details)})),a.length>0?[4,Promise.resolve(b(a,3))]:[3,2];case 1:void 0!==(l=d.sent())&&l.forEach((function(e){T(e.id,e.itemType,e,r),o.push(e)})),d.label=2;case 2:return[4,L(u,3)];case 3:return(c=d.sent()).hydratedItemDetails.forEach((function(e){o.push(e)})),c.nonHydratedItemDetails.length>0?[4,Promise.resolve(b(u,3))]:[3,5];case 4:void 0!==(f=d.sent())&&f.forEach((function(e){T(e.id,e.itemType,e,r),o.push(e)})),d.label=5;case 5:return[2,o]}}))}))};r().ItemDetailsHydrationService={getItemDetails:_}}();
//# sourceMappingURL=https://js.rbxcdn.com/c37c178cddede2550469cd58d7b4be86-itemDetailsHydrationService.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("ItemDetailsHydrationService");