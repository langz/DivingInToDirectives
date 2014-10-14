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
    template:'<input type="text" ng-model="myDirectiveVar" typeahead="state as state.name for state in states | filter:$viewValue | limitTo:8" typeahead-template-url="customTemplate.html" class="form-control">',
    restrict: 'AE',
    scope: {
      myDirectiveVar: '=',
    },
    replace: true,
    link: function (scope, elem, attr) {

      scope.states = [{name: 'Alabama', value:12}, {name: 'Alaska', value: 13}];
    }
  };
});
