(function () {
    'use strict'

    function fetchPosts($http) {
        return $http.get("/api/posts")
        .then(res => res.data);
    }

    function controller($http, $stateParams) {
        let vm = this;

        vm.post = {};

        vm.$onInit = function() {
            console.log("Fetching single post")
            fetchPosts($http).then(posts => {
                vm.post = posts.find(post => post.id == $stateParams.id);
            })
        }
    }

    angular.module("app.posts")
    .component("singlePost", {
        templateUrl: "/posts/single-post/single-post.component.html",
        controllerAs: "vm",
        controller: ["$http", "$stateParams", controller]
    })
}());