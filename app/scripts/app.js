'use strict';

/**
 * @ngdoc overview
 * @name aTechClientApp
 * @description
 * # aTechClientApp
 *
 * Main module of the application.
 */
angular
    .module('aTechClientApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ngNotify',
        'ngImgCrop'
    ])
    .constant('apiUrl', 'http://sxnk110.workerhub.cn:9000/api/v1')
    // .constant('apiUrl', 'http://localhost:9000/api/v1')
    .constant('cloudUrl', 'http://storage.workerhub.cn/')
    .filter("trustUrl", ['$sce', function ($sce) {
        return function (recordingUrl) {
            return $sce.trustAsResourceUrl(recordingUrl);
        };
    }])
    .config(function ($routeProvider, $locationProvider) {
        // $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {    //  首页
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {   //  关于
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/login', {    // 用户登录
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'login'
            })
            .when('/registerFirstStep', {     //  注册第一步
                templateUrl: 'views/registerfirststep.html',
                controller: 'RegisterfirststepCtrl',
                controllerAs: 'registerFirstStep'
            })
            .when('/registerSecondStep', {    //  注册第二步
                templateUrl: 'views/registersecondstep.html',
                controller: 'RegistersecondstepCtrl',
                controllerAs: 'registerSecondStep'
            })
            .when('/usercenter/profile', {    //  用户中心－资料设置
                templateUrl: 'views/usercenter/profile.html',
                controller: 'UsercenterProfileCtrl',
                controllerAs: 'usercenter/profile'
            })
            .when('/usercenter/changepassword', { //  用户中心－修改密码
                templateUrl: 'views/usercenter/changepassword.html',
                controller: 'UsercenterChangepasswordCtrl',
                controllerAs: 'usercenter/changepassword'
            })
            .when('/usercenter/myquestion', { //  用户中心－我的问题
                templateUrl: 'views/usercenter/myquestion.html',
                controller: 'UsercenterMyquestionCtrl',
                controllerAs: 'usercenter/myquestion'
            })
            .when('/usercenter/mytrade', {   // 用户中心－我的交易
                templateUrl: 'views/usercenter/mytrade.html',
                controller: 'UsercenterMytradeCtrl',
                controllerAs: 'usercenter/mytrade'
            })
            .when('/usercenter/message', {   // 用户中心－消息通知
                templateUrl: 'views/usercenter/message.html',
                controller: 'UsercenterMessageCtrl',
                controllerAs: 'usercenter/message'
            })
            .when('/usercenter/index', {    //  用户中心－首页
                templateUrl: 'views/usercenter/index.html',
                controller: 'UsercenterIndexCtrl',
                controllerAs: 'usercenter/index'
            })
            .when('/trade', {           //  交易列表
                templateUrl: 'views/trade.html',
                controller: 'TradeCtrl',
                controllerAs: 'trade'
            })
            .when('/trade/post', {      //  发布交易
                templateUrl: 'views/trade/post.html',
                controller: 'TradePostCtrl',
                controllerAs: 'trade/post'
            })
            .when('/trade/:id', {      //  交易详情
                templateUrl: 'views/trade/info.html',
                controller: 'TradeInfoCtrl',
                controllerAs: 'trade/info'
            })
            .when('/question', {        //  问题列表
                templateUrl: 'views/question.html',
                controller: 'QuestionCtrl',
                controllerAs: 'question'
            })
            .when('/question/post', {     //  发布问题
                templateUrl: 'views/question/post.html',
                controller: 'QuestionPostCtrl',
                controllerAs: 'question/post'
            })
            .when('/question/:id', {     //  问题详情
                templateUrl: 'views/question/info.html',
                controller: 'QuestionInfoCtrl',
                controllerAs: 'question/info'
            })
            .when('/video', {       //  视频列表
                templateUrl: 'views/video.html',
                controller: 'VideoCtrl',
                controllerAs: 'video'
            })
            .when('/article', {     //  文章列表
                templateUrl: 'views/article.html',
                controller: 'ArticleCtrl',
                controllerAs: 'article'
            })
            .when('/article/:id', {    //  文章详情
                templateUrl: 'views/article/info.html',
                controller: 'ArticleInfoCtrl',
                controllerAs: 'article/info'
            })
            .when('/expert', {    //  专家列表页面
                templateUrl: 'views/expert.html',
                controller: 'ExpertCtrl',
                controllerAs: 'expert'
            })
            .when('/expert/:expertId/articles', {   //  专家主页－文章
                templateUrl: 'views/expert/articles.html',
                controller: 'ExpertArticlesCtrl',
                controllerAs: 'expert/articles'
            })
            .when('/expert/:expertId/questions', {  //  专家主页－回答的问题
                templateUrl: 'views/expert/questions.html',
                controller: 'ExpertQuestionsCtrl',
                controllerAs: 'expert/questions'
            })
            .when('/expert/:expertId/results', {  //  专家主页－成果
                templateUrl: 'views/expert/results.html',
                controller: 'ExpertResultsCtrl',
                controllerAs: 'expert/results'
            })
            .when('/expert/:expertId/album', {    //  专家主页－相册
                templateUrl: 'views/expert/album.html',
                controller: 'ExpertAlbumCtrl',
                controllerAs: 'expert/album'
            })
            .when('/expert/:expertId/trend', {    //  专家主页－动态列表
                templateUrl: 'views/expert/trend.html',
                controller: 'ExpertTrendCtrl',
                controllerAs: 'expert/trend'
            })
            .when('/findPassword', {    //  找回密码
                templateUrl: 'views/findpassword.html',
                controller: 'FindpasswordCtrl',
                controllerAs: 'findPassword'
            })
            .when('/setNewPassword', {  //  设置新密码
                templateUrl: 'views/setnewpassword.html',
                controller: 'SetnewpasswordCtrl',
                controllerAs: 'setNewPassword'
            })
            .when('/usercenter/assignedQuestion', { // 个人中心－指派给我的问题（专家）
                templateUrl: 'views/usercenter/assignedquestion.html',
                controller: 'UsercenterAssignedquestionCtrl',
                controllerAs: 'usercenter/assignedQuestion'
            })
            .when('/usercenter/album', {  // 个人中心－我的相册（专家）
                templateUrl: 'views/usercenter/album.html',
                controller: 'UsercenterAlbumCtrl',
                controllerAs: 'usercenter/album'
            })
            .when('/usercenter/uploadPic', {  // 个人中心－上传图片（专家）（备用）
                templateUrl: 'views/usercenter/uploadpic.html',
                controller: 'UsercenterUploadpicCtrl',
                controllerAs: 'usercenter/uploadPic'
            })
            .when('/usercenter/myarticle', {  // 个人中心－我的文章（专家）
                templateUrl: 'views/usercenter/myarticle.html',
                controller: 'UsercenterMyarticleCtrl',
                controllerAs: 'usercenter/myarticle'
            })
            .when('/usercenter/postArticle', {  // 个人中心－发布文章（专家）
                templateUrl: 'views/usercenter/postarticle.html',
                controller: 'UsercenterPostarticleCtrl',
                controllerAs: 'usercenter/postArticle'
            })
            .when('/usercenter/myresult', {   // 个人中心－我的成果（专家）
                templateUrl: 'views/usercenter/myresult.html',
                controller: 'UsercenterMyresultCtrl',
                controllerAs: 'usercenter/myresult'
            })
            .when('/usercenter/mytrend', {  // 个人中心－动态（专家）
                templateUrl: 'views/usercenter/mytrend.html',
                controller: 'UsercenterMytrendCtrl',
                controllerAs: 'usercenter/mytrend'
            })
            .when('/usercenter/expertProfile', {  //  个人中心－专家资料设置（专家）
                templateUrl: 'views/usercenter/expertprofile.html',
                controller: 'UsercenterExpertprofileCtrl',
                controllerAs: 'usercenter/expertProfile'
            })
            .when('/video/:id', {
                templateUrl: 'views/video/info.html',
                controller: 'VideoInfoCtrl',
                controllerAs: 'video/info'
            })
            .when('/usercenter/postresult', {
              templateUrl: 'views/usercenter/postresult.html',
              controller: 'UsercenterPostresultCtrl',
              controllerAs: 'usercenter/postresult'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .factory('Page', function () {
        var title = 'default';
        var seo = 'default';
        var curNav = 'index';
        var subNav = 'article';
        return {
            title: function () {
                return title;
            },
            setTitle: function (newTitle) {
                title = newTitle;
            },
            seo: function () {
                return seo;
            },
            setSeo: function (newSeo) {
                seo = newSeo;
            },
            curNav: function () {
                return curNav;
            },
            setNav: function (newNav) {
                curNav = newNav;
            },
            subNav: function () {
                return subNav;
            },
            setSubNav: function (newNav) {
                subNav = newNav;
            }
        };
    })
    .factory('Loading', function () {
        var isLoading = false;
        return {
            isLoading: function () {
                return isLoading;
            },
            setLoading: function (loading) {
                isLoading = loading;
            }
        };
    })
    .filter('trustHtml', function ($sce) {

        return function (input) {

            return $sce.trustAsHtml(input);

        }

    })
    .filter('replaceHtml', function () {

        return function (input) {
            return input.replace(/<\/?[^>]*>/g, "").substr(0, 255) + "...";
        }

    })
    .filter('showAvatar', function (cloudUrl) {

        return function (input) {
            if (input !== null)
                return cloudUrl + input;
            else
                return cloudUrl + 'default_avatar.png';
        }

    })
    .filter('showResource', function (cloudUrl) {

        return function (input) {
            if (input !== null)
                return cloudUrl + input;
            else
                return cloudUrl + 'default_avatar.png';
        }

    })
    .filter('showStatus', function () {

        return function (input) {
            var status;
            switch (input) {
                case 'WAIT_AUDITED':
                    status = '待审核';
                    break;
                case 'AUDITED':
                    status = '审核通过';
                    break;
                case 'FAILED':
                    status = '审核失败';
                    break;
                case 'WAIT_RESOLVE':
                    status = '待解决';
                    break;
                case 'RESOLVED':
                    status = '已解决';
                    break;
                default:
                    status = '未知';
                    break;
            }
            return status;
        }

    })
    .filter('showMessageType', function () {

        return function (input) {
            var status;
            switch (input) {
                case 'TRADE':
                    status = '交易提醒';
                    break;
                case 'QUESTION':
                    status = '问题提醒';
                    break;
                case 'SYSTEM':
                    status = '系统消息';
                    break;
                case 'NOTICE':
                    status = '公告通知';
                    break;
                case 'WECHAT':
                    status = '微信消息';
                    break;
                default:
                    status = '未知';
                    break;
            }
            return status;
        }

    })
    .run(runBlock);
;
function runBlock($http) {
    $http.defaults.headers.get = {
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Headers": "X-Requested-With,Content-Type,Accept,X-AUTH-TOKEN,VERIFY_UUID",
        // "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS",
        // 'Access-Control-Expose-Headers': '*',
        'Content-Type': 'application/json;charset=utf-8',
        'Accept': 'application/json'
    };
    $http.defaults.headers.post = {
        // 'Access-Control-Expose-Headers': '*',
        // "Access-Control-Allow-Headers": "X-Requested-With,Content-Type,Accept,X-AUTH-TOKEN,VERIFY_UUID",
        'Content-Type': 'application/json;charset=utf-8',
        'Accept': 'application/json'
    };
    $http.defaults.headers.put = {
        // 'Access-Control-Expose-Headers': '*',
        // "Access-Control-Allow-Headers": "X-Requested-With,Content-Type,Accept,X-AUTH-TOKEN,VERIFY_UUID",
        'Content-Type': 'application/json;charset=utf-8',
        'Accept': 'application/json'
    };
}
