'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:ArticleInfoCtrl
 * @description
 * # ArticleInfoCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
    .controller('ArticleInfoCtrl', function ($http, $scope, apiUrl, ngNotify, $routeParams) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        // 加载文章详细信息
        $scope.loadArticle = function() {
            $http.get(apiUrl + '/article/' + $routeParams.id)
                .error(function(data, status) {
                    ngNotify.set("网络加载失败");
                })
                .success(function(data) {
                    console.log(data);
                    $scope.article = data;
                });
        };

        // TODO 加载文章评论数据


        $scope.loadArticle();


    });
