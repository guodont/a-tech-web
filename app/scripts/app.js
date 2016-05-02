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
      .otherwise({
        redirectTo: '/'
      });
  });
