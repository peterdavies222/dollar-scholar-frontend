import Nav from '../components/Nav'

export default function LeaderboardView( {currentUser }) {

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
                <h1>Leaderboard</h1>
            </main>
        </div>
    )
}