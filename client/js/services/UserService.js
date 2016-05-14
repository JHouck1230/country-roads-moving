'use strict';

var app = angular.module('cormo');

app.service('UserService', function() {
  this.setUser(user => this.user = user)
  this.getUser(user => this.user)
})