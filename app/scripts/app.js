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
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/registerFirstStep', {
        templateUrl: 'views/registerfirststep.html',
        controller: 'RegisterfirststepCtrl',
        controllerAs: 'registerFirstStep'
      })
      .when('/registerSecondStep', {
        templateUrl: 'views/registersecondstep.html',
        controller: 'RegistersecondstepCtrl',
        controllerAs: 'registerSecondStep'
      })
      .when('/postQuestion', {
        templateUrl: 'views/postquestion.html',
        controller: 'PostquestionCtrl',
        controllerAs: 'postQuestion'
      })
      .when('/usercenter/profile', {
        templateUrl: 'views/usercenter/profile.html',
        controller: 'UsercenterProfileCtrl',
        controllerAs: 'usercenter/profile'
      })
      .when('/usercenter/changepassword', {
        templateUrl: 'views/usercenter/changepassword.html',
        controller: 'UsercenterChangepasswordCtrl',
        controllerAs: 'usercenter/changepassword'
      })
      .when('/usercenter/myquestion', {
        templateUrl: 'views/usercenter/myquestion.html',
        controller: 'UsercenterMyquestionCtrl',
        controllerAs: 'usercenter/myquestion'
      })
      .when('/usercenter/mytrade', {
        templateUrl: 'views/usercenter/mytrade.html',
        controller: 'UsercenterMytradeCtrl',
        controllerAs: 'usercenter/mytrade'
      })
      .when('/usercenter/message', {
        templateUrl: 'views/usercenter/message.html',
        controller: 'UsercenterMessageCtrl',
        controllerAs: 'usercenter/message'
      })
      .when('/usercenter/index', {
        templateUrl: 'views/usercenter/index.html',
        controller: 'UsercenterIndexCtrl',
        controllerAs: 'usercenter/index'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
