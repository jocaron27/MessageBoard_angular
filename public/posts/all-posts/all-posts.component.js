(function () {
    'use strict';
    // function fetchPosts($http) {
    //     return $http.get("/api/posts")
    //     .then(res => res.data);
    // }
    function controller($http, $state, fetchPosts) {
        var vm = this;
        vm.posts = [];
        vm.$onInit = function () {
            fetchPosts().then(function (posts) {
                vm.posts = posts;
            });
        };
        vm.goTo = function (id) {
            $state.go("post", { id: id });
        };
    }
    angular.module("app.posts")
        .component("allPosts", {
        templateUrl: "/posts/all-posts/all-posts.component.html",
        controllerAs: "vm",
        controller: ["$http", "$state", "fetchPosts", controller]
    });
}());
//# sourceMappingURL=all-posts.component.js.map