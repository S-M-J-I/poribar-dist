import React from 'react'
import '../../styles/Nurse_Appointment_styles.css'
import nursedp from '../../resources/images/nursedp.jpg'
import { useState } from 'react';
import { useEffect } from 'react'
import Nurse_Appointment_Form_Details from '../Nurse_Appointment_Form_Details/Nurse_Appointment_Form_Details'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import firebase from '../../firebase/firebase'
export default function Nurse_Appointment(props){
    const [date, setDate] = useState(new Date());
    const [duration, setDuration] = useState(1);
    const [shownurse_appointment_form_details, setShownurse_appointment_form_details] = useState(false);
    const [user, setUser] = useState(null)
    useEffect(() => {
        const auth = getAuth(firebase)
        onAuthStateChanged(auth, (usr) => {
            if (usr) {
                fetch(`http://localhost:3030/api/auth/user/profile/${usr.uid}`, { method: 'POST', mode: 'cors' }).then(data => data.json()).then(data => {
                    setUser(data)
                }).catch(err => {
                    console.log(err)
                })
            } else {
                setUser(null)
            }
        })
    }, [])

    useEffect(() => {

        const closeWindow = (e) => {
            if (e.target.classList.contains("nurse_appointment_form_details")) {
                setShownurse_appointment_form_details(false)
            }

        }

        {
            document.addEventListener("click", closeWindow);

        }
        return () => {
            document.removeEventListener("click", closeWindow)
        }
    },
        [shownurse_appointment_form_details]
    )
    return (

        <div className='d-flex justify-content-center align-items-center nurse_appointment'>
            {shownurse_appointment_form_details ? <Nurse_Appointment_Form_Details user={user} nurse={props.nurse} data={{date,duration}}/> : <></>}
            <div className='nurse_appointment_container pt-4'>
                <div className='d-flex nurse_appointment_header appointment_header'>
                    <div className='d-flex align-items-center nurse_appointment_nursedp'>
                        <img src={`data:image/jpg;base64, ${props.nurse.avatar}`} />
                    </div>
                    <div className=" d-flex align-items-center container ">
                        <div className='pb-3'>

                            <div className='d-flex pb-1'>
                                <div>
                                    <h4>{props.nurse.name}</h4>
                                </div>
                                <div className='d-flex pt-1'>
                                    <div className=' px-2'>
                                        <i class="nurse_appointment_start_icon fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    <div>{parseFloat(props.nurse.rating).toPrecision(2)}</div>
                                </div>
                            </div>
                            <div>
                                <h5>{props.nurse.address}</h5>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-end '>
                        <div className=" d-flex align-items-center">
                            <div className='d-flex justify-content-center align-items-center nurse_appointment_payment_per_visit'>
                                1000
                            </div>
                        </div>
                    </div>
                </div>
                <div className='nurse_appointment_description'>
                    <div>
                        <h5>Description</h5>
                    </div>
                    <div>
                        Normal Nursing service
                    </div>
                </div>
                <div className='nurse_appointment_service_info'>
                    <div className='d-flex justify-content-center pt-4'>
                        <div><h4>Service Info</h4></div>
                    </div>

                    <div className='d-flex justify-content-center py-4 '>
                        <div >

                            <div ><p className='font_weight'>Nurse name</p></div>
                            <div><p className='font_weight'>Category</p></div>
                            <div><p className='font_weight'>Starting date</p></div>
                            <div className='font_weight'>Duration</div>

                        </div>
                        <div className='nurse_appointment_details'>
                            <div><p>{props.nurse.name}</p></div>
                            <div><p>Nursing Service</p></div>
                            <div><p>{date.toDateString()}</p></div>
                            <div ><input type="number" placeholder='Enter the duration here' onChange={(e)=> setDuration(e.target.value)}></input></div>

                        </div>
                    </div>
                </div>


                <div className='d-flex justify-content-center nurse_appointment_calender py-3'>
                    <div className='calendar-container'>
                        <Calendar onChange={setDate} value={date} />
                    </div>
                    {/* <p className='text-center'>
                    <span className='bold'>Selected Date:</span>{' '}
                    {date.toDateString()}
                </p> */}
                </div>
                <div className='d-flex justify-content-center pt-3 pb-4'>
                    <button type="button" class="btn nurse_appointment_continue_btn" onClick={() => { setShownurse_appointment_form_details(true) }}>Continue</button>
                </div>
            </div>
        </div>

    )
}
