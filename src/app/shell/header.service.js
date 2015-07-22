(function() {
    'use strict';

    angular.module('shell')
        .provider('headerSvc', HeaderProvider);

    function HeaderProvider() {
        var _stat = 'header-menu-closed';

        this.$get = function () {
            return {
                close: function() {
                    if (_stat === 'header-menu-opened') return _stat = 'header-menu-closed';
                    else if (_stat === 'header-menu-closed') return _stat = 'header-menu-closed';
                    else return _stat = 'header-menu-closed';
                },
                toggle: function() {
                    if (_stat === 'header-menu-opened') return _stat = 'header-menu-closed';
                    else if (_stat === 'header-menu-closed') return _stat = 'header-menu-opened';
                    else return _stat = 'header-menu-closed';
                },
                status: function() {
                    return _stat;
                }
            };
        };
    }
})();