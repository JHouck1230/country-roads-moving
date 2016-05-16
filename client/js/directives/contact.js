'use strict';

var app = angular.module('cormo');

app.directive('contact', function() {
  return {
    restrict: 'E',
    templateUrl: '../../html/components/contact.html'
  }
})