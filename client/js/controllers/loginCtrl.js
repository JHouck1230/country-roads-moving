'use strict';

var app = angular.module('cormo');

app.controller('loginCtrl', function($scope, $firebaseAuth, FB_URL) {

  var ref = new Firebase(FB_URL);
  $scope.authObj = $firebaseAuth(ref);


  $scope.signIn = function(user) {
    $scope.authObj.$authWithPassword({
      email    : user.email,
      password : user.password
    }).then(function(authData) {
      console.log("Logged in as:", authData.uid);
    }).catch(function(error) {
      console.error("Authentication failed:", error);
    });
  }
})