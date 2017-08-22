(function() {
'use strict';

    angular
        .module('controlpanel.core')
        .service('StorageData', StorageData);

    StorageData.$inject = [];

    function StorageData() {
        this.user = {};
    }

})();