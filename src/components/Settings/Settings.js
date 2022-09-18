import React from 'react'
import { useEffect } from 'react'
import '../../styles/Settings.css'
import firebase from '../../firebase/firebase'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { Spinner } from 'react-bootstrap'
function Settings() {
    const [user, setUser] = React.useState({})
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [gender, setGender] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [username, setUsername] = React.useState('')
    const [bloodGroup, setBloodGroup] = React.useState('')
    const [avatar, setAvatar] = React.useState(null)
    const [confirmpassword, setConfirmPassword] = React.useState('')
    useEffect(() => {
        const auth = getAuth(firebase)
        onAuthStateChanged(auth,(usr) => {
            if(usr){{
                fetch('http://localhost:3030/api/auth/user/profile/'+usr.uid,{
                    method:'post',
                    mode:'cors'
                }).then(res=>res.json())
                .then(data=>{
                    setUser(data)
                    setName(data.name)
                    setEmail(data.email)
                    setGender(data.gender)
                    setPhone(data.phone)
                    setAddress(data.address)
                    setUsername(data.username)
                    setBloodGroup(data.blood_group)
                }).catch(err=>console.log(err))
            }}
        })
    }, [])
    const setAvatarFile = (e) => {
        e.preventDefault()
        const avatar = document.getElementById('avatar-file')
        avatar.click()
    }
    const updateProfile = (e) => {
        e.preventDefault()
        if(password!==confirmpassword){
            alert('Password and confirm password does not match')
            return
        }
        const element = document.getElementById('update_profile_form')
        const formData = new FormData(element)
        fetch('http://localhost:3030/api/auth/user/profile/update/'+user.uid,{
            method:'post',
            mode:'cors',
            body:formData
        }).then(res=>res.json())
        .then(data=>{
            if(data.status==='success'){
                alert('Profile updated successfully')
                // window.location='/user_login'
            }
        }).catch(err=>console.log(err))
    }
    const removeImage = (e) => {
        e.preventDefault()
        const element = document.getElementById('avatar-file')
        element.files = null
        const avatar = document.getElementById('avatar-img')
        avatar.src = ''
        setAvatar(null)
    }
    useEffect(() => {
        if(avatar){
            const element = document.getElementById('avatar-img')
            element.src = URL.createObjectURL(avatar)
        }
    }, [avatar])
    if(!user){
        return (<>
            <div className='d-flex justify-content-center w-100 align-items-center'>
                <Spinner animation="border" role="success">
                </Spinner>
            </div>
        </>)
    }
    return (
        <div className='settings w-100 d-flex justify-content-center align-items-center'>
            <form className='settings-container' id='update_profile_form' onSubmit={(e)=>updateProfile(e)}>
                <div className='d-flex justify-content-left align-items-center'>
                <h2>Settings</h2>
                </div>
                <div className='avatar d-flex justify-content-left align-items-center'>
                    <div className='avatar-image'>
                        <input type='file' name='avatar' hidden id='avatar-file' onChange={(e)=> setAvatar(e.target.files[0])}/>
                        <p>Avatar</p>
                        <img id='avatar-img' className='avatar-pic'src={`data:image/jpg;base64, ${user.avatar}`} alt='avatar' />
                    </div>
                    <div className='avatar-buttons d-flex'>
                        <button className='btn btn-outline-success' onClick={(e)=>setAvatarFile(e)}>Upload</button>
                        <button className='btn btn-outline-danger' onClick={(e)=> removeImage(e)}>Delete</button>
                    </div>
                </div>
                <div className='row d-flex align-items-center settings_row'>
                    <div className='col-sm'>
                        <div className='row-header d-flex justify-content-between'>
                            <h6>Display Name</h6>
                            <p>Visible to other members</p>
                        </div>
                        <div className='row-input'>
                            <input type='text' placeholder='Enter your name' name='name' value={name} onChange={(e)=> setName(e.target.value)}/>
                        </div>
                    </div>
                    <div className='col-sm'>
                        <div className='row-header d-flex justify-content-between'>
                            <h6>Username</h6>
                            <p>What will be your unique name?</p>
                        </div>
                        <div className='row-input'>
                            <input className='row-input' type='text' placeholder='Enter your username' name='username' value={username} onChange={(e)=> setUsername(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className='row d-flex align-items-center settings_row'>
                    <div className='col-sm'>
                        <div className='row-header d-flex justify-content-between'>
                            <h6>Email Address</h6>
                            <p>For notification and logging in</p>
                        </div>
                        <div className='row-input'>
                            <input type='text' placeholder='james@poribar.com' name='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className='col-sm'>
                        <div className='row-header d-flex justify-content-between'>
                            <h6>Phone number</h6>
                            <p>For receiving notification</p>
                        </div>
                        <div className='row-input'>
                            <input type='text' placeholder='+880' name='phone' value={phone} onChange={(e)=> setPhone(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className='row d-flex align-items-center settings_row'>
                    <div className='col-sm'>
                        <div className='row-header d-flex justify-content-between'>
                            <h6>Gender</h6>
                            <p>You know it</p>
                        </div>
                        <div className='row-input'>
                            <input type='text' placeholder='Eg.Male/Female/Other' name='gender' value = {gender} onChange={(e)=> setGender(e.target.value)}/>
                        </div>
                    </div>
                    <div className='col-sm'>
                        <div className='row-header d-flex justify-content-between'>
                            <h6>Blood Group</h6>
                            <p>For helping the nurses</p>
                        </div>
                        <div className='row-input'>
                            <input className='w-100' type='text' placeholder='Eg.O+' name='blood_group' value={bloodGroup} onChange={(e)=> setBloodGroup(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className='row d-flex align-items-center settings_row'>
                    <div className='col-sm'>
                        <div className='row-header d-flex justify-content-between'>
                            <h6>Password</h6>
                        </div>
                        <div className='row-input'>
                            <input type='password' name='password' onChange={(e)=>setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className='col-sm'>
                        <div className='row-header d-flex justify-content-between'>
                            <h6>Confirm Password</h6>
                        </div>
                        <div className='row-input'>
                            <input className='w-100' type='password' name='confirm_password' onChange={(e)=>setConfirmPassword(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-end'>
                    <button className='btn btn-success'>Save Changes</button>
                </div>
            </form>
        </div>
    )
}

export default Settings