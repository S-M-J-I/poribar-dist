import React, { useState } from 'react';
import Emp from '../resources/images/emp.jpg';
import { signInWithEmailAndPassword } from "firebase/auth"
import auth from '../firebase/firebase'
import './style.css'
const EmployeeLogin = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submitLoginForm = async (e) => {
        e.preventDefault();

        const user = await signInWithEmailAndPassword(auth, email, password)
        if (user) {
            props.setLoginState(true)
        } else {
            alert("Invalid credentials")
        }
    }
    return (

        <>
            <div className='row'>
                <div className='col-sm-8'>
                    <img src={Emp} alt='bruh' />
                </div>
                <div className='col-sm-4'>
                    <h2><b>Login To Continue</b></h2>
                    <form className='form' onSubmit={submitLoginForm}>
                        <input type="email" placeholder='Email' className="inputBox" required="true"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className='spacing'>
                            <input type="password" placeholder='password' className="inputBox" required="true"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <input type="checkbox" name='rem' className='checkBox' />
                        <label for="rem" className='checkBox'> Remember me</label>
                        <a href='/' className='link'>Forgot Password?</a>
                        <br />
                        <div className='Button'>
                            <button type="submit" className='loginButton'>Login </button>
                        </div>

                    </form>
                </div>
            </div>

        </>


        // <>
        //    <form onSubmit={submitLoginForm}>
        //     <div>
        //         <h1>Login To Continue</h1>
        //         <label htmlFor='email'>Email</label>
        //         <input type ="text" name = "email" id="email" 
        //         value={email}
        //         onChange={(e) =>setEmail(e.target.value)}
        //         />
        //     </div>
        //     <div>
        //         <label htmlFor='password'>Password</label>
        //         <input type ="password" name = "password" id="password" 
        //         value={password}
        //         onChange={(e) =>setPassword(e.target.value)}
        //         />
        //     </div>

        //     <button type="submit">Login </button>
        //    </form>
        // </>
    );
}
export default EmployeeLogin;