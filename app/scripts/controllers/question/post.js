'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:QuestionPostCtrl
 * @description
 * # QuestionPostCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
  .controller('QuestionPostCtrl', function ($scope, Page) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    Page.setTitle('我要提问-农科110');
  });
