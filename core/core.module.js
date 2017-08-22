(function () {
    'use strict';

    angular.module('controlpanel.core', ['angular-jwt'])
    .config(["$httpProvider", configInterceptor]); 
    
    function configInterceptor($httpProvider) {
        $httpProvider.interceptors.push("authInterceptor");
      }    
    
})();