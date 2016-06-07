'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:UsercenterMytrendCtrl
 * @description
 * # UsercenterMytrendCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
    .controller('UsercenterMytrendCtrl', function ($scope, Page, $cookieStore, apiUrl, $http, ngNotify, $location, Loading, $routeParams) {

        $scope.curMenu = "mytrend";

        // 加载动态
        $scope.loadTrends = function () {

            $http.get(apiUrl + '/expert/' + $scope.curUserId + '/trend')
                .error(function (data, status) {
                    ngNotify.set("网络加载失败");
                })
                .success(function (data) {
                    console.log(data);
                    $scope.trends = data;

                });
        };

        $scope.loadTrends();

        $scope.addTrend = function () {

            var trendData = {
                content: $scope.comment
            };

            $http({
                method: 'POST',
                url: apiUrl + '/expert/trend',
                headers: {'X-AUTH-TOKEN': $cookieStore.get("authToken")},
                data: trendData
            })
                .then(function (res) {
                    $scope.comment = "";
                    $scope.loadTrends();
                }, function (res) {
                });
        };

    });
