import React from 'react'

function Certificates(props) {
  return (
    <div className='nurses_profile_certificates d-flex py-3'>
        <div className='nurses_profile_certificates__icon'>
            <img src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHBlcnNvbnxlbnwwfHwwfHw%3D&w=1000&q=80' alt='certificates_icon' />
        </div>
        <div className='nurses_profile_certificates__body d-flex flex-column'>
            {/* <div className='nurses_profile_certificates__body__header'> */}
                <h3 className='nurses_profile_certificates__body__position'>{props.certificates.course_name}</h3>
                <div className='nurses_profile_certificates__body__company'>
                    <p className='nurses_profile_certificates__body__company__p'>{props.certificates.company_name}</p>
                </div>
                <div className='nurses_profile_certificates__body__date'>
                    <p className='nurses_profile_certificates__body__date__p'>{new Date(props.certificates.issue_year).toUTCString()}</p>
                </div>
            {/* </div> */}
        </div>
    </div>
  )
}

export default Certificates