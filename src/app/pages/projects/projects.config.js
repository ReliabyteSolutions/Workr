(function() {
    'use strict';

    angular.module('wkr.projects')
        .config(['$stateProvider', 'navigationSvcProvider', function($stateProvider, navigationSvcProvider) {
            navigationSvcProvider.addItem({title:'Projects', sref:'shell.projects', icon:'cubes'});
            
            $stateProvider.state('shell.projects', {
                url: '/projects',
                templateUrl: 'pages/projects/projects.html'
            });

        }])
})();



