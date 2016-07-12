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

        $scope.curCategoryId = $location.search().category ? $location.search().category : '';

        $scope.curParentId = $location.search().curParentId ? $location.search().curParentId : '';

        $scope.keyWord = $location.search().keyWord ? $location.search().keyWord : '';

        $scope.curPage = $location.search().currentPage ? $location.search().currentPage : 1;

        // 设置标题
        Page.setTitle('文章专区|农科110');
        Page.setSeo('文章专区|农科110');
        Page.setNav('article');
        // 加载文章
        $scope.loadArticles = function () {


            if ($scope.keyWord != '') {

                $http.get(apiUrl + '/articles/search/' + $scope.keyWord + '?pageSize=15&page=' + $scope.curPage)
                    .error(function (data, status) {
                        ngNotify.set("网络加载失败");
                    })
                    .success(function (data) {
                        console.log(data);
                        $scope.articles = data;
                        Loading.setLoading(false);
                    });
            } else {
                $http.get(apiUrl + '/articles/' + $scope.curCategoryId + '?pageSize=15&page=' + $scope.curPage)
                    .error(function (data, status) {
                        ngNotify.set("网络加载失败");
                    })
                    .success(function (data) {
                        console.log(data);
                        $scope.articles = data;
                        Loading.setLoading(false);
                    });
            }

        };

        // 加载分类
        $scope.loadCategories = function () {
            $http.get(apiUrl + '/categories?' + 'parentId=' + $scope.curParentId)
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
