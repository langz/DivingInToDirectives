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
      template: '<p class="input-group">'+
'<input type="text" class="form-control" datepicker-popup="" ng-model="dt" is-open="opened" datepicker-options="dateOptions" date-disabled="disabled(date, mode)" ng-required="true" close-text="Close" />' +
'<span class="input-group-btn">'+
'<button class="btn btn-default" ng-click="open($event)"><i class="glyphicon glyphicon-calendar"></i></button>'+
'</span>'+
'</p>',
      restrict: 'E',
    };
  });
