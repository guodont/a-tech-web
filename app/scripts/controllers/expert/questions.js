'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:ExpertQuestionsCtrl
 * @description
 * # ExpertQuestionsCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
    .controller('ExpertQuestionsCtrl', function ($http, $scope, $rootScope, apiUrl, Page, ngNotify, $routeParams, Loading, $cookieStore, $location) {
        console.log($routeParams.expertId);

        $scope.curPage = $location.search().currentPage ? $location.search().currentPage : 1;

        Page.setSubNav('question');


        // 获取专家信息
        $scope.getExpertInfo = function () {

            $http.get(apiUrl + '/expert/' + $routeParams.expertId)
                .error(function (data) {
                    console.log(data);
                })
                .success(function (data) {
                    $scope.curExpert = data;
                    $scope.loadQueitions();
                });
        };

        $scope.getExpertInfo();

        // 加载问题数据
        $scope.loadQueitions = function () {
            $http({
                method: 'GET',
                url: apiUrl + '/expert/' +  $scope.curExpert.user.id + '/questions?status=RESOLVED&pageSize=10&page=' + $scope.curPage,
                headers: {'X-AUTH-TOKEN': $cookieStore.get("authToken")}
            })
                .then(function (res) {
                    console.log(res.data);
                    $scope.questions = res.data;
                }, function (res) {
                    ngNotify.set("网络加载失败", 'error');
                });

        };


    });
