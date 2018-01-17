(function () {
    'use strict'

    // function fetchPosts($http) {
    //     return $http.get("/api/posts")
    //     .then(res => res.data);
    // }

    function controller($http, $state, fetchPosts) {
        let vm = this;

        vm.posts = [];

        vm.$onInit = function() {
            fetchPosts().then(posts => {
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
        controller: ["$http", "$state", "fetchPosts", controller]
    })
}());


// namespace app {
//     'use strict'

//     // function fetchPosts($http: angular.IHttpService) {
//     //     return $http.get("/api/posts")
//     //     .then(res => res.data);
//     // }

//     class postsController{
//         constructor($http: angular.IHttpService, $state: angular.) {
//         }
        
//         posts = [];

//         $onInit = function() {
//             fetchPosts().then(posts => {
//                 this.posts = posts;
//             })
//         }

//         goTo = function(id) {
//             $state.go("post", {id})
//         }
//     }

//     angular.module("app.posts")
//     .component("allPosts", {
//         templateUrl: "/posts/all-posts/all-posts.component.html",
//         controllerAs: "vm",
//         controller: ["$http", "$state", "fetchPosts", postsController]
//     })
// }