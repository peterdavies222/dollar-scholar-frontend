const API_BASE = import.meta.env.VITE_API_BASE

class AuthAPI {

    // sign in user and get token
    async signInUser(credentials) {
        return fetch(`${API_BASE}/auth/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then(data => data.json())
    }

    async signUpUser(formData) {
        const response = await fetch(`${API_BASE}/auth/signup`, {
            method: 'POST',
            body: formData
        })

        if (!response.ok) {
            const err = await response.json()
            if(err) console.log(err)
            throw err
        }

        return response.json()
    }
}

export default new AuthAPI()