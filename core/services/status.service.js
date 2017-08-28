(function () {
    
  'use strict';

  angular
    .module('controlpanel.core')
    .service('CoreStatusService', CoreStatusService);

    CoreStatusService.$inject = [
    'HTTPService',
    'API',
    'STATUS'
  ];

  function CoreStatusService(HTTPService, API, STATUS) {              
    var vm = this;
    vm.statusServer = _statusServer;

    function _statusServer() {
      var url = API.URL + STATUS.GET_STATUS_SERVER;
      return HTTPService.get(url);
    }
  }

})();