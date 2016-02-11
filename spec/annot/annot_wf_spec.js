'use strict';

  
describe('annotpage @wf', function() {
  

  var path = require('path');
  var angularAnnot = require('./annot_po.js');
  var fs = require('fs');
  var exec = require('child_process').exec;


  var filename = "ch05_ju_f_pv_07_08_oce-r.jpg"
  var fileToUpload = "../../app/images/"+ filename;

   // device
  var width = 2560;
  var height = 1440;

  beforeEach(function() {
    angularAnnot.getAnnotPage();
    browser.driver.manage().window().setSize(width, height);

  });

  it('should perform wf and do a preview', function() {

    
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


    // select first point attributes on the tree
    
    element.all(by.css('[ng-click="user_clicks_branch(row.branch)"]')).all(by.css(".glyphicon-record")).first().click();

     // send coordinate of the point
    var imzone = element(by.css("#drawingPoint"));

    browser.actions()
      .mouseMove(imzone, {x: 371, y: 306}) // 100px from left, 100 px from top of plot0
      .mouseDown()
      .mouseUp()
      .perform();


    // visualize with prev and snapshot

     element(by.css('#getprev')).click();



     var prevmode = element(by.id('prevmode'));
     

    //  assert

     expect(prevmode.isPresent()).toBeTruthy();

    // rectangle should be on image and point 

     browser.takeScreenshot().then(function (png) {
       angularAnnot.writeScreenShot(png, 'spec/o/', 'exception.png');
     });
    

 
  }, 60000);



  it('should perform a wf and export', function() {	

     
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


    // select first point attributes on the tree
    
    element.all(by.css('[ng-click="user_clicks_branch(row.branch)"]')).all(by.css(".glyphicon-record")).first().click();

     // send coordinate of the point
    var imzone = element(by.css("#drawingPoint"));

    browser.actions()
      .mouseMove(imzone, {x: 371, y: 306}) // 100px from left, 100 px from top of plot0
      .mouseDown()
      .mouseUp()
      .perform();


    // open export frame

    element(by.css('#getexportview')).click();

    // send name

    browser.sleep(2000);
    element(by.model('user.lastname')).sendKeys('last');

    element(by.model('user.firstname')).sendKeys('first');


   

    var fnCur = element(by.binding("getFilname")).getText();
    var filename = "spec/o/annotation_ch05_ju_f_pv_07_08_oce-r_1280_893_csv_export_last_first.csv";

    // donwload


    if (fs.existsSync(filename)) {
    // Make sure the browser doesn't have to rename the download.
      fs.unlinkSync(filename);
    }

    $('[ng-csv="getExportArray()"]').click();
    
    browser.actions().sendKeys(protractor.Key.ENTER).perform();

    browser.driver.wait(function(){
      //check if file exists
      return(fs.existsSync(filename));
    },50000).then(function() {

    //  assert

    // file contain right nmber of line
    exec('wc -l '+filename, function (err, res) {
       //console.log(countln.split(" "));
       expect(res.split(" ")[7]).toEqual("3");
       
    });

    } ).then(function(){

     // remove downloaded file 

     console.log("# remove downloaded file :"+filename);
     exec('rm '+filename);

    });

   
     
    // file created  
    expect(fnCur).toContain('last_first');

  

  }, 100000);

  

  
});
