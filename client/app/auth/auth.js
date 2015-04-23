// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.signin = function () {
    if(Auth.isValidUser($scope.user.username)){
      $scope.userFlag = false;
      Auth.signin($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.shortly', token);
          $location.path('/links');
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
      $scope.errorMessage = 'Invalid UserName. Please only use "A-Z and 0-9"!';
      $scope.userFlag = true;
    }
  };

  $scope.signup = function () {
    if(Auth.isValidUser($scope.user.username)){
      $scope.userFlag = false;
      Auth.signup($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.shortly', token);
          $location.path('/links');
        })
        .catch(function (error) {
          console.error(error);
        });
     } else {
        $scope.errorMessage = 'Invalid UserName. Please only use "A-Z, 0-9, -, & _"!';
        $scope.userFlag = true;
     }
   }
});
