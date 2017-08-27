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
        GET_LIST_USER: '/admin/user/filter/{0}',
        GET_USER: '/admin/user/{0}',
        POST_USER: '/admin/user/',
        DELETE_USER: '/admin/user/{0}',
        PUT_USER: '/admin/user/{0}'
    })
    .constant('ITEM', {
        GET_LIST_ITEM: '/admin/item/filter/{0}',
        GET_ITEM: '/admin/item/{0}',
        POST_ITEM: '/admin/item/',
        DELETE_ITEM: '/admin/item/{0}',
        PUT_ITEM: '/admin/item/{0}'
    })
    .constant('STATUS', {
        GET_STATUS_SERVER: '/public/status/'
    });    
    
})();