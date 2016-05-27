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

        $scope.curCategoryId = $location.search().category;

        // 设置标题
        Page.setTitle('信息专区|农科110');

        // 设置url query 参数
        if ($location.search().type == false) {
            $location.search('type', 'DEMAND');
        }

        $scope.curType = $location.search().type ? $location.search().type : 'DEMAND';


        // 加载问题数据
        $scope.loadTrades = function () {
            $http.get(apiUrl + '/trades')
                .error(function (data, status) {
                    ngNotify.set("网络加载失败",'error');
                })
                .success(function (data) {
                    console.log(data);
                    $scope.trades = data;

                    Loading.setLoading(false);

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

        Loading.setLoading(true);

        $scope.loadCategories();
        
        $scope.loadTrades();
    });
