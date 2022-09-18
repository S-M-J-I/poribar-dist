import React from 'react'
import Experience from './Blocks/Experience'
import {useState} from 'react'
import {useEffect} from 'react'
import Add_experiences from './Add_info_windows/Add_experiences'
function Nurse_Profile_experience(props) {
    const [isShown, setIsShown] = React.useState(false)
    const exp=props.nurse.experiences

const [add_experiences, setAdd_experiences] = useState(false);
const closeWindow = (e) =>{
    if(e.target.classList.contains("add_info_window_header"))
    {
        setAdd_experiences(false)
    }
}
useEffect(()=>{
    
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
        {add_experiences? <Add_experiences user={props.nurse}/> : <></>}
        <div className='nurse_container nurse_container_bottom'>
            <div className='nurse_profile_experience__header d-flex'>
                <h3 className='nurse_profile_experience__header__h3'>Experience</h3>
                <div className='d-flex jutify-content-end align-items-center nurse_profile_add_icon'>
                <button type='button' onClick={() => {setAdd_experiences(true)}}><i class="fa fa-plus nurse_profile_add_icon" aria-hidden="true"></i></button>
                </div>
            </div>
            <div className='nurse_profile_experience_body'>
                {exp.map((experience)=><Experience experience={experience.experience}/>)}
            </div>
            
        </div>
        <div className='nurse_profile_experience_collapse d-flex justify-content-center align-items-center' onClick={()=>{
                const element = document.getElementsByClassName("nurse_profile_experience_body")
                if(isShown){
                    element[0].style.maxHeight='500px'
                }else{
                    element[0].style.maxHeight = "none"
                } 
                    setIsShown(!isShown)
        }}>{!isShown&&"Show All Experiences"}
        </div>
    </div>
  )
}

export default Nurse_Profile_experience