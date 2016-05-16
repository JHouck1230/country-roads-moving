'use strict';

var app = angular.module('cormo');

app.directive('rates', function() {
  return {
    restrict: 'E',
    templateUrl: '../../html/components/rates.html'
  }
})