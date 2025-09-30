import PoppingButton from "./PoppingButton"

export default function OnbaordingFrame(props) {
    return (
        <div className="onboarding__frame">
            <img src={props.image} alt={props.alt} />
            <div className="onboarding__text">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                {props.link ? 
                    <PoppingButton narrow label={props.label} link={props.link} onClick={props.onClick}/> :
                    <PoppingButton narrow label="Next" onClick={props.onClick} />
                }
            </div>
        </div>
    )
}