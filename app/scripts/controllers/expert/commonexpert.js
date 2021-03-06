'use strict';

angular.module('aTechClientApp')
    .controller('CommonExpertCtrl', function ($http, $scope,$rootScope, apiUrl, ngNotify, $routeParams, Loading, $cookieStore) {

        console.log('获取专家信息');

        $scope.curExpertId = $routeParams.expertId;
        
        // 获取专家信息
        $scope.getExpertInfo = function() {

            $http.get(apiUrl + '/expert/' + $routeParams.expertId)
                .error(function(data) {
                    console.log(data);
                })
                .success(function(data) {
                    $scope.curExpert = data;
                    $rootScope.curExpert = data;
                    $scope.loadTrends();

                });
        };

        $scope.getExpertInfo();


        // 加载动态
        $scope.loadTrends = function () {

            $http.get(apiUrl + '/expert/' + $scope.curExpert.user.id + '/trend')
                .error(function (data, status) {
                    ngNotify.set("网络加载失败");
                })
                .success(function (data) {
                    console.log(data);
                    $scope.trends = data;

                });
        };

    });
