'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:QuestionPostCtrl
 * @description
 * # QuestionPostCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
    .controller('QuestionPostCtrl', function ($scope, Page, $cookieStore, apiUrl, $http, ngNotify, $location, Loading) {

        Page.setTitle('我要提问-农科110');

        $('.ui.dropdown')
            .dropdown({
                action: 'hide',
                onChange: function (value, text, $selectedItem) {
                    console.log(value);
                    $('#categoryId').attr("value",value);
                    $scope.categoryId = value;
                }
            })
        ;
        $scope.createQuestion = function () {

            Loading.setLoading(true);

            var questionData = {
                categoryId: $scope.categoryId,
                title: $scope.title,
                content: $scope.content,
                image: $scope.image
            };

            $http({
                method: 'POST',
                url: apiUrl + '/question',
                headers: {'X-AUTH-TOKEN': $cookieStore.get("authToken")},
                data: questionData
            })
                .then(function (res) {
                    Loading.setLoading(false);
                    ngNotify.set("问题提交成功",'success');
                    $location.path('/question');
                }, function (res) {
                    ngNotify.set("问题提交失败",'error');
                    Loading.setLoading(false);
                });

        };
    });
