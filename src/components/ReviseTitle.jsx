export default function ReviseTitle(props) {
    const Icon = props.icon
    return (
        <a className="revise__title" href={props.link}>
            <div className="inner">
                <Icon />
                <h3>{props.title}</h3>
            </div>
        </a>
    )
}