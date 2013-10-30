'use strict';

var allinone = angular.module('allinone');

allinone.controller('PhoneListCtrl',['$scope', '$http',
	function PhoneListCtrl ($scope, $http) {
		$http.get('/phones.json').success(function(data) {
			$scope.phones = data;
		});
		$scope.orderProp = 'age';
  }]);
