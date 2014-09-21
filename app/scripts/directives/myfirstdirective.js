'use strict';

/**
 * @ngdoc directive
 * @name divingInToDirectivesApp.directive:myFirstDirective
 * @description
 * # myFirstDirective
 */
angular.module('divingInToDirectivesApp')
  .directive('myfirstdirective', function () {
    return {
restrict: 'E',
      template: '<div>LOL</div>'

    };
  });
