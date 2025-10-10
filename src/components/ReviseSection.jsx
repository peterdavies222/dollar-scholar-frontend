import ReviseTitle from "./ReviseTitle"
import LessonCard from "./LessonCard"
import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import RightArrow from '../assets/right-arrow.svg?react'
import chevronLeft from '../assets/onboarding/chevron-left.svg'
import chevronRight from '../assets/onboarding/chevron-right.svg'

//chatGPT

export default function ReviseSection({ lesson }) {
  const [openLessonCards, setOpenLessonCards] = useState([])
  const cardsButtons = useRef()
  const cardsContainer = useRef()

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
    <div className="lesson-revision">
      <ReviseTitle
        icon={lesson.mainIcon}
        title={lesson.title}
        link={`/revise/${lesson.number}`}
      />
      <div className="lesson-revision-cards" ref={cardsContainer}>
        {cards}
        <Link onClick={()=>window.scrollTo(0, 0)} className="revision-cards-link" to={`/revise/${lesson.number}`}>See all<RightArrow /></Link>
      </div>
      <div className="cards-scrollers" ref={cardsButtons}>
        <button onClick={scrollLeft} className="scroll-left">
          <img src={chevronLeft} alt="Scroll left" />
        </button>
        <button onClick={scrollRight} className="scroll-right">
          <img src={chevronRight} alt="Scroll right" />
        </button>
      </div>
    </div>
  )
}