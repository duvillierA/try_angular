'use strict';

var profileControllers = angular.module('profileControllers', []);

profileControllers.controller('profileCtrl', ['$scope','$routeParams',
	function avatar ($scope, $routeParams) {
		$scope.profile = {
			firstname : "Antoine",
			name : "Duvillier",
			email: "duvillierantoine@gmail.com",
			account : {
				github : "duvillierA"
			}
		}
		$scope.init = function() {
			console.log('init profileControllers');
		}
	}
]);
