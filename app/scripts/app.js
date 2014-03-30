'use strict';

var profile = angular.module('profile', [
  'ngRoute',
  'ngAnimate',
  'profileControllers',
  'profileFilters',
  'profileServices',
  'gravatarDirectives',
  'apiDirectives']
);

profile.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider.when('/', {templateUrl: 'views/profile.html', controller: 'profileCtrl'});
	$routeProvider.otherwise({redirectTo: '/'});

	$locationProvider.html5Mode(false);
}]);
