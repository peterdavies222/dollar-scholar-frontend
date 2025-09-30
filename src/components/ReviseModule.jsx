import LessonCard from "./LessonCard"
import { useState } from "react"

export default function ReviseModule({module}) {
    const [openCards, setOpenCards] = useState([])
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
    return (
        <div className="revise-module">
            <h2>{module.moduleTitle}</h2>
            <div className="paragraphs">
                {paragraphs}
            </div>
            <div className="cards">
                {cards}
            </div>
        </div>
    )
}