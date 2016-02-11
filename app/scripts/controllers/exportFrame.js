'use strict';

/**
 * @ngdoc function
 * @name gauntletNgApp.controller:ExportFrameCtrl
 * @description
 * # ExportFrameCtrl
 * Controller of the gauntletNgApp
 */
angular.module('gauntletNgApp')
  .controller('ExportFrameCtrl', function ($scope, $modalInstance, Angularytics) {
    
  	/*$scope.items = items;
  	$scope.selected = {
    	item: $scope.items[0]
  	};*/
  	$scope.user = {lastname: null, firstname: null};


 	$scope.getFilname = function(exptype) {

      
      
      // if no image uploaded display fntmp = ""
      if(!$scope.fnExist){
          fntmp = "";
       }else {
        var fntmp = $scope.fn;
        fntmp = fntmp.split('.')[0] ;
       }
  		var fn = exptype+"_"+fntmp+"_"+$scope.widthCur +"_"+$scope.heightCur+"_csv_export_"+$scope.user.lastname+"_"+$scope.user.firstname;
    
       


  		return(fn);
  	}


 	$scope.close = function () {


    	//$modalInstance.close($scope.selected.item);
      Angularytics.trackEvent('Home Category', 'closeExportFrame');
  		$modalInstance.close();

      //analytics
      

  	};

  	




  });
