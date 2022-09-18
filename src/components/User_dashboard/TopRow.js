import React from 'react'
import '../../styles/AppointmentsRow.css'
import '../../styles/Sidebar.css'
import '../../styles/TopRow.css'
function TopRow(props) {
    return (
        <div className='container'>
            <div className='row top-row'>
                <div className='col-sm' style={{ alignContent: 'center' }}>
                    <h3>Welcome {props.user.name}!</h3>
                    <a className='btn btn-success' href='/all_nurses'>{props.type === 'nurse' ? "Open to Nursing" : "Call for help!"}</a>
                </div>
                <div className='col-sm' style={{ textAlign: 'right' }}>
                    <img className='pfp' src={`data:image/jpg;base64, ${props.user.avatar}`} alt='user' />
                </div>
            </div>
        </div>
    )
}

export default TopRow