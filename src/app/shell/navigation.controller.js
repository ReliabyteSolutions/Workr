(function() {
    'use strict';

    angular.module('shell')
        .controller('NavigationCtrl', Navigation);

    Navigation.$inject = ['navigationSvc'];
    function Navigation(navigationSvc) {
        this.menu = navigationSvc.menu();
        this.status = navigationSvc.status;
    }
})();