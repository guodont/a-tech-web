'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:UsercenterChangepasswordCtrl
 * @description
 * # UsercenterChangepasswordCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
    .controller('UsercenterChangepasswordCtrl', function ($scope, Page, $cookieStore, apiUrl, $http, ngNotify, $location, Loading) {

        $scope.curMenu = "changepassword";

        Page.setTitle('修改密码-个人中心|农科110');

        $scope.updatePassword = function () {

            var userInfoData = {
                oldPassword: $scope.oldPassword,
                newPassword: $scope.newPassword
            };

            $http({
                method: 'PUT',
                url: apiUrl + '/my/password',
                headers: {'X-AUTH-TOKEN': $cookieStore.get("authToken")},
                data: userInfoData
            })
                .then(function (res) {
                    $scope.oldPassword = '';
                    $scope.newPassword = '';
                    ngNotify.set("密码更新成功", 'success');
                }, function (res) {
                    ngNotify.set("密码更新失败", 'error');
                });

        };

    });
