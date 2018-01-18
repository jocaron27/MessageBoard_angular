namespace app {
    'use strict'

    angular.module('app.core')
        .factory ('fetchPosts', ['$http', function ($http: angular.IHttpService) {

            return function() {
                return $http.get('/api/posts')
            .then(res => res.data);
            }
            
        }])
}