'use strict';

/**
* @ngdoc directive
* @name divingInToDirectivesApp.directive:myinputgroup
* @description
* # myinputgroup
*/
angular.module('divingInToDirectivesApp')
.directive('myinputgroup', function ($compile) {
  return {
    template: '<div class="form-group"><label for="{{linkid}}" class="col-sm-2 control-label">{{label}}</label><div class="col-sm-10"><input type="text" class="form-control" id="{{linkid}}" placeholder="{{placeholder}}" ng-model="ngModel"></div></div>',
       restrict: 'AE',
    scope: {
ngModel: '=',
label: '@',
placeholder: "@",
linkid: "@"

    },
replace: true
  };
});
