(function () {
    'use strict';
    angular.module("app.core")
        .filter("length", function () {
        return function (text, length) {
            if (text.length > length) {
                return text.slice(0, length).concat("...");
            }
            else {
                return text;
            }
        };
    });
}());
//# sourceMappingURL=length.filter.js.map