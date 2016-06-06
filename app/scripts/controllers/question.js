'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:QuestionCtrl
 * @description
 * # QuestionCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
    .controller('QuestionCtrl', function ($http, $scope, apiUrl, ngNotify, Loading, $location, Page, $cookieStore) {
        
        $scope.curPage = $location.search().currentPage ? $location.search().currentPage : 1;
        $scope.curCategoryId = $location.search().category;
        // $scope.questions = [];

        // 设置标题
        Page.setTitle('问答专区|农科110');

        // 加载问题数据
        $scope.loadQueitions = function () {
            $http({
                method: 'GET',
                url: apiUrl + '/questions' + '?pageSize=10&page=' + $scope.curPage,
                headers: {'X-AUTH-TOKEN': $cookieStore.get("authToken")}
            })
                .then(function (res) {
                    // angular.forEach(res.data, function (item, index) {
                    //     console.log(index);
                    //     $scope.questions[item.id] = item;
                    // })
                    $scope.questions = res.data;
                    console.log($scope.questions);
                    // Loading.setLoading(false);
                }, function (res) {
                    ngNotify.set("网络加载失败", 'error');
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


        // Loading.setLoading(true);

        $scope.loadCategories();

        $scope.loadQueitions();

        $scope.fav = function (question,position) {
            if ($scope.questions[position].fav == true) {
                $scope.questions[position].fav = false;
                $scope.unFavQuestion(question.id);
            } else {
                $scope.questions[position].fav = true;
                $scope.favQuestion(question.id);
            }
        };

        // 收藏
        $scope.favQuestion = function (questionId) {
            $http({
                method: 'PUT',
                url: apiUrl + '/question/' + questionId + '/fav',
                headers: {'X-AUTH-TOKEN': $cookieStore.get("authToken")}
            })
                .then(function (res) {
                    console.log(res);
                }, function (res) {
                    ngNotify.set("收藏失败", 'error');
                });

        };

        // 取消收藏
        $scope.unFavQuestion = function (questionId) {
            $http({
                method: 'PUT',
                url: apiUrl + '/question/' + questionId + '/unFav',
                headers: {'X-AUTH-TOKEN': $cookieStore.get("authToken")}
            })
                .then(function (res) {
                    console.log(res);
                }, function (res) {
                    ngNotify.set("收藏失败", 'error');
                });
        };

    });
