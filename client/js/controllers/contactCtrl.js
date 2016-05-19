'use strict';

var app = angular.module('cormo');

app.controller('contactCtrl', function($scope, MailService) {
  $scope.sendMail = function() {
    MailService.sendMail($scope.customer)
    .then(res => console.log("message sent! res: ", res.data),
          err => console.error("Error: ", err))
  }
})