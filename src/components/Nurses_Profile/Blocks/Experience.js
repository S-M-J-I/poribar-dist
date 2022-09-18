import React from 'react'

function Experience(props) {
  return (
    <div className='nurses_profile_experience d-flex py-3'>
        <div className='nurses_profile_experience__icon'>
            <img src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHBlcnNvbnxlbnwwfHwwfHw%3D&w=1000&q=80' alt='experience_icon' />
        </div>
        <div className='nurses_profile_experience__body d-flex flex-column'>
            {/* <div className='nurses_profile_experience__body__header'> */}
                <h3 className='nurses_profile_experience__body__position'>{props.experience.designation}</h3>
                <div className='nurses_profile_experience__body__company'>
                    <p className='nurses_profile_experience__body__company__p'>{props.experience.company_name}.{props.experience.type}</p>
                </div>
                <div className='nurses_profile_experience__body__date'>
                    <p className='nurses_profile_experience__body__date__p'>{new Date(props.experience.start_date).getFullYear()}-{new Date(props.experience.end_date).getFullYear()}</p>
                </div>
                <div className='nurses_profile_experience__body__location'>
                    <p className='nurses_profile_experience__body__location__p'>{props.experience.location}</p>
                </div>
            {/* </div> */}
        </div>
    </div>
  )
}

export default Experience