(function() {
    'use strict';

    angular.module('wkr.tasks')
        .config(['$stateProvider', 'navigationSvcProvider', function($stateProvider, navigationSvcProvider) {
            navigationSvcProvider.addItem({title:'Tasks', sref:'shell.tasks', icon:'tasks'});
            
            $stateProvider.state('shell.tasks', {
                url: '/tasks',
                templateUrl: 'pages/tasks/tasks.html'
            });

        }])
})();



