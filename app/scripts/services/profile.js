var phoneServices = angular.module('profileServices', ['ngResource']);

phoneServices.factory('github', ['$resource',
  function($resource){
    return $resource('/:phoneId.json', {}, {
      getAll: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);