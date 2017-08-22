(function () {
    'use strict';

    angular.module('controlpanel.core')
    .constant('API', {
        URL: 'http://localhost:3131/api'
    })
    .constant('LOGIN', {
        POST_LOGIN: '/admin/auth/'
    })
    .constant('USER', {
        GET_LIST_USER: '/admin/user/',
        GET_USER: '/admin/user/',
        POST_USER: '/admin/user/',
        DELETE_USER: '/admin/user/{0}',
        PUT_USER: '/admin/user/{0}'
    })        
    
})();