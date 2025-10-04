import React , { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import AuthAPI from '../AuthAPI'
import mascot from '../assets/mascot-2.svg'
import brandmark from '../assets/brandmark.svg'
import PoppingButton from '../components/PoppingButton'

export default function SignUpView({ setToken, setToastData }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();


    const handleSubmit = async e => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('username', username)
        formData.append('password', password)

        try {
            const result = await AuthAPI.signUpUser(formData)
            console.log('result = ', result)
    
            if(!result || !result.token) {
                setToastData({
                    visible: true,
                    message: 'Failed to create account',
                    type: 'error'
                })
                return
            } else {
                setToken(result.token)
                localStorage.setItem('token', result.token)
                navigate('/onboarding');
                setToastData({
                    visible: true,
                    message: 'Welcome',
                    type: 'normal'
                })
            }
        }catch(error) {
            setToastData({
                visible: true,
                type: 'error',
                message: error.error
            })
        }
    }

    return (
        <>
            <header className="signinup-header">
                <Link to="/">
                    <img src={brandmark} alt="Dollar Scholar" />
                </Link>
            </header>
            <main className="signinup">
                <div className="signinup_form_container">
                    <h2>You're about to begin something amazing.</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Create a username</label><br />
                            <input autoComplete="username" type="text" id="username" name="username" onChange={e => setUsername(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Create a password</label> <br />
                            <input autoComplete="new-password" type="password" id="password" name="password" onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <div className="form-group centered">
                            <PoppingButton 
                                type="submit"
                                label="Get started"
                                buttonColor="green"
                            />
                            <p className="signinup-prompt">Already a member? <Link to="/signin">Sign in</Link>.</p>
                        </div>
                    </form>
                </div>   
                <div className="image-container">
                    <img src={mascot} alt="Round pink smiling character" />
                </div>
            </main>

        </>
    )
}

SignUpView.propTypes = {
    setToken: PropTypes.func.isRequired
}