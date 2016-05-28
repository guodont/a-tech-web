'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:ArticleInfoCtrl
 * @description
 * # ArticleInfoCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
    .controller('ArticleInfoCtrl', function ($http, $scope, apiUrl, ngNotify, $routeParams, Loading, $cookieStore) {

        $scope.fontSize = 14;

        $scope.upFontSize = function () {
            $scope.fontSize += 1;
        };

        $scope.downFontSize = function () {
            $scope.fontSize -= 1;
        };

        // 加载文章详细信息
        $scope.loadArticle = function() {

            Loading.setLoading(true);

            $http.get(apiUrl + '/article/' + $routeParams.id)
                .error(function(data, status) {
                    ngNotify.set("网络加载失败");
                    Loading.setLoading(false);
                })
                .success(function(data) {
                    console.log(data);
                    $scope.article = data;
                    Loading.setLoading(false);

                });
        };

        // 加载文章评论信息
        $scope.loadComments = function() {

            $http.get(apiUrl + '/article/' + $routeParams.id + '/comments')
                .error(function(data, status) {
                    ngNotify.set("网络加载失败");
                })
                .success(function(data) {
                    console.log(data);
                    $scope.comments = data;

                });
        };

        // TODO 加载文章评论数据
        $scope.loadComments();

        $scope.loadArticle();


        $scope.addComment = function () {

            var commentData = {
                comment: $scope.comment
            };

            $http({
                method: 'POST',
                url: apiUrl + '/article/' + $routeParams.id + '/comments',
                headers: {'X-AUTH-TOKEN': $cookieStore.get("authToken")},
                data: commentData
            })
                .then(function (res) {
                    $scope.comment = "";
                    $scope.loadComments();
                }, function (res) {
                });

        };
    });
