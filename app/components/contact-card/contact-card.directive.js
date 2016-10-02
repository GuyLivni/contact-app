(function() {
    'use strict';

    angular
        .module('app.contactCard')
        .directive('contactCard', contactCard);

    function contactCard() {
        var directive = {
            link: link,
            restrict: "E",
            templateUrl: "./app/components/contact-card/contact-card.view.html",
            scope: {
                contactItem: '='
            }
        };

        return directive;

        function link(scope, element, attrs) {
            /* */
        }
    }
})();