angular.module('like-button',[])
.directive('likeButton', function(){
  console.log('Loading like button');
    return {
      restrict:'E',
      scope: {
        startingValue:'=?'
      },
      controller: ['$scope','$element',function($scope,$element){
        $scope.addLike = function(){
          $scope.startingValue = ($scope.startingValue + 1);
          // console.log($scope.startingValue);
        }
      }],
      replace: true,
      template:'<button class="btn btn-md btn-primary" ng-click="addLike()"><span class="glyphicon glyphicon-thumbs-up"> {{startingValue}}</span></button>'
    }
})