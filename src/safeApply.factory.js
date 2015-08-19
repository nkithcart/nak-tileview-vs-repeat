/* jshint ignore:start */
/*
 * SafeApply factory taken from tileview-vs-repeat package as it's a dependency for the vs-repeat directive
 * source taken from index-ctrl file: https://github.com/manish0610/tileview-vs-repeat/blob/gh-pages/index-ctrl.js
 * 
 * MODIFIED TO FIT WITHIN TABLET ORDERING APP
 * ADDED JS HINT IGNORE COMMENTS AS THE PACKAGE SOURCE WERE NOT CREATED BY ABC DEVS. TO MODIFY IS RISKY!
 */

(function(){
	'use strict';
	angular.module('vs-repeat').factory('safeApply',function(){
		return function ($scope, fn) {
	            var phase = $scope.$root && $scope.$root.$$phase;
	            if (phase === '$apply' || phase === '$digest') {
	                if (fn) {
	                    $scope.$eval(fn);
	                }
	            } else {
	                if (fn) {
	                    $scope.$apply(fn);
	                } else {
	                    $scope.$apply();
	                }
	            }
	        }
		
	});
})();
/* jshint ignore:end */