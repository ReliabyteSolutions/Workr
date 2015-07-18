(function() {
    'use strict';

    angular.module('app.shell')
        .provider('shellNavigationSvc', ShellNavigationProvider);

    function ShellNavigationProvider() {
        var _menu = [];

        this.addItem = function(state, icon) {
            _menu.push({sref: state, icon: icon})
        };

        this.$get = function () {
            return {
                getMenu: function() {
                    return _menu;
                }
            };
        };
    }
})();