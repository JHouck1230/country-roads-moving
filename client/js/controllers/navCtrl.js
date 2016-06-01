'use strict';

var app = angular.module('cormo');

app.controller('navCtrl', function($scope) {
  $scope.isCollapsed = true;
  $scope.toggleCollapse = toggleCollapse;

  function toggleCollapse() {
    $scope.isCollapsed = !$scope.isCollapsed;
  }
})