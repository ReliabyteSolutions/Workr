(function() {
    'use strict';

    angular.module('app.tasks')
        .config(['$stateProvider', 'shellNavigationSvcProvider', function($stateProvider, shellNavigationSvcProvider) {

            shellNavigationSvcProvider.addItem('shell.tasks','tasks');
            
            $stateProvider.state('shell.tasks', {
                url: '/tasks',
                templateUrl: 'pages/tasks/tasks.html'
            });

        }])
})();



