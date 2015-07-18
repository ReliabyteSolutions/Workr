(function() {
    'use strict';

    angular.module('app',[
        'templates',
        'app.shell',

        'app.home',
        'app.tasks',
        'app.projects',
        'app.timesheet'
    ]).run(runBlock);

    runBlock.$inject = [
        '$rootScope',
        '$state',
        '$stateParams'
    ];

    function runBlock($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
})();