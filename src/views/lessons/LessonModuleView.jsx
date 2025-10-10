import {useParams} from 'react-router-dom'
import lessonsData from '../../lessonsData'
import {useState, useRef, useEffect} from 'react'
import CloseLesson from '../../components/CloseLesson'
import LessonHeader from '../../components/LessonHeader'
import LessonCard from '../../components/LessonCard'
import PoppingButton from '../../components/PoppingButton'
import chevronLeft from '../../assets/onboarding/chevron-left.svg'
import chevronRight from '../../assets/onboarding/chevron-right.svg'

export default function LessonModuleView() {

    const {lessonId, moduleNumber} = useParams()
    const lessonCardsContainer = useRef()
    const lessonCardsButtons = useRef()

    // finds the lesson in lessonsData that has the number 
    // associated with the lessonId from the URL
    const lesson = lessonsData.find(
        (l) => l.number === parseInt(lessonId, 10)
    )

    const module = lesson.teachingModules.find(
        (m) => m.moduleNumber === parseInt(moduleNumber, 10)
    )

    const lessonCards = module.cards
    
    const [openLessonCards, setOpenLessonCards] = useState([])

    const lessonCardsEls = lessonCards.map((card, i) => {
        return (
            <LessonCard 
                key={i}
                open={()=>setOpenLessonCards(prev => [...prev, i])}
                close={()=>setOpenLessonCards(prev => prev.filter(index => index !== i))}
                cardOpen={openLessonCards.includes(i) ? true : false}
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

        function cardScrollerButtons() {
            if(!lessonCardsContainer.current) return
            const computedStyle = window.getComputedStyle(lessonCardsContainer.current)
            const inlinePaddingPx = computedStyle.paddingInlineStart || computedStyle.paddingLeft
            const inlinePadding = parseInt(inlinePaddingPx)
            if(lessonCardsContainer.current.clientWidth < lessonCardsContainer.current.scrollWidth - inlinePadding) {
                lessonCardsButtons.current.style.display = 'flex'
            } else {
                lessonCardsButtons.current.style.display = 'none'
            }
        }

        updateHeight() // run once on mount
        cardScrollerButtons()
        window.addEventListener('resize', updateHeight)
        window.addEventListener('resize', cardScrollerButtons)

        return () => {
            window.removeEventListener('resize', updateHeight)
            window.removeEventListener('resize', cardScrollerButtons)
        }
    }, [])

    const scrollLeft = () => {
        lessonCardsContainer.current.scrollLeft -= '150'
    }
    const scrollRight = () => {
        lessonCardsContainer.current.scrollLeft += '150'
    }
    

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
                    <div className="lesson__cards" ref={lessonCardsContainer}>
                        {lessonCardsEls}
                    </div>
                    <div className="cards__scrollers" ref={lessonCardsButtons}>
                        <button className="scroll-left" onClick={scrollLeft}><img src={chevronLeft} alt="Scroll left" /></button>
                        <button className="scroll-right" onClick={scrollRight}><img src={chevronRight} alt="Scroll Right" /></button>
                    </div>
                </div>
                <PoppingButton 
                    label={lesson.teachingModules.length === Number(moduleNumber) ? 'Test my knowledge' : 'Continue'}
                    link={nextScreen}
                    onClick={()=>setOpenLessonCards([])}
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