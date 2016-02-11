'use strict';

var angularAnnot = function() {

	var path = require('path');
	var fs = require('fs');

	var nPrimaryTreeElt = 3;

	this.getAnnotPage = function() {

		 browser.get('http://localhost:9000/#/annot', 1000000);

	}

	this.loadimage = function(imageRPath){

  		var absolutePath = path.resolve(__dirname, imageRPath);
    
  		//console.log(absolutePath);
    
		$('input[type="file"]').sendKeys(absolutePath);
		browser.actions().sendKeys(protractor.Key.ENTER).perform();

	}

	this.getnVal = function()  {

		return(nPrimaryTreeElt);

	}


	this.writeScreenShot = function(data, path, suffix) {
    	var browserName = browser.browserName ;
    	var outpath =  browser.outpath;
    	var stream = fs.createWriteStream(path+browserName+'Screen_'+suffix);
 
    	stream.write(new Buffer(data, 'base64'));
    	stream.end();
	}




}

module.exports = new angularAnnot();
