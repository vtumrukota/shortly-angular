angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function(url){
    Links.addLink(url);
  };
})
.controller('NavController', function($scope, $location, Auth ){
  $scope.isAuth = Auth.isAuth;
  $scope.signout = Auth.signout;
  // $location
});
