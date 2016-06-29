'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:RegisterfirststepCtrl
 * @description
 * # RegisterfirststepCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
    .controller('RegisterfirststepCtrl', function ($scope, $http, $cookieStore, $location, ngNotify, apiUrl, $interval) {


        $scope.countDownTime = 60;
        $scope.enableGetIdentifyCode = true;
        $scope.identifyTime = '获取验证码';
        $scope.identifyCode = '';
        $scope.password = '';
        $scope.verify_uuid = '';
        $scope.disable = false;

        var reg = /0?(13|14|15|18|17)[0-9]{9}/;

        $scope.signup = function () {

            var signupFirstStepData = {
                password: $scope.password,
                phone: $scope.phone,
                userName: $scope.name,
                verifyCode: $scope.verifyCode
            };

            $http({
                method: 'POST',
                url: apiUrl + '/signup/one',
                headers: {'VERIFY_UUID': $scope.verify_uuid},
                data: signupFirstStepData
            })
                .then(function (data) {
                    ngNotify.set("注册成功");
                    $cookieStore.put('isLoggedIn', 1);
                    $cookieStore.put('authToken', data.authToken);
                    $location.path('#/registerSecondStep');
                }, function (data) {
                    ngNotify.set("注册失败,请重试" + data);

                });
        };


        $scope.sendVerifyCode = function () {
            $scope.disable = true;
            if ($scope.phone == '') {
                ngNotify.set("请输入手机号", 'warn');
                return;
            }
            if (!$scope.phone || $scope.phone.length < 11 || !reg.test($scope.phone)) {
                ngNotify.set("手机号格式不正确", 'warn');
            }
            if ($scope.enableGetIdentifyCode) {

                var data = {
                    phone: $scope.phone
                };

                $http.post(apiUrl + '/smsVerifyCode', data)
                    .error(function (data) {

                        ngNotify.set("验证码获取失败！", 'error')

                        $scope.enableGetIdentifyCode = true;
                    })
                    .success(function (data) {
                        console.log(data);
                        $scope.verify_uuid = data.success.message;
                        $scope.enableGetIdentifyCode = false;
                        $scope.countDown = $interval(function () {
                            $scope.countDownTime--;
                            $scope.identifyTime = '重新发送（' + $scope.countDownTime + '）';
                            if ($scope.countDownTime < 1) {
                                $interval.cancel($scope.countDown);
                                $scope.enableGetIdentifyCode = true;
                                $scope.identifyTime = '重新发送';
                                $scope.countDownTime = 60;
                                $scope.disable = false;
                            }
                        }, 1000);
                    });
            } else {
                ngNotify.set("请稍后再试")
            }
        };
    });
