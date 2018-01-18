(function () {
    'use strict';
    angular.module('app.core')
        .factory('fetchPosts', ['$http', function ($http) {
            return function () {
                return $http.get('/api/posts')
                    .then(function (res) { return res.data; });
            };
        }]);
}());
//# sourceMappingURL=fetch-posts.service.js.map