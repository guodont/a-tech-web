'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:QuestionCtrl
 * @description
 * # QuestionCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
    .controller('QuestionCtrl', function ($http, $scope, apiUrl, ngNotify, Loading, $location, Page) {

        $scope.curCategoryId = $location.search().category;


        // 设置标题
        Page.setTitle('问答专区|农科110');

        // 加载问题数据
        $scope.loadQueitions = function () {
            $http.get(apiUrl + '/questions')
                .error(function (data, status) {
                    ngNotify.set("网络加载失败",'error');
                })
                .success(function (data) {
                    console.log(data);
                    $scope.questions = data;

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

        $scope.loadQueitions();
        
    });
