'use strict';

var app = angular.module('cormo');

app.directive('footerContent', function() {
  return {
    restrict: 'E',
    templateUrl: '../../html/components/footerContent.html',
    // controller: 'navCtrl'
  }
})