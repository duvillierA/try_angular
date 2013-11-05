var profileServices = angular.module('profileServices', ['ngResource']);

profileServices.factory('github', ['$resource',
	function($resource){
		return $resource('https://api.github.com/users/:account/:type', {});
	}
]);

/*profileServices.factory('githubStarred', ['$resource',
	function($resource){
		return $resource('https://api.github.com/users/:account/starred', {});
	}
]);

profileServices.factory('githubFollowers', ['$resource',
	function($resource){
		return $resource('https://api.github.com/users/:account/followers', {});
	}
]);


profileServices.factory('gitstList', ['$resource',
	function($resource){
		return $resource('https://api.github.com/users/:account/gists', {});
	}
]);

*/