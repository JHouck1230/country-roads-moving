'use strict';

var app = angular.module('cormo');

app.directive('navbar', function() {
  return {
    restrict: 'E',
    templateUrl: '../../html/components/navbar.html',
    controller: 'navCtrl'
  }
})