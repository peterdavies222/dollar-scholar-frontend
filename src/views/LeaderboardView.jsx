import Nav from '../components/Nav'
import Podium from '../components/Podium'
import UserAPI from '../UserAPI'
import { useState, useEffect } from 'react'
import LeaderboardUser from '../components/LeaderboardUser'
import info from '../assets/info.svg'
import LeaderboardInfo from '../components/LeaderboardInfo'
import EmptyState from '../components/EmptyState'

export default function LeaderboardView({ currentUser }) {

    const [allUsers, setAllUsers] = useState([])
    const [infoOpen, setInfoOpen] = useState(false)

    useEffect(() => {
        const fetchUsers = async () => {
            const users = await UserAPI.getUsers()
            users.sort((a, b) => b.recentlyCompletedLessonsCount - a.recentlyCompletedLessonsCount)
            setAllUsers(users)
        }

        fetchUsers()
    }, [])

    const userEls = allUsers.map((user, index) => {
        if(index <= 2) return
        return (
            <LeaderboardUser 
                key={index}
                isCurrentUser={user._id === currentUser._id}
                placing={index + 1}
                username={user.username}
                lessonsCount={user.recentlyCompletedLessonsCount}
                avatar={user.avatar}
            />
        )
    })


    if(!currentUser) {
        return <div>Loading...</div>
    }

    return (
        <div className="contains__nav__desktop leaderboard">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <Nav 
                currentUser={currentUser}
                section="leaderboard"/>
            <main className="main">
                <header className="main">
                    <h1>Leaderboard</h1>
                    <button onClick={()=>setInfoOpen(prevOpen => !prevOpen)}><img src={info} alt="Info" /></button>
                </header>
                <div className="leaderboard__container">
                    {allUsers.length > 2 ?
                        <Podium 
                        firstPlace={allUsers[0]}
                        secondPlace={allUsers[1]}
                        thirdPlace={allUsers[2]}
                        currentUser={currentUser}
                    /> : 
                    <EmptyState 
                        title="Not enough users!"
                        message="There aren't enough users on Dollar Scholar to create a leaderboard... yet! Get learning and come back soon!"
                        label="Continue learning"
                        link="/learn"
                    />}
                    {allUsers.length > 2 && <hr />}
                    
                    <div className="leaderboard__continued">
                        {userEls}
                    </div>
                </div>
            </main>
            <LeaderboardInfo 
                infoOpen={infoOpen}
                onClose={()=>setInfoOpen(false)}
            />
        </div>
    )
}