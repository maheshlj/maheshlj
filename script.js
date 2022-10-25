var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $scope.SubForm=function(){
      $http.get('display.php').then(function(response){
          $scope.SubForm = response.data;
          $scope.$apply;
          console.log($scope.SubForm);
      })
    }
    
});