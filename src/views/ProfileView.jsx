import Nav from '../components/Nav'
import {useNavigate} from 'react-router-dom'
import PoppingButton from '../components/PoppingButton'

export default function ProfileView( {currentUser, setCurrentUser, setToken}) {

    const navigate = useNavigate()

    const signOut = () => {
        localStorage.removeItem('token')
        setToken(null)
        setCurrentUser(null)
        navigate('/signin', {replace: true})
    }

    if(!currentUser) {
        return <div>Loading...</div>
    }

    return (
        <div className="contains__nav__desktop">
            <Nav 
                currentUser={currentUser}
                section="profile"/>
            <main>
                <h1>Profile</h1>
                <PoppingButton 
                    onClick={signOut}
                    label="Sign out"
                    buttonColor="pink"
                    narrow
                />
            </main>
        </div>
    )
}