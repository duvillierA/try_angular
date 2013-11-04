'use strict';

var profileControllers = angular.module('profileControllers', []);

profileControllers.controller('profileCtrl', ['$scope','$routeParams',
	function avatar ($scope, $routeParams) {
		/* TODO HASH email : http://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200 */
		$scope.avatar = {
			email: "duvillierantoine@gmail.com",
			size: "200"
		}
	}
]);