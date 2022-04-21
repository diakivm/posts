import React from "react";

import { MainPage } from "../pages/MainPage/MainPage";
import { PostsPage } from "../pages/PostsPage/PostsPage";



interface IRoute {
    path: routeNames,
    element: React.ReactNode
}

export enum routeNames {
    POSTS = 'posts/',
    MAIN = '/'

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
