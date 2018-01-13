(function () {
    'use strict'

    function controller($http, $state) {
        let vm = this;

        vm.post = {};

        vm.handleSubmit = function() {
            console.log("submitting...")
            $http.post("/api/posts", vm.post)
                .then(res => {
                    console.log("posting...")
                    console.log(res.data.id);
                    $state.go("post", {id: res.data.id})
                })
        }

    }

    angular.module("app.posts")
    .component("addPost", {
        templateUrl: "/posts/add-post/add-post.component.html",
        controllerAs: "vm",
        controller: ["$http", "$state", controller]
    })
}());