(function () {
    'use strict';

    angular.module('app.shell')
        .config(Config);

    Config.$inject = [
        '$urlRouterProvider',
        '$locationProvider',
        '$stateProvider',
        '$httpProvider',
        'adalAuthenticationServiceProvider'
    ];

    function Config(
        $urlRouterProvider,
        $locationProvider,
        $stateProvider,
        $httpProvider,
        adalAuthenticationServiceProvider
    ) {
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
        $urlRouterProvider.otherwise('/home');

        adalAuthenticationServiceProvider.init({
            tenant: 'peoriaholyfamily.com',
            clientId: '9b70d71a-c2bc-45e4-8f00-ded27a52aa1f'
        }, $httpProvider );

        $stateProvider.state({
            name: 'shell',
            url: '',
            abstract: true,
            templateUrl: 'shell/shell.html',
            controller: 'ShellCtrl',
            controllerAs: 'shell'
        })
    }
})();