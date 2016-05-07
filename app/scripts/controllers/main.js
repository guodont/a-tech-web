'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
  .controller('MainCtrl', function ($scope, Page) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

     Page.setTitle('农科110首页');
  });
