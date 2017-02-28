angular.module("componentApp").controller("mainCtrl", function($scope) {

  $scope.user = {
      name: "Brian",
      email: "brian@brian.com"
  }  

  $scope.changeUsername = function(username) {
      $scope.user.name = username;
  }

  $scope.changeUserEmail = function(email) {
      console.log("EMail")
      $scope.user.email = email;
  }
})