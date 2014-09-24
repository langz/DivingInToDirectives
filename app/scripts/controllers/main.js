'use strict';

/**
* @ngdoc function
* @name divingInToDirectivesApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the divingInToDirectivesApp
*/
angular.module('divingInToDirectivesApp')
.controller('MainCtrl', function ($scope) {
  $scope.person = {
    'name': 'Anders Langseth',
    'id' : 12345,
    'work':[
    {
      'description': 'Trying to learn Angular Directives',
      'time': 120
    },
    {
      'description': 'Trying to learn Angular-UI Directives',
      'time': 100
    }
    ],
    'money' : 10,
    'goodDay': true,
'date': ''
  };
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

$scope.search = undefined;
});
