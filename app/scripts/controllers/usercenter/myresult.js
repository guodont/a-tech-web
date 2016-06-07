'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:UsercenterMyresultCtrl
 * @description
 * # UsercenterMyresultCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
    .controller('UsercenterMyresultCtrl', function ($scope, Page, $cookieStore, apiUrl, $http, ngNotify, $location, Loading) {

        $scope.curMenu = "myresult";

        $scope.curCategoryId = $location.search().category;

        $scope.curPage = $location.search().currentPage ? $location.search().currentPage : 1;

        // 设置标题
        Page.setTitle('我的成果|农科110');

        // 加载文章 TODO
        $scope.loadArticles = function () {
            $http.get(apiUrl + '/expert/' + $scope.curUserId + '/results' + '?pageSize=15&page=' + $scope.curPage)
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
