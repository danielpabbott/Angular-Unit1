var app = angular.module("firstApp", []);
app.controller("MyFirstController", function($scope){
  $scope.name = "Severus Snape";
})
app.controller("ExercisesController", function($scope){
  $scope.FavColor = "blue";
  $scope.secondsInACentury = 100*365*24*60*60;
  $scope.rightNow = new Date();
})
