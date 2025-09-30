import Nav from '../components/Nav'
import lessonsData from '../lessonsData'
import ReviseSection from '../components/ReviseSection'
import EmptyState from '../components/EmptyState'

export default function ReviseView( {currentUser}) {
    
    const reviseSections = lessonsData.map((lesson, index) => {
        if(lesson.number >= currentUser.upToLevel) {
            return null
        } else {
            return (
                <ReviseSection 
                    lesson={lesson}
                    key={index}
                />
            )
        }
    })

    if(!currentUser) {
        return <div>Loading...</div>
    }

    return (
        <div className="contains__nav__desktop revise">
            <Nav 
                currentUser={currentUser}
                section="revise"/>
            <main>
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <header className="main">
                    <h1>Revise</h1>
                </header>
                <div className="revise__container">
                    {currentUser.upToLevel !== 1 ?
                    reviseSections :
                    <EmptyState 
                        title="Nothing to show here... yet!"
                        message="Complete some lessons and come back to revise your learning."
                        label="Begin learning"
                        link="/learn"
                    />}
                </div>
            </main>
        </div>
    )
}