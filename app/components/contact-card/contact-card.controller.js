(function() {
    'use strict';

    angular
        .module('app.contactCard')
        .controller('ContactController', ContactController);

    function ContactController(contacts) {
        var vm = this;
        vm.contactItems = [];

        activate();

        function activate() {
            return getContacts().then(function(data) {
                console.log('fetched contact items: ', data);
            });
        }

        function getContacts() {
            return contacts.get().then(function(data) {
                vm.contactItems = data.data;
                return vm.contactItems;
            });
        }
    }
})();