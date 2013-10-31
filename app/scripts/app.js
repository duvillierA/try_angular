'use strict';

var phoneApp = angular.module('phoneApp', ['ngRoute','phoneControllers','phonecatFilters']);

phoneApp.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider.when('/twitter', {templateUrl: 'views/twitter.html', controller: 'twitter'});
	$routeProvider.when('/google+', {templateUrl: 'views/google.html', controller: 'google'});
	$routeProvider.when('/github', {templateUrl: 'views/github.html', controller: 'github'});
	$routeProvider.when('/gravatar', {templateUrl: 'views/gravatar.html', controller: 'gravatar'});

	$routeProvider.when('/phones', {templateUrl: '/views/phone-list.html',controller: 'PhoneListCtrl'});
	$routeProvider.when('/phones/:phoneId', {templateUrl: '/views/phone-detail.html', controller: 'PhoneDetailCtrl'});

	$routeProvider.otherwise({redirectTo: '/phones'});

	$locationProvider.html5Mode(true);
}]);

angular.module('phonecatFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
