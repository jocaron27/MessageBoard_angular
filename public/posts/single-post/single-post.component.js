(function () {
    'use strict';
    function fetchPosts($http) {
        return $http.get('/api/posts')
            .then(function (res) { return res.data; });
    }
    function controller($http, $stateParams) {
        var vm = this;
        vm.post = {};
        vm.$onInit = function () {
            fetchPosts($http).then(function (posts) {
                vm.post = posts.find(function (post) { return post.id == $stateParams.id; });
            });
        };
    }
    angular.module('app.posts')
        .component('singlePost', {
        templateUrl: '/posts/single-post/single-post.component.html',
        controllerAs: 'vm',
        controller: ['$http', '$stateParams', controller]
    });
}());
//# sourceMappingURL=single-post.component.js.map