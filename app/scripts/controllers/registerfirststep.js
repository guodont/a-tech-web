'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:RegisterfirststepCtrl
 * @description
 * # RegisterfirststepCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
    .controller('RegisterfirststepCtrl', function ($scope, $http, $cookieStore, $location, ngNotify, apiUrl) {

        $scope.signup = function () {

            var signupFirstStepData = {
                password: $scope.password,
                phone: $scope.phone,
                userName: $scope.name
            };

            $http.post(apiUrl + '/signup/one', signupFirstStepData)
                .error(function (data) {
                    ngNotify.set("注册失败,请重试"+data);
                }).success(function (data) {
                ngNotify.set("注册成功");
                $cookieStore.put('isLoggedIn', 1);
                $cookieStore.put('authToken', data.authToken);
                $location.path('#/registerSecondStep');
            });
        };
    });
