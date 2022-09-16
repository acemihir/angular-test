var app = angular.module('myApp', []);
app.controller('myController',
  function ($scope, $http) {
    var json_url = 'https://ac.aws.citizennet.com/assets/qspreviews/qs_interview_data.json';

    var request = {
      method: 'get',
      url: json_url,
      dataType: 'json',
      contentType: "application/json"
    };

    $scope.arrImages = new Array;

    $http(request)
      .success(function (jsonData) {
        $scope.arrImages = jsonData;
        $scope.list = $scope.arrImages.data;
        console.log($scope.list)
      })
      .error(function () {

      });
  });