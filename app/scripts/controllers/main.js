'use strict';

var phoneControllers = angular.module('phoneControllers', []);

phoneControllers.controller('PhoneListCtrl',['$scope', '$http',
	function PhoneListCtrl ($scope, $http) {
		$http.get('/phones.json').success(function(data) {
			$scope.phones = data.splice(0,5);
		});
		$scope.orderProp = 'age';

  }]);

phoneControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
	function($scope, $routeParams) {
		$scope.phoneId = $routeParams.phoneId;
}]);