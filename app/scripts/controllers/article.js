'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:ArticleCtrl
 * @description
 * # ArticleCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
    .controller('ArticleCtrl', function ($http, $scope, $location, apiUrl, ngNotify, Loading, Page) {

        $scope.curCategoryId = $location.search().category;


        // 设置标题
        Page.setTitle('文章专区|农科110');
        
        // 加载文章
        $scope.loadArticles = function () {
            $http.get(apiUrl + '/articles')
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
