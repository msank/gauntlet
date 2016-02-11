'use strict';

  
describe('annotpage @interact', function() {
  

  var path = require('path');
  var angularAnnot = require('./annot_po.js');
 
  var filename = "ch05_ju_f_pv_07_08_oce-r.jpg"
  var fileToUpload = "../../app/images/"+ filename;

  // device
  var width = 2560;
  var height = 1440;

  beforeEach(function() {
    angularAnnot.getAnnotPage();

    browser.driver.manage().window().setSize(width, height);

    //browser.driver.manage().window().maximize();

  });

  it('should draw a rectangle', function() {

    // load image
    angularAnnot.loadimage(fileToUpload);

    // click on tree 
    element(by.css('#expandall')).click();

    // select first box element in the tree
  
    var parents = element.all(by.css('[ng-click="user_clicks_branch(row.branch)"]')).all(by.css(".glyphicon-edit")).first().click();

    var imzone = element(by.css("#BoxOnDrawing"));

    // send coordinate of the rectangle

    browser.actions()
      .mouseMove(imzone, {x: 171, y: 106}) // 100px from left, 100 px from top of plot0
      .mouseDown()
      .mouseMove({x: 86, y: 86}) // 400px to the right of current location
      .mouseUp()
      .perform();

    //browser.sleep(2000);
    element(by.css("[ng-click='newArea()']")).click();
    

    var dispBox = element.all(by.css('[ng-click="selectArea($index)"]')).first();
    
    // assert 

    // is displayed

    expect(dispBox.isPresent()).toBeTruthy();
    


   
  }, 60000);



  it('should draw a point', function() {	

    // load image
    angularAnnot.loadimage(fileToUpload);

    // click on tree 
    element(by.css('#expandall')).click();

    // select first point element in the tree
    
    element.all(by.css('[ng-click="user_clicks_branch(row.branch)"]')).all(by.css(".glyphicon-record")).first().click();

     // send coordinate of the point
    var imzone = element(by.css("#drawingPoint"));

    browser.actions()
      .mouseMove(imzone, {x: 171, y: 106}) // 100px from left, 100 px from top of plot0
      .mouseDown()
      .mouseUp()
      .perform();
 

    var dispPoint = element.all(by.css('.clickpoint')).first();

    expect(dispPoint.isDisplayed()).toBeTruthy();

  }, 60000);

  

  
});
