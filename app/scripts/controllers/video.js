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

        $scope.curCategoryId = $location.search().category ? $location.search().category : '';
        $scope.curPage = $location.search().currentPage ? $location.search().currentPage : 1;

        // 设置标题
        Page.setTitle('视频专区|农科110');
        Page.setSeo('视频专区|农科110');
        Page.setNav('video');
        // 加载分类
        $scope.loadCategories = function () {
            $http.get(apiUrl + '/categories?categoryType=VIDEO' + '&parentId=')
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
            $http.get(apiUrl + '/videos' + '?pageSize=10&page=' + $scope.curPage)
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
