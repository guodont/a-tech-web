'use strict';

/**
 * @ngdoc function
 * @name aTechClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aTechClientApp
 */
angular.module('aTechClientApp')
    .controller('MainCtrl', function ($http, $scope, apiUrl, ngNotify, Loading, $location, Page, $cookieStore) {

        Page.setTitle('农科110首页');
        Page.setSeo('农科110,山西农科110,山西,农业');
        Page.setNav('index');

        $scope.trades = {
            0: [],
            1: []
        };

        $scope.articles = {
            0: [],
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: [],
            8: [],
            9: [],
            10: [],
            11: [],
            12: [],
            13: [],
            14: [],
            15: [],
            16: [],
            17: [],
            18: [],
            19: [],
            20: [],
            21: [],
            22: [],
            23: [],
            24: [],
            25: [],
            26: [],
            27: [],
            28: [],
        };
        $scope.getFloatAdvs = function () {
            // console.log("获取轮播图展示数据");
            $http({
                method: 'GET',
                url: apiUrl + '/advertisements' + '?pageSize=5&page=1&position=FLOAT'
            })
                .then(function (res) {
                    $scope.floatAdvs = res.data;
                    // console.log($scope.floatAdvs);
                }, function (res) {
                    // console.log("滚动广告获取失败");
                });
        };

        $scope.getFriendLinks = function () {
            // console.log("获取友情链接数据");
            $http({
                method: 'GET',
                url: apiUrl + '/links'
            })
                .then(function (res) {
                    $scope.links = res.data;
                    // console.log($scope.links);
                }, function (res) {
                    // console.log("获取友情链接数据失败");
                });
        };

        // 加载视频分类
        $scope.loadVideoCategories = function () {
            $http.get(apiUrl + '/categories?categoryType=VIDEO' + '&parentId=')
                .error(function (data) {
                    // console.log("获取视频分类数据失败");
                })
                .success(function (data) {
                    // console.log(data);
                    $scope.videoCategories = data;
                });
        };

        // 加载视频
        $scope.loadVideos = function (category) {
            $scope.curVideoCategoryId = category;
            $http.get(apiUrl + '/videos' + '?pageSize=8&page=1&category=' + category)
                .error(function (data, status) {
                    // console.log("获取视频数据失败");
                })
                .success(function (data) {
                    // console.log(data);
                    $scope.videos = data;
                });
        };

        // 加载问题数据
        $scope.loadQueitions = function () {
            $http({
                method: 'GET',
                url: apiUrl + '/questions' + '?pageSize=6&page=1'
            })
                .then(function (res) {
                    $scope.questions = res.data;
                    // console.log($scope.questions);
                }, function (res) {
                    // console.log("获取问题数据失败");
                });
        };

        // 加载专家数据
        $scope.loadExperts = function () {
            $http({
                method: 'GET',
                url: apiUrl + '/experts' + '?pageSize=6&page=1&categoryId='
            })
                .then(function (res) {
                    $scope.experts = res.data;
                    // // console.log($scope.experts);
                }, function (res) {
                    // console.log("加载专家数据失败");
                });
        };

        // 加载交易数据
        $scope.loadTrades = function () {
            $http({
                method: 'GET',
                url: apiUrl + '/trades' + '?pageSize=5&page=1&tradeType=SUPPLY'
            })
                .then(function (res) {
                    $scope.trades[0] = res.data;
                }, function (res) {
                    // console.log("加载交易数据失败");
                });
        };

        // 加载交易数据
        $scope.loadTradesForSupply = function () {
            $http({
                method: 'GET',
                url: apiUrl + '/trades' + '?pageSize=5&page=1&tradeType=DEMAND'
            })
                .then(function (res) {
                    $scope.trades[1] = res.data;
                }, function (res) {
                    // console.log("加载交易数据失败");
                });
        };

        // 加载文章
        $scope.loadArticles = function (curCategoryId, id, size, page) {
            $http.get(apiUrl + '/articles/' + curCategoryId + '?pageSize=' + size + '&page=' + page)
                .error(function (data, status) {
                })
                .success(function (data) {
                    $scope.articles[id] = data;
                });
        };


        // 公告通知
        $scope.loadArticles(26, 0, 6, 1);

        // 工作动态
        $scope.loadArticles(50, 1, 9, 1);

        // 山西农业
        $scope.loadArticles(7, 2, 5, 1);

        // 畜禽养殖
        $scope.loadArticles(14, 3, 9, 1);

        // 特种养殖
        $scope.loadArticles(15, 4, 9, 1);

        // 水产养殖
        $scope.loadArticles(16, 5, 9, 1);

        // 科技前沿
        $scope.loadArticles(10, 6, 9, 1);

        // 成果快报
        $scope.loadArticles(11, 7, 9, 1);

        // 科技兴农
        $scope.loadArticles(12, 8, 5, 1);

        // 农作物
        $scope.loadArticles(17, 9, 5, 1);

        // 果树
        $scope.loadArticles(18, 10, 5, 1);

        // 蔬菜
        $scope.loadArticles(19, 11, 5, 1);

        // 瓜类
        $scope.loadArticles(20, 12, 5, 1);

        //农药
        $scope.loadArticles(36, 13, 9, 1);

        //肥料
        $scope.loadArticles(37, 14, 9, 1);

        //种子
        $scope.loadArticles(38, 15, 9, 1);

        //畜产品加工
        $scope.loadArticles(46, 16, 9, 1);

        //果品加工
        $scope.loadArticles(47, 17, 9, 1);

        //蔬菜加工
        $scope.loadArticles(48, 18, 9, 1);

        //副产品加工
        $scope.loadArticles(49, 19, 9, 1);


        //农副行情
        $scope.loadArticles(45, 20, 8, 1);

        //赚钱有招
        $scope.loadArticles(43, 21, 8, 1);

        //信息广场
        $scope.loadArticles(42, 22, 8, 1);

        //产品大全
        $scope.loadArticles(87, 23, 8, 1);

        //政策动态
        $scope.loadArticles(88, 24, 8, 1);

        //技能培训
        $scope.loadArticles(89, 25, 8, 1);


        //农事专题
        $scope.loadArticles(25, 26, 8, 1);

        //农事专题
        $scope.loadArticles(25, 27, 8, 2);

        //农事专题
        $scope.loadArticles(25, 28, 8, 3);


        // 获取轮播图数据
        $scope.getFloatAdvs();

        // 获取友情链接
        $scope.getFriendLinks();

        // 获取视频分类
        $scope.loadVideoCategories();

        // 获取视频数据
        $scope.loadVideos('');

        $scope.loadQueitions();

        $scope.loadExperts();

        $scope.loadTrades();

        $scope.loadTradesForSupply();

    });
