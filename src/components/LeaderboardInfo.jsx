import { createPortal } from "react-dom"
import { useEffect, useRef } from "react"
import { SlDialog } from '@shoelace-style/shoelace/dist/react'
import PoppingButton from "./PoppingButton"

export default function LeaderboardInfo(props) {
    const portalRoot = document.getElementById('portal-root')
    
    const dialog = useRef()
    
    useEffect(()=> {
        if(!dialog.current) return
        if(props.infoOpen) {
            dialog.current.show()
        } else {
            dialog.current.hide()
        }
    }, [props.infoOpen])
    
    return createPortal(
        <SlDialog 
            onSlAfterHide={props.onClose} 
            ref={dialog}
            className="leaderboard__info">
            <h2 slot="label">How does the leaderboard work?</h2>
            <p>Each lesson you complete, will get you closer to the top of the leaderboard —
                even if you've already completed that lesson. Revise old lessons, or complete new ones,
                to work your way to the podium!
            </p>
            <div className="footer" slot="footer">
                <PoppingButton label="Got it!" onClick={()=>dialog.current.hide()}/>
            </div>
                
        </SlDialog>, portalRoot
    )
}