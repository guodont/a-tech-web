'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:QuestionInfoCtrl
 * @description
 * # QuestionInfoCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
    .controller('QuestionInfoCtrl', function ($http, $scope, apiUrl, ngNotify, $routeParams) {

        console.log('获取问题信息');

        $scope.curQuestionId = $routeParams.id;
        $scope.hasAnswer = false;

        // 获取问题信息
        $scope.getQuestionInfo = function () {

            $http.get(apiUrl + '/question/' + $routeParams.id)
                .error(function (data) {
                    console.log(data);
                })
                .success(function (data) {
                    $scope.curQuestion = data;
                    if ($scope.curQuestion.answer !== null) {
                        $scope.hasAnswer = true;
                    }
                });
        };

        $scope.getQuestionInfo();
    });
