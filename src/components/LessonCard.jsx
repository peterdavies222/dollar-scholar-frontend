export default function LessonCard(props) {

    const Icon = props.icon

    return (
        <div className={`card--container ${props.cardOpen ? 'open' : 'closed'}`}>
            <button onClick={props.cardOpen ? props.close : props.open} className="lesson__card">
                <div className="lesson__card--frame front">
                    <div className="lesson__card--inner">
                        <Icon />
                        <p className="lesson__card--title">{props.title}</p>
                    </div>
                </div>

                <div className="lesson__card--frame back">
                    <div className="lesson__card--inner">
                        <p className="lesson__card--explanation">{props.description}</p>
                    </div>
                </div>
            </button>
        </div>
    )
}