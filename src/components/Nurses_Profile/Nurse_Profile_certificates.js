import React from 'react'
import Certificates from './Blocks/Certificates'
import {useState} from 'react'
import {useEffect} from 'react'
import Add_certificates from './Add_info_windows/Add_certificates'
function Nurse_Profile_certificates() {
    const [isShown, setIsShown] = React.useState(false)
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

const [add_certificate, setAdd_certificate] = useState(false);

useEffect(()=>{
    const closeWindow = (e) =>{
        if(e.target.classList.contains("add_certificates"))
        {
            setAdd_certificate(false)
        }
        
    }

    {
        document.addEventListener("click", closeWindow);

    }
    return ()=>{
        document.removeEventListener("click",closeWindow)
    }
}, 
[add_certificate]
)
  return (
    <div className='nurse_profile_certificates  '>
        {add_certificate? <Add_certificates/> : <></>}
        <div className='nurse_container nurse_container_bottom'>
            <div className='nurse_profile_certificates__header d-flex'>
                <h3 className='nurse_profile_certificates__header__h3'>certificates</h3>
                <div className='d-flex jutify-content-end align-items-center nurse_profile_add_icon'>
                <button type='button' onClick={() => {setAdd_certificate(true)}}><i class="fa fa-plus nurse_profile_add_icon" aria-hidden="true"></i></button>
                </div>
                <h3 className='nurse_profile_certificates__header__h3'>Certificates</h3>
            </div>
            <div className='nurse_profile_certificates_body'>
                {exp.map((certificates)=><Certificates certificates={certificates}/>)}
            </div>
            
        </div>
        <div className='nurse_profile_certificates_collapse d-flex justify-content-center align-items-center' onClick={()=>{
                const element = document.getElementsByClassName("nurse_profile_certificates_body")
                if(isShown){
                    element[0].style.maxHeight='500px'
                }else{
                    element[0].style.maxHeight = "none"
                } 
                    setIsShown(!isShown)
        }}>{!isShown&&"Show All Certificates"}
        </div>
    </div>
  )
}

export default Nurse_Profile_certificates