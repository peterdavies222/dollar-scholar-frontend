import { forwardRef } from "react";
import PoppingButton from "./PoppingButton";

const OnboardingFrame = forwardRef((props, ref) => {
    return (
        <div className="onboarding__frame" ref={ref}>
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
})

export default OnboardingFrame;