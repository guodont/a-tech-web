'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:VideoCtrl
 * @description
 * # VideoCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
    .controller('VideoCtrl', function ($http, $scope, apiUrl, ngNotify, Loading, $location, Page) {

        $scope.curCategoryId = $location.search().category;

        // 设置标题
        Page.setTitle('视频专区|农科110');

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
        
        // 加载视频
        $scope.loadVideos = function () {
            $http.get(apiUrl + '/videos')
                .error(function (data, status) {
                    ngNotify.set("网络加载失败",'error');
                })
                .success(function (data) {
                    console.log(data);
                    $scope.videos = data;

                    Loading.setLoading(false);

                });
        };
        
        $scope.loadCategories();
        
        $scope.loadVideos();
        
    });
