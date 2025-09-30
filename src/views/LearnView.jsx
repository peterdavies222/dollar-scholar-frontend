import Nav from '../components/Nav'
import lessonsData from '../lessonsData'
import LessonTitle from '../components/LessonTitle'
import LessonIntro from '../components/LessonIntro'
import {useState} from 'react'
import learnConceptInMinutes from '../assets/learn-concept-in-minutes.svg'

export default function LearnView( {currentUser}) {

    const [activeLesson, setActiveLesson] = useState(null)

    const lessons = lessonsData.map(lesson => {
        return (
            <LessonTitle
                completion={currentUser.upToLevel < lesson.number ? 'locked' : currentUser.upToLevel === lesson.number ? 'unlocked' : 'complete'}
                key={lesson.title}
                number={lesson.number}
                title={lesson.title}
                mainIcon={lesson.mainIcon}
                mainIconAlt={lesson.mainIconAlt}
                duration={lesson.duration}
                onClick={()=> setActiveLesson(lesson)}
            />
        )
    })

    if(!currentUser) {
        return <div>Loading...</div>
    }

    return (
        <div className="contains__nav__desktop learn">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <Nav 
                currentUser={currentUser}
                section="learn"
            />

            <main>
                <header className="main">
                    <h1>Welcome back, {currentUser.username}!</h1>  
                </header>
                <div className="container">
                    <div className="lessons">
                        {lessons}
                    </div>
                    <img className="mascot" src={learnConceptInMinutes} alt="Learn a new concept in minutes!" />
                </div>

            </main>

            <LessonIntro 
                number={activeLesson?.number}
                open={!!activeLesson}
                title={activeLesson?.title}
                overview={activeLesson?.overview || ""}
                topicsCovered={activeLesson?.topicsCovered || []}
                onStart={()=> setActiveLesson(null)}
                onClose={()=> setActiveLesson(null)}
                link={activeLesson ? `/lessons/${activeLesson.number}/modules/1` : "#"}
            />
        </div>
    )
}