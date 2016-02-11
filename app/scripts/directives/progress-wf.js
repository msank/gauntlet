'use strict';

/**
 * @ngdoc directive
 * @name gauntletNgApp.directive:progressWf
 * @description
 * # progressWf
 */
angular.module('gauntletNgApp')
  .directive('progressWf', function () {

    return {
      templateUrl: 'views/progress-wf.tpl.html',
      restrict: 'EA',
      scope: {
      	total: '=',
        dyn: '='
      },
      transclude:true,
      link: function (scope, element, attrs) {

      	scope.$watch('dyn', function () {


			if(scope.dyn >=85 && scope.dyn <100) {
	  			scope.barClass = "progress-bar-success";
	  		}else if (scope.dyn >= 20  && scope.dyn <85) {
	  			scope.barClass = "progress-bar-info";
	  		}else if (scope.dyn < 20){
				scope.barClass = "progress-bar-warning";
	  		}else if (scope.dyn>=100) {
	  			scope.dyn=100;
	  			scope.barClass = "progress-bar-success";
	  		}
	  		
      scope.prctRes=scope.dyn/scope.total * 100;
  		//console.log (scope.barClass + "+"+ scope.dyn);


      	});

  		

  		}

  	};
      
   
  });
