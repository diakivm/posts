import {
    authActions,
    authActionTypes,
    authErrorAction,
    authIsAuth,
    authIsLoadingAction,
    authSetUserAction
} from "./types";
import { IUser } from "../../../models/IUser";


const setIsLoading = (isLoading: boolean): authIsLoadingAction => {
    return {
        type: authActionTypes.AUTH_IS_LOADING,
        payload: isLoading
    }
}

const setIsAuth = (isAuth: boolean): authIsAuth => {
    return {
        type: authActionTypes.AUTH_IS_AUTH,
        payload: isAuth
    }
}

const setUser = (user: IUser): authSetUserAction => {
    return {
        type: authActionTypes.AUTH_SET_USER,
        payload: user
    }
}

const setError = (error: string | null): authErrorAction => {
    return {
        type: authActionTypes.AUTH_ERROR,
        payload: error
    }
}
