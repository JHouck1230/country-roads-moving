'use strict';

var app = angular.module('cormo');

app.service('MailService', function($http) {
  this.sendMail = function(customer) {
    return $http.post('/message', customer)
  }
})