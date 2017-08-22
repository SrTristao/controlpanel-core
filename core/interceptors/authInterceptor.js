(function() {
    "use strict";
  
    angular.module("controlpanel.core")
      .factory("authInterceptor", ["API", "CoreAuthService", authInterceptor]);
  
    function authInterceptor(API, CoreAuthService) {
      return {
        request: function(config) {
          if (config.url.indexOf(API.URL) === 0) {
            config.headers.Accept = "application/json";
            if (CoreAuthService.isLoggedIn()) {
              config.headers.Authorization = "Bearer " + CoreAuthService.getToken();
            }
          }
  
          return config;
        },
  
        response: function(res) {
          const token = res.headers("X-Token");
  
          if (token && token !== CoreAuthService.getToken()) {
            CoreAuthService.setToken(token);
          }
          return res;
        },
      };
    }
  
  })();