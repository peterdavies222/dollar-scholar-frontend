import LessonCard from "./LessonCard"
import { useState, useRef, useEffect } from "react"

export default function ReviseModule({module}) {
    const [openCards, setOpenCards] = useState([])
    const cardsContainer = useRef()
    const cardsButtons = useRef()
    const paragraphs = module.introductionParagraphs.map((paragraph, i) => {
        return (
            <p key={i}>{paragraph}</p>
        )
    })
    const cards = module.cards.map((card, i) => {
        return (
            <LessonCard 
                key={i}
                title={card.cardTitle}
                icon={card.icon}
                description={card.description}
                cardOpen={openCards.includes(i) ? true : false}
                open={()=>setOpenCards(prevOpenCards => [...prevOpenCards, i])}
                close={()=>setOpenCards(prevOpenCards => prevOpenCards.filter(index => index !== i))}
            />
        )
    })

    useEffect(() => {
    
    function cardScrollerButtons() {
        if(!cardsContainer.current) return
        const computedStyle = window.getComputedStyle(cardsContainer.current)
        const inlinePaddingPx = computedStyle.paddingInlineStart || computedStyle.paddingLeft
        const inlinePadding = parseInt(inlinePaddingPx)
        if(cardsContainer.current.clientWidth < cardsContainer.current.scrollWidth - inlinePadding) {
            cardsButtons.current.style.display = 'flex'
        } else {
            cardsButtons.current.style.display = 'none'
        }
    }

    cardScrollerButtons()
    window.addEventListener('resize', cardScrollerButtons)
    return ()=> {
        window.removeEventListener('resize', cardScrollerButtons)
    }
    }, [])

    const scrollLeft = () => {
        cardsContainer.current.scrollLeft -= 150
    }

    const scrollRight = () => {
        cardsContainer.current.scrollLeft += 150
    }

    return (
        <div className="revise-module">
            <h2>{module.moduleTitle}</h2>
            <div className="paragraphs">
                {paragraphs}
            </div>
            <div ref={cardsContainer} className="cards">
                {cards}
            </div>
            <div ref={cardsButtons}>
                <button onClick={scrollLeft}></button>
                <button onClick={scrollRight}></button>
            </div>
        </div>
    )
}