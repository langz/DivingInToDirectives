'use strict';

/**
* @ngdoc directive
* @name divingInToDirectivesApp.directive:mydatepicker
* @description
* # mydatepicker
*/
angular.module('divingInToDirectivesApp')
.directive('mydatepicker', function () {
  return {
    template: '<div class="row">'+
    '<div class="col-md-6">'+
    '<p class="input-group">'+
    '<input type="text" class="form-control" ng-model="ngModel" is-open="opened" show-button-bar="false" ng-required="true" datepicker-popup="dd.MM.yyyy"  />'+
    '<span class="input-group-btn">'+
    '<button type="button" class="btn btn-default" ng-click="change($event)"><i class="glyphicon glyphicon-calendar"></i></button>'+
    '</span>'+
    '</p>'+
    '</div>'+
    '</div>',
    restrict: 'AE',
    scope: {
      ngModel: '='
    },
    replace: true,
    link: function (scope, elem, attr) {

      scope.change = function($event){

        $event.preventDefault();
        $event.stopPropagation();
        scope.opened = !scope.opened;
      }
    }
  };
});
