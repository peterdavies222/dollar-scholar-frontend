import CloseIcon from '../assets/cross-icon.svg?react'
import {forwardRef} from 'react'
import { Link } from 'react-router-dom'

const LessonHeader = forwardRef(function LessonHeader(props, ref) {

    return (
        <header ref={ref} className="lesson__header">
            {props.summary ?
            <Link to="/learn" onClick={props.onClick}>
                <CloseIcon />
                Exit lesson
            </Link>
            :
            <button onClick={props.setDialogOpen}>
                <CloseIcon />
                Exit lesson
            </button>
            }
            
            <progress value={props.moduleNumber} max={props.lesson.teachingModules.length + props.lesson.quizQuestions.length + 1}></progress>
        </header>
    )
})

export default LessonHeader