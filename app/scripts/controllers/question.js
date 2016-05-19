'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:QuestionCtrl
 * @description
 * # QuestionCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
    .controller('QuestionCtrl', function ($http, $scope, apiUrl, ngNotify) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        // 加载问题数据
        $scope.loadQueitions = function () {
            $http.get(apiUrl + '/questions')
                .error(function (data, status) {
                    ngNotify.set("网络加载失败");
                })
                .success(function (data) {
                    console.log(data);
                    $scope.questions = data;
                });
        };

        $scope.loadQueitions();
    });
