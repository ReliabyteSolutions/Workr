(function() {
    'use strict';

    angular.module('wkr.home')
        .config(['$stateProvider', 'navigationSvcProvider', function($stateProvider, navigationSvcProvider) {
            navigationSvcProvider.addItem({title:'Home', sref:'shell.home', icon:'home'});
            
            $stateProvider.state('shell.home', {
                url: '/home',
                templateUrl: 'pages/home/home.html'
            });

        }])
})();



