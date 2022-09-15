import React, { Component, useEffect, useState } from 'react'
// import  '../styles/Profilepage.css'
import Profilepageimg from '../../resources/images/Profilepageimg.png'
import firebase from '../../firebase/firebase'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import userEvent from '@testing-library/user-event'
import '../../styles/Profilepage.css'
export default function Profilepage (){
        const [Userinfo, setUserinfo] = useState(null);
        useEffect(()=>{
            setUserinfo({name:'John Doe', email:'something@gmail.com'})
            
        }, [])
        if(Userinfo==null){
            return <>loading</>
        }

        return (
        <div className='d-flex justify-content-center profilepage-bg'>
            
          <div className='profilepage d-flex '>
            <div className='container dp-part'>
                <div className='d-flex justify-content-center'>
                    <div className='profilepicchange'>
                        <div>
                            <h3 className='px-5'>
                            {Userinfo.name}
                            </h3>
                        </div>
                        
                        <div className='dp mt-5'>
                        <img src ={Profilepageimg}/>
                        </div>
                        <button className='btn profilepicchangebtn px-5 mt-5 text-white'>Change your photo</button>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='d-flex infoupdateform'>
                <div >
                    <h2 className='text-center maincolortext'>Profile</h2>
                    <p>Update user name</p>
                    <input type="text" value={Userinfo.name}/>
                    <p>Update email address</p>
                    <input type="email" value={Userinfo.email}/> 
                    <p>Update phone number</p>
                    <input type="text"/>
                    <p>Update password</p>
                    <input type="password"/>
                    <p>Confirm update password</p>
                    <input type="password" />
                    <div className='submitupdate text-center mt-3'>
                        <button className='btn text-white'>Save change</button>
                    </div>
                    
                </div>

                </div>
                

            </div>
          </div>
          </div>
        );
    
}
