(function () {
    'use strict'

    function controller($http, $state, fetchPosts, $filter, NgTableParams) {
        let vm = this;

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
                return "btn active";
            } else {
                return "btn";
            }
        }

        vm.$onInit = function() {
            fetchPosts().then(posts => {
                vm.posts = posts;
                vm.tableParams = new NgTableParams({}, {dataset: posts});
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
        controller: ["$http", "$state", "fetchPosts", "$filter", "NgTableParams", controller]
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