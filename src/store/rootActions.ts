import * as postActions from './reducers/post/postActions'
import * as authActions from './reducers/auth/authActions'





export const rootActions = {
    ...postActions,
    ...authActions
}