(function() {
    'use strict';

    angular
        .module('app.contactCard')
        .factory('contacts', contacts);

    function contacts($http) {

        var service = {
            'get': get
        };

        return service;

        function get() {
            return $http.get('https://candidate-test.herokuapp.com/contacts');
        }
    }

})();