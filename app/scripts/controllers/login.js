'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
    .controller('LoginCtrl', function ($scope, $http, $cookieStore, $location, ngNotify, apiUrl) {

        $scope.login2 = function () {

            var loginData = {
                password: $scope.password,
                phone: $scope.phone
            };

            $http.post(apiUrl + '/login', loginData)
                .error(function (data) {
                    ngNotify.set("登录失败,请重试" + data);
                })
                .success(function (data) {
                    ngNotify.set("登录成功");
                    $cookieStore.put('isLoggedIn', 1);
                    $cookieStore.put('authToken', data.authToken);
                    $scope.isLogin = false;
                    // $scope.$apply();
                    $location.path('#/usercenter/index');
                });
        };

    });
