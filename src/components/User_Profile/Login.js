import React, { Component } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import firebase from '../firebase/firebase'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    tryLogin = async (e) => {
        e.preventDefault()

        const auth = getAuth(firebase)
        const user = await signInWithEmailAndPassword(auth, this.state.email, this.state.password)
        console.log(user)
        if(user){
            this.props.setIsloggedin(true)
        }else{
            this.props.setIsloggedin(false)
        }
    }

    inputChange = (e) => {
        const { value, name } = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className='user-login w-100 d-flex justify-content-center'>
                <div className='left-panel panel'>
                </div>
                <div className='panel right-panel d-flex flex-column justify-content-center'>
                    <div className='title-bar d-flex justify-content-center flex-column'>
                        <h1 className='title'>Poribar</h1>
                        <p>Welcome to Poribar</p>
                    </div>
                    <div className='login-form'>
                        <form>
                            <div className='form-group d-flex flex-column'>
                                <label className='login-label' for='email'>Username or Email</label>
                                <input className='login-input' type='email' name='email' onChange={this.inputChange} id='email' placeholder='Enter your email' />
                            </div>
                            <div className='form-group d-flex flex-column'>
                                <label className='login-label' for='password'>Password</label>
                                <input className='login-input' type='password' name='password' onChange={this.inputChange} id='password' placeholder='Enter your password' />
                            </div>
                            <div className='form-group d-flex flex-row-reverse'>
                                <a href='#'>Forgot Password?</a>
                            </div>
                            <div className='form-group d-flex justify-content-center'>
                                <button className='login-btn btn btn-success' onClick={this.tryLogin} type='submit'>Sign In</button>
                            </div>
                        </form>
                        <div className='form-group d-flex justify-content-center'>
                            <p>Don't have an account? <a href='#'>Sign Up</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login