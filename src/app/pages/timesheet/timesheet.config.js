(function() {
    'use strict';

    angular.module('wkr.timesheet')
        .config(['$stateProvider', 'navigationSvcProvider', function($stateProvider, navigationSvcProvider) {
            navigationSvcProvider.addItem({title:'Timesheets', sref:'shell.timesheet', icon:'ticket'});
            
            $stateProvider.state('shell.timesheet', {
                url: '/timesheet',
                templateUrl: 'pages/timesheet/timesheet.html'
            });
        }])
})();



