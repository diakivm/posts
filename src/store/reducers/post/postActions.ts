import { IComment } from './../../../models/IComment';
import { Dispatch } from "react";

import {
    postsActions,
    postsActionEnum,
    setPosts,
    setPost,
    setPostsIsLoading,
    setPostsError,
    setPostsCurrentPage,
    setPostsTotalPages,
} from "./types";
import postsService from "../../../API/postsService";
import { IPost } from "../../../models/IPost";
import Dalay from "../../../utils/Dalay";


// Action creators

const setPostsAction = (posts: IPost[]): setPosts => {
    return {
        type: postsActionEnum.SET_POSTS,
        payload: posts
    }
}
const setPostAction = (posts: IPost): setPost => {
    return {
        type: postsActionEnum.SET_POST,
        payload: posts
    }
}
const setIsPostsLoadingAction = (isLoading: boolean): setPostsIsLoading => {
    return {
        type: postsActionEnum.SET_IS_POSTS_LOADING,
        payload: isLoading
    }
}
const setErrorAction = (error: string): setPostsError => {
    return {
        type: postsActionEnum.SET_ERROR,
        payload: error
    }
}
const setCurrentPageAction = (page: number): setPostsCurrentPage => {
    return {
        type: postsActionEnum.SET_CURRENT_PAGE,
        payload: page
    }
}
const setTotalPagesAction = (pages: number): setPostsTotalPages => {
    return {
        type: postsActionEnum.SET_TOTAL_PAGES,
        payload: pages
    }
}


//Posts Actions

export function fetchPosts(page: number) {
    return async (dispatch: Dispatch<postsActions>) => {
        try {
            dispatch(setIsPostsLoadingAction(true))

            const response = await postsService.getPosts(page)
            dispatch(setPostsAction(response.data as IPost[]))
            dispatch(setTotalPagesAction(10))
            dispatch(setCurrentPageAction(page))

            await Dalay.wait(1)
        } catch (e) {
            dispatch(setErrorAction((e as Error).toString()))
        } finally {
            dispatch(setIsPostsLoadingAction(false))
        }
    }
}


export function postNewPost(userId: number, title: string, body: string) {
    return async (dispatch: Dispatch<postsActions>) => {
        try {
            const response = await postsService.postPost(userId, title, body)
            dispatch(setPostAction(response.data as IPost))
            await Dalay.wait(1)
        } catch (e) {
            dispatch(setErrorAction((e as Error).toString()))
        }
    }
}

