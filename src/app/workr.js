(function() {
    'use strict';

    angular.module('workr',[
        'templates',
        'shell',
        'wkr.home',
        'wkr.tasks',
        'wkr.projects',
        'wkr.timesheet'
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