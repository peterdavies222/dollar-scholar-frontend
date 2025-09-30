import Nav from '../components/Nav'
import {useNavigate, Link} from 'react-router-dom'
import PoppingButton from '../components/PoppingButton'
import pencilIcon from '../assets/pencil.svg'
import lessonsData from '../lessonsData'
import LessonBadge from '../components/LessonBadge'

export default function ProfileView( {currentUser, setCurrentUser, setToken}) {

    const level = currentUser.upToLevel
    const navigate = useNavigate()

    const signOut = () => {
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
                        <sl-avatar></sl-avatar>
                        <p className="profile__username">{currentUser.username}</p>
                    </div>
                    <div className="profile__badges">
                        <h3 className="subheading">Badges</h3>
                        <div className="badges__container">{userBadges}</div>
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