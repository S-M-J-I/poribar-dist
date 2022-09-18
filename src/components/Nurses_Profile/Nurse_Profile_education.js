import React from 'react'
import Education from './Blocks/Education'
function Nurse_Profile_education() {
    const [isShown, setIsShown] = React.useState(false)
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
  return (
    <div className='nurse_profile_education  '>
        <div className='nurse_container nurse_container_bottom'>
            <div className='nurse_profile_education__header d-flex'>
                <h3 className='nurse_profile_education__header__h3'>Education</h3>
            </div>
            <div className='nurse_profile_education_body'>
                {exp.map((education)=><Education education={education}/>)}
            </div>
            
        </div>
        <div className='nurse_profile_education_collapse d-flex justify-content-center align-items-center' onClick={()=>{
                const element = document.getElementsByClassName("nurse_profile_education_body")
                if(isShown){
                    element[0].style.maxHeight='500px'
                }else{
                    element[0].style.maxHeight = "none"
                } 
                    setIsShown(!isShown)
        }}>{!isShown&&"Show All Education"}
        </div>
    </div>
  )
}

export default Nurse_Profile_education