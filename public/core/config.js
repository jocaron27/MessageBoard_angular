(function () {
    'use strict';
    angular.module('app.core')
        .config(function ($stateProvider) {
        var homeState = {
            name: 'home',
            url: '',
            component: 'allPosts'
        };
        var allPostsState = {
            name: 'posts',
            url: '/posts',
            component: 'allPosts',
        };
        var singlePostState = {
            name: 'post',
            url: '/posts/{id}',
            component: 'singlePost',
        };
        var addPostState = {
            name: 'addPost',
            url: '/posts/new',
            component: 'addPost'
        };
        $stateProvider.state(homeState);
        $stateProvider.state(allPostsState);
        $stateProvider.state(singlePostState);
        $stateProvider.state(addPostState);
    });
}());
//# sourceMappingURL=config.js.map