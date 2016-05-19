'use strict';

var app = angular.module('cormo');

app.controller('contactCtrl', function($scope, MailService, SweetAlert) {
  $scope.sendMail = function() {
    MailService.sendMail($scope.customer)
    .then(res => {
      $scope.customer = {};
      SweetAlert.swal("Message Sent!", "", "success");
    }, err => {
      console.error('Error: ', err);
      SweetAlert.swal("Message Not Sent!", "", "warning");
    });
  }
})