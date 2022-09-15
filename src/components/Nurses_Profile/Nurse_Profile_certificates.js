import React from 'react'
import Certificates from './Blocks/Certificates'
function Nurse_Profile_certificates() {
    const exp=[{
        coursename:'Be a better caregiver',
        company:'UdemyUdemy',
        issuedyear:'Sep 2017',
    },
    {
        coursename:'Be a better caregiver',
        company:'UdemyUdemy',
        issuedyear:'Sep 2017',
    },
    {
        coursename:'Be a better caregiver',
        company:'UdemyUdemy',
        issuedyear:'Sep 2017',
    },
    {
        coursename:'Be a better caregiver',
        company:'UdemyUdemy',
        issuedyear:'Sep 2017',
    },
    {
        coursename:'Be a better caregiver',
        company:'UdemyUdemy',
        issuedyear:'Sep 2017',
    },
    {
        coursename:'Be a better caregiver',
        company:'UdemyUdemy',
        issuedyear:'Sep 2017',
    }
]
  return (
    <div className='nurse_profile_certificates  '>
        <div className='nurse_container nurse_container_bottom'>
            <div className='nurse_profile_certificates__header d-flex'>
                <h3 className='nurse_profile_certificates__header__h3'>certificates</h3>
            </div>
            <div className='nurse_profile_certificates_body'>
                {exp.map((certificates)=><Certificates certificates={certificates}/>)}
            </div>
            
        </div>
        <div className='nurse_profile_certificates_collapse d-flex justify-content-center align-items-center' onClick={()=>{
                const element = document.getElementsByClassName("nurse_profile_certificates_body")
                    element[0].style.maxHeight = "none" 
                }

                }>{"Show All certificatess"}
        </div>
    </div>
  )
}

export default Nurse_Profile_certificates