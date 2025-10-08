import { useParams, Link } from "react-router-dom"
import lessonsData from "../lessonsData"
import Nav from "../components/Nav"
import PoppingButton from "../components/PoppingButton"
import ReviseModule from "../components/ReviseModule"
import ChevronLeft from "../assets/chevron-left.svg?react"

export default function ReviseConceptView({currentUser}) {

    const {lessonId} = useParams()
    const lesson = lessonsData.find(
        (l) => l.number === parseInt(lessonId, 10)
    )
    const reviseModules = lesson.teachingModules.map((module, i) => {
        return (
            <ReviseModule module={module} key={i}/>
        )
    })

    if(!currentUser) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div className="contains__nav__desktop revise-concept">
            <Nav 
                currentUser={currentUser}
                section="revise"
            />
            <main>
                <header className="main">
                    <Link to="/revise"><ChevronLeft />Back to concept book</Link>
                    <h1>{lesson.title}</h1>
                </header>
                <div className="modules">
                    {reviseModules}
                </div>
                {Number(currentUser.upToLevel) > Number(lessonId) + 1 ?
                    <PoppingButton 
                        label="Next topic"
                        link={`/revise/${Number(lessonId) + 1}`}
                    narrow/>
                    : null
                }
                
            </main>
        </div>
    )
}