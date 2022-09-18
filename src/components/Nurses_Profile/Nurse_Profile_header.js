import React from 'react'
import '../../styles/Nurses_profile.css'
import Reviews from '../Reviews/Reviews'
import * as Fa from 'react-icons/fa'
import { useState } from 'react'
import { useEffect } from 'react'

// import Nurse_appointment from '../Nurse_appointment/Nurse_appointment'
import Nurse_Appointment from '../Nurse_Appointment/Nurse_Appointment'
function Nurse_Profile_header(props) {
    const [showreview, setShowreview] = useState(false);

    useEffect(() => {
        const closeWindow = (e) => {
            if (e.target.classList.contains("nurse_reviews")) {
                setShowreview(false)
            }

        }

        {
            document.addEventListener("click", closeWindow);

        }
        return () => {
            document.removeEventListener("click", closeWindow)
        }
    },
        [showreview]
    )

    // For showing Nurse_Appointment page
    const [shownurse_appointment, setShownurse_appointment] = useState(false);

    useEffect(() => {
        const closeWindow = (e) => {
            if (e.target.classList.contains("nurse_appointment")) {
                setShownurse_appointment(false)
            }

        }

        {
            document.addEventListener("click", closeWindow);

        }
        return () => {
            document.removeEventListener("click", closeWindow)
        }
    },
        [shownurse_appointment]
    )
    return (
        <div className='nurses_profile_header'>
            {showreview ? <Reviews /> : <></>}
            {shownurse_appointment ? <Nurse_Appointment nurse={props.nurse} /> : <></>}
            <div className='nurses_profile_header__cover_image'>
                <img src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHBlcnNvbnxlbnwwfHwwfHw%3D&w=1000&q=80' alt='cover_image' />
            </div>
            <div className='nurses_profile_header__profile_image'>
                <img src={`data:image/jpg;base64, ${props.nurse.avatar}`} alt='profile_image' />
            </div>
            <div className='nurses_profile_header__btns d-flex justify-content-end align-items-top'>
                <div className='nurses_profile_header__btns_btn_container pt-2 px-2'>
                    <button className=' btn btn-outline-success' onClick={() => { setShownurse_appointment(true) }}>Request for appointment</button>
                    <button className=' btn btn-outline-success' onClick={() => { setShowreview(true) }}>Reviews</button>
                </div>
            </div>
            <div className='nurses_profile_header__name'>
                <h2 className='nurses_profile_header__name__h2'>{props.nurse.name}</h2>
            </div>
            <div className='nurses_profile_header__other'>
                <div className='nurses_profile_header__other__location'>
                    <p className='nurses_profile_header__other__location__p'>{props.nurse.address}</p>
                </div>
                <div className='nurses_profile_header__other__rating '>
                    <p className='nurses_profile_header__other__rating__p d-flex justify-content-center align-items-center'><Fa.FaStar className='nurses_profile_rating_star' />&nbsp;{props.nurse.rating}/5</p>
                </div>
            </div>
        </div>
    )
}

export default Nurse_Profile_header