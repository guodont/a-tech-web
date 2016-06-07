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
                    $scope.isLogin = true;
                    // $scope.$apply();
                    $scope.getUserProfile();
                });
        };


        // 获取用户资料
        $scope.getUserProfile = function () {
            $http({
                method: 'GET',
                url: apiUrl + '/curuser',
                headers: {'X-AUTH-TOKEN': $cookieStore.get("authToken")}
            })
                .then(function (res) {
                    console.log(res.data);
                    var userProfile = res.data;

                    if (userProfile.userType == 'EXPERT')
                        $cookieStore.put('isExpert', 1);
                    else
                        $cookieStore.put('isExpert', 0);

                    $cookieStore.put('userId', userProfile.id);
                    $cookieStore.put('userName', userProfile.name);

                    $location.path('#/usercenter/index');

                }, function (res) {
                    ngNotify.set("网络加载失败", 'error');
                });
        };


    });
