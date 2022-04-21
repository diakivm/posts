import React from "react";

import { MainPage } from "../pages/MainPage/MainPage";
import { PostsPage } from "../pages/PostsPage/PostsPage";



interface IRoute {
    path: routeNames,
    element: React.ReactNode
}

export enum routeNames {
    POSTS = 'posts/new_posts',
    MAIN = 'posts/'

}

export const publicRoutes: IRoute[] = [
    {
        path: routeNames.POSTS,
        element: <PostsPage />
    },
    {
        path: routeNames.MAIN,
        element: <MainPage />
    },
]

export const privateRoutes: IRoute[] = [
    {
        path: routeNames.POSTS,
        element: <PostsPage />
    },
    {
        path: routeNames.MAIN,
        element: <MainPage />
    },
]
