'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:ExpertCtrl
 * @description
 * # ExpertCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
    .controller('ExpertCtrl', function ($http, $scope, apiUrl, ngNotify, Loading, $location, Page, $cookieStore) {

        $scope.curPage = $location.search().currentPage ? $location.search().currentPage : 1;

        $scope.curCategoryId = $location.search().category;

        // 设置标题
        Page.setTitle('专家在线|农科110');

        // 加载专家数据
        $scope.loadExperts = function () {
            $http({
                method: 'GET',
                url: apiUrl + '/experts' + '?pageSize=10&page=' + $scope.curPage,
                headers: {'X-AUTH-TOKEN': $cookieStore.get("authToken")}
            })
                .then(function (res) {
                    $scope.experts = res.data;
                    console.log($scope.experts);
                    Loading.setLoading(false);
                }, function (res) {
                    ngNotify.set("网络加载失败", 'error');
                });
        };

        // 加载分类
        $scope.loadCategories = function () {
            $http({
                method: 'GET',
                url: apiUrl + '/categories?categoryType=EXPERT&parentId='
            })
                .then(function (res) {
                    console.log(res.data);
                    $scope.categories = res.data;
                }, function (res) {
                    console.log('加载分类失败');
                });
        };

        Loading.setLoading(true);

        $scope.loadCategories();

        $scope.loadExperts();
    });
