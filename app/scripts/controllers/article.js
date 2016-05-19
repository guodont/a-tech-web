'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:ArticleCtrl
 * @description
 * # ArticleCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
    .controller('ArticleCtrl', function ($http, $scope, apiUrl, ngNotify) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        // 加载文章
        $scope.loadArticles = function() {
            $http.get(apiUrl + '/articles')
                .error(function(data, status) {
                    ngNotify.set("网络加载失败");
                })
                .success(function(data) {
                    console.log(data);
                    $scope.articles = data;
                });
        };
        
        $scope.loadArticles();

    });
