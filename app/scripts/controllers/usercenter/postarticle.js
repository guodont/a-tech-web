'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:UsercenterPostarticleCtrl
 * @description
 * # UsercenterPostarticleCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
    .controller('UsercenterPostarticleCtrl', function ($scope, Page, $cookieStore, apiUrl, $http, ngNotify, $location, Loading) {

        $scope.curMenu = "postarticle";


        $scope.getCategories = function (type) {

            $http({
                method: 'GET',
                url: apiUrl + '/categories?categoryType=ARTICLE&parentId='
            })
                .then(function (res) {
                    console.log(res.data);
                    $scope.categories = res.data;
                }, function (res) {
                    console.log('加载分类失败');
                });
        };

        $scope.getCategories('ARTICLE');  // 获取文章分类

        $('.ui.dropdown')
            .dropdown({
                // action: 'hide',
                onChange: function (value, text, $selectedItem) {
                    console.log(value);
                    $('#categoryId').attr("value", value);
                    $scope.categoryId = value;
                }
            })
        ;
        
        $scope.addArticle = function () {
            $http({
                method: 'POST',
                url: apiUrl + '/expert/article',
                headers: {'X-AUTH-TOKEN': $cookieStore.get("authToken")},
                data: {
                    title: $scope.title,
                    content: editor.getValue(),
                    tag: $scope.tag,
                    image: $scope.imageData,
                    categoryId: $scope.categoryId
                }
            })
                .then(function (res) {
                    ngNotify.set('文章发布成功', 'success');
                    $location.path('/usercenter/myarticle');
                }, function (res) {
                    console.log(res);
                    if (res.status === 400) {
                        angular.forEach(res.data, function (value, key) {
                            if (key === 'title' || key === 'content' || key == 'categoryId') {
                                ngNotify.set(key + ' : ' + value, 'error');
                            } else {
                                ngNotify.set(value.message, 'error');
                            }
                        });
                    } else if (res.status === 401) {
                        $location.path('/login');
                    } else if (res.status === 500) {
                        ngNotify.set('Internal server error!', 'error');
                    } else {
                        ngNotify.set(res.date, 'error');
                    }
                });
        };
    });
