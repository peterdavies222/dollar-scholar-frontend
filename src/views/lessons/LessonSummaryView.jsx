import LessonHeader from "../../components/LessonHeader"
import lessonsData from "../../lessonsData"
import PoppingButton from "../../components/PoppingButton"
import LessonBadge from "../../components/LessonBadge"
import { useNavigate, useParams } from "react-router-dom"
import { useState } from "react"
import mascot from '../../assets/mascot-3.svg'
import UserAPI from "../../UserAPI"

export default function LessonSummaryView({currentUser, setCurrentUser}) {
    const {lessonId} = useParams()
    const navigate = useNavigate()
    const lesson = lessonsData.find(
        (l) => l.number === parseInt(lessonId, 10)
    )

    const topicsEls = lesson.topicsCovered.map((topic, i) => {
        return (
            <ul className="lesson__summary__topic" key={i}>{topic}</ul>
        )
    })

    const completeLesson = async(lessonId) => {
        window.scrollTo(0, 0)
        const updatedUser = await UserAPI.completeLesson(lessonId, currentUser._id, currentUser.upToLevel, currentUser.recentlyCompletedLessonsCount)
        setCurrentUser(updatedUser)
        navigate('/learn')
    }

    return (
        <>
            <LessonHeader 
                summary={true}
                onClick={()=>completeLesson(Number(lessonId))}
                lesson={lesson}
                moduleNumber={lesson.teachingModules.length + lesson.quizQuestions.length + 1}
            />
            <main className="lesson__content summary">
                <div className="lesson__summary__text">
                    <div className="lesson__summary__block">
                        <h1>Way to go!</h1>
                        <p className="lesson__summary__byline">You've just completed your {lesson.numberOrder} lesson.</p>
                    </div>

                    <div className="lesson__summary__block">
                        <h3 className="subheading">Topics learnt</h3>
                        <ul>
                            {topicsEls}
                        </ul>
                        <p className="topics__explanation">Your learnt topics can be found in the <span>revise</span> section</p>
                    </div>
                    
                    <div className="lesson__summary__block">
                        <h3 className="subheading">Badge earned!</h3>
                        <LessonBadge 
                            image={lesson.badge.image}
                            label={lesson.badge.label}
                        />
                    </div>
                    
                    <PoppingButton 
                        narrow
                        label="Heck yeah!"
                        onClick={()=>completeLesson(Number(lessonId))}
                    />
                </div>
                <img src={mascot} alt="Mascot"/>
            </main>
        </>
    )
}