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

    async completeLesson(lessonId, userId, userUpToLevel, recentlyCompletedLessonsCount) {
        const response = await axios.patch(`${API_BASE}/user/${userId}`, {
            upToLevel: userUpToLevel > lessonId ? userUpToLevel : Number(lessonId) + 1,
            recentlyCompletedLessonsCount: recentlyCompletedLessonsCount + 1
        })
        return response.data
    }

    async updateProfileWithAvatar(userId, formData) {
        const response = await axios.patch(`${API_BASE}/user/editProfileWithAvatar/${userId}`, 
            formData,
            {
                headers: { "Content-Type": "multipart/form-data" }
            }
        )
        return response.data
    }

    async updateProfileWithoutAvatar(userId, formData) {
        if (!userId || !formData) return
        const response = await axios.patch(`${API_BASE}/user/editProfileWithoutAvatar/${userId}`,  
            formData
        )
        return response.data
    }

    async deleteAccount(userId) {
        const response = await axios.delete(`${API_BASE}/user/${userId}`,)
        return response.data
    }
}

export default new UserAPI()
