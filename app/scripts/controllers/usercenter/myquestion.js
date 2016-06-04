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
            $http({
                method: 'GET',
                url: apiUrl + '/user/questions',
                headers: {'X-AUTH-TOKEN': $cookieStore.get("authToken")}
            })
                .then(function (res) {
                    console.log(data);
                    $scope.questions = data;
                }, function (res) {
                    ngNotify.set("网络加载失败",'error');
                });

        };


        $scope.loadQueitions();
    });
