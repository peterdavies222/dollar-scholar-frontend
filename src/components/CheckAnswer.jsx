import { SlDialog } from '@shoelace-style/shoelace/dist/react'
import { createPortal } from 'react-dom'
import PoppingButton from './PoppingButton'
import {useRef, useEffect} from 'react'
import {Link} from 'react-router-dom'

export default function CheckAnswer(props) {

    const portalRoot = document.getElementById('portal-root')

    const checkAnswerRef = useRef(null)
    useEffect(()=> {
        if(!checkAnswerRef.current) return
        if(props.checkAnswerOpen) {
            checkAnswerRef.current.show()
        } else {
            checkAnswerRef.current.hide()
        }
    }, [props.checkAnswerOpen])

    return createPortal(
        <SlDialog 
            ref={checkAnswerRef}
            onSlAfterHide={props.onClose}
            className="check__answer"

        >
            <h2 slot="label">{props.success ? "That's correct!" : "Hmm... That’s not quite right."}</h2>
            <p>{props.success ? "You're unstoppable!" : "Give it another go!"}</p>
            {props.success ?
                <div className="footer" slot="footer">
                    <PoppingButton 
                        onClick={()=>checkAnswerRef.current.hide()}
                        link={props.nextScreen}
                        label="Continue"
                        narrow
                    />
                </div> : 
                <div className="footer" slot="footer">
                    <PoppingButton 
                        onClick={()=>checkAnswerRef.current.hide()}
                        label="Try again"
                        narrow
                    />
                    <Link to={props.nextScreen}>Skip question</Link>
                </div>
            }
        </SlDialog>

        ,
        portalRoot
    )
}