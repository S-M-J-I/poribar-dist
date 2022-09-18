import React from 'react'
import Experience from './Blocks/Experience'
import {useState} from 'react'
import {useEffect} from 'react'
import Add_experiences from './Add_info_windows/Add_experiences'
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

const [add_experiences, setAdd_experiences] = useState(false);

useEffect(()=>{
    const closeWindow = (e) =>{
        if(e.target.classList.contains("add_experiences"))
        {
            setAdd_experiences(false)
        }
        
    }

    {
        document.addEventListener("click", closeWindow);

    }
    return ()=>{
        document.removeEventListener("click",closeWindow)
    }
}, 
[add_experiences]
)
  return (
    <div className='nurse_profile_experience  '>
        {add_experiences? <Add_experiences/> : <></>}
        <div className='nurse_container nurse_container_bottom'>
            <div className='nurse_profile_experience__header d-flex'>
                <h3 className='nurse_profile_experience__header__h3'>Experience</h3>
                <div className='d-flex jutify-content-end align-items-center nurse_profile_add_icon'>
                <button type='button' onClick={() => {setAdd_experiences(true)}}><i class="fa fa-plus nurse_profile_add_icon" aria-hidden="true"></i></button>
                </div>
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