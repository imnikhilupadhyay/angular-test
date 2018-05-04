myApp.controller('RegistrationController',['$scope',function($scope){
  $scope.message="Welcome to my App";


  $scope.register = function(){
    $scope.message="Welcome "+$scope.user.firstname+" "+$scope.user.lastname+" !!";
  };
}]);