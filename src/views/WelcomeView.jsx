import PoppingButton from '../components/PoppingButton'
import WelcomeCard from '../components/WelcomeCard'
import {Link} from 'react-router-dom'
import welcomeCards from '../welcomeCards'
import { useEffect, useRef } from 'react'

export default function WelcomeView() {

    const scrollingSectionRef = useRef()

    const cards = welcomeCards.map((card, i) => {
        return (
            <WelcomeCard 
                key={i}
                icon={card.icon}
                label={card.label}
            />
        )
    })

    const scroll = () => {
        const scrollingSection = scrollingSectionRef.current
        const cards = scrollingSection.querySelectorAll('.welcome__card')
        
        for (let i = 0; i < 2; i++) {
            cards.forEach(card => {
            let newCard = card.cloneNode(true)
            newCard.setAttribute('aria-hidden', 'true')
            scrollingSection.appendChild(newCard)
            })
        }
        
        scrollingSection.classList.add('scrolling')
    }

    useEffect(() => {
        scroll()
    }, [])

    return (
        <main className="welcome">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
            <h1>Dollar Scholar is your key to financial confidence and success.</h1>
            
            <div className="cards__container">
                <div ref={scrollingSectionRef} className="cards__container__inner">
                    {cards}
                </div>

            </div>
            
            <PoppingButton 
                link="/signup"
                label="Create an account"
                buttonColor="pink"
                onClick={()=>window.scrollTo(0,0)}
                narrow
            />
            <Link onClick={()=>window.scrollTo(0,0)} className="signin" to="/signin">Sign in</Link>
        </main>
    )
}