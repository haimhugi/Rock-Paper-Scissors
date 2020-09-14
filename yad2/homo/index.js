var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};$jscomp.makeIterator=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):$jscomp.arrayIterator(a)};
$jscomp.getGlobal=function(a){a=["object"==typeof globalThis&&globalThis,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};$jscomp.polyfill=function(a,b,c,f){if(b){c=$jscomp.global;a=a.split(".");for(f=0;f<a.length-1;f++){var e=a[f];e in c||(c[e]={});c=c[e]}a=a[a.length-1];f=c[a];b=b(f);b!=f&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})}};$jscomp.FORCE_POLYFILL_PROMISE=!1;
$jscomp.polyfill("Promise",function(a){function b(){this.batch_=null}function c(a){return a instanceof e?a:new e(function(b,m){b(a)})}if(a&&!$jscomp.FORCE_POLYFILL_PROMISE)return a;b.prototype.asyncExecute=function(a){if(null==this.batch_){this.batch_=[];var b=this;this.asyncExecuteFunction(function(){b.executeBatch_()})}this.batch_.push(a)};var f=$jscomp.global.setTimeout;b.prototype.asyncExecuteFunction=function(a){f(a,0)};b.prototype.executeBatch_=function(){for(;this.batch_&&this.batch_.length;){var a=
this.batch_;this.batch_=[];for(var b=0;b<a.length;++b){var c=a[b];a[b]=null;try{c()}catch(d){this.asyncThrow_(d)}}}this.batch_=null};b.prototype.asyncThrow_=function(a){this.asyncExecuteFunction(function(){throw a;})};var e=function(a){this.state_=0;this.result_=void 0;this.onSettledCallbacks_=[];var b=this.createResolveAndReject_();try{a(b.resolve,b.reject)}catch(k){b.reject(k)}};e.prototype.createResolveAndReject_=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}var b=this,c=!1;
return{resolve:a(this.resolveTo_),reject:a(this.reject_)}};e.prototype.resolveTo_=function(a){if(a===this)this.reject_(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof e)this.settleSameAsPromise_(a);else{a:switch(typeof a){case "object":var b=null!=a;break a;case "function":b=!0;break a;default:b=!1}b?this.resolveToNonPromiseObj_(a):this.fulfill_(a)}};e.prototype.resolveToNonPromiseObj_=function(a){var b=void 0;try{b=a.then}catch(k){this.reject_(k);return}"function"==typeof b?
this.settleSameAsThenable_(b,a):this.fulfill_(a)};e.prototype.reject_=function(a){this.settle_(2,a)};e.prototype.fulfill_=function(a){this.settle_(1,a)};e.prototype.settle_=function(a,b){if(0!=this.state_)throw Error("Cannot settle("+a+", "+b+"): Promise already settled in state"+this.state_);this.state_=a;this.result_=b;this.executeOnSettledCallbacks_()};e.prototype.executeOnSettledCallbacks_=function(){if(null!=this.onSettledCallbacks_){for(var a=0;a<this.onSettledCallbacks_.length;++a)h.asyncExecute(this.onSettledCallbacks_[a]);
this.onSettledCallbacks_=null}};var h=new b;e.prototype.settleSameAsPromise_=function(a){var b=this.createResolveAndReject_();a.callWhenSettled_(b.resolve,b.reject)};e.prototype.settleSameAsThenable_=function(a,b){var c=this.createResolveAndReject_();try{a.call(b,c.resolve,c.reject)}catch(d){c.reject(d)}};e.prototype.then=function(a,b){function c(a,b){return"function"==typeof a?function(b){try{d(a(b))}catch(n){g(n)}}:b}var d,g,r=new e(function(a,b){d=a;g=b});this.callWhenSettled_(c(a,d),c(b,g));return r};
e.prototype["catch"]=function(a){return this.then(void 0,a)};e.prototype.callWhenSettled_=function(a,b){function c(){switch(d.state_){case 1:a(d.result_);break;case 2:b(d.result_);break;default:throw Error("Unexpected state: "+d.state_);}}var d=this;null==this.onSettledCallbacks_?h.asyncExecute(c):this.onSettledCallbacks_.push(c)};e.resolve=c;e.reject=function(a){return new e(function(b,c){c(a)})};e.race=function(a){return new e(function(b,e){for(var d=$jscomp.makeIterator(a),g=d.next();!g.done;g=
d.next())c(g.value).callWhenSettled_(b,e)})};e.all=function(a){var b=$jscomp.makeIterator(a),f=b.next();return f.done?c([]):new e(function(a,g){function d(b){return function(d){e[b]=d;l--;0==l&&a(e)}}var e=[],l=0;do e.push(void 0),l++,c(f.value).callWhenSettled_(d(e.length-1),g),f=b.next();while(!f.done)})};return e},"es6","es3");$jscomp.SYMBOL_PREFIX="jscomp_symbol_";$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};
$jscomp.SymbolClass=function(a,b){this.$jscomp$symbol$id_=a;$jscomp.defineProperty(this,"description",{configurable:!0,writable:!0,value:b})};$jscomp.SymbolClass.prototype.toString=function(){return this.$jscomp$symbol$id_};$jscomp.Symbol=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX+(c||"")+"_"+b++,c)}var b=0;return a}();
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))}});$jscomp.initSymbolIterator=function(){}};
$jscomp.initSymbolAsyncIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.asyncIterator;a||(a=$jscomp.global.Symbol.asyncIterator=$jscomp.global.Symbol("Symbol.asyncIterator"));$jscomp.initSymbolAsyncIterator=function(){}};$jscomp.iteratorPrototype=function(a){$jscomp.initSymbolIterator();a={next:a};a[$jscomp.global.Symbol.iterator]=function(){return this};return a};$jscomp.underscoreProtoCanBeSet=function(){var a={a:!0},b={};try{return b.__proto__=a,b.a}catch(c){}return!1};
$jscomp.setPrototypeOf="function"==typeof Object.setPrototypeOf?Object.setPrototypeOf:$jscomp.underscoreProtoCanBeSet()?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null;$jscomp.generator={};$jscomp.generator.ensureIteratorResultIsObject_=function(a){if(!(a instanceof Object))throw new TypeError("Iterator result "+a+" is not an object");};
$jscomp.generator.Context=function(){this.isRunning_=!1;this.yieldAllIterator_=null;this.yieldResult=void 0;this.nextAddress=1;this.finallyAddress_=this.catchAddress_=0;this.finallyContexts_=this.abruptCompletion_=null};$jscomp.generator.Context.prototype.start_=function(){if(this.isRunning_)throw new TypeError("Generator is already running");this.isRunning_=!0};$jscomp.generator.Context.prototype.stop_=function(){this.isRunning_=!1};
$jscomp.generator.Context.prototype.jumpToErrorHandler_=function(){this.nextAddress=this.catchAddress_||this.finallyAddress_};$jscomp.generator.Context.prototype.next_=function(a){this.yieldResult=a};$jscomp.generator.Context.prototype.throw_=function(a){this.abruptCompletion_={exception:a,isException:!0};this.jumpToErrorHandler_()};$jscomp.generator.Context.prototype["return"]=function(a){this.abruptCompletion_={"return":a};this.nextAddress=this.finallyAddress_};
$jscomp.generator.Context.prototype.jumpThroughFinallyBlocks=function(a){this.abruptCompletion_={jumpTo:a};this.nextAddress=this.finallyAddress_};$jscomp.generator.Context.prototype.yield=function(a,b){this.nextAddress=b;return{value:a}};$jscomp.generator.Context.prototype.yieldAll=function(a,b){var c=$jscomp.makeIterator(a),f=c.next();$jscomp.generator.ensureIteratorResultIsObject_(f);if(f.done)this.yieldResult=f.value,this.nextAddress=b;else return this.yieldAllIterator_=c,this.yield(f.value,b)};
$jscomp.generator.Context.prototype.jumpTo=function(a){this.nextAddress=a};$jscomp.generator.Context.prototype.jumpToEnd=function(){this.nextAddress=0};$jscomp.generator.Context.prototype.setCatchFinallyBlocks=function(a,b){this.catchAddress_=a;void 0!=b&&(this.finallyAddress_=b)};$jscomp.generator.Context.prototype.setFinallyBlock=function(a){this.catchAddress_=0;this.finallyAddress_=a||0};$jscomp.generator.Context.prototype.leaveTryBlock=function(a,b){this.nextAddress=a;this.catchAddress_=b||0};
$jscomp.generator.Context.prototype.enterCatchBlock=function(a){this.catchAddress_=a||0;a=this.abruptCompletion_.exception;this.abruptCompletion_=null;return a};$jscomp.generator.Context.prototype.enterFinallyBlock=function(a,b,c){c?this.finallyContexts_[c]=this.abruptCompletion_:this.finallyContexts_=[this.abruptCompletion_];this.catchAddress_=a||0;this.finallyAddress_=b||0};
$jscomp.generator.Context.prototype.leaveFinallyBlock=function(a,b){var c=this.finallyContexts_.splice(b||0)[0];if(c=this.abruptCompletion_=this.abruptCompletion_||c){if(c.isException)return this.jumpToErrorHandler_();void 0!=c.jumpTo&&this.finallyAddress_<c.jumpTo?(this.nextAddress=c.jumpTo,this.abruptCompletion_=null):this.nextAddress=this.finallyAddress_}else this.nextAddress=a};$jscomp.generator.Context.prototype.forIn=function(a){return new $jscomp.generator.Context.PropertyIterator(a)};
$jscomp.generator.Context.PropertyIterator=function(a){this.object_=a;this.properties_=[];for(var b in a)this.properties_.push(b);this.properties_.reverse()};$jscomp.generator.Context.PropertyIterator.prototype.getNext=function(){for(;0<this.properties_.length;){var a=this.properties_.pop();if(a in this.object_)return a}return null};$jscomp.generator.Engine_=function(a){this.context_=new $jscomp.generator.Context;this.program_=a};
$jscomp.generator.Engine_.prototype.next_=function(a){this.context_.start_();if(this.context_.yieldAllIterator_)return this.yieldAllStep_(this.context_.yieldAllIterator_.next,a,this.context_.next_);this.context_.next_(a);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.return_=function(a){this.context_.start_();var b=this.context_.yieldAllIterator_;if(b)return this.yieldAllStep_("return"in b?b["return"]:function(a){return{value:a,done:!0}},a,this.context_["return"]);this.context_["return"](a);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.throw_=function(a){this.context_.start_();if(this.context_.yieldAllIterator_)return this.yieldAllStep_(this.context_.yieldAllIterator_["throw"],a,this.context_.next_);this.context_.throw_(a);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.yieldAllStep_=function(a,b,c){try{var f=a.call(this.context_.yieldAllIterator_,b);$jscomp.generator.ensureIteratorResultIsObject_(f);if(!f.done)return this.context_.stop_(),f;var e=f.value}catch(h){return this.context_.yieldAllIterator_=null,this.context_.throw_(h),this.nextStep_()}this.context_.yieldAllIterator_=null;c.call(this.context_,e);return this.nextStep_()};
$jscomp.generator.Engine_.prototype.nextStep_=function(){for(;this.context_.nextAddress;)try{var a=this.program_(this.context_);if(a)return this.context_.stop_(),{value:a.value,done:!1}}catch(b){this.context_.yieldResult=void 0,this.context_.throw_(b)}this.context_.stop_();if(this.context_.abruptCompletion_){a=this.context_.abruptCompletion_;this.context_.abruptCompletion_=null;if(a.isException)throw a.exception;return{value:a["return"],done:!0}}return{value:void 0,done:!0}};
$jscomp.generator.Generator_=function(a){this.next=function(b){return a.next_(b)};this["throw"]=function(b){return a.throw_(b)};this["return"]=function(b){return a.return_(b)};$jscomp.initSymbolIterator();this[Symbol.iterator]=function(){return this}};$jscomp.generator.createGenerator=function(a,b){var c=new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(b));$jscomp.setPrototypeOf&&$jscomp.setPrototypeOf(c,a.prototype);return c};
$jscomp.asyncExecutePromiseGenerator=function(a){function b(b){return a.next(b)}function c(b){return a["throw"](b)}return new Promise(function(f,e){function h(a){a.done?f(a.value):Promise.resolve(a.value).then(b,c).then(h,e)}h(a.next())})};$jscomp.asyncExecutePromiseGeneratorFunction=function(a){return $jscomp.asyncExecutePromiseGenerator(a())};$jscomp.asyncExecutePromiseGeneratorProgram=function(a){return $jscomp.asyncExecutePromiseGenerator(new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(a)))};
var app=angular.module("SuperDS",[]).controller("MainCtrl",["$scope",function(a){function b(){return new Promise(function(a){chrome.storage.sync.get(["general_settings"],function(b){null!=b.general_settings?a(b.general_settings):a({country:"US",duplicate_photos:"on"})})})}function c(a){return new Promise(function(b){chrome.storage.sync.get(["user_settings"],function(d){null!=d.user_settings&&null!=d.user_settings[a]?b(d.user_settings[a]):b({breakeven:"15",profit:"25",payment:"Safe and secure payment with PayPal!",
returns:"30 Days returns!",shipping:"Free Worldwide Shipping!",template:"1"})})})}function f(b){(a.auth=b)&&a.$apply()}function e(){return new Promise(function(a){chrome.tabs.getSelected(null,function(b){b=b.url;var d="none";b.includes("aliexpress.com/item/")?d="aliexpress":b.includes("aewholesale")?d="aewholesale":b.includes("costway")&&(d="costway");a(d)})})}function h(){return new Promise(function(a){chrome.runtime.sendMessage({orders:!0,action:"lastDownloadDate"},function(b){a(b)})})}function m(){return new Promise(function(a){chrome.runtime.sendMessage({orders:!0,
action:"isLoginToEbay"},function(b){a(b)})})}function q(){return new Promise(function(a){chrome.storage.sync.get(["auto_settings"],function(b){null!=b.auto_settings?a(b.auto_settings):a({sync_orders:!1})})})}toastr.options={preventDuplicates:!0,positionClass:"toast-bottom-right",timeOut:4E3};a.suppliers={aliexpress:"AliExpress",aewholesale:"AEWholesale",costway:"Costway"};a.MAX_ITEM_SPEC=5;a.login=function(){var a=$("#input_mail").val(),b=$("#input_password").val(),c=$("#input_remember").prop("checked");
$("#avatar").addClass("rotate");$.ajax({type:"POST",url:"https://super-ds.com/users/login",contentType:"application/json",dataType:"json",data:JSON.stringify({mail:a,password:b}),success:function(a){f(!0);c?chrome.storage.sync.set({userData:{user_token:a.token,user_name:a.name,user_mail:a.mail}}):chrome.storage.local.set({userData:{user_token:a.token,user_name:a.name,user_mail:a.mail}});$("#avatar").removeClass("rotate");toastr.success("You have logged in to the system!")},error:function(a){$("#avatar").removeClass("rotate");
null!=a.responseJSON&&"Authentication failed"==a.responseJSON.message?toastr.error("Authentication failed.."):toastr.error("Server communication error..")}})};a.init_pages=function(){a.page={lister:!1,settings:!1,automation:!1,contact:!1,about:!1}};a.show=function(b,c){if("click"!=c.type)return!0;$("#links a").each(function(){$(this).removeClass("menu-link-clicked");$(this).removeClass("supplier-link-clicked")});window.toastr.clear();a.init_pages();"{{supplier}}"==b?($(c.currentTarget).addClass("supplier-link-clicked"),
a.page[c.currentTarget.textContent]=!0):($(c.currentTarget).addClass("menu-link-clicked"),a.page[b]=!0)};$.fn.serializeObject=function(){var a={},b=this.serializeArray();$.each(b,function(){a[this.name]?(a[this.name].push||(a[this.name]=[a[this.name]]),a[this.name].push(this.value||"")):a[this.name]=this.value||""});return a};a.saveSupplierSettings=function(b){var d;return $jscomp.asyncExecutePromiseGeneratorProgram(function(c){if(!$("#settings_form_"+b)[0].checkValidity())return c["return"]();d=
$("#settings_form_"+b).serializeObject();if(null==a.suppliers[b.toLowerCase()])return toastr.error("Error saving an unknown supplier.."),c["return"]();chrome.storage.sync.get(["user_settings"],function(a){var c={};null!=a&&null!=a.user_settings&&(c=a.user_settings);c[b]=d;chrome.storage.sync.set({user_settings:c},function(){toastr.success("Settings saved successfully!")})});c.jumpToEnd()})};a.clearItemSpecifics=function(){for(var b=0;b<a.MAX_ITEM_SPEC;b++)$($("#itemSpec_"+b).find("#itemSpecKey_"+
b)[0]).val(""),$($("#itemSpec_"+b).find("#itemSpecVal_"+b)[0]).val("");toastr.info("Fixed item specifics were cleared!")};var k=function(){for(var b={},c=0;c<a.MAX_ITEM_SPEC;c++){var e=$("#itemSpec_"+c).find("#itemSpecKey_"+c)[0].value,f=$("#itemSpec_"+c).find("#itemSpecVal_"+c)[0].value;45>=e.length&&45>=f.length&&0<e.length&&0<f.length&&(b[c]={key:e,value:f})}return b};a.saveGeneralSettings=function(){var a;return $jscomp.asyncExecutePromiseGeneratorProgram(function(b){if(!$("#general_settings_form")[0].checkValidity())return b["return"]();
a=$("#general_settings_form").serializeObject();a.fixedItemSpecs=k();chrome.storage.sync.set({general_settings:a},function(){toastr.success("Settings saved successfully!")});b.jumpToEnd()})};a.previewTemplate=function(a){var b=$("#template_select_"+a).val();a=$("#template_select_"+a)[0][b-1].textContent;swal.fire({title:"Preview Template - ("+a+")",animation:!1,customClass:{popup:"swal-preview"},showCancelButton:!1,confirmButtonText:"Close",confirmButtonColor:"#0f8813",html:"<div style='border:2px solid black;'><img src='/templates/"+
b+".png' style='max-width:100%;max-height:100%;'></img></div>"})};a.upload=function(){$("#upload_form")[0].checkValidity()&&chrome.tabs.getSelected(null,function(a){var b;return $jscomp.asyncExecutePromiseGeneratorProgram(function(c){if(1==c.nextAddress)return $("#upload_button input").addClass("rotate"),c.yield(e(),2);b=c.yieldResult;if(null==b||"none"==b)return $("#upload_button input").removeClass("rotate"),toastr.error("Couldn't find a product to upload.."),c["return"]();chrome.runtime.sendMessage({callback:!0,
action:"import_product",from:b,tab_id:a.id,options:{qty:$("#input_qty").val(),addCost:$("#input_addCost").val()}});c.jumpToEnd()})})};a.logOut=function(){chrome.storage.sync.get(["userData"],function(a){null!=a.userData&&chrome.storage.sync.remove(["userData"]);$("#logout_link a").click();f(!1)})};a.toggleSyncOrders=function(){var b,c;return $jscomp.asyncExecutePromiseGeneratorProgram(function(d){if(1==d.nextAddress)return a.sync_orders?d.jumpTo(2):d.yield(m(),3);if(2!=d.nextAddress&&(b=d.yieldResult,
!b&&0==a.sync_orders))return $("#soErrors").html('You have to login to Ebay, click <a href="https://k2b-bulk.ebay.com/ws/eBayISAPI.dll?SMDownloadRequestSuccess" target="_blank">here</a>!'),d["return"]();a.sync_orders=!a.sync_orders;a.sync_orders&&a.$apply();c={sync_orders:a.sync_orders};chrome.storage.sync.set({auto_settings:c},function(){toastr.success((a.sync_orders?"Start":"Stop")+" syncing orders..")});d.jumpToEnd()})};(function(){return new Promise(function(b){a.loading=!0;chrome.storage.sync.get(["userData"],
function(c){if(null==c.userData)a.loading=!1,a.$apply();else{try{var d=c.userData.user_token}catch(t){b(f(!1))}$.ajax({type:"POST",url:"https://super-ds.com/users/autologin",contentType:"application/json",dataType:"json",data:JSON.stringify({token:d}),success:function(a){null!=a&&null!=a.token||b(f(!1));chrome.storage.sync.set({userData:{user_token:a.token,user_name:a.name,user_mail:a.mail}},function(){b(f(!0))})},error:function(a){"rejected"==a.state()&&toastr.error("Server communication error..");
b(f(!1))},complete:function(){a.loading=!1}})}})})})();a.init_pages();a.page.lister=!0;(function(){var b;return $jscomp.asyncExecutePromiseGeneratorProgram(function(c){if(1==c.nextAddress)return a.showMinQty=!1,a.showAddCost=!1,c.yield(e(),2);b=c.yieldResult;switch(b){case "aliexpress":a.showMinQty=!0;a.showAddCost=!0;break;case "aewholesale":a.showAddCost=!0;break;case "costway":a.showAddCost=!0}c.jumpToEnd()})})();(function(){var b;return $jscomp.asyncExecutePromiseGeneratorProgram(function(c){if(1==
c.nextAddress)return c.yield(q(),2);if(3!=c.nextAddress)return autoSettings=c.yieldResult,a.sync_orders=autoSettings.sync_orders,c.yield(h(),3);b=c.yieldResult;if(null==b)b="Waiting for first download..";else{var d=b;d=new Date(d);b=d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear()+" "+d.getHours()+":"+(10>d.getMinutes()?"0"+d.getMinutes():d.getMinutes())+":"+d.getSeconds()}a.syncOrders={lastDownloadDate:b};c.jumpToEnd()})})();(function(){var d,e,f,h,l,k,n,m,p;return $jscomp.asyncExecutePromiseGeneratorProgram(function(g){switch(g.nextAddress){case 1:d=
{},e=$jscomp.makeIterator(Object.entries(a.suppliers)),f=e.next();case 2:if(f.done)return a.userSettings=d,p=a,g.yield(b(),6);h=f.value;l=$jscomp.makeIterator(h);l.next();k=l.next().value;n=d;m=k;return g.yield(c(k),5);case 5:n[m]=g.yieldResult;f=e.next();g.jumpTo(2);break;case 6:p.generalSettings=g.yieldResult,g.jumpToEnd()}})})()}]);
chrome.runtime.onMessage.addListener(function(a,b,c){if("popup"==a.to){if("notification"==a.action)switch(toastr.clear(),$("#upload_button input").removeClass("rotate"),a.type){case "success":toastr.success(a.message);break;case "info":toastr.info(a.message);break;case "warning":toastr.warning(a.message);break;default:toastr.error(a.message)}return!1}});