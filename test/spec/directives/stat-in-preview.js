'use strict';

describe('Directive: statInPreview', function () {

  // load the directive's module
  beforeEach(module('gauntletNgApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  // it('should make hidden element visible', inject(function ($compile) {
  //   element = angular.element('<stat-in-preview></stat-in-preview>');
  //   element = $compile(element)(scope);
  //   expect(element.text()).toBe('this is the statInPreview directive');
  // }));
});
