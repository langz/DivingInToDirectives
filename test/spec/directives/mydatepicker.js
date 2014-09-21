'use strict';

describe('Directive: mydatepicker', function () {

  // load the directive's module
  beforeEach(module('divingInToDirectivesApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<mydatepicker></mydatepicker>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the mydatepicker directive');
  }));
});
