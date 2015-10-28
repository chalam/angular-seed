'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'view3Ctrl'
  });
}])

.controller('view3Ctrl', ['$scope', '$http', function($scope, $http) {

  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];

  $scope.users = [
    { 'name': "mlb" },
    { 'name': "mets" },
    { 'name': "royals" }
  ];

  var url = "https://angularjs.org/greet.php?callback=JSON_CALLBACK&name=Super%20Hero";

  $scope.fetch = function() {
    console.log("refresh called");
    return $http.jsonp(url)
      .success(function(response) {
        console.log(response);

        var jsonStr = JSON.stringify(response);
        $scope.data = jsonStr;

        $scope.response = response;
        // console.log($scope.response);
        console.log("done success");
      });
  };
  // fetch();

}]);
