export default function WelcomeCard(props) {

    const Icon = props.icon ? props.icon : null

    return (
        <div className="welcome__card">
            <div className="welcome__card--inner">
            <Icon />
            <p className="welcome__card--text">{props.label}</p>
            </div>
        </div>
    )
}