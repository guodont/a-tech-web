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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
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
      .when('/trade/info', {      //  交易详情
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
      .when('/question/info', {     //  问题详情
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
      .when('/article/info', {    //  文章详情
        templateUrl: 'views/article/info.html',
        controller: 'ArticleInfoCtrl',
        controllerAs: 'article/info'
      })
      .when('/expert', {    //  专家列表页面
        templateUrl: 'views/expert.html',
        controller: 'ExpertCtrl',
        controllerAs: 'expert'
      })
      .when('/expert/articles', {   //  专家主页－文章
        templateUrl: 'views/expert/articles.html',
        controller: 'ExpertArticlesCtrl',
        controllerAs: 'expert/articles'
      })
      .when('/expert/questions', {  //  专家主页－回答的问题
        templateUrl: 'views/expert/questions.html',
        controller: 'ExpertQuestionsCtrl',
        controllerAs: 'expert/questions'
      })
      .when('/expert/results', {  //  专家主页－成果
        templateUrl: 'views/expert/results.html',
        controller: 'ExpertResultsCtrl',
        controllerAs: 'expert/results'
      })
      .when('/expert/album', {    //  专家主页－相册
        templateUrl: 'views/expert/album.html',
        controller: 'ExpertAlbumCtrl',
        controllerAs: 'expert/album'
      })
      .when('/expert/trend', {    //  专家主页－动态列表
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
      .otherwise({
        redirectTo: '/'
      });
  });
