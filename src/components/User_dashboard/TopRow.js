import React from 'react'
import pfp from '../../resources/images/pfp.jpg'
import '../../styles/AppointmentsRow.css'
import '../../styles/Sidebar.css'
import '../../styles/TopRow.css'
function TopRow(props) {
    return (
        <div className='container'>
            <div className='row top-row'>
                <div className='col-sm' style={{ alignContent: 'center' }}>
                    <h3>Welcome {props.type}!</h3>
                    <a className='btn custom-btn' href='/'>{props.type === 'nurse' ? "Open to Nursing" : "Call for help!"}</a>
                </div>
                <div className='col-sm' style={{ textAlign: 'right' }}>
                    <img className='pfp' src={pfp} alt='user' />
                </div>
            </div>
        </div>
    )
}

export default TopRow