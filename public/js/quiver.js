"use strict";var app=angular.module("cormo",["ui.router","ui.bootstrap","firebase","ngTouch","ngAnimate"]);app.config(["$stateProvider","$urlRouterProvider",function(t,r){t.state("home",{url:"/",templateUrl:"/html/home.html",controller:"homeCtrl"}).state("about",{url:"/about",templateUrl:"/html/about.html"}).state("contact",{url:"/contact",templateUrl:"/html/contact.html",controller:"contactCtrl"}).state("login",{url:"/login",templateUrl:"/html/login.html",controller:"loginCtrl"}).state("terms",{url:"/terms",templateUrl:"/html/terms.html"}),r.otherwise("/")}]),app.constant("FB_URL","https://country-roads-moving.firebaseio.com/");var app=angular.module("cormo");app.controller("contactCtrl",["$scope","MailService",function(t,r){t.sendMail=function(){r.sendMail(t.customer).then(function(t){return console.log("message sent! res: ",t.data)},function(t){return console.error("Error: ",t)})}}]);var app=angular.module("cormo");app.controller("homeCtrl",["$scope",function(t){}]);var app=angular.module("cormo");app.controller("loginCtrl",["$scope","$firebaseAuth","FB_URL",function(t,r,o){var e=new Firebase(o);t.authObj=r(e),t.signIn=function(r){t.authObj.$authWithPassword({email:r.email,password:r.password}).then(function(t){console.log("Logged in as:",t.uid)})["catch"](function(t){console.error("Authentication failed:",t)})}}]);var app=angular.module("cormo");app.controller("mainCtrl",["$scope",function(t){function r(t){for(var r=0,o=a.length;o>r;r++)a[r].id=t.pop()}function o(){for(var t=[],r=0;n>r;++r)t[r]=r;return e(t)}function e(t){var r,o,e=t.length;if(e)for(;--e;)o=Math.floor(Math.random()*(e+1)),r=t[o],t[o]=t[e],t[e]=r;return t}t.myInterval=5e3,t.noWrapSlides=!1,t.active=0;var a=t.slides=[],n=0;t.addSlide=function(){var t=600+a.length+1;a.push({image:"http://lorempixel.com/"+t+"/300",text:["Nice image","Awesome photograph","That is so cool","I love that"][a.length%4],id:n++})},t.randomize=function(){var t=o();r(t)};for(var l=0;4>l;l++)t.addSlide()}]);var app=angular.module("cormo");app.directive("footerContent",function(){return{restrict:"E",templateUrl:"../../html/components/footerContent.html"}});var app=angular.module("cormo");app.directive("navbar",function(){return{restrict:"E",templateUrl:"../../html/components/navbar.html"}});var app=angular.module("cormo");app.service("UserService",function(){var t=this;this.setUser(function(r){return t.user=r}),this.getUser(function(r){return t.user})});var app=angular.module("cormo");app.service("MailService",["$http",function(t){this.sendMail=function(r){return t.post("/messages",r)}}]);
//# sourceMappingURL=quiver.js.map
