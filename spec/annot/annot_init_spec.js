'use strict';

  
describe('annotpage @init', function() {
  

  var path = require('path');
  var angularAnnot = require('./annot_po.js');
 
  var filename = "ch05_ju_f_pv_07_08_oce-r.jpg"
  var fileToUpload = "../../app/images/"+ filename;

  // number of primiary tree elements
  var n = angularAnnot.getnVal();
  //var n = 3;


  beforeEach(function() {
    angularAnnot.getAnnotPage();
  });

  it('should load the tree', function() {

    // var 
	 var abntree =  element(by.css('.abn-tree'));

    // assert

    // should be present
    expect(abntree.isPresent()).toBeTruthy();
    // should be equal 3
    expect(element.all(by.css('.abn-tree li')).count()).toEqual(n);

  });



  it('should expand the tree properly', function() {	

    element(by.css('#expandall')).click();
    
    expect(element.all(by.css('.abn-tree li')).count()).toBeGreaterThan(n);


  }, 50000);


  it('should collapse the tree properly', function() {  

    element(by.css('#expandall')).click();
    
    element(by.css('#collapseall')).click();

    browser.driver.sleep(1000);

    expect(element.all(by.css('.abn-tree li')).count()).toEqual(n);


  }, 50000);

  

  it('should display the reset button', function() {

    // load
    angularAnnot.loadimage(fileToUpload);

    // click on tree 
    element(by.css('#expandall')).click();

    // select first box element in the tree
    //element.all(by.css("[ng-click='user_clicks_branch(row.branch)']") ).get(1).click();
    element.all(by.css(".glyphicon-edit") ).get(1).click();


    // var
    var resetbutton = $('[ng-click="resetAnnotation()"]');


    // assert
    expect(resetbutton.isPresent()).toBeTruthy();
    
    

  }, 50000);

  
});
