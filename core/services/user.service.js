(function () {
    
  'use strict';

  angular
    .module('controlpanel.core')
    .service('CoreUserService', CoreUserService);

  CoreUserService.$inject = [
    'HTTPService',
    'API',
    'USER',
    'StorageData',
    '$q'
  ];

  function CoreUserService(HTTPService, API, USER, StorageData, $q) {              
    var vm = this;
    vm.getUser = _getUser;

    function _getUser(id) {
        var url = API.URL + USER.GET_USER + id;
        return HTTPService.get(url);
    }
  }

})();