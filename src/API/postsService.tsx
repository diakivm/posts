import { IUser } from '../models/IUser'
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

    static async postPost(userId: number, title: string, body: string) {
        const response = await $api.post(`posts`, {
            title,
            body,
            userId,
        })
        return response
    }
}