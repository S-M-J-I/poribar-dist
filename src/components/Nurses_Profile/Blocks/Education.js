import React from 'react'

function Education(props) {
  return (
    <div className='nurses_profile_education d-flex py-3'>
        <div className='nurses_profile_education__icon'>
            <img src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHBlcnNvbnxlbnwwfHwwfHw%3D&w=1000&q=80' alt='education_icon' />
        </div>
        <div className='nurses_profile_education__body d-flex flex-column'>
            {/* <div className='nurses_profile_education__body__header'> */}
                <h3 className='nurses_profile_education__body__position'>{props.education.institute_name}</h3>
                <div className='nurses_profile_education__body__company'>
                    <p className='nurses_profile_education__body__company__p'>{props.education.program}</p>
                </div>
                <div className='nurses_profile_education__body__date'>
                    <p className='nurses_profile_education__body__date__p'>{new Date(props.education.start_date).getFullYear()} - {new Date(props.education.end_date).getFullYear()}</p>
                </div>
    
                <div className='nurses_profile_education__body__date'>
                    
                </div>
                <div className='nurses_profile_education__body__location'>
                    <p className='nurses_profile_education__body__location__p'>{props.education.description}</p>
                </div>
            {/* </div> */}
        </div>
    </div>
  )
}

export default Education