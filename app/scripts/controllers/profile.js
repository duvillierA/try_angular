'use strict';

var profileControllers = angular.module('profileControllers', []);

profileControllers.controller('profileCtrl', ['$scope','$routeParams',
	function avatar ($scope, $routeParams) {
		$scope.profile = {
			email: "tom@thau.me",
			account : {
				github : "thaume"
			}
		}
	}
]);