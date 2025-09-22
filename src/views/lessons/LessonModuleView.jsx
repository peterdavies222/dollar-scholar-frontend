import {useParams} from 'react-router-dom'
import lessonsData from '../../lessonsData'
import {useState, useRef, useEffect} from 'react'
import CloseLesson from '../../components/CloseLesson'
import LessonHeader from '../../components/LessonHeader'
import LessonCard from '../../components/LessonCard'
import PoppingButton from '../../components/PoppingButton'

export default function LessonModuleView() {

    const {lessonId, moduleNumber} = useParams()

    // finds the lesson in lessonsData that has the number 
    // associated with the lessonId from the URL
    const lesson = lessonsData.find(
        (l) => l.number === parseInt(lessonId, 10)
    )

    const module = lesson.teachingModules.find(
        (m) => m.moduleNumber === parseInt(moduleNumber, 10)
    )

    const lessonCards = module.cards
    
    const [openLessonCard, setOpenLessonCard] = useState(null)

    const lessonCardsEls = lessonCards.map((card, i) => {
        return (
            <LessonCard 
                key={i}
                open={()=>setOpenLessonCard(i)}
                close={()=>setOpenLessonCard(null)}
                cardOpen={openLessonCard === i ? true : false}
                icon={card.icon}
                title={card.cardTitle}
                description={card.description}
            />
        )
    })


    const paragraphs = module.introductionParagraphs.map((paragraph, i) => {
        return (
            <p key={i}>{paragraph}</p>
        )
    })

    const [dialogOpen, setDialogOpen] = useState(false) // for 'close lesson' modal

    let nextScreen

    if (lesson.teachingModules.length === Number(moduleNumber)) {
        nextScreen = `/lessons/${lessonId}/quiz/1`
    } else if (lesson.teachingModules.length > Number(moduleNumber)) {
        nextScreen = `/lessons/${lessonId}/modules/${Number(moduleNumber) + 1}`
    }

    const lessonContentRef = useRef(null)
    const lessonHeaderRef = useRef(null)

    useEffect(() => {
        function updateHeight() {
            if (lessonContentRef.current && lessonHeaderRef.current) {
            lessonContentRef.current.style.minHeight =
                window.innerHeight - lessonHeaderRef.current.offsetHeight - 45 + 'px'
            }
        }

        updateHeight() // run once on mount
        window.addEventListener('resize', updateHeight)

        return () => {
            window.removeEventListener('resize', updateHeight)
        }
    }, [])


    return (
        <>
            <LessonHeader 
                ref={lessonHeaderRef}
                setDialogOpen={()=>setDialogOpen(true)}
                moduleNumber={Number(moduleNumber)}
                lesson={lesson}
            />
            <main className="lesson__content" ref={lessonContentRef}>
                <div>
                    <h3 className="subheading">New concept</h3>
                    <h1>{module.moduleTitle}</h1>
                    <div className="paragraphs">{paragraphs}</div>
                    <div className="lesson__cards">
                        {lessonCardsEls}
                    </div>
                </div>
                <PoppingButton 
                    label={lesson.teachingModules.length === Number(moduleNumber) ? 'Test my knowledge' : 'Continue'}
                    link={nextScreen}
                    onClick={()=>setOpenLessonCard(null)}
                    narrow
                />
            </main>
            <CloseLesson 
                dialogOpen={dialogOpen}
                onClose={()=> setDialogOpen(false)}
            />
        </>
    )
}