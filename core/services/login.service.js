(function () {
    
  'use strict';

  angular
    .module('controlpanel.core')
    .service('CoreLoginService', CoreLoginService);

  CoreLoginService.$inject = [
    'HTTPService',
    'API',
    'LOGIN',
    'StorageData',
    '$q'
  ];

  function CoreLoginService(HTTPService, API, LOGIN, StorageData, $q) {              
    var vm = this;
    vm.login = _login;

    function _login(params) {
      var url = API.URL + LOGIN.POST_LOGIN;
      return HTTPService.post(url, params);
    }
  }

})();