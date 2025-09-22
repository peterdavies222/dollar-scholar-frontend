import Nav from '../components/Nav'

export default function ReviseView( {currentUser }) {

    if(!currentUser) {
        return <div>Loading...</div>
    }

    return (
        <div className="contains__nav__desktop">
            <Nav 
                currentUser={currentUser}
                section="revise"/>
            <main>
                <h1>Revise</h1>
            </main>
        </div>
    )
}