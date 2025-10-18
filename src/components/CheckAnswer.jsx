import { SlDialog } from '@shoelace-style/shoelace/dist/react'
import { createPortal } from 'react-dom'
import PoppingButton from './PoppingButton'
import {useRef, useEffect} from 'react'
import {Link} from 'react-router-dom'

export default function CheckAnswer(props) {

    const portalRoot = document.getElementById('portal-root')
    if(!portalRoot) return

    const checkAnswerRef = useRef(null)
    useEffect(()=> {
        if(!checkAnswerRef.current) return
        if(props.checkAnswerOpen) {
            checkAnswerRef.current.show()
        } else {
            checkAnswerRef.current.hide()
        }
    }, [props.checkAnswerOpen])

    const proceedToNext = () => {
        checkAnswerRef.current.hide()
        props.setSelectedOptions([])
    }

    const handleRetry = () => {
        checkAnswerRef.current.hide()
        props.setSelectedOptions([])
    }

    const correctMessages = [
        "Well done!",
        "You're learning more and more!",
        "Way to go!",
        "You're unstoppable!",
        "You'll be a finance pro in no time!",
        "Simply sensational!",
        "Okay, showoff."
    ]

    const correctMessage = correctMessages[Math.floor(Math.random()*correctMessages.length)]

    const incorrectMessages = [
        "Give it another go!",
        "That's okay. Keep trying!",
        "You'll be acing these questions in no time. Keep going!",
        "Making mistakes is the only way to success!",
        "Let's try again, shall we?",
        "I'm sure you'll get it next time!",
        "Power on!"
    ]

    const incorrectMessage = incorrectMessages[Math.floor(Math.random()*incorrectMessages.length)]

    return createPortal(
        <SlDialog 
            ref={checkAnswerRef}
            onSlAfterHide={props.onClose}
            className="check__answer"
        >
            <h2 slot="label">{props.success ? "That's correct!" : "Hmm... That’s not quite right."}</h2>
            <p>{props.success ? correctMessage : incorrectMessage}</p>
            {props.success ?
                <div className="footer" slot="footer">
                    <PoppingButton 
                        onClick={proceedToNext}
                        link={props.nextScreen}
                        label="Continue"
                        narrow
                    />
                </div> : 
                <div className="footer" slot="footer">
                    <PoppingButton 
                        onClick={handleRetry}
                        label="Try again"
                        narrow
                    />
                    <Link 
                        to={props.nextScreen}
                        onClick={proceedToNext}
                    >Skip question</Link>
                </div>
            }
        </SlDialog>

        ,
        portalRoot
    )
}