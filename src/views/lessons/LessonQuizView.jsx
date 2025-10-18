import LessonHeader from "../../components/LessonHeader"
import {useState, useEffect, useRef} from 'react'
import {useParams} from 'react-router-dom'
import lessonsData from "../../lessonsData"
import CloseLesson from '../../components/CloseLesson'
import PoppingButton from '../../components/PoppingButton'
import CheckAnswer from '../../components/CheckAnswer'
import {arraysEqual} from '../../Utils'
import successChime from '../../assets/success-chime.wav'
import incorrectChime from '../../assets/incorrect-chime.wav'

export default function LessonQuizView() {

    const {lessonId, questionNumber} = useParams()
    const lesson = lessonsData.find(
        (l) => l.number === parseInt(lessonId, 10)
    )
    const question = lesson.quizQuestions.find(
        (q) => q.questionNumber === parseInt(questionNumber, 10)
    )

    const [selectedOptions, setSelectedOptions] = useState([])

    const handleOptionClick = (i) => {
        setSelectedOptions((prev) =>
            prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
        )
    }
    
    const options = question.options.map((option, i) => {
        if(question.correctAnswers.length > 1) return (
            <div onClick={()=> handleOptionClick(i)} key={i} className={`quiz__option single ${selectedOptions.includes(i) ? 'selected' : ''}`}>
                <input
                    id={i}
                    type="checkbox" 
                    checked={selectedOptions.includes(i)}
                    onChange={()=>handleOptionClick(i)}
                    />
                <span className={`checkbox ${selectedOptions.includes(i) ? 'checked' : ''}`}></span>
                <label htmlFor={`#${i}`}>{option.label}</label>
            </div>
        )
        if(question.correctAnswers.length === 1) return (
            <div onClick={()=> setSelectedOptions([i])} key={i} className={`quiz__option multiple ${selectedOptions.includes(i) ? 'selected' : ''}`}>
                <input
                    name="question"
                    type="radio" 
                    checked={selectedOptions.includes(i)}
                    onChange={()=>setSelectedOptions([i])}
                    // defaultChecked={selectedOptions.includes(i)}
                />
                <span className={`radio ${selectedOptions.includes(i) ? 'checked' : ''}`}></span>
                <label htmlFor={`#${i}`}>{option.label}</label>
            </div>
        )
    })

    const [dialogOpen, setDialogOpen] = useState(false)

    const lessonContentRef = useRef(null)
    const lessonHeaderRef = useRef(null)

    useEffect(() => {
        function updateHeight() {
            if (lessonContentRef.current && lessonHeaderRef.current) {
            lessonContentRef.current.style.minHeight =
                window.innerHeight - lessonHeaderRef.current.offsetHeight - 45 + 'px'
            }
        }

        updateHeight() // run once on mount
        window.addEventListener('resize', updateHeight)

        return () => {
            window.removeEventListener('resize', updateHeight)
        }
    }, [])

    const [checkAnswerOpen, setCheckAnswerOpen] = useState(false)

    const checkAnswer = () => {
        // console.log('checking. selected options:', selectedOptions, 'correct answers:', question.correctAnswers)
        return arraysEqual(selectedOptions, question.correctAnswers)
    }

    const [success, setSuccess] = useState(null)

    useEffect(()=> {
        if(checkAnswer()) {
            setSuccess(true)
        } else {
            setSuccess(false)
        }
    }, [selectedOptions])

    let nextScreen
    if (lesson.quizQuestions.length === Number(questionNumber)) {
        nextScreen = `/lessons/${lessonId}/summary`
    } else if (lesson.quizQuestions.length > Number(questionNumber)) {
        nextScreen = `/lessons/${lessonId}/quiz/${Number(questionNumber) + 1}`
    }

    const correctAudio = new Audio(successChime)
    const incorrectAudio = new Audio(incorrectChime)

    const checkAnswerHandler = () => {
        setCheckAnswerOpen(true)
        success ? correctAudio.play() : incorrectAudio.play()
    }

    const inactiveButton = useRef(null)
    const wiggle = ()=> {
        inactiveButton.current.classList.add('wiggling')
        setTimeout(()=> {
            inactiveButton.current.classList.remove('wiggling')
        }, 500)
    }

    return (
        <>
            <LessonHeader 
                ref={lessonHeaderRef}
                setDialogOpen={setDialogOpen}
                moduleNumber={Number(questionNumber) + Number(lesson.teachingModules.length)}
                lesson={lesson}
            />
            <main className="lesson__content" ref={lessonContentRef}>
                <div>
                    <h3 className="subheading">Question {questionNumber}</h3>
                    <h1>{question.question}</h1>
                    {question.hint && <p className="lesson__hint">Hint: {question.hint}</p>}
                    <div className="quiz__options">
                        {options}
                    </div>
                </div>
                {selectedOptions.length === 0 ?
                    <PoppingButton 
                        label="Check my answer"
                        onClick={wiggle}
                        buttonColor="inactive"
                        narrow
                        ref={inactiveButton}
                    />
                    :
                    <PoppingButton 
                        label="Check my answer"
                        onClick={()=>checkAnswerHandler()}
                        buttonColor="pink"
                        narrow
                    />
                }
                
            </main>
            <CloseLesson 
                dialogOpen={dialogOpen}
                onClose={()=> setDialogOpen(false)}
            />
            <CheckAnswer 
                success={success}
                checkAnswerOpen={checkAnswerOpen}
                onClose={()=>setCheckAnswerOpen(false)}
                nextScreen={nextScreen}
                setSelectedOptions={setSelectedOptions}
            />
        </>
    )
}