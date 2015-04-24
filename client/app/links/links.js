angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {
    links: []
  };
  $scope.getLinks = function(){
   Links.getLinks().then(function(data){
    $scope.data.links = data;
    $scope.data.links.sort(function(a,b) {return b.visits - a.visits;});
   });
  };
  $scope.getLinks();
});

