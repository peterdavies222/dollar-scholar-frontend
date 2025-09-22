import completeIcon from '../assets/lesson-icons/check-contained.svg'

export default function LessonTitle(props) {

    const MainIcon = props.mainIcon

    return (
        <button onClick={props.onClick} className={`lesson__title-container ${props.completion === "complete" ? "complete" : props.completion === "unlocked" ? "unlocked" : props.completion === "locked" ? "locked" : "base"}`}>
            <div className="lesson__title-inner">
                <div>
                    <MainIcon className="lesson__icon" />
                    <p className="lesson__title">{props.title}</p>
                </div>
                {props.completion === "complete" ? 
                    <img src={completeIcon} alt="Checkmark" /> : 
                    <p className="lesson__duration">{props.duration}</p>
                }
            </div>
        </button>
    )
}