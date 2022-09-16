import React, { Component, useEffect, useState } from 'react'
import  '../../styles/Profilepage.css'
// import Profilepageimg from '../../resources/images/Profilepageimg.png'
import profilepagedp from '../../resources/images/profilepagedp.jpg'
import firebase from '../../firebase/firebase'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import userEvent from '@testing-library/user-event'


export default function Profilepage (){
        const [Userinfo, setUserinfo] = useState(null);

        useEffect(()=>{

            const auth = getAuth(firebase)
            onAuthStateChanged(auth, (user)=>{
                if(user){
                    fetch("http://103.87.215.12:3030/api/auth/user/profile", {
                        mode:"cors",
                        method:"POST",
                        headers:{
                            "Content-Type": "application/json"
                        },
                        body:JSON.stringify(
                            {

                                "uid":`${user.uid}`
                            }
                        )
                    }).then(data =>data.json()).then(data =>{console.log(data);setUserinfo(data)}).catch(err => console.log(err))
                }

            })
            
        }, [])
        if(Userinfo==null){
            return <>loading</>
        }

        return (
        <div className='profilepage_bg d-flex justify-content-center align-items-center'>
            <div className='d-flex profilepage'>
                <div className='profilepage_container profilepage_container_border-right d-flex justify-content-center align-items-center'>
                    <div >
                        <div className='profilepage_container_name d-flex justify-content-center pb-3'>
                                <h2>{Userinfo.name}</h2> 
                        </div>
                        <div className='profilepage_container_dp d-flex justify-content-center pb-5'>
                            <img src ={profilepagedp}/>
                        </div>
                        <div className='profilepage_container_update_dp_btn d-flex justify-content-center'>
                        <button type="button" class="btn btn-success px-2">Update Cover Photo</button>
                        </div>
                    </div>
                </div>
                <div className='profilepage_container'>
                    <div className=' d-flex justify-content-center maincolortext pt-5'>
                        <h2>Profile</h2>
                    </div>
                    <div className='px-5 py-5'>
                        <div>
                        <form>
                            <div class="form-group ">
                                <label for="exampleInputEmail1">Update User Name</label>
                                <input type="text" class="form-control profilepage_infoupdateform" id="exampleInputEmail1" aria-describedby="emailHelp" value={Userinfo.name}/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Update Email</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={Userinfo.email}/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Update Phone Number</label>
                                <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Update Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Confirm Update Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                            </div>
                            <div className='d-flex justify-content-center'> 
                            <button type="submit" class="btn btn-success">Submit</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
        );
    
}
