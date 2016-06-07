'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:UsercenterMytradeCtrl
 * @description
 * # UsercenterMytradeCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
    .controller('UsercenterMytradeCtrl', function ($scope, Page, $cookieStore, apiUrl, $http, ngNotify, $location, Loading) {
        
        $scope.curMenu = "mytrade";

        // 设置标题
        Page.setTitle('我的交易-个人中心|农科110');
        $scope.curPage = $location.search().currentPage ? $location.search().currentPage : 1;

        // 设置url query 参数
        if ($location.search().status == false) {
            $location.search('status', 'AUDITED');
        }

        $scope.curStatus = $location.search().status ? $location.search().status : 'AUDITED';

        // 加载交易数据
        $scope.loadTrades = function () {
            $http({
                method: 'GET',
                url: apiUrl + '/my/trades?status=' + $scope.curStatus +'&pageSize=10&page=' + $scope.curPage,
                headers: {'X-AUTH-TOKEN': $cookieStore.get("authToken")}
            })
                .then(function (res) {
                    console.log(res.data);
                    $scope.trades = res.data;
                }, function (res) {
                    ngNotify.set("网络加载失败", 'error');
                });
        };

        $scope.loadTrades();
    });
