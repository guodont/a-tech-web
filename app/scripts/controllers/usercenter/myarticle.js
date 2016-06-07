'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:UsercenterMyarticleCtrl
 * @description
 * # UsercenterMyarticleCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
    .controller('UsercenterMyarticleCtrl', function ($scope, Page, $cookieStore, apiUrl, $http, ngNotify, $location) {

        $scope.curMenu = "myarticle";

        $scope.curCategoryId = $location.search().category;

        $scope.curPage = $location.search().currentPage ? $location.search().currentPage : 1;

        // 设置标题
        Page.setTitle('我的文章|农科110');

        // 加载文章 TODO
        $scope.loadArticles = function () {
            $http.get(apiUrl + '/expert/' + $scope.curUserId + '/articles' + '?pageSize=15&page=' + $scope.curPage)
                .error(function (data, status) {
                    ngNotify.set("网络加载失败");
                })
                .success(function (data) {
                    console.log(data);
                    $scope.articles = data;
                });
        };

        $scope.loadArticles();

    });
