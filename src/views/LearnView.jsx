import Nav from '../components/Nav'
import lessonsData from '../lessonsData'
import LessonTitle from '../components/LessonTitle'
import LessonIntro from '../components/LessonIntro'
import {useState} from 'react'

export default function LearnView( {currentUser}) {

    const [activeLesson, setActiveLesson] = useState(null)

    const lessons = lessonsData.map(lesson => {
        return (
            <LessonTitle
                key={lesson.title}
                number={lesson.number}
                title={lesson.title}
                completion=""
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
        <div className="contains__nav__desktop">
            <Nav 
                currentUser={currentUser}
                section="learn"
            />

            <main>
                <header>
                    <h1>Welcome back, {currentUser.username}!</h1>  
                </header>

                <div className="lessons">
                    {lessons}
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