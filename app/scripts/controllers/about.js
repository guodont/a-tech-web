'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
    .controller('AboutCtrl', function ($http, $scope, apiUrl, ngNotify, Loading, $location, Page, $cookieStore) {
        
        $scope.curCategoryId = $location.search().category ? $location.search().category : '';

        $scope.curPage = $location.search().currentPage ? $location.search().currentPage : 1;

        // 设置标题
        Page.setTitle('关于我们|农科110');

        // 加载文章
        $scope.loadArticles = function () {
            $http.get(apiUrl + '/articles' + '?pageSize=15&page=' + $scope.curPage )
                .error(function (data, status) {
                    ngNotify.set("网络加载失败");
                })
                .success(function (data) {
                    console.log(data);
                    $scope.articles = data;
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

        $scope.loadArticles();
    });
