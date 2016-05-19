'use strict';

var app = angular.module('cormo', ['ui.router', 'ui.bootstrap', 'firebase', 'ngTouch', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/html/home.html',
    controller: 'homeCtrl'
  })
  .state('about', {
    url: '/about',
    templateUrl: '/html/about.html',
    // controller: 'aboutCtrl'
  })
  // .state('rates', {
  //   url: '/rates',
  //   templateUrl: '/html/rates.html',
  //   // controller: 'ratesCtrl'
  // })
  // .state('calendar', {
  //   url: '/calendar',
  //   templateUrl: '/html/calendar.html',
  //   // controller: 'calendarCtrl'
  // })
  .state('contact', {
    url: '/contact',
    templateUrl: '/html/contact.html',
    controller: 'contactCtrl'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/html/login.html',
    controller: 'loginCtrl'
  })
  .state('terms', {
    url: '/terms',
    templateUrl: '/html/terms.html',
    // controller: 'termsCtrl'
  })
  $urlRouterProvider.otherwise('/');
})

app.constant('FB_URL', 'https://country-roads-moving.firebaseio.com/');

