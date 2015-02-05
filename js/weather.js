angular.module('weather-widget',[])
.directive('weatherWidget', function(){
  console.log('Loading weather widget');
    return {
      restrict:'E',
      scope: {
        location:'@'
        // weatherData:''
      },
      controller: ['$scope','$element','$http',function($scope,$element,$http){

        $scope.weatherData='';


        var req = {
          url: "http://api.openweathermap.org/data/2.5/weather?",
          params: {
            q: $scope.location
          }
        }

        $http(req).success(function(data) {
          // var
          $scope.weatherData = data.weather[0].description
          // console.log(data.name,data.weather[0].description,data.main.temp, data.rain)
          // console.log(data.name.description)
        })

      }],
      replace: true,
      template:'<h1><div>The weather in {{location}} right now is {{weatherData}}.</div></h1>'
    }
});