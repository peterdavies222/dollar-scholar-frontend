export default function LessonBadge(props) {

    const Image = props.image
    
    return (
        <div className="lesson__badge">
            <Image />
            <p>{props.label}</p>
        </div>
    )
}