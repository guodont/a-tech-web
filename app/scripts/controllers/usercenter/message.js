'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:UsercenterMessageCtrl
 * @description
 * # UsercenterMessageCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
    .controller('UsercenterMessageCtrl', function ($scope, Page, $cookieStore, apiUrl, $http, ngNotify, $location, Loading) {
        
        $scope.curMenu = "message";

        // 设置标题
        Page.setTitle('我的消息-个人中心|农科110');
        $scope.curPage = $location.search().currentPage ? $location.search().currentPage : 1;


        // 加载消息数据
        $scope.loadMessages = function () {
            $http({
                method: 'GET',
                url: apiUrl + '/messages?pageSize=10&page=' + $scope.curPage,
                headers: {'X-AUTH-TOKEN': $cookieStore.get("authToken")}
            })
                .then(function (res) {
                    console.log(res.data);
                    $scope.messages = res.data;
                }, function (res) {
                    ngNotify.set("网络加载失败", 'error');
                });

        };


        $scope.loadMessages();

    });
