'use strict';

angular.module('gauntletNgApp')
/**
 * @ngdoc service
 * @name gauntletNgApp.service:areaselectionService
 * @description collects all clicked points of a given attribute that will then be stored as coordinates in the Annotation object.
 * {@link gauntletNgApp.object:Annotation Annotation}
 * @requires $rootScope
 */
  .service('areaselectionService', function ($rootScope) {

    var service = {

      pointInfo: [],
      boxInfo:[],

      addPointArea: function(x,y,featureName, featureLabel){

        var img = document.getElementById('drawingPoint');
        var relWidth = img.clientWidth;
        var relHeight = img.clientHeight;
        var absWidth = img.naturalWidth;
        var absHeight = img.naturalHeight;
        var xToStore = x*absWidth/relWidth;
        var yToStore = y*absHeight/relHeight;

        service.pointInfo.push({
          x1:x,
          y1:y,
          x2:x,
          y2:y,
          xToStore1:xToStore,
          yToStore1:yToStore,
          xToStore2:xToStore,
          yToStore2:yToStore,
          featureName:featureName,
          featureLabel:featureLabel
        });
        $rootScope.$broadcast('pointInfo.updated');
      }
    };
  return service;
  });
