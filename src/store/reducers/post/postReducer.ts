import { postsActions, postsActionEnum, postsState } from "./types";

const initialState: postsState = {
    posts: [],
    total_pages: 1,
    current_page: 1,
    isPostsLoading: false,
    postsError: null,
}


export const postReducer = (state = initialState, action: postsActions): postsState => {

    switch (action.type) {

        case postsActionEnum.SET_POSTS:
            return { ...state, posts: action.payload }
            break;

        case postsActionEnum.SET_ERROR:
            return { ...state, postsError: action.payload }
            break;

        case postsActionEnum.SET_IS_LOADING:
            return { ...state, isPostsLoading: action.payload }
            break;

        case postsActionEnum.SET_CURRENT_PAGE:
            return { ...state, current_page: action.payload }
            break;

        case postsActionEnum.SET_TOTAL_PAGES:
            return { ...state, total_pages: action.payload }
            break;

        default:
            return state

    }
}