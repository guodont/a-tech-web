'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:UsercenterExpertprofileCtrl
 * @description
 * # UsercenterExpertprofileCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
    .controller('UsercenterExpertprofileCtrl', function ($scope, Page, $cookieStore, apiUrl, $http, ngNotify, $location, Loading) {

        $scope.curMenu = "expertProfile";

        Page.setTitle('专家资料设置-个人中心|农科110');


        $('.ui.dropdown')
            .dropdown({
                // action: 'hide',
                onChange: function (value, text, $selectedItem) {
                    console.log(value);
                    $('#categoryId').attr("value", value);
                    $scope.categoryId = value;
                }
            })
        ;

        // 加载分类
        $scope.loadCategories = function () {
            $http({
                method: 'GET',
                url: apiUrl + '/categories?categoryType=EXPERT&parentId='
            })
                .then(function (res) {
                    console.log(res.data);
                    $scope.categories = res.data;
                }, function (res) {
                    console.log('加载分类失败');
                });
        };

        $scope.loadCategories();


        // 获取用户资料
        $scope.getUserProfile = function () {
            $http({
                method: 'GET',
                url: apiUrl + '/expert/' + $scope.curUserId,
                headers: {'X-AUTH-TOKEN': $cookieStore.get("authToken")},
            })
                .then(function (res) {
                    console.log(res.data);
                    var userProfile = res.data;
                    $scope.company = userProfile.company;
                    $scope.service = userProfile.service;
                    $scope.introduction = userProfile.introduction;
                    $scope.duty = userProfile.duty;
                    $scope.professional = userProfile.professional;
                    $scope.categoryId = userProfile.category.id;
                }, function (res) {
                    ngNotify.set("网络加载失败", 'error');
                });
        };

        $scope.getUserProfile();

        // 保存资料
        $scope.saveProfile = function () {

            var userInfoData = {
                company: $scope.company,
                service: $scope.service,
                introduction: $scope.introduction,
                duty: $scope.duty,
                categoryId: $scope.categoryId,
                professional: $scope.professional
            };

            $http({
                method: 'PUT',
                url: apiUrl + '/expert',
                headers: {'X-AUTH-TOKEN': $cookieStore.get("authToken")},
                data: userInfoData
            })
                .then(function (res) {
                    ngNotify.set("资料更新成功", 'success');
                }, function (res) {
                    ngNotify.set("资料更新失败", 'error');
                });

        };
    });
