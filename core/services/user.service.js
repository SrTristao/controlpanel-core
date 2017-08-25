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
    vm.saveUser = _saveUser;
    vm.updateUser = _updateUser;
    vm.deleteUser = _deleteUser;
    vm.getListUser = _getListUser;

    function _getUser(id) {
        var url = (API.URL + USER.GET_USER).format(id);
        return HTTPService.get(url);
    }

    function _saveUser(user) {
      var url = API.URL + USER.POST_USER;
      return HTTPService.post(url, user);
    }

    function _updateUser(user) {
      var url = (API.URL + USER.PUT_USER).format(user._id);      
      return HTTPService.put(url, user);
    }

    function _deleteUser(id) {
      var url = (API.URL + USER.DELETE_USER).format(id);
      return HTTPService.delete(url);
    }

    function _getListUser() {
      var url = API.URL + USER.GET_LIST_USER;
      console.log(url);
      return HTTPService.get(url);
    }
  }

})();