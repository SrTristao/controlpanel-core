(function () {
    
  'use strict';

  angular
    .module('controlpanel.core')
    .service('CoreItemService', CoreItemService);

  CoreItemService.$inject = [
    'HTTPService',
    'API',
    'ITEM',    
    '$q'
  ];

  function CoreItemService(HTTPService, API, ITEM, $q) {              
    var vm = this;
    vm.getItem = _getItem;
    vm.saveItem = _saveItem;
    vm.updateItem = _updateItem;
    vm.deleteItem = _deleteItem;
    vm.getListItem = _getListItem;
    vm.lastInserts = _lastInserts;
    vm.totItems = _totItems;

    function _getItem(id) {
        var url = (API.URL + ITEM.GET_ITEM).format(id);
        return HTTPService.get(url);
    }

    function _saveItem(item) {      
      var url = API.URL + ITEM.POST_ITEM;
      return HTTPService.post(url, item);      
    }

    function _updateItem(item) {
      var url = (API.URL + ITEM.PUT_ITEM).format(item._id);      
      return HTTPService.put(url, item);
    }

    function _deleteItem(id) {
      var url = (API.URL + ITEM.DELETE_ITEM).format(id);
      return HTTPService.delete(url);
    }

    function _getListItem(params) {
      var url = (API.URL + ITEM.GET_LIST_ITEM).format(JSON.stringify(params));      
      return HTTPService.get(url);
    }

    function _lastInserts() {
      var url = API.URL + ITEM.LAST_INSERTS;
      return HTTPService.get(url);
    }

    function _totItems() {
      var url = API.URL + ITEM.TOT_ITEMS;
      return HTTPService.get(url);
    }
  }

})();