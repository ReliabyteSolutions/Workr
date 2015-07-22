(function() {
    'use strict';

    angular.module('shell')
        .controller('PageCtrl', Page);

    Page.$inject = ['navigationSvc'];
    function Page(navigationSvc) {
        this.navigationStatus = navigationSvc.status;
    }
})();