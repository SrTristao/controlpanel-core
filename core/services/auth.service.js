(function() {
    "use strict";
  
    angular.module("controlpanel.core")
    .service("CoreAuthService", [
      "$rootScope",
      "$timeout",
      "jwtHelper",
      "$window",
      authService
    ]);
  
    function authService($rootScope, $timeout, jwtHelper, $window) {
        var vm = this;
        vm.isValidToken = _isValidToken;
        vm.getToken = _getToken;
        vm.getTokenData = _getTokenData;
        vm.setToken = _setToken;
        vm.removeToken = _removeToken;
        vm.isLoggedIn = _isLoggedIn;

        var user;

        function _isValidToken(token) {
            try {
                return token && !jwtHelper.isTokenExpired(token);
              } catch (err) {
                return false;
              }
        }
      
        function _getToken() {
            return $window.sessionStorage.getItem("token");
        }
        
        function _getTokenData() {
            if (!_isLoggedIn()) {
                return null;
            }

            user = jwtHelper.decodeToken(_getToken());
            return user._doc;
        }  
        
        function _setToken(token) {
            if (!_isValidToken(token)) {
                return false;
              }
        
              $window.sessionStorage.setItem("token", token);
        }     

        function _removeToken() {
            $window.sessionStorage.clear();
            $rootScope.currentUser = false;  
        }
        
        function _isLoggedIn() {
            return _isValidToken(_getToken());
        }

    }
  
  })();