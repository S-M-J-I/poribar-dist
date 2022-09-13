import React from 'react'
import '../../styles/Nurses_profile.css'
import * as Fa from 'react-icons/fa'
function Nurse_Profile_header() {
  return (
    <div className='nurses_profile_header'>
        <div className='nurses_profile_header__cover_image'>
            <img src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHBlcnNvbnxlbnwwfHwwfHw%3D&w=1000&q=80' alt='cover_image' />
        </div>
        <div className='nurses_profile_header__profile_image'>
            <img src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHBlcnNvbnxlbnwwfHwwfHw%3D&w=1000&q=80' alt='profile_image' />
        </div>
        <div className='nurses_profile_header__btns d-flex justify-content-end align-items-top'>
            <div className='nurses_profile_header__btns_btn_container pt-2'>
                <button className='nurses_profile_header__btns__appointment'>Request for appointment</button>
                <button className='nurses_profile_header__btns__review'>Reviews</button>
            </div>
        </div>
        <div className='nurses_profile_header__name'>
            <h2 className='nurses_profile_header__name__h2'>Nurse Name</h2>
        </div>
        <div className='nurses_profile_header__other'>
            <div className='nurses_profile_header__other__location'>
                <p className='nurses_profile_header__other__location__p'>Location</p>
            </div>
            <div className='nurses_profile_header__other__rating '>
                <p className='nurses_profile_header__other__rating__p d-flex justify-content-center align-items-center'><Fa.FaStar className='nurses_profile_rating_star'/>&nbsp;3.6/5<span>(45)</span></p>
            </div>
        </div>
    </div>
  )
}

export default Nurse_Profile_header