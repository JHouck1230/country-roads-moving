'use strict';

var app = angular.module('cormo');

app.controller('contactCtrl', function($scope, MailService) {
  $scope.sendMail = function() {
    MailService.sendMail($scope.customer)
  }
})