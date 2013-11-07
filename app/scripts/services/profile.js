var profileServices = angular.module('profileServices', ['ngResource']);

profileServices.factory('github', ['$resource','$cacheFactory',
	function($resource, $cacheFactory){
		// todo : implement Cache action
		return $resource('https://api.github.com/users/:account/:type', {});
	}
]);