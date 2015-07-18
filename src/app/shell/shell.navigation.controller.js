(function() {
    'use strict';

    angular.module('app.shell')
        .controller('ShellNavigationCtrl', ShellNavigation);

    ShellNavigation.$inject = ['shellNavigationSvc'];
    function ShellNavigation(shellNavigationSvc) {
        this.menu = shellNavigationSvc.getMenu();
    }
})();