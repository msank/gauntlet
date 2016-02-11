'use strict';

/**
 * @ngdoc overview
 * @name gauntletNgApp
 * @description
 * # gauntletNgApp
 * Main module of the application.
 */
angular
  .module('gauntletNgApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngJcrop',
    'annotStructure',
    'ngCsv',
    'ui.bootstrap' ,
    'angularytics','toastr',
    '720kb.tooltips',
    'cfp.hotkeys',
    'chart.js'

     ])
  .config(function ($routeProvider) {
    $routeProvider
      /*.when('/', {
        templateUrl: 'views/uploadDrawing.html',
        controller: 'uploadCtrl'
      })*/
      .when('/', {
        templateUrl: 'views/main.html',
      })

      .when('/annot', {
                templateUrl:'views/annotationStructure.tpl.html',
                controller:'AnnotStructureCtrl',
                hotkeys: [                           
                           ['ctrl+a', 'Toggle Preview mode', 'togglePreviewMode()'],
                           ['shift+right', 'Next Step; Close parent branch and move to next', 'directedActionFun()'],
                           ['shift+up', 'prev branch', 'getPrevBranchShortCut()'],
                           ['shift+down', 'next branch', 'getNextBranchShortCut()']
                         ]
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function(ngJcropConfigProvider){
    // [optional] To change the jcrop configuration
    ngJcropConfigProvider.setJcropConfig({
      //bgColor: 'black',
      bgOpacity: 0.4,
      aspectRatio: null
     // width: 0,
      //height: 0
    });

  })

  .config(function(AngularyticsProvider) {
    AngularyticsProvider.setEventHandlers(['Console', 'GoogleUniversal']);
    }).run(function(Angularytics) {
      Angularytics.init();
    })


  .config(function(toastrConfig) {
  angular.extend(toastrConfig, {
    autoDismiss: true,
     maxOpened: 1,
     positionClass: 'toast-bottom-left',
     preventOpenDuplicates: true, 
  });
})

   .config(['ChartJsProvider', function (ChartJsProvider) {
    // Configure all charts
    ChartJsProvider.setOptions({
       tooltipFontColor: "#fff"
    });
    // Configure all line charts
    ChartJsProvider.setOptions('Pie', {
       animationEasing : "easeInCirc",
       animationSteps: 30,
    });
  }]);



