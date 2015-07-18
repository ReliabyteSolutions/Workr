(function() {
    'use strict';

    angular.module('app.shell')
        .controller('ShellCtrl', Shell);

    Shell.$inject = ['adalAuthenticationService'];

    function Shell(adalAuthenticationService) {
        this.userPicture = "/assets/user.jpg";

        this.login = function() {
            adalAuthenticationService.login();
        };

        this.header = 'shell/shell.header.html';
        this.navigation = 'shell/shell.navigation.html';

        this.panelStatus = 'closed';
        var panelTypes = {
            'notification': 'shell/shell.panel.notification.html',
            'profile': 'shell/shell.panel.profile.html'
        };
        this.togglePanel = function(type) {
            var status = this.panelStatus;
            if (status === 'opened') {
                status = this.panelStatus = 'closed';
            }
            else if (status === 'closed') {
                this.panel = panelTypes[type];
                status = this.panelStatus = 'opened';
            }
            else status = this.panelStatus = 'closed';
        };

    }
})();