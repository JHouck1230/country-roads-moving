'use strict';

var app = angular.module('cormo');

app.directive('calendar', function() {
  return {
    restrict: 'E',
    templateUrl: '../../html/components/calendar.html'
  }
})