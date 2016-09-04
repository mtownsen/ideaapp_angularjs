'use strict';

angular.module('myApp')

	.config(['$stateProvider', function($stateProvider) {

		$stateProvider
		 .state('index.main', {
            url: "/main",
            templateUrl: "app/main/main.html",
            data: { pageTitle: 'Example view' }
	    });
	}])

  .controller('MainCtrl', function ($scope) {

    this.userName = 'Example user';
    this.helloText = 'Welcome in INSPINIA Gulp SeedProject';
    this.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects.';

  });
