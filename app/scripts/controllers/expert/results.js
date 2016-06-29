'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:ExpertResultsCtrl
 * @description
 * # ExpertResultsCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
    .controller('ExpertResultsCtrl', function ($http, $scope, apiUrl, ngNotify, Page, $routeParams,$location, Loading, $cookieStore) {
        console.log($routeParams.expertId);

        Page.setSubNav('result');

        $scope.curPage = $location.search().currentPage ? $location.search().currentPage : 1;

// 获取专家信息
        $scope.getExpertInfo = function () {

            $http.get(apiUrl + '/expert/' + $routeParams.expertId)
                .error(function (data) {
                    console.log(data);
                })
                .success(function (data) {
                    $scope.curExpert = data;
                    $scope.loadArticles();
                });
        };

        $scope.getExpertInfo();
        
        // 加载文章 TODO
        $scope.loadArticles = function () {
            $http.get(apiUrl + '/expert/' +  $scope.curExpert.user.id + '/results' + '?pageSize=15&page=' + $scope.curPage)
                .error(function (data, status) {
                    ngNotify.set("网络加载失败");
                })
                .success(function (data) {
                    console.log(data);
                    $scope.articles = data;
                });
        };


    });
