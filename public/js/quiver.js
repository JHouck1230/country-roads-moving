"use strict";var app=angular.module("cormo",["ui.router","ui.bootstrap","firebase","ngTouch","ngAnimate"]);app.config(["$stateProvider","$urlRouterProvider",function(t,o){t.state("home",{url:"/",templateUrl:"/html/home.html",controller:"homeCtrl"}).state("about",{url:"/about",templateUrl:"/html/about.html"}).state("contact",{url:"/contact",templateUrl:"/html/contact.html"}).state("login",{url:"/login",templateUrl:"/html/login.html",controller:"loginCtrl"}),o.otherwise("/")}]),app.constant("FB_URL","https://country-roads-moving.firebaseio.com/");var app=angular.module("cormo");app.controller("homeCtrl",["$scope",function(t){function o(t){for(var o=0,r=a.length;r>o;o++)a[o].id=t.pop()}function r(){for(var t=[],o=0;n>o;++o)t[o]=o;return e(t)}function e(t){var o,r,e=t.length;if(e)for(;--e;)r=Math.floor(Math.random()*(e+1)),o=t[r],t[r]=t[e],t[e]=o;return t}t.myInterval=5e3,t.noWrapSlides=!1,t.active=0;var a=t.slides=[],n=0;t.addSlide=function(){var t=600+a.length+1;a.push({image:"http://lorempixel.com/"+t+"/300",text:["Nice image","Awesome photograph","That is so cool","I love that"][a.length%4],id:n++})},t.randomize=function(){var t=r();o(t)};for(var l=0;4>l;l++)t.addSlide()}]);var app=angular.module("cormo");app.controller("loginCtrl",["$scope","$firebaseAuth","FB_URL",function(t,o,r){var e=new Firebase(r);t.authObj=o(e),t.signIn=function(o){t.authObj.$authWithPassword({email:o.email,password:o.password}).then(function(t){console.log("Logged in as:",t.uid)})["catch"](function(t){console.error("Authentication failed:",t)})}}]);var app=angular.module("cormo");app.controller("mainCtrl",["$scope",function(t){console.log("mainCtrl")}]);var app=angular.module("cormo");app.controller("navCtrl",function(){console.log("navCtrl")});var app=angular.module("cormo");app.service("UserService",function(){var t=this;this.setUser(function(o){return t.user=o}),this.getUser(function(o){return t.user})});var app=angular.module("cormo");app.directive("navbar",function(){return{restrict:"E",templateUrl:"../../html/components/navbar.html",controller:"navCtrl"}});
//# sourceMappingURL=quiver.js.map
