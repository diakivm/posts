import { IUser } from '../models/IUser'
import $api from './axios'

export default class userService {

    static async getUserById(userId: number) {
        const response = await $api.get(`users/${userId}`)
        return response
    }
}