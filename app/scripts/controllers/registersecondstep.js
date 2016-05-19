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

            $http.post(apiUrl + '/signup/two', signupSecondStepData)
                .error(function (data) {
                    ngNotify.set("信息保存失败,请重试" + data);
                }).success(function (data) {
                ngNotify.set("成功");
                $location.path('#/registerSecondStep');
            });
        };
    });
