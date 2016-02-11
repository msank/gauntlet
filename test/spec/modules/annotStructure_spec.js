'use strict';

describe('AnnotStructureCtrl functions', function() {

	beforeEach(module('gauntletNgApp'));

	// comment testing
 	describe('comments field in AnnotStructureCtrl', function() {

 		var $scope;
 		var $controller;
 		var $window;
 		var Annotation;

 		beforeEach(module('angularytics'));

 		beforeEach(inject(function( $rootScope, _$controller_, _$window_){
	    	// The injector unwraps the underscores (_) from around the parameter names when matching
	    	$scope=$rootScope.$new();
	    	$controller = _$controller_;
	    	$window = _$window_;

	    	$controller('AnnotStructureCtrl', {$scope:$scope, $window:$window})

  		}));

  		beforeEach(inject(function ($injector) {
  			 Annotation = $injector.get('Annotation');
   		  }));
 	


 		it('should add comment in object annotImgObj', function () {

 			$scope.featNameForSelection = "feature1.1.test";
      		$scope.comment.added = "pifpaf";

      		$scope.handleComment();

      		expect($scope.annotImgObj.getComment4Feat($scope.featNameForSelection)).toEqual(undefined);


      		var addedAnnotation = new Annotation(
	          	"filename", 
	          	$scope.featNameForSelection,
	          	"C1.1",
	          	"box",
	          	1,1,1,1,
	          	1,1,1,1, null
	        );

      		$scope.annotImgObj.addPointsFeats( $scope.featNameForSelection, addedAnnotation);

      		$scope.handleComment();

      		expect($scope.annotImgObj.getComment4Feat($scope.featNameForSelection)).toEqual($scope.comment.added);


 		});



 	});

	

	describe("reset option in AnnotStructureCtrl", function () {

		// TO DO

	});

	



});