import React from 'react'
import Education from './Blocks/Education'
import Add_education from './Add_info_windows/Add_education'
import {useState} from 'react'
import {useEffect} from 'react'
function Nurse_Profile_education() {
    const exp=[{
        institutename:'United Medical College',
        program:'MBBS',
        starttime:"2017",
        endtime:"2022",
        description:'The Holy Family Red Crescent Medical College started its journey in the academic year 1999-2000 by the inspiration of daughter of Father of the Nation & defender of the democracy Prime Minister Janonetri Sheikh Hasina. Sheikh Fazlul Karim Salim, MP was the Honble Health Minister of the Government of the Peoples Republic of Bangladesh. Sheikh Kabir Hossain was Chairman, Bangladesh Red Crescent Society and Professor Dr. Md. Maniruzzaman Bhuiyan was Principal of Holy Family Red Crescent Medical College.'
    },
    {
        institutename:'United Medical College',
        program:'MBBS',
        starttime:"2017",
        endtime:"2022",
        description:'The Holy Family Red Crescent Medical College started its journey in the academic year 1999-2000 by the inspiration of daughter of Father of the Nation & defender of the democracy Prime Minister Janonetri Sheikh Hasina. Sheikh Fazlul Karim Salim, MP was the Honble Health Minister of the Government of the Peoples Republic of Bangladesh. Sheikh Kabir Hossain was Chairman, Bangladesh Red Crescent Society and Professor Dr. Md. Maniruzzaman Bhuiyan was Principal of Holy Family Red Crescent Medical College.'
    },
    {
        institutename:'United Medical College',
        program:'MBBS',
        starttime:"2017",
        endtime:"2022",
        description:'The Holy Family Red Crescent Medical College started its journey in the academic year 1999-2000 by the inspiration of daughter of Father of the Nation & defender of the democracy Prime Minister Janonetri Sheikh Hasina. Sheikh Fazlul Karim Salim, MP was the Honble Health Minister of the Government of the Peoples Republic of Bangladesh. Sheikh Kabir Hossain was Chairman, Bangladesh Red Crescent Society and Professor Dr. Md. Maniruzzaman Bhuiyan was Principal of Holy Family Red Crescent Medical College.'
    },
]

const [add_education, setAdd_education] = useState(false);

useEffect(()=>{
    const closeWindow = (e) =>{
        if(e.target.classList.contains("add_education"))
        {
            setAdd_education(false)
        }
        
    }

    {
        document.addEventListener("click", closeWindow);

    }
    return ()=>{
        document.removeEventListener("click",closeWindow)
    }
}, 
[add_education]
)
  return (
    <div className='nurse_profile_education  '>
        {add_education? <Add_education/> : <></>}
        <div className='nurse_container nurse_container_bottom'>
            <div className='nurse_profile_education__header d-flex'>
                <h3 className='nurse_profile_education__header__h3'>education</h3>
                <div className='d-flex jutify-content-end align-items-center nurse_profile_add_icon'>
                <button type='button'onClick={() => {setAdd_education(true)}}><i class="fa fa-plus nurse_profile_add_icon" aria-hidden="true"></i></button>
                </div>
            </div>
            <div className='nurse_profile_education_body'>
                {exp.map((education)=><Education education={education}/>)}
            </div>
            
        </div>
        <div className='nurse_profile_education_collapse d-flex justify-content-center align-items-center' onClick={()=>{
                const element = document.getElementsByClassName("nurse_profile_education_body")
                    element[0].style.maxHeight = "none" 
                }

                }>{"Show All educations"}
        </div>
    </div>
  )
}

export default Nurse_Profile_education