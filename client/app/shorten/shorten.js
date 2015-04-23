angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.urlFlag = false;
  $scope.errorMessage = 'URL is Invalid! Please try again!';
  $scope.addLink = function(url){
    if(Links.isValidLink(url)){
      Links.addLink(url);
      $scope.urlFlag = false;
    } else {
      $scope.urlFlag = true;
    }
    $scope.shortenUrl = '';
  };
})
.controller('NavController', function($scope, $location, Auth ){
  $scope.isAuth = Auth.isAuth;
  $scope.signout = Auth.signout;
  // $location
});
