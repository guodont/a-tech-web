'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:UsercenterMyquestionCtrl
 * @description
 * # UsercenterMyquestionCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
    .controller('UsercenterMyquestionCtrl', function ($scope, Page, $cookieStore, apiUrl, $http, ngNotify, $location, Loading) {

        // 设置标题
        Page.setTitle('我的问题-个人中心|农科110');

        // 设置当前菜单
        $scope.curMenu = "myquestion";

        // 设置url query 参数
        if ($location.search().status == false) {
            $location.search('status', 'RESOLVED');
        }

        $scope.curStatus = $location.search().status ? $location.search().status : 'RESOLVED';


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

        Loading.setLoading(true);

        $scope.loadQueitions();
    });
