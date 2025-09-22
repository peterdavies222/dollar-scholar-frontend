import {Link} from 'react-router-dom'

export default function PoppingButton(props) {

    if (props.link) return (
        <Link onClick={props.onClick && props.onClick} to={props.link} className={`popping-button ${props.buttonColor ? props.buttonColor : 'pink'} ${props.narrow && 'narrow'}`}>
            <div className="popping-button__inner">
                {props.icon && <img src={props.icon} alt={props.iconAlt ? props.iconAlt : 'icon'} />}
                {props.label}
            </div>
        </Link>
    )

    return (
        <button onClick={props.onClick} className={`popping-button ${props.buttonColor ? props.buttonColor : 'pink'} ${props.narrow && 'narrow'}`} type={props.type && props.type}>
            <div className="popping-button__inner">
                {props.icon && <img src={props.icon} alt={props.iconAlt ? props.iconAlt : 'icon'} />}
                {props.label}
            </div>
        </button>
    )

}