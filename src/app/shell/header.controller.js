(function() {
    'use strict';

    angular.module('shell')
        .controller('HeaderCtrl', Header);

    Header.$inject = ['navigationSvc', 'headerSvc'];
    function Header(navigationSvc, headerSvc) {
        this.userPicture = "/assets/user.jpg";

        this.navigationStatus = navigationSvc.status;
        this.navigationToggle = navigationSvc.toggle;

        this.menuStatus = headerSvc.status;
        this.menuToggle = headerSvc.toggle;
        this.menuClose = headerSvc.close;
    }
})();