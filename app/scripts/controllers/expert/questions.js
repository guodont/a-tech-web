'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:ExpertQuestionsCtrl
 * @description
 * # ExpertQuestionsCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
    .controller('ExpertQuestionsCtrl', function ($http, $scope, apiUrl, Page, ngNotify, $routeParams, Loading, $cookieStore) {
        console.log($routeParams.expertId);

        Page.setSubNav('question');

    });
