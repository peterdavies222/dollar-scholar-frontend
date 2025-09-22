import PoppingButton from '../components/PoppingButton'
import WelcomeCard from '../components/WelcomeCard'
import {Link} from 'react-router-dom'
import welcomeCards from '../welcomeCards'

export default function WelcomeView() {

    const cards = welcomeCards.map((card, i) => {
        return (
            <WelcomeCard 
                key={i}
                icon={card.icon}
                label={card.label}
            />
        )
    })

    return (
        <main className="welcome">
            <h1>Dollar Scholar is your key to financial confidence and success.</h1>
            
            <div className="cards__container">
                {cards}
            </div>
            
            <PoppingButton 
                link="/signup"
                label="Create an account"
                buttonColor="pink"
                narrow
            />
            <Link className="signin" to="/signin">Sign in</Link>
        </main>
    )
}