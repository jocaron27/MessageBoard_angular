import * as angular from 'angular';
import 'angular-ui-router';

namespace config {
    'use strict';

    angular.module('app.core')
        .config(function ($stateProvider: angular.ui.IStateProvider): void {

            interface IState {
                name: string,
                url: string,
                component: string
            }

            let homeState: IState = {
                name: 'home',
                url: '',
                component: 'allPosts'
            }

            let allPostsState: IState = {
                name: 'posts',
                url: '/posts',
                component: 'allPosts',
            }

            let singlePostState: IState = {
                name: 'post',
                url: '/posts/{id}',
                component: 'singlePost',
            }

            let addPostState: IState = {
                name: 'addPost',
                url: '/posts/new',
                component: 'addPost'
            }

            $stateProvider.state(homeState);
            $stateProvider.state(allPostsState);
            $stateProvider.state(singlePostState);
            $stateProvider.state(addPostState);
        })
}