import Nav from '../components/Nav'

export default function LeaderboardView( {currentUser }) {

    if(!currentUser) {
        return <div>Loading...</div>
    }

    return (
        <div className="contains__nav__desktop">
            <Nav 
                currentUser={currentUser}
                section="leaderboard"/>
            <main>
                <h1>Leaderboard</h1>
            </main>
        </div>
    )
}