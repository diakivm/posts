import $api from './axios'

export default class postsService {

    static async getPosts(page: number = 1, limit: number = 10) {
        const response = await $api.get(`posts`, {
            params: {
                _page: page,
                _limit: limit
            }
        })
        return response
    }
}