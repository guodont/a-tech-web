'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:VideoInfoCtrl
 * @description
 * # VideoInfoCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
    .controller('VideoInfoCtrl', function ($http, $scope, $location, apiUrl, ngNotify, $routeParams, Loading, $cookieStore, $sce, cloudUrl) {

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
                    $scope.resourceUrl = cloudUrl + $scope.video.path;
                    console.log($scope.resourceUrl);
                    Loading.setLoading(false);

                });
        };

        $scope.trustSrc = function (url) {
            return $sce.trustSrc(url);
        }

        $scope.loadVideo();
    });
