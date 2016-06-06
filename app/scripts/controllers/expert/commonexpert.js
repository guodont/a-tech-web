'use strict';

angular.module('aTechClientApp')
    .controller('CommonExpertCtrl', function ($http, $scope, apiUrl, ngNotify, $routeParams, Loading, $cookieStore) {

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
                });
        };

        $scope.getExpertInfo();
    });
