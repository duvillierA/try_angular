'use strict';

var phoneApp = angular.module('phoneApp', ['ngRoute','phoneControllers']);

phoneApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/twitter', {templateUrl: 'views/twitter.html', controller: 'twitter'});
	$routeProvider.when('/google+', {templateUrl: 'views/google.html', controller: 'google'});
	$routeProvider.when('/github', {templateUrl: 'views/github.html', controller: 'github'});
	$routeProvider.when('/gravatar', {templateUrl: 'views/gravatar.html', controller: 'gravatar'});

	$routeProvider.when('/phones', {templateUrl: 'views/phone-list.html',controller: 'PhoneListCtrl'});
	$routeProvider.when('/phones/:phoneId', {templateUrl: 'views/phone-detail.html', controller: 'PhoneDetailCtrl'});

	$routeProvider.otherwise({redirectTo: '/phones'});
}]);