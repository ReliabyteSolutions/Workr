(function() {
    'use strict';

    angular.module('shell')
        .provider('navigationSvc', NavigationProvider);

    function NavigationProvider() {
        var _menu = [],
            _stat = 'shell-navigation-closed';

        this.addItem = function(item) {
            _menu.push(item)
        };

        this.$get = function () {
            return {
                menu: function() {
                    return _menu;
                },
                toggle: function() {
                    if (_stat === 'shell-navigation-opened') return _stat = 'shell-navigation-closed';
                    else if (_stat === 'shell-navigation-closed') return _stat = 'shell-navigation-opened';
                    else return _stat = 'shell-navigation-closed';
                },
                status: function() {
                    return _stat;
                }
            };
        };
    }
})();