'use strict';

/**
* @ngdoc directive
* @name divingInToDirectivesApp.directive:mytypeahead
* @description
* # mytypeahead
*/
angular.module('divingInToDirectivesApp')
.directive('mytypeahead', function () {
  return {
    template:'<input type="text" ng-model="myDirectiveVar" typeahead="state for state in states | filter:$viewValue | limitTo:8" class="form-control">',
    restrict: 'AE',
    scope: {
      myDirectiveVar: '=',
    },
    replace: true,
    link: function (scope, elem, attr) {

      scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
      'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
      'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
      'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina',
      'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas',
      'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    }
  };
});
