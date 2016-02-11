'use strict';

describe('Directive: progressWf', function () {

  // load the directive's module
  beforeEach(module('gauntletNgApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  // it('should make hidden element visible', inject(function ($compile) {
  //   element = angular.element('<progress-wf></progress-wf>');
  //   element = $compile(element)(scope);
  //   expect(element.text()).toBe('this is the progressWf directive');
  // }));
});
