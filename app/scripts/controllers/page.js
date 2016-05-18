'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:PagectrlCtrl
 * @description
 * # PagectrlCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
    .controller('PageCtrl', function ($scope, Page, $cookieStore) {
        $scope.Page = Page;

        $scope.isLogin = $cookieStore.get("isLoggedIn") == 1 ? true : false;
    });
