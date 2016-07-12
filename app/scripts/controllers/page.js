'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:PagectrlCtrl
 * @description
 * # PagectrlCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
    .controller('PageCtrl', function ($scope, $rootScope, Page, Loading, $cookieStore, ngNotify, $location, $http, apiUrl) {
        $scope.Page = Page;

        $scope.isLogin = $cookieStore.get("isLoggedIn") == 1 ? true : false;

        $scope.isExpert = $cookieStore.get("isExpert") == 1 ? true : false;
        
        $scope.curUserId = $cookieStore.get("userId");

        $scope.loading = Loading;

        ngNotify.config({
            theme: 'pastel',
            position: 'bottom',
            duration: 3000,
            type: 'info',
            sticky: false,
            button: true,
            html: false
        });

        $rootScope.isLogin = function () {
            $scope.isLogin = true;
        };

        $scope.search = function () {
            $location.url('/article?&curParentId=0&keyWord'+ $scope.keyWord);
        };
        
        $scope.logout = function () {

            console.log("退出登录操作");

            $http({
                method: 'GET',
                url: apiUrl + '/logout',
                headers: {'X-AUTH-TOKEN': $cookieStore.get("authToken")}
            })
                .then(function (res) {
                    ngNotify.set("成功退出帐号");
                    console.log("成功退出帐号");
                    $cookieStore.remove("authToken");
                    $cookieStore.remove("isLogin");
                    $cookieStore.remove("isLoggedIn");
                    $location.path('/');
                    $scope.isLogin = false;
                    // $scope.$apply();
                    // $location.location.reload()

                }, function (res) {
                    console.log("退出帐号失败");
                    $cookieStore.remove("authToken");
                    $cookieStore.remove("isLogin");
                    $cookieStore.remove("isLoggedIn");
                    $cookieStore.remove("isExpert");
                    $location.path('/');
                    $scope.isLogin = false;
                    // $scope.$apply();
                });
        };
    })
    .directive('observe', function () {
        return {
            restrice: 'EA',
            controller: function ($scope, pagerConfig, $location) {
                // 共多少条
                // $scope.totalItems = 0;
                // $scope.page = [];
                // // 偏移数
                // $scope.offsetPage = 0;
                // // 一页多少条
                // $scope.itemsPerpage = 0;
                // // 一个多少页
                // $scope.totalPages = 0;

                $scope.currentPage = $location.search().currentPage ? parseInt($location.search().currentPage) : 1;
                // $scope.currentPage = 0;

                // $scope.$watch('totalItems', function () {
                //     $scope.totalPages = Math.ceil($scope.totalItems / $scope.itemsPerpage);
                //
                //     resetPageList();
                //     if ($scope.page[$location.search().currentPage]) {
                //         $scope.page[$location.search().currentPage].active = true;
                //     }
                // });
                //
                // var resetPageList = function () {
                //     $scope.page = [];
                //
                //     var last = Math.min(Number($scope.offsetPage) + Number($scope.listSizes), $scope.totalPages);
                //
                //     for (var i = $scope.offsetPage; i < last; i++) {
                //         $scope.page.push({
                //             text: i,
                //             indexPage: i,
                //             active: false
                //         })
                //     }
                //
                // }
                // var getOffset = function (index) {
                //     var offset = Math.min(index, $scope.totalPages - $scope.listSizes);
                //     if (offset <= 0) {
                //         offset = 0;
                //     }
                //     return offset;
                // };
                $scope.selectPage = function (index) {
                    // if (index < 0 || index >= $scope.totalPages) {
                    //     return;
                    // }
                    // if ($scope.page[$scope.currentPage - $scope.offsetPage]) {
                    //     $scope.page[$scope.currentPage - $scope.offsetPage].active = false;
                    // }
                    // $scope.currentPage = index;
                    //
                    $location.search('currentPage', index);
                    // 如果currentPage 小于 offsetPage 或者 currentPage 大于 offsetPage加listsizes
                    //
                    // if ($scope.currentPage < $scope.offsetPage || $scope.currentPage >= $scope.offsetPage + $scope.page.length) {
                    //
                    //     $scope.offsetPage = getOffset(index)
                    //
                    //     resetPageList();
                    // }
                    //
                    // if ($scope.page[$scope.currentPage - $scope.offsetPage]) {
                    //     $scope.page[$scope.currentPage - $scope.offsetPage].active = true;
                    // }
                    // $scope.$emit('pagechage', $scope.currentPage);
                };
                $scope.getCurPage = function () {
                    return $scope.currentPage;
                };
                $scope.next = function () {
                    if ($scope.isLast()) {
                        return;
                    }
                    $scope.selectPage($scope.currentPage + 1);
                };
                $scope.provie = function () {
                    if ($scope.isFirst()) return
                    $scope.selectPage($scope.currentPage - 1);
                }
                $scope.first = function () {
                    $scope.selectPage(1);
                }
                $scope.last = function () {
                    $scope.selectPage($scope.totalPages - 1);
                }
                $scope.isFirst = function () {
                    return $scope.currentPage <= 1;
                };
                $scope.isLast = function () {
                    return $scope.currentPage >= $scope.totalPages - 1;
                }
                $scope.getText = function (key) {
                    return pagerConfig.text[key];
                };


            },
            link: function (scope, ele, attrs) {

                scope.itemsPerpage = attrs.itemsperpage || 1;
                scope.listSizes = attrs.listsizes;
                attrs.$observe('totalitems', function (val) {
                    scope.totalItems = val;
                })
            },
            templateUrl: '../include/page.html'
        }
    }).constant('pagerConfig', {
        text: {
            'first': '首页',
            'provie': '上一页',
            'next': '下一页',
            'last': '尾页',
        }
    }
);
;

