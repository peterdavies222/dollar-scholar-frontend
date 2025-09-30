import axios from 'axios'
const API_BASE = import.meta.env.VITE_API_BASE

class UserAPI {
    // get all users
    async getUsers() {
        const response = await axios.get(`${API_BASE}/user`)
        return response.data
    }

    // get single user by id
    async getUserById(id) {
        const response = await axios.get(`${API_BASE}/user/${id}`)
        return response.data
    }

    async onboardUser(id) {
        const response = await axios.patch(`${API_BASE}/user/${id}`, {
            newUser: false
        })
        return response.data
    }

    async completeLesson(lessonId, userId, userUpToLevel) {
        const response = await axios.patch(`${API_BASE}/user/${userId}`, {
            upToLevel: userUpToLevel > lessonId ? userUpToLevel : lessonId + 1
        })
        return response.data
    }
}

export default new UserAPI()
