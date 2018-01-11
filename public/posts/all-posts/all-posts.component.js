(function () {
    'use strict'

    function fetchPosts($http) {
        return $http.get("/api/posts")
        .then(res => res.data);
    }

    function controller($http, $state) {
        let vm = this;

        vm.posts = [];

        vm.$onInit = function() {
            console.log("Fetching all posts")
            fetchPosts($http).then(posts => {
                vm.posts = posts;
            })
        }

        vm.goTo = function(id) {
            $state.go("post", {id})
        }
    }

    angular.module("app.posts")
    .component("allPosts", {
        templateUrl: "/posts/all-posts/all-posts.component.html",
        controllerAs: "vm",
        controller: ["$http", "$state", controller]
    })
}());