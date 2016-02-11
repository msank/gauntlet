'use strict';

  
describe('annotpage @upload', function() {
  

  var path = require('path');
  var angularAnnot = require('./annot_po.js');
 
  var filename = "ch05_ju_f_pv_07_08_oce-r.jpg"
  var fileToUpload = "../../app/images/"+ filename;


  beforeEach(function() {
    angularAnnot.getAnnotPage();

  });

  it('checks if fn is default', function() {

    // var 
	 var imgname =  element(by.css('.imgname')).getText();

   // assert
   expect(imgname).toEqual("Please Upload a Drawing (JPEG, PNG)");

  });



  it('should upload a file and display name in header', function() {	

  // load image
  angularAnnot.loadimage(fileToUpload);

  // var 
	var imgname =  element(by.css('.imgname')).getText();

  //assert
	expect(imgname).toEqual(filename);
	

  }, 50000);


  it('should upload a file and display alert/info message', function() {

    // load
    angularAnnot.loadimage(fileToUpload);

    // var
    //var loadsuccessMess = element(by.id('loadsucess'));
    var infostart = element(by.id('infostart'));
    var prevmode = element(by.id('prevmode'));


    // assert
    //expect(loadsuccessMess.isDisplayed()).toBeTruthy();
    
    //expect(loadsuccessMess.getText()).toContain(filename);
    
    expect(infostart.isDisplayed()).toBeTruthy();
    
    expect(prevmode.isPresent()).toBeFalsy();

  }, 50000);


 


  
});
