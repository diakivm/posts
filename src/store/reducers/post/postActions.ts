import { IComment } from './../../../models/IComment';
import { Dispatch } from "react";

import {
    postsActions,
    postsActionEnum,
    setPosts,
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

const setIsLoadingAction = (isLoading: boolean): setPostsIsLoading => {
    return {
        type: postsActionEnum.SET_IS_LOADING,
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
            dispatch(setIsLoadingAction(true))

            const response = await postsService.getPosts(page)
            dispatch(setPostsAction(response.data))
            dispatch(setTotalPagesAction(11))
            dispatch(setCurrentPageAction(page))

            await Dalay.wait(1)
        } catch (e) {
            dispatch(setErrorAction((e as Error).toString()))
        } finally {
            dispatch(setIsLoadingAction(false))
        }
    }
}


export function postPost(userId: number, title: string, body: string) {
    return async (dispatch: Dispatch<postsActions>) => {
        try {
            const response = await postsService.postPost(userId, title, body)
            console.log(response);
            await Dalay.wait(1)
        } catch (e) {
            dispatch(setErrorAction((e as Error).toString()))
        }
    }
}

