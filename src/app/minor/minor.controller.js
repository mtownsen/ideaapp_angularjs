'use strict';

angular.module('myApp')

	.config(['$stateProvider', function($stateProvider) {

		$stateProvider
		 .state('index.minor', {
            url: "/minor",
            templateUrl: "app/minor/minor.html",
            data: { pageTitle: 'Example view' }
	    });
	}])

  // .controller('MinorCtrl', function ($scope) {

  //   this.userName = 'Example user';
  //   this.helloText = 'Welcome in INSPINIA Gulp SeedProject';
  //   this.descriptionText = 'It is an application skeleton for a typical AngularJS web app. You can use it to quickly bootstrap your angular webapp projects.';

  // });
