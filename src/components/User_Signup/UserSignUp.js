import React, { Component } from 'react'
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import firebase from '../firebase/firebase'
import usersignupimg from '..//resources/images/usersignupimg.png'
class UserSignUp extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         email: '',
    //         password: ''
    //     }
    // }

    // tryLogin = async (e) => {
    //     e.preventDefault()

    //     const auth = getAuth(firebase)
    //     const user = await signInWithEmailAndPassword(auth, this.state.email, this.state.password)
    //     if (user) {
    //         this.props.setLoginState(true)
    //     } else {
    //         alert("Invalid credentials")
    //     }
    // }

    // inputChange = (e) => {
    //     const { value, name } = e.target
    //     this.setState({
    //         [name]: value
    //     })
    // }

    render() {
        return (
            <>
            <div className='signup_bg d-flex justify-content-center align-items-center'>
                <div className='signup_body d-flex'>
                    <div className= "signup_body_container"> 
                        <img src = {usersignupimg}/>
                    </div>
                    <div className='signup_body_container d-flex justify-content-center align-items-center'>
                        
                        <div className='signup_form_body_container '>
                            <div className='d-flex justify-content-center align-items-center py-2'>
                            <h2>Poribar</h2>
                            </div>
                            <form className='px-5 py-3'>
                                <div class="form-group pb-1">
                                    <label for="exampleInputEmail1">Name</label>
                                    <input type="text" class="form-control " required id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    
                                </div>
                                <div class="form-group pb-1">
                                    <label for="exampleInputEmail1">User Name</label>
                                    <input type="text" class="form-control " required id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    
                                </div>
                                <div class="form-group pb-1">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                
                                </div>
                                <div class="form-group pb-1">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control" required id="exampleInputPassword1" placeholder="Password"/>
                                </div>
                                <div class="form-group pb-1">
                                    <label for="exampleInputPassword1">Confirm Password</label>
                                    <input type="password" class="form-control" required id="exampleInputPassword1" placeholder="Confirm Password"/>
                                </div>
                                <div class="form-group pb-1">
                                    <label for="exampleInputEmail1">Blood Group</label>
                                    <input type="text" class="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your blood group"/>
                                    
                                </div>
                                <div className='d-flex justify-content-center pb-1'>
                                    <div className='signup_form_body_container_radio_btn'>
                                    <label>Gender</label>
                                    </div>
                                    <div class="form-check signup_form_body_container_radio_btn">
                                        <input class="form-check-input " type="radio" name="gender" id="male" />
                                        <label class="form-check-label" for="male">
                                            Male
                                        </label>
                                    </div>
                                    <div class="form-check signup_form_body_container_radio_btn">
                                        <input class="form-check-input" type="radio" name="gender" id="female" />
                                        <label class="form-check-label" for="female">
                                            Female
                                        </label>
                                    </div>
                                    <div class="form-check signup_form_body_container_radio_btn">
                                        <input class="form-check-input" type="radio" name="gender" id="others" />
                                        <label class="form-check-label" for="others">
                                            Others
                                        </label>
                                    </div>
                                </div>
                                <div class="form-group pb-1">
                                    <label for="exampleInputEmail1">Phone Number</label>
                                    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required placeholder="Enter your phone number"/>
                                    
                                </div>
                                <div class="form-group pb-1">
                                    <label for="exampleInputEmail1">Address</label>
                                    <textarea type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required placeholder="Enter your address"/>
                                    
                                </div>
                                <label class="form-label" for="customFile">Set your profile picture</label>
                                <input type="file" class="form-control" id="customFile" />
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
}

export default UserSignUp