import { IPost } from "../../../models/IPost"


export interface postsState {
    posts: IPost[],
    total_pages: number
    current_page: number,
    isPostsLoading: boolean,
    postsError: string | null
}


export enum postsActionEnum {
    SET_POSTS = 'POSTS/SET_POSTS',
    SET_IS_LOADING = 'POSTS/SET_IS_LOADING',
    SET_ERROR = 'POSTS/SET_ERROR',
    SET_CURRENT_PAGE = 'POSTS/SET_CURRENT_PAGE',
    SET_TOTAL_PAGES = 'POSTS/SET_TOTAL_PAGES',
}

export interface setPosts {
    type: postsActionEnum.SET_POSTS,
    payload: IPost[]
}


export interface setPostsError {
    type: postsActionEnum.SET_ERROR,
    payload: string | null
}

export interface setPostsCurrentPage {
    type: postsActionEnum.SET_CURRENT_PAGE,
    payload: number
}

export interface setPostsIsLoading {
    type: postsActionEnum.SET_IS_LOADING,
    payload: boolean
}

export interface setPostsTotalPages {
    type: postsActionEnum.SET_TOTAL_PAGES,
    payload: number
}

export type postsActions = setPosts
    | setPostsError
    | setPostsCurrentPage
    | setPostsIsLoading
    | setPostsTotalPages
