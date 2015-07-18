(function() {
    'use strict';

    angular.module('app.projects')
        .config(['$stateProvider', 'shellNavigationSvcProvider', function($stateProvider, shellNavigationSvcProvider) {

            shellNavigationSvcProvider.addItem('shell.projects','cubes');
            
            $stateProvider.state('shell.projects', {
                url: '/projects',
                templateUrl: 'pages/projects/projects.html'
            });

        }])
})();



