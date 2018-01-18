(function () {
    'use strict';
    // function fetchPosts($http) {
    //     return $http.get('/api/posts')
    //     .then(res => res.data);
    // }
    function controller($http, $state, fetchPosts, NgTableParams) {
        var vm = this;
        vm.posts = [];

        vm.view = 'list';

        vm.changeView = function(view) {
            vm.view = view;
            console.log(view);
        }

        vm.viewIsList = function() {
            return vm.view == 'list';
        }

        vm.activate = function(view) {
            if (view === vm.view) {
                return 'btn active';
            } else {
                return 'btn';
            }
        }

        vm.$onInit = function () {
            fetchPosts().then(function (posts) {
                vm.posts = posts;
                vm.tableParams = new NgTableParams({}, { dataset: posts});
            });
        };
        vm.goTo = function (id) {
            $state.go('post', { id: id });
        };
    }
    angular.module('app.posts')
        .component('allPosts', {
        templateUrl: '/posts/all-posts/all-posts.component.html',
        controllerAs: 'vm',
        controller: ['$http', '$state', 'fetchPosts', 'NgTableParams', controller]
    });
}());
//# sourceMappingURL=all-posts.component.js.map