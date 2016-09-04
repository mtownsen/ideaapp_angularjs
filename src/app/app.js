'use strict';

var AppSettings = {
  appTitle: 'Example Application',
  apiUrl: 'http://localhost:3000'
};


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

    .constant('AppSettings', AppSettings)

    .factory('requestHeaders', function() {
        return function() {
            return {
                'X-USER-EMAIL': localStorage.email,
                'X-USER-TOKEN': localStorage.token
            };
        }
    })

    .run(function($location) {

      if (localStorage.token) {
        console.log("The user is logged in.");
      } else {
        $location.path('/login');
      }
    })

