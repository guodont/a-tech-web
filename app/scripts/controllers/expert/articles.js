'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:ExpertArticlesCtrl
 * @description
 * # ExpertArticlesCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
    .controller('ExpertArticlesCtrl', function ($http, $scope, apiUrl, ngNotify, $routeParams, Loading, $location, Page, $cookieStore) {

        console.log($routeParams.expertId);

        $scope.curPage = $location.search().currentPage ? $location.search().currentPage : 1;

        // 设置标题
        Page.setTitle('专家的文章|农科110');
        Page.setSubNav('article');

        // 加载文章 TODO
        $scope.loadArticles = function () {
            $http.get(apiUrl + '/expert/' + $routeParams.expertId + '/articles' + '?pageSize=15&page=' + $scope.curPage)
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
