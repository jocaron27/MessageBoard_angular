(function () {
    'use strict'
  
    var module = angular.module("app");

    function fetchPosts($http) {
        return $http.get("/api/posts")
        .then(res => res.data);
    }

    function controller($http) {
        let vm = this;

        vm.posts = [];

        vm.$onInit = function() {
            fetchPosts($http).then(posts => {
                vm.posts = posts;
            })
        }
    }

    module.component("allPosts", {
        templateUrl: "/posts/all-posts/all-posts.component.html",
        controllerAs: "vm",
        controller: ["$http", controller]
    })
}());