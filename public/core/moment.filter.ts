(function () {
    'use strict'

    angular.module("app.core")
        .filter("moment", function() {
            return function(date) {
                return moment(date).format('MMMM Do YYYY, h:mm:ss a');
            }
        })
}());