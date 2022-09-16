import React from 'react'

function Nurse_Profile_about(props) {
  return (
    <div className='nurses_profile__about nurse_container'>
      <div className='nurses_profile__about__header d-flex'>
        <h3 className='nurses_profile__about__header__h3'>About</h3>
      </div>
      <div className='nurses_profile__about__body d-flex'>
        <p className='nurses_profile_about_description'>Nurse {props.nurse.name} is one of our verified nurses from {props.nurse.address} with a rating of {props.nurse.rating}</p>
      </div>
    </div>
  )
}

export default Nurse_Profile_about