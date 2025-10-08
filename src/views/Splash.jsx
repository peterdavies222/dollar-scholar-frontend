import {SlSpinner} from "@shoelace-style/shoelace/dist/react"
import brandmark from '../assets/brandmark.svg'

export default function Splash() {
    return (
        <div className="splash">
            <img src={brandmark} alt="Dollar Scholar" />
            <SlSpinner />
        </div>
    )
}