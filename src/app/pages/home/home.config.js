(function() {
    'use strict';

    angular.module('app.home')
        .config(['$stateProvider', 'shellNavigationSvcProvider', function($stateProvider, shellNavigationSvcProvider) {

            shellNavigationSvcProvider.addItem('shell.home','home');
            
            $stateProvider.state('shell.home', {
                url: '/home',
                templateUrl: 'pages/home/home.html'
            });

        }])
})();



