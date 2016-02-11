'use strict';

describe('Filter: filterpoints', function () {

  // load the filter's module
  beforeEach(module('gauntletNgApp'));
 
  describe('showOnlyThisType', function() {

    it('returns the correct number of type element in an array',
      inject(function (showOnlyThisTypeFilter) {
      //var text = 'angularjs';
        var annotToySet = [{type:'point'}, {type:'box'},{type:'point'}];

        expect(showOnlyThisTypeFilter(annotToySet, 'box').length).toEqual(1);
        expect(showOnlyThisTypeFilter(annotToySet, 'point').length).toEqual(2);

    }));

  });
  
});
