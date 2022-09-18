import React, { Component, useEffect, useState } from 'react'
import '../../styles/Profilepage.css'
// import Profilepageimg from '../../resources/images/Profilepageimg.png'
import profilepagedp from '../../resources/images/profilepagedp.jpg'
import firebase from '../../firebase/firebase'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import userEvent from '@testing-library/user-event'


export default function Profilepage(props) {
    const [Userinfo, setUserinfo] = useState(props.user);

    const checkClose = (e) => {
        if (e.target.classList.contains("profilepage_bg")) {
            props.setShowAppointmentWindow(false)
        }
    }
    useEffect(() => {
        document.addEventListener("click", checkClose)
        return () => {
            document.removeEventListener("click", checkClose)
        }
    }, [])
    const onClickAdd = () => {
        // alert('/reports/add/'+props.user.uid)
        window.location = '/reports/add/' + props.user.uid;
    }
    const onClickShow = () => {
        window.location = '/reports'
    }
    if (Userinfo == null) {
        return <>loading</>
    }
    return (
        <div className='profilepage_bg d-flex justify-content-center align-items-center'>
            <div className='d-flex profilepage justify-content-center'>
                <div className='profilepage_container profilepage_container_border-right d-flex justify-content-center align-items-center'>
                    <div >
                        <div className='profilepage_container_name d-flex justify-content-center pb-3'>
                            <h2>{Userinfo.name}</h2>
                        </div>
                        <div className='profilepage_container_dp d-flex justify-content-center pb-5 dp'>
                            <img src={`data:image/jpg;base64, ${Userinfo.avatar}`} />
                        </div>
                        <div className='profilepage_container_update_dp_btn d-flex justify-content-center'>

                        </div>
                    </div>
                </div>
                <div className='profilepage_container'>
                    <div className=' d-flex justify-content-center maincolortext pt-5'>
                        <h2>{Userinfo.type == 'user' ? 'Patient' : 'Nurse'}</h2>
                    </div>
                    <div className='px-5 py-5'>
                        <div>
                            <div class="form-group ">
                                <label for="exampleInputEmail1"> Name</label>
                                <input type="text" class="form-control profilepage_infoupdateform" id="exampleInputEmail1" aria-describedby="emailHelp" value={Userinfo.name} readOnly />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={Userinfo.email} readOnly />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Phone Number</label>
                                <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={Userinfo.phone} readOnly />
                            </div>

                            <div className='d-flex justify-content-center'>
                                {props.user.type === 'user' &&
                                    <button type="submit" class="btn btn-success" onClick={() => onClickAdd()}>Add medical report</button>
                                }
                                {
                                    props.user.type === 'nurse' &&
                                    <button type="submit" class="btn btn-success" onClick={() => onClickShow()}>Show Reports</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

}
