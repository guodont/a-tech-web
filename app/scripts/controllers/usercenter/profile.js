'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:UsercenterProfileCtrl
 * @description
 * # UsercenterProfileCtrl
 * Controller of the aTechClientApp
 */
 angular.module('aTechClientApp')
 .controller('UsercenterProfileCtrl',function ($scope) {
 	this.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];

 	$scope.hasNewFile = false;

 	$scope.$watch('newFile',function(){
 		console.log("newValue");
 		// console.log(oldValue);

 		console.log($scope.newFile);
 	});

	// fileWatch();
	// ngNotify.set("hello",'success');
 	$scope.myImage='../image/elliot.jpg';
 	$scope.myCroppedImage='';

 	var handleFileSelect=function(evt) {
 		var file=evt.currentTarget.files[0];
 		var reader = new FileReader();
 		reader.onload = function (evt) {
 			$scope.$apply(function($scope){
 				$scope.myImage=evt.target.result;
 			});
 		};
 		reader.readAsDataURL(file);
 	};
 	angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);

 });
