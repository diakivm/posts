import $api from './axios'

export default class commentService {

    static async getCommentsByPostId(_postId: number) {
        const response = await $api.get(`comments`, {
            params: {
                postId: _postId,
            }
        })
        return response
    }
}