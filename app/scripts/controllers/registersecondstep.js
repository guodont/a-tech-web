'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:RegistersecondstepCtrl
 * @description
 * # RegistersecondstepCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
    .controller('RegistersecondstepCtrl', function ($scope, $http, $cookieStore, $location, ngNotify, apiUrl) {

        $scope.saveProfile = function () {

            var signupSecondStepData = {
                address: $scope.address,
                realName: $scope.realName,
                industry: $scope.industry,
                scale: $scope.scale
            };


            $http({
                method: 'POST',
                url: apiUrl + '/signup/two',
                headers: {'X-AUTH-TOKEN': $cookieStore.get("authToken")},
                data: signupSecondStepData
            })
                .then(function (res) {
                    Loading.setLoading(false);
                    ngNotify.set("成功");
                    $location.path('#/usercenter/index');
                }, function (res) {
                    ngNotify.set("信息保存失败,请重试" + data);
                });
           
        };
    });
