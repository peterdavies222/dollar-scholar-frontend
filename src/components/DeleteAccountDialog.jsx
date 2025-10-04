import { createPortal } from "react-dom"
import { SlDialog } from "@shoelace-style/shoelace/dist/react"
import { useRef, useEffect, useState } from "react"
import PoppingButton from "./PoppingButton"
import UserAPI from "../UserAPI"
import { useNavigate } from "react-router-dom"

export default function DeleteAccountDialog(props) {

    const dialogRef = useRef(null)
    const portalRoot = document.getElementById('portal-root')
    const navigate = useNavigate()
    const [inputtedUsername, setInputtedUsername] = useState('')
    const [inputtedPassword, setInputtedPassword] = useState('')
    const [buttonColor, setButtonColor] = useState('inactive')

    useEffect(()=> {
        if(inputtedUsername === props.currentUser.username && inputtedPassword === props.currentUser.password) {
            setButtonColor('red')
        } else {
            setButtonColor('inactive')
        }
    }, [inputtedUsername, inputtedPassword])

    useEffect(()=> {
        if(!dialogRef.current) return
        if(props.dialogOpen) {
            dialogRef.current.show()
        } else {
            dialogRef.current.hide()
        }
    }, [props.dialogOpen])

    const deleteAccount = async (e) => {
        e.preventDefault()
        try {
            if(inputtedUsername === props.currentUser.username && inputtedPassword === props.currentUser.password) {

                props.setToastData({
                    visible: true,
                    message: "We're sorry to see you go!",
                    type: 'normal'
                })
                
                // remove token and reset state
                props.setToken(null)
                localStorage.removeItem('token')
                await UserAPI.deleteAccount(props.currentUser._id)
                props.setCurrentUser(null)

                // navigate after everything
                navigate('/signin', { replace: true })
            } else {
                props.setToastData({
                    visible: true,
                    message: 'Incorrect username or password',
                    type: 'warn'
                })
            }
        } catch (err) {
            console.error('Failed to delete account:', err)
        }
    }

    return createPortal(
        <SlDialog
            ref={dialogRef}
            onSlAfterHide={props.onClose}
        >
            <h2 slot="label">Delete account?</h2>
            <p>This action cannot be undone.</p>
            <form onSubmit={deleteAccount}>
                <div className="input-group">
                    <label className="subheading" htmlFor="delete-username">Username</label>
                    <input type="username" name="delete-username" id="delete-username" autoComplete="false" onChange={e => setInputtedUsername(e.target.value)}></input>
                </div>
                <div className="input-group">
                    <label className="subheading" htmlFor="delete-password">Password</label>
                    <input type="password" name="delete-password" id="delete-password" autoComplete="false" onChange={e => setInputtedPassword(e.target.value)}></input>
                </div>
                <div slot="footer">
                    <PoppingButton buttonColor={buttonColor} label="Delete account" />
                </div>
            </form>
        </SlDialog>
        , portalRoot
    )
}