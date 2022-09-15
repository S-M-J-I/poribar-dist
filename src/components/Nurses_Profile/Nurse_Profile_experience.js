import React from 'react'
import Experience from './Blocks/Experience'
function Nurse_Profile_experience() {
    const exp=[{
        post:'Nurse',
        company:'Company',
        type:'Full-time',
        date:'2021-2022',
        location:'Location'
    },{
        post:'Nurse',
        company:'Company',
        type:'Full-time',
        date:'2021-2022',
        location:'Location'
    },
    {
        post:'Nurse',
        company:'Company',
        type:'Full-time',
        date:'2021-2022',
        location:'Location'
    },
    {
        post:'Nurse',
        company:'Company',
        type:'Full-time',
        date:'2021-2022',
        location:'Location'
    },{
        post:'Nurse',
        company:'Company',
        type:'Full-time',
        date:'2021-2022',
        location:'Location'
    },
    {
        post:'Nurse',
        company:'Company',
        type:'Full-time',
        date:'2021-2022',
        location:'Location'
    },{
        post:'Nurse',
        company:'Company',
        type:'Full-time',
        date:'2021-2022',
        location:'Location'
    },{
        post:'Nurse',
        company:'Company',
        type:'Full-time',
        date:'2021-2022',
        location:'Location'
    },
    {
        post:'Nurse',
        company:'Company',
        type:'Full-time',
        date:'2021-2022',
        location:'Location'
    },{
        post:'Nurse',
        company:'Company',
        type:'Full-time',
        date:'2021-2022',
        location:'Location'
    },{
        post:'Nurse',
        company:'Company',
        type:'Full-time',
        date:'2021-2022',
        location:'Location'
    },
    {
        post:'Nurse',
        company:'Company',
        type:'Full-time',
        date:'2021-2022',
        location:'Location'
    }
]
  return (
    <div className='nurse_profile_experience  '>
        <div className='nurse_container nurse_container_bottom'>
            <div className='nurse_profile_experience__header d-flex'>
                <h3 className='nurse_profile_experience__header__h3'>Experience</h3>
            </div>
            <div className='nurse_profile_experience_body'>
                {exp.map((experience)=><Experience experience={experience}/>)}
            </div>
            
        </div>
        <div className='nurse_profile_experience_collapse d-flex justify-content-center align-items-center' onClick={()=>{
                const element = document.getElementsByClassName("nurse_profile_experience_body")
                    element[0].style.maxHeight = "none" 
                }

                }>{"Show All Experiences"}
        </div>
    </div>
  )
}

export default Nurse_Profile_experience