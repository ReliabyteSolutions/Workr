(function() {
    'use strict';

    angular.module('app.timesheet')
        .config(['$stateProvider', 'shellNavigationSvcProvider', function($stateProvider, shellNavigationSvcProvider) {
            shellNavigationSvcProvider.addItem('shell.timesheet','ticket');
            
            $stateProvider.state('shell.timesheet', {
                url: '/timesheet',
                templateUrl: 'pages/timesheet/timesheet.html'
            });
        }])
})();



