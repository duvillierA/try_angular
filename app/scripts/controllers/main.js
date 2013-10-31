'use strict';

var phoneControllers = angular.module('phoneControllers', []);

phoneControllers.controller('PhoneListCtrl',['$scope', '$http',
	function PhoneListCtrl ($scope, $http) {
		$http.get('/phones.json').success(function(data) {
			$scope.phones = data.splice(0,5);
		});
		$scope.orderProp = 'age';

  }]);

phoneControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams','$http',
	function($scope, $routeParams, $http) {
		$http.get('/phoneDetail.json').success(function(data) {
			$scope.phone = data;
			$scope.mainImageUrl = data.images[0];
		});
		$scope.setImage = function(img) {
			$scope.mainImageUrl = img;
		}
}]);