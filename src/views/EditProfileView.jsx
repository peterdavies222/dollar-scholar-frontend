import Nav from "../components/Nav"
import PoppingButton from "../components/PoppingButton"
import warningIcon from "../assets/warning.svg?react"
import { Link } from "react-router-dom"
import { SlAvatar } from '@shoelace-style/shoelace/dist/react'
import UserAPI from "../UserAPI"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import DeleteAccountDialog from "../components/DeleteAccountDialog"
import { fetchAvatar } from "../Utils"

export default function EditProfileView({currentUser, setCurrentUser, setToken, setToastData}) {

    const navigate = useNavigate()
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if(!file) return

        setSelectedImage(file)
    }

    const WarningIcon = warningIcon

    const editProfile = async (e) => {
        e.preventDefault()
        if(selectedImage) {
            const formData = new FormData()
            formData.append('avatar', selectedImage)
            if(e.target.username.value.length !== 0) {
                formData.append('username', e.target.username.value)
            }
            if(e.target.password.value.length !== 0) {
                formData.append('password', e.target.password.value)
            }
            const updatedUser = await UserAPI.updateProfileWithAvatar(currentUser._id, formData)
            setCurrentUser(updatedUser)
            navigate('/profile')
        } else {
            let data = {}
            if(e.target.username.value.length !== 0) {
                data.username = e.target.username.value
            }
            if(e.target.password.value.length !== 0) {
                data.password = e.target.password.value
            }
            const updatedUser = await UserAPI.updateProfileWithoutAvatar(currentUser._id, data)
            setCurrentUser(updatedUser)
            navigate('/profile')
        }
    }

    return (
        <div className="contains__nav__desktop profile edit">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <Nav 
                currentUser={currentUser}
                section="profile"/>
            <main>
                <header className="main">
                    <h1>Edit profile</h1>
                    <div>
                        <Link to="/profile">Cancel</Link>
                        <PoppingButton label="Save" narrow aria-controls="#submit-btn" onClick={()=>document.getElementById('submit-btn').click()} />
                    </div>
                </header>

                <form className="profile__content" onSubmit={editProfile}>
                    <div className="editprofile__frame profilepic">
                        <h3 className="subheading">Profile pic</h3>
                        <div>
                            <SlAvatar 
                                image={selectedImage ? URL.createObjectURL(selectedImage) : fetchAvatar(currentUser.avatar)}
                            />
                            <label className="avatar-button" htmlFor="avatar">edit</label>
                            <input accept="image/*" type="file" name="avatar" id="avatar" onChange={handleFileChange}/>
                        </div>
                    </div>
                    <div className="editprofile__frame username">
                        <label htmlFor="username" className="subheading">Username</label>
                        <input autoComplete="new-username" type="username" id="username" name="username" defaultValue={currentUser.username} />
                    </div>
                    <div className="editprofile__frame password">
                        <label htmlFor="password" className="subheading">Password</label>
                        <input autoComplete="new-password" type="password" id="password" name="password" placeholder="••••••••"/>
                    </div>
                    <button type="submit" id="submit-btn">Submit</button>
                </form>

                <hr />

                <div className="editprofile__frame delete">
                    <h2 className="subheading">Danger zone!</h2>
                    <PoppingButton narrow label='DELETE ACCOUNT' buttonColor="red" onClick={()=>setDeleteDialogOpen(true)}/>
                </div>
            </main>
            <DeleteAccountDialog 
                dialogOpen={deleteDialogOpen}
                onClose={()=>setDeleteDialogOpen(false)}
                currentUser={currentUser}
                setToken={setToken}
                setCurrentUser={setCurrentUser}
                setToastData={setToastData}
            />
        </div>
    )
}