'use strict';

describe('Service: areaselectionService', function () {

  // load the service's module
  beforeEach(module('gauntletNgApp'));

  // instantiate service
  var areaselectionService;
  var docs, element, scope;
  var imfn;
  beforeEach(inject(function (_areaselectionService_, $rootScope, $compile ) {
    areaselectionService = _areaselectionService_;
    
    scope = $rootScope;
    imfn= "ch05_ju_f_pr_11_00_nor-_test.jpg" 
    scope.imgSource =  imfn
    element = '<img id="drawingPoint" src="{{imgSource}}" width=900 />';
    //element = $compile(element)(scope);
    docs = document.write(element);
    docs = $compile(docs)(scope)
    scope.$digest();
   

  }));

  it('creates a point and checks if the point is registered', inject(function () {
  
    // check if fake document is created
    //expect(document.getElementById('drawingPoint').clientWidth).toEqual(900);

    areaselectionService.addPointArea(2,4,"featName", "featLabel")
    expect(areaselectionService.pointInfo.length).toEqual(1);
    
  }));

});
