import React , { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import AuthAPI from '../AuthAPI'
import mascot from '../assets/mascot-1.svg'
import brandmark from '../assets/brandmark.svg'
import PoppingButton from '../components/PoppingButton'

export default function SignInView({ setToken }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault()
        const result = await AuthAPI.signInUser({
            username,
            password
        })
        if(!result.token) {
            alert('Sign in failed')
            return
        } else {
            setToken(result.token)
            localStorage.setItem('token', result.token)
            navigate('/learn');
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
                    <h2>Ready to continue your journey?</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label><br />
                            <input autoComplete="username" type="text" id="username" name="username" onChange={e => setUsername(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label> <br />
                            <input autoComplete="current-password" type="password" id="password" name="password" onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <div className="form-group centered">
                            <PoppingButton 
                                type="submit"
                                label="Sign in"
                                buttonColor="green"
                            />
                            <p className="signinup-prompt">Not a member yet? <Link to="/signup">Sign up now</Link>.</p>
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

SignInView.propTypes = {
    setToken: PropTypes.func.isRequired
}