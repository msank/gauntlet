/*!
 * package Gauntlet
 * @author Martial M Sankar & Anastasia Chasapi
 * copyright 2015-2016, SIB Swiss Institute of Bioinformatics
 */
 
'use strict';

angular.module('gauntletNgApp')
/**
 * @ngdoc filter
 * @name gauntletNgApp.filter:showOnlyThisFeature
 * @description filters annotation array based on a feature name
 * @param {Array} annots Annotations array (preferably the _annotations array of the AnnotatedImage object)
 * @param {String} filterval feature name whose annotations we want to display
 * {@link gauntletNgApp.object:AnnotatedImage AnnotatedImage}
 * @returns {Array} filtered annotations array
 */
  .filter('showOnlyThisFeature', function () {
    return function (annots,filtervalue) {

      var validPoints = [];

      for(var i=0; i<annots.length; i++){
        if(annots[i].feature === filtervalue){
          validPoints.push(annots[i]);
        }
      }

      return validPoints;
    };
  })
/**
 * @ngdoc filter
 * @name gauntletNgApp.filter:showOnlyThisType
 * @description filters annotation array based on annotation type (eg point)
 * @param {Array} annots Annotations array (preferably the _annotations array of the AnnotatedImage object)
 * @param {String} filterval Annotation type whose annotations we want to display (eg display all points)
 * {@link gauntletNgApp.object:AnnotatedImage AnnotatedImage}
 * @returns {Array} filtered annotations array
 */
  .filter('showOnlyThisType', function () {
    return function (annots,filtervalue) {

      var validPoints = [];

      for(var i=0; i<annots.length; i++){
        if(annots[i].type === filtervalue){
          validPoints.push(annots[i]);
        }
      }

      return validPoints;
    };
  });
