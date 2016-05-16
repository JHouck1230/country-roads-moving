'use strict';

var app = angular.module('cormo', ['ui.router', 'ui.bootstrap', 'firebase', 'ngTouch', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  // .state('home', {
  //   url: '/',
  //   templateUrl: '/html/home.html',
  //   // controller: 'homeCtrl'
  // })
  .state('about', {
    url: '/about',
    templateUrl: '/html/about.html',
    // controller: 'aboutCtrl'
  })
  // .state('rates', {
  //   url: '/rates',
  //   templateUrl: '/html/components/rates.html',
  //   // controller: 'ratesCtrl'
  // })
  // .state('calendar', {
  //   url: '/calendar',
  //   templateUrl: '/html/components/calendar.html',
  //   // controller: 'calendarCtrl'
  // })
  // .state('contact', {
  //   url: '/contact',
  //   templateUrl: '/html/components/contact.html',
  //   // controller: 'contactCtrl'
  // })
  // .state('login', {
  //   url: '/login',
  //   templateUrl: '/html/login.html',
  //   controller: 'loginCtrl'
  // })
  $urlRouterProvider.otherwise('/about');
})

app.constant('FB_URL', 'https://country-roads-moving.firebaseio.com/');

