var todoApp = angular.module('TodoApp',['ngAnimate','like-button','weather-widget']);

//the following is a good idea to do to see that the app is actually starting
//it depend on the ng-app being called in the html file body tag
todoApp.run(function(){
  console.log('App started');
})

//next we need to define a controller
todoApp.controller('Todolist',['$scope',function($scope){
  // console.log('Controller running');
  $scope.items = [];
  $scope.newItem = "";
  $scope.items.push({done:false,name:"Go to class"});
  $scope.items.push({done:false,name:"Go shopping"});
  $scope.items.push({done:false,name:"Get in bed"});

$scope.move = function(currentIndex,direction) {
  var targetIndex = currentIndex + direction;
  if (targetIndex < 0 || targetIndex >= $scope.items.length){
    // alert('Invalid move');
    return;
  }
  var tempItem = $scope.items[currentIndex];
  $scope.items[currentIndex] = $scope.items[targetIndex];
  $scope.items[targetIndex] = tempItem;
}

$scope.addItem = function() {
  $scope.items.push({done:false,name:$scope.newItem});
  $scope.newItem='';
}
  $scope.removeItem = function(indexOfItem) {
    $scope.items.splice(indexOfItem,1);
  }

  $scope.getData = function() {
    console.log($scope.items);
  }
}])