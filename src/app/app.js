'use strict';

angular.module('myApp', [
    'myApp.auth', 
    'ngAnimate', 
    'ngCookies', 
    'ngTouch', 
    'ngSanitize', 
    'ngResource', 
    'ui.router', 
    'ui.bootstrap' 
    ])

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('index', {
            abstract: true,
            url: "/index",
            templateUrl: "components/common/content.html"
        })

    $urlRouterProvider.otherwise('/index/main');
  })
;
