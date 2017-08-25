(function () {
    
      'use strict';
    
      angular
        .module('controlpanel.core')
        .service('HTTPService', HTTPService);
    
      HTTPService.$inject = [
        '$http'
      ];
    
      function HTTPService($http) {
        var vm = this;
        vm.get = _get;
        vm.post = _post;
        vm.delete = _delete;
        vm.put = _put;

        function _get(path, params) {
          return $http.get(path, {params: params}).then(complete).catch(error);
        }

        function _post(path, params) {
            return $http.post(path, params).then(complete).catch(error);
        }

        function _delete(path, params) {
            return $http.delete(path, {params: params}).then(complete).catch(error);
        }

        function _put(path, params) {
            return $http.put(path, params).then(complete).catch(error);
        }
    
        function complete(data, status, headers, config) {                    
          return data.data;
        }
        
        function error(error) {          
          if (error.status === -1) {
            return 'server undefined';
          }
          return error.data;
        };
    
      }
    })();