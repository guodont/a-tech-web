'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:TradeInfoCtrl
 * @description
 * # TradeInfoCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
    .controller('TradeInfoCtrl', function ($http, $scope, apiUrl, ngNotify, $routeParams,Page) {

        console.log('获取交易信息');

        $scope.curTradeId = $routeParams.id;

        // 获取交易信息
        $scope.getTradeInfo = function() {

            $http.get(apiUrl + '/trade/' + $routeParams.id)
                .error(function(data) {
                    console.log(data);
                })
                .success(function(data) {
                    $scope.curTrade = data;
                    Page.setTitle($scope.curTrade.title);

                    $scope.images = $scope.curTrade.images.split(',');

                });
        };

        $scope.getTradeInfo();
    });
