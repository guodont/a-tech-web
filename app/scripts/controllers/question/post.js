'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:QuestionPostCtrl
 * @description
 * # QuestionPostCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
    .controller('QuestionPostCtrl', function ($scope, Page, $cookieStore, apiUrl, $http, ngNotify, $location, Loading, cloudUrl) {

        Page.setTitle('我要提问-农科110');

        if ($cookieStore.get("isLoggedIn") !== 1) {
            ngNotify.set("登录后提问", 'error');

            $location.path('/login');
        }

        $scope.images = [];
        $scope.imageData = '';
        $scope.categories = null;

        $scope.expertId = $location.search().expertId ? $location.search().expertId : '';

        if ($scope.expertId != '')
            $scope.desc = '向专家提问';
        else
            $scope.desc = '请认真填写您所遇到的问题，我们将尽快指派专家给您回复';

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

        // 加载问题分类数据
        $scope.loadQueitionCategories = function () {
            $http.get(apiUrl + '/categories?categoryType=QUESTION&parentId=')
                .error(function (data, status) {
                    ngNotify.set("网络加载失败", 'error');
                })
                .success(function (data) {
                    console.log(data);
                    $scope.categories = data;
                });
        };

        $scope.loadQueitionCategories();

        $scope.createQuestion = function () {

            Loading.setLoading(true);

            var questionData = {
                categoryId: $scope.categoryId,
                title: $scope.title,
                content: $scope.content,
                image: $scope.imageData,
                expertId: $scope.expertId
            };

            $http({
                method: 'POST',
                url: apiUrl + '/question',
                headers: {'X-AUTH-TOKEN': $cookieStore.get("authToken")},
                data: questionData
            })
                .then(function (res) {
                    Loading.setLoading(false);
                    ngNotify.set("问题提交成功", 'success');
                    $location.path('/question');
                }, function (res) {
                    ngNotify.set("问题提交失败", 'error');
                    Loading.setLoading(false);
                });

        };

        $scope.getUploadToken = function () {
            $http({
                method: 'GET',
                url: apiUrl + '/user/uploadToken',
                headers: {'X-AUTH-TOKEN': $cookieStore.get("authToken")}
            })
                .then(function (res) {
                    $scope.uploadToken = res.data.success.message;
                    $scope.initUpload();
                }, function (res) {
                    console.log("uploadToken获取失败");
                });
        };

        $scope.getUploadToken();

        $scope.initUpload = function () {
            var uploader = Qiniu.uploader({
                runtimes: 'html5,flash,html4',      // 上传模式,依次退化
                browse_button: 'pickfiles',         // 上传选择的点选按钮，**必需**
                uptoken: $scope.uploadToken,
                get_new_uptoken: false,             // 设置上传文件的时候是否每次都重新获取新的 uptoken
                unique_names: true,              // 默认 false，key 为文件名。若开启该选项，JS-SDK 会为每个文件自动生成key（文件名）
                save_key: false,                  // 默认 false。若在服务端生成 uptoken 的上传策略中指定了 `sava_key`，则开启，SDK在前端将不对key进行任何处理
                domain: cloudUrl,     // bucket 域名，下载资源时用到，**必需**
                container: 'upload-container',             // 上传区域 DOM ID，默认是 browser_button 的父元素，
                max_file_size: '100mb',             // 最大文件体积限制
                flash_swf_url: 'path/of/plupload/Moxie.swf',  //引入 flash,相对路径
                max_retries: 3,                     // 上传失败最大重试次数
                dragdrop: true,                     // 开启可拖曳上传
                drop_element: 'container',          // 拖曳上传区域元素的 ID，拖曳文件或文件夹后可触发上传
                chunk_size: '4mb',                  // 分块上传时，每块的体积
                auto_start: true,                   // 选择文件后自动上传，若关闭需要自己绑定事件触发上传,
                init: {
                    'FilesAdded': function (up, files) {
                        plupload.each(files, function (file) {
                            // 文件添加进队列后,处理相关的事情
                        });
                    },
                    'BeforeUpload': function (up, file) {
                        // 每个文件上传前,处理相关的事情
                        console.log("每个文件上传前,处理相关的事情");
                    },
                    'UploadProgress': function (up, file) {
                        // 每个文件上传时,处理相关的事情
                        console.log("上传中" + up);
                    },
                    'FileUploaded': function (up, file, info) {
                        console.log(info);
                        var domain = up.getOption('domain');
                        var res = JSON.parse(info);
                        var sourceLink = domain + res.key; //获取上传成功后的文件的Url
                        $scope.images.push(sourceLink);
                        $scope.imageData += res.key + ',';
                        $scope.$apply();
                    },
                    'Error': function (up, err, errTip) {
                        //上传出错时,处理相关的事情
                        console.log(errTip);
                    },
                    'UploadComplete': function () {
                        //队列文件处理完毕后,处理相关的事情
                    },
                    'Key': function (up, file) {
                        // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
                        // 该配置必须要在 unique_names: false , save_key: false 时才生效
                        var key = "";
                        // do something with key here
                        return key
                    }
                }
            });
        };
    });
