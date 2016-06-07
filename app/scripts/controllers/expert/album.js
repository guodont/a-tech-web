'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:ExpertAlbumCtrl
 * @description
 * # ExpertAlbumCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
    .controller('ExpertAlbumCtrl', function ($http, $scope, apiUrl, ngNotify, Page, $routeParams, Loading, $cookieStore) {
        console.log($routeParams.expertId);

        Page.setSubNav('album');

    });
