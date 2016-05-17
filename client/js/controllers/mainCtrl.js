'use strict';

var app = angular.module('cormo');

app.controller('mainCtrl', function($scope, $document, $window) {
  this.scrollPos = 0;
  $scope.forward = true;
  let lastPos = 0;
  window.onscroll = angular.bind(this, function(){
    $scope.position = document.body.scrollTop || document.documentElement.scrollTop || 0;
    $scope.max = $document.height() - $(window).height();
    if(lastPos < $scope.position) {
      $scope.forward = true;
    } else {
      $scope.forward = false;
    }
    $('.truckImg').css({
      left: ($scope.position / $scope.max) * 100 + '%'
    });
    lastPos = $scope.position;
    $scope.$digest();
  });

})