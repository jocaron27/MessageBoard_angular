(function () {
    "use strict";

    angular.module("app.core")
        .config(function ($stateProvider) {

            var allPostsState = {
                name: "posts",
                url: "/posts",
                component: "allPosts",
            }

            var singlePostState = {
                name: "post",
                url: "/posts/{id}",
                component: "singlePost",
            }

            $stateProvider.state(allPostsState);
            $stateProvider.state(singlePostState);

        })
}());