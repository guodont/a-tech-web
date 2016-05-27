'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:VideoInfoCtrl
 * @description
 * # VideoInfoCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
    .controller('VideoInfoCtrl', function ($http, $scope, apiUrl, ngNotify, $routeParams, Loading, $cookieStore) {
        // 加载视频详细信息
        $scope.loadVideo = function () {

            Loading.setLoading(true);

            $http.get(apiUrl + '/video/' + $routeParams.id)
                .error(function (data, status) {
                    ngNotify.set("网络加载失败");
                    Loading.setLoading(false);
                })
                .success(function (data) {
                    console.log(data);
                    $scope.video = data;
                    Loading.setLoading(false);

                });
        };

        $scope.loadVideo();
    });
