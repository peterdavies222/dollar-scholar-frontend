import { Link } from 'react-router-dom'
import brandmark from '../assets/brandmark.svg'
import learnIcon from '../assets/learn-icon.svg'
import reviseIcon from '../assets/revise-icon.svg'
import leaderboardIcon from '../assets/leaderboard-icon.svg'
import { fetchAvatar } from '../Utils'
import { SlAvatar } from '@shoelace-style/shoelace/dist/react'

export default function Nav({currentUser, section}) {
    const linkClick = () => {
        window.scrollTo(0, 0)
    }
    return (
        <aside className="nav">
            <nav>
                <div className="nav__upper">
                    <Link onClick={linkClick} className="brandmark" to="/learn"><img src={brandmark} alt="Dollar Scholar" /></Link>
                    <ul>
                        <li>
                            <Link onClick={linkClick} className={`nav__link ${section==="learn" ? "active" : ""}`} to="/learn">
                                <img src={learnIcon} alt="Lightbulb icon" />
                                <p>Learn</p>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={linkClick} className={`nav__link ${section==="revise" ? "active" : ""}`} to="/revise">
                                <img src={reviseIcon} alt="Book icon" />
                                <p>Revise</p>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={linkClick} className={`nav__link ${section==="leaderboard" ? "active" : ""}`} to="/leaderboard">
                                <img src={leaderboardIcon} alt="Podium icon" />
                                <p>Leaderboard</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link onClick={linkClick} className={`nav__link profile ${section==="profile" ? "active" : ""}`} to="/profile">
                    <SlAvatar image={fetchAvatar(currentUser.avatar)} />
                    <p>{currentUser.username}</p>
                </Link>
            </nav>
        </aside>

    )
}