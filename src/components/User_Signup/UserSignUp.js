import React, { Component } from 'react'
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import firebase from '../../firebase/firebase'
import usersignupimg from '../../resources/images/usersignupimg.png'
import '../../styles/UserSignUp_styles.css'
function UserSignUp(props) {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [username, setUsername] = React.useState('')
    const [confirmpassword, setConfirmPassword] = React.useState('')
    const [
        isPasswordMatched,
        setIsPasswordMatched
    ] = React.useState(true)
    const [address, setAddress] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [bloodgroup, setBloodGroup] = React.useState('')
    const [avatar, setAvatar] = React.useState(null)
    const [gender, setGender] = React.useState('')
    const register = (e) => {
        e.preventDefault()
        const element = document.getElementById('registration_form') 
        const formData = new FormData(element)
        fetch('http://localhost:5000/api/auth/users/signup', {
            method: 'POST',
            mode: 'cors',
            body: formData
        }).then(data => data.json()).then(data => {
            console.log(data)
            if (data.status === 'success') {
                props.history.push('/login')
            }
        }).catch(err => console.log(err))
    }
    return (
        <>
            <div className='signup_bg d-flex justify-content-center align-items-center'>
                <div className='signup_body d-flex'>
                    <div className="signup_body_container">
                        <img src={usersignupimg} />
                    </div>
                    <div className='signup_body_container d-flex justify-content-center align-items-center'>

                        <div className='signup_form_body_container '>
                            <div className='d-flex justify-content-center align-items-center py-2'>
                                <h2>Poribar</h2>
                            </div>
                            <form className='px-5 py-3' id='registration_form' onSubmit={(e)=> register(e)}>
                                <div class="form-group pb-1">
                                    <label for="exampleInputEmail1">Name</label>
                                    <input type="text" class="form-control " required id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setUsername(e.target.value)} />

                                </div>
                                <div class="form-group pb-1">
                                    <label for="exampleInputEmail1">User Name</label>
                                    <input type="text" class="form-control " required id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setUsername(e.target.value)} />

                                </div>
                                <div class="form-group pb-1">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />

                                </div>
                                <div class="form-group pb-1">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control" required id="exampleInputPassword1" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div class="form-group pb-1">
                                    <label for="exampleInputPassword1">Confirm Password</label>
                                    <input type="password" class="form-control" required id="exampleInputPassword1" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
                                </div>
                                <div class="form-group pb-1">
                                    <label for="exampleInputEmail1">Blood Group</label>
                                    <input type="text" class="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your blood group"  onChange={(e) => setBloodGroup(e.target.value)} />

                                </div>
                                <div className='d-flex justify-content-center pb-1'>
                                    <div className='signup_form_body_container_radio_btn'>
                                        <label>Gender</label>
                                    </div>
                                    <div class="form-check signup_form_body_container_radio_btn">
                                        <input class="form-check-input " type="radio" name="gender" id="male" onClick={()=> setGender('male')} />
                                        <label class="form-check-label" for="male" >
                                            Male
                                        </label>
                                    </div>
                                    <div class="form-check signup_form_body_container_radio_btn">
                                        <input class="form-check-input" type="radio" name="gender" id="female" onClick={()=> setGender('female')} />
                                        <label class="form-check-label" for="female">
                                            Female
                                        </label>
                                    </div>
                                    <div class="form-check signup_form_body_container_radio_btn">
                                        <input class="form-check-input" type="radio" name="gender" id="others" onClick={()=> setGender('others')} />
                                        <label class="form-check-label" for="others">
                                            Others
                                        </label>
                                    </div>
                                </div>
                                <div class="form-group pb-1">
                                    <label for="exampleInputEmail1">Phone Number</label>
                                    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required placeholder="Enter your phone number" onChange={(e) => setPhone(e.target.value)} />

                                </div>
                                <div class="form-group pb-1">
                                    <label for="exampleInputEmail1">Address</label>
                                    <textarea type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required placeholder="Enter your address" onChange={(e) => setAddress(e.target.value)} />

                                </div>
                                <label class="form-label" for="customFile">Set your profile picture</label>
                                <input type="file" class="form-control" id="customFile" onChange={(e) => setAvatar(e.target.files[0])} hidden/>
                                <div className='signup_form_body_container_submit_btn d-flex justify-content-center pt-4'>
                                    <button type="submit" class="btn btn-success">Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserSignUp