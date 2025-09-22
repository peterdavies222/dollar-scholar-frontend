import { SlDialog } from '@shoelace-style/shoelace/dist/react'
import { createPortal } from 'react-dom'
import {useRef, useEffect} from 'react'
import {Link} from 'react-router-dom'
import PoppingButton from './PoppingButton'

export default function CloseLesson(props) {

    const portalRoot = document.getElementById('portal-root')
    const dialogRef = useRef(null)

    useEffect(()=> {
        if(!dialogRef.current) return
        if(props.dialogOpen) {
            dialogRef.current.show()
        } else {
            dialogRef.current.hide()
        }
    }, [props.dialogOpen])

    return createPortal(
        <SlDialog
            ref={dialogRef}
            onSlAfterHide={props.onClose}
            className="close__lesson"
        >
            <h2 slot="label">Exit lesson?</h2>

            <div className="dialog-main">
                <p>You will lose your progress if you exit now.</p>
            </div>

            <div slot="footer" className="close__lesson--footer">
                <PoppingButton 
                    onClick={()=> dialogRef.current.hide()}
                    label="Continue lesson"
                    buttonColor="pink"
                />
                <Link className="exit-link" to="/learn">Exit lesson</Link>
            </div>
        </SlDialog>,
        portalRoot
    )
}