import React from 'react'
import Nurse_Profile_header from './Nurse_Profile_header'
import Nurse_Profile_about from './Nurse_Profile_about'
import Nurse_Profile_experience from './Nurse_Profile_experience'
import Nurse_Profile_education from './Nurse_Profile_education'
import Nurse_Profile_certificates from './Nurse_Profile_certificates'
function Nurse_Profile() {
    return (
        <div className='nurses_profile d-flex justify-content-center w-100'>
            <div className='nurses_profile__container'>
                <div className='nurses_profile__header'>
                    <Nurse_Profile_header />
                </div>
                <div className='nurses_profile__about'>
                    <Nurse_Profile_about />
                </div>
                <div className='nurses_profile__experience'>
                    <Nurse_Profile_experience />
                </div>
                <div className='nurses_profile__education'>
                    <Nurse_Profile_education/>
                </div>
                <div className='nurses_profile__certification'>
                <Nurse_Profile_certificates/>
                </div>
            </div>
        </div>
    )
}

export default Nurse_Profile