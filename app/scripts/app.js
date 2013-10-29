'use strict';

var allinone = angular.module('allinone', []);

allinone.config(function ($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'views/main.html',controller: 'PhoneListCtrl'});
  $routeProvider.when('/twitter', {templateUrl: 'views/twitter.html', controller: 'twitter'});
  $routeProvider.when('/google+', {templateUrl: 'views/google.html', controller: 'google'});
  $routeProvider.when('/github', {templateUrl: 'views/github.html', controller: 'github'});
  $routeProvider.when('/gravatar', {templateUrl: 'views/gravatar.html', controller: 'gravatar'});
  $routeProvider.otherwise({redirectTo: '/'});
});