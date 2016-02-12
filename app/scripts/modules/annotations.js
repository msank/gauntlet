/*!
 * package Gauntlet
 * @author Martial M Sankar & Anastasia Chasapi
 * copyright 2015-2016, SIB Swiss Institute of Bioinformatics
 */
 
'use strict';

angular.module('gauntletNgApp')
/**
 * @ngdoc object
 * @name gauntletNgApp.object:Image
 * @description carries image
 * @param {String} name image filename
 */
  .factory('Image', function(){
    var Image = function(name){
      var _this = this;
      _this._name = name;
      return _this;
    };

    Image.prototype.getName = function(){
      return this._name;
    };

    return Image;
  })
/**
 * @ngdoc object
 * @name gauntletNgApp.object:Annotation
 * @description carries one annotated portion of the image linked to a feature name
 * @param {String} feature the feature name where the annotation belongs (eg 'F2.1')
 * @param {String} label the description of the feature (eg 'Sky')
 * @param {String} type the type of annotation (eg 'point', 'box')
 * @param {Number} x1 x relative to the div coordinate of upper left corner (if box) or of the point (if point)
 * @param {Number} y1 y relative to the div coordinate of upper left corner (if box) or of the point (if point)
 * @param {Number} x2 x relative to the div coordinate of bottom right corner (if box) or of the point (if point)
 * @param {Number} y2 y relative to the div coordinate of bottom right corner (if box) or of the point (if point)
 * @param {Number} xToStore1 x file coordinate of upper left corner (if box) or of the point (if point)
 * @param {Number} yToStore1 y file coordinate of upper left corner (if box) or of the point (if point)
 * @param {Number} xToStore2 x file coordinate of bottom right corner (if box) or of the point (if point)
 * @param {Number} yToStore2 y file coordinate of bottom right corner (if box) or of the point (if point)
 */
  .factory('Annotation', function(){
    var Annotation = function(filename, feature, label, type, x1, y1, x2, y2, xToStore1, yToStore1, xToStore2, yToStore2, commentVal){
      var _this = this;
      _this.filename= filename;
      _this.feature = feature;
      _this.label = label;
      _this.type = type;
      _this.x1 = x1;
      _this.y1 = y1;
      _this.x2 = x2;
      _this.y2 = y2;
      _this.xToStore1 = xToStore1;
      _this.yToStore1 = yToStore1;
      _this.xToStore2 = xToStore2;
      _this.yToStore2 = yToStore2;
      _this.commentVal = commentVal;
      return _this;
    };
    return Annotation;
  })
/**
 * @ngdoc object
 * @name gauntletNgApp.object:Comment
 * @description carries one comment linked to a feature name
 * @param {String} feature the feature name where the comment belongs (eg 'F2.1')
 * @param {String} comvalue the comment string, as typed by the user (eg 'not sure this is a hand')
 */
  .factory('Comment', function(){
    var Comment = function(filename, feature, comvalue){
      var _this = this;
      _this.filename= filename;
      _this.feature = feature;
      _this.comvalue = comvalue;
      return _this;
    };
    return Comment;
  })
/**
 * @ngdoc object
 * @name gauntletNgApp.object:AnnotatedImage
 * @description carries image and set of annotations
 * @param {Object} Image object to be annotated
 * @param {Array} _annotations list of all Annotation objects corresponding to this Image object
 * @param {Array} _comments list of all comments corresponding to this Image object
 * {@link gauntletNgApp.object:Image Image}
 * {@link gauntletNgApp.object:Annotation Annotation}
 */
  .factory('AnnotatedImage', function(){
    var AnnotatedImage = function(image){
      var _this = this;
      _this.image=image;
      _this._annotations = [];
      _this._pointsFeats = {};
      _this._assignFeats = {};
      _this._comments = {};

      return _this;
    };

    AnnotatedImage.prototype.getImage = function(){
      return this.image;
    };

    AnnotatedImage.prototype.addAnnotation = function(annot){
      var _this = this;
      _this._annotations.push(annot);
      return _this;
    };

    AnnotatedImage.prototype.addAssignFeats = function(feature, annot){
      var _this = this;
      if (typeof _this._assignFeats[feature]  === 'undefined') {


             _this._assignFeats[feature] = {};
      }
      _this._assignFeats[feature] = annot;
      _this._annotations.push(annot);
      return _this;
    };



    AnnotatedImage.prototype.removeAssignFeats = function(feature){
      return delete(this._assignFeats[feature]);
    };

    AnnotatedImage.prototype.addPointsFeats = function(feature, annot){
      var _this = this;
      if (typeof _this._pointsFeats[feature]  === 'undefined') {

             _this._pointsFeats[feature] = [];
      }
      _this._pointsFeats[feature].push(annot);
      return _this;
    };

    AnnotatedImage.prototype.countPointsFeats = function(feature){
      return this._pointsFeats[feature].length;
    };

    AnnotatedImage.prototype.countForEachFeatures = function() {

      var _this = this;

      var countArray = [];
      for (var key in this._pointsFeats) {

        countArray.push(this._pointsFeats[key].length);


      }
      console.log(countArray[0]);
      console.log(countArray);
      return countArray;
    };




    AnnotatedImage.prototype.labelForEachFatures = function() {

      var _this = this;

      var labelArray = [];
      for (var key in this._pointsFeats) {
        labelArray.push(key);

      }

      return labelArray;
    };


    AnnotatedImage.prototype.removePointsFeats = function(feature){
      return delete(this._pointsFeats[feature]);
    };

    AnnotatedImage.prototype.removeAnnotation = function(annotList){
      console.log("removing annotation");
      var _this = this;
      for(var i=0; i<annotList.length; i++){
        var j = this._annotations.indexOf(annotList[i]);
        if(j!==-1){
          this._annotations.splice(j,1);
        }
      }
      return _this;
    };

    AnnotatedImage.prototype.countAnnotations = function(){
      return this._annotations.length;
    };

    AnnotatedImage.prototype.addComment = function(feature,comment){
      var _this = this;

      console.log(comment);
        _this._pointsFeats[feature][0].commentVal = comment;
        _this._comments[feature] = comment; // for the $watch

        //console.log("comment "+ _this._pointsFeats[feature][0].commentVal+ " added for feat : " + feature);

     
      return _this;

    };


    AnnotatedImage.prototype.getComment4Feat = function (feature) {
       var _this = this;
       console.log("value : "+_this._comments[feature]);
       return _this._comments[feature];
    }

    /* AnnotatedImage.prototype.removeComment = function(feature){
          return delete(this._comments[feature]);
    };*/

    return AnnotatedImage;
  });


