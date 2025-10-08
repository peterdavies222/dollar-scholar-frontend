import { Link } from "react-router-dom"

export default function ReviseTitle(props) {
    const Icon = props.icon
    return (
        <Link className="revise__title" to={props.link}>
            <div className="inner">
                <Icon />
                <h3>{props.title}</h3>
            </div>
        </Link>
    )
}