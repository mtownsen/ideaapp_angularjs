angular.module('inspinia')

	.config(['$stateProvider', function($stateProvider) {

		$stateProvider
		 .state('login', {
            url: "/login",
            controller: "LoginCtrl",
            templateUrl: "app/Authentication/login.html",
            data: { pageTitle: 'Login', specialClass: 'gray-bg' }
	    });
	}])

  .controller('LoginCtrl', function ($scope) {

    this.userName = 'Example user';
    this.helloText = 'Welcome in INSPINIA Gulp SeedProject';
    this.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects.';

  });
