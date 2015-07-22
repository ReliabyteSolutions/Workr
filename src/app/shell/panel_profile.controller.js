(function() {
    'use strict';

    angular.module('shell')
        .controller('ProfilePanelCtrl', ProfilePanel);

    function ProfilePanel() {
        this.photo = "/assets/user.jpg";
        this.displayName = "Jason Banister";

        this.view = function() {console.log('view')};
        this.changePassword = function() {console.log('change-password')};
        this.signOut = function() {console.log('sign-out')};
    }
})();