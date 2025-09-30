import ReviseTitle from "./ReviseTitle"
import LessonCard from "./LessonCard"
import { useState } from "react"
import { Link } from "react-router-dom"
import RightArrow from '../assets/right-arrow.svg?react'

//chatGPT

export default function ReviseSection({ lesson }) {
  const [openLessonCards, setOpenLessonCards] = useState([])

  const cards = lesson.teachingModules.flatMap((module, moduleIndex) =>
    module.cards.map((card, cardIndex) => (
      <LessonCard
        key={`${moduleIndex}-${cardIndex}`}
        open={() =>
          setOpenLessonCards(prev => [...prev, `${moduleIndex}-${cardIndex}`])
        }
        close={() =>
          setOpenLessonCards(prev =>
            prev.filter(idx => idx !== `${moduleIndex}-${cardIndex}`)
          )
        }
        cardOpen={openLessonCards.includes(`${moduleIndex}-${cardIndex}`)}
        icon={card.icon}
        title={card.cardTitle}
        description={card.description}
      />
    ))
  ).slice(0, 4)

  return (
    <div className="lesson-revision">
      <ReviseTitle
        icon={lesson.mainIcon}
        title={lesson.title}
        link={`/revise/${lesson.number}`}
      />
      <div className="lesson-revision-cards">
        {cards}
        <Link className="revision-cards-link" to={`/revise/${lesson.number}`}>See all<RightArrow /></Link>
      </div>
    </div>
  )
}