import emptyState from '../assets/empty-state.svg'
import PoppingButton from './PoppingButton'

export default function EmptyState(props) {
    return (
        <div className="empty-state">
            <img src={emptyState} alt="Confused character" />
            <h2>{props.title}</h2>
            <p>{props.message}</p>
            {props.link &&
                <PoppingButton 
                    label={props.label}
                    link={props.link}
                    narrow
                />
            }
        </div>
    )
}