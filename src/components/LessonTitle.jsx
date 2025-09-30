import completeIcon from '../assets/lesson-icons/check-contained.svg'
import lockIcon from '../assets/lock.svg'
import {useRef} from 'react'

export default function LessonTitle(props) {

    const button = useRef()

    const MainIcon = props.mainIcon

    const wiggle = () => {
        button.current.classList.add('wiggling')
        setTimeout(()=> {
            button.current.classList.remove('wiggling')
        }, 500)
    }

    return (
        <button ref={button} onClick={props.completion !== 'locked' ? props.onClick : wiggle} className={`lesson__title-container ${props.completion === "complete" ? "complete" : props.completion === "unlocked" ? "unlocked" : props.completion === "locked" ? "locked" : "base"}`}>
            <div className="lesson__title-inner">
                <div>
                    <MainIcon className="lesson__icon" />
                    <p className="lesson__title">{props.title}</p>
                </div>
                {props.completion === "complete" ? 
                    <img src={completeIcon} alt="Checkmark" /> : 
                    props.completion === "unlocked" ?
                    <p className="lesson__duration">{props.duration}</p> :
                    <img src={lockIcon} alt="Locked" />
                }
            </div>
        </button>
    )
}