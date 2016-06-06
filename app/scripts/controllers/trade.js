'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:TradeCtrl
 * @description
 * # TradeCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
    .controller('TradeCtrl', function ($scope, Page, $cookieStore, apiUrl, $http, ngNotify, $location, Loading) {
       
        $scope.curPage = $location.search().currentPage ? $location.search().currentPage : 1;
        $scope.curCategoryId = $location.search().category;

        // 设置标题
        Page.setTitle('信息专区|农科110');

        // 设置url query 参数
        if ($location.search().type == false) {
            $location.search('type', 'DEMAND');
        }

        $scope.curType = $location.search().type ? $location.search().type : 'DEMAND';

        // $scope.trades = [];

        // 加载问题数据
        $scope.loadTrades = function () {
            $http({
                method: 'GET',
                url: apiUrl + '/trades' + '?pageSize=10&page=' + $scope.curPage,
                headers: {'X-AUTH-TOKEN': $cookieStore.get("authToken")}
            })
                .then(function (res) {
                    // angular.forEach(res.data, function (item, index) {
                    //     console.log(index);
                    //     $scope.trades[item.id] = item;
                    // })
                    $scope.trades = res.data;
                    console.log($scope.trades);

                    // Loading.setLoading(false);
                }, function (res) {
                    ngNotify.set("网络加载失败", 'error');
                });
        };

        // 加载分类
        $scope.loadCategories = function () {
            $http.get(apiUrl + '/categories?' + 'parentId=1')
                .error(function (data, status) {
                    // ngNotify.set("网络加载失败");
                })
                .success(function (data) {
                    console.log(data);
                    $scope.categories = data;

                });
        };

        // Loading.setLoading(true);

        $scope.loadCategories();

        $scope.loadTrades();

        $scope.fav = function (trade,position) {
            console.log(position);
            if ($scope.trades[position].fav == true) {
                $scope.trades[position].fav = false;
                $scope.unFavTrade(trade.id);
            } else {
                $scope.trades[position].fav = true;
                $scope.favTrade(trade.id);
            }
        };

        // 收藏交易
        $scope.favTrade = function (tradeId) {
            $http({
                method: 'PUT',
                url: apiUrl + '/trade/' + tradeId + '/fav',
                headers: {'X-AUTH-TOKEN': $cookieStore.get("authToken")}
            })
                .then(function (res) {
                    console.log(res);
                }, function (res) {
                    ngNotify.set("收藏失败", 'error');
                });

        };

        // 取消收藏交易
        $scope.unFavTrade = function (tradeId) {
            $http({
                method: 'PUT',
                url: apiUrl + '/trade/' + tradeId + '/unFav',
                headers: {'X-AUTH-TOKEN': $cookieStore.get("authToken")}
            })
                .then(function (res) {
                    console.log(res);
                }, function (res) {
                    ngNotify.set("收藏失败", 'error');
                });
        };

    });
