import Nav from '../components/Nav'
import {useNavigate, Link} from 'react-router-dom'
import PoppingButton from '../components/PoppingButton'
import pencilIcon from '../assets/pencil.svg'
import lessonsData from '../lessonsData'
import LessonBadge from '../components/LessonBadge'
import { SlAvatar } from '@shoelace-style/shoelace/dist/react'
import { fetchAvatar } from '../Utils'

export default function ProfileView( {currentUser, setCurrentUser, setToken, setToastData}) {

    const level = currentUser.upToLevel
    const navigate = useNavigate()

    const signOut = () => {
        setToastData({
            visible: true,
            message: 'See you soon!',
            type: 'normal'
        })
        localStorage.removeItem('token')
        setToken(null)
        setCurrentUser(null)
        navigate('/signin', {replace: true})
    }
    
    const userBadges = lessonsData.map((lesson, i) => {
        return (
            <LessonBadge
                key={i}
                image={lesson.badge.image}
                label={lesson.badge.label}
            />
        )
    }).slice(0, level - 1)

    if(!currentUser) {
        return <div>Loading...</div>
    }

    return (
        <div className="contains__nav__desktop profile">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <Nav 
                currentUser={currentUser}
                section="profile"/>
            <main>
                <header className="main">
                    <h1>Profile</h1>
                    <Link to="/profile/edit"><img src={pencilIcon} alt="Pencil" />Edit</Link>
                </header>
                <div className="profile__content">
                    <div className="profile__userdetails">
                        <SlAvatar 
                            image={fetchAvatar(currentUser.avatar)}
                        />
                        <p className="profile__username">{currentUser.username}</p>
                    </div>
                    <div className="profile__badges">
                        <h3 className="subheading">Badges</h3>
                        <div className="badges__container">
                            {userBadges.length > 0 ? 
                            userBadges : 
                            <p>You haven't earned any badges yet. Complete some lessons and come back to see your collection!</p>}
                        </div>
                    </div>
                    <div className="profile__content__frame">
                        <PoppingButton 
                            onClick={signOut}
                            label="Sign out"
                            buttonColor="pink"
                            narrow
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}