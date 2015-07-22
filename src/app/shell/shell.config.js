(function () {
    'use strict';

    angular.module('shell')
        .config(Config);

    Config.$inject = [
        '$urlRouterProvider',
        '$locationProvider',
        '$stateProvider'
    ];

    function Config(
        $urlRouterProvider,
        $locationProvider,
        $stateProvider
    ) {
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
        $urlRouterProvider.otherwise('/home');

        $stateProvider.state('shell', {
            url: '',
            abstract: true,
            views: {
                'header@': {
                    templateUrl: 'shell/partials/header.html',
                    controller: 'HeaderCtrl',
                    controllerAs: 'header'
                },
                'navigation@': {
                    templateUrl: 'shell/partials/navigation.html',
                    controller: 'NavigationCtrl',
                    controllerAs: 'navigation'
                },
                'page@': {
                    templateUrl: 'shell/partials/page.html',
                    controller: 'PageCtrl',
                    controllerAs: 'page'
                }
            }
        })
    }
})();