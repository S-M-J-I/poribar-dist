import React, { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
// import Appointment_window from './Appointment_Window/Appointment_window'
// import '../../styles/Profilepage.css'
import Profilepage from '../User_Profile/Profilepage'
function AppointmentComponent(props) {
    const [nurse, setNurse] = useState()
    const [showAppointmentWindow, setShowAppointmentWindow] = useState(false)
    useEffect(() => {
        const path = (props.type === 'user') ? `http://localhost:3030/api/auth/nurse/profile/${props.name}` : `http://localhost:3030/api/auth/user/profile/${props.name}`
        fetch(path, {
            method: 'post',
            mode: 'cors'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setNurse(data)
            })
            .catch(err => {
                alert(err)
            })
    }, [])
    if (!nurse) {
        return (
            <div style={{ minHeight: '100vh' }}>
                <Spinner animation="border" variant="success" />
            </div>
        )
    }
    return (
        <>
        {showAppointmentWindow && <Profilepage user={nurse} setShowAppointmentWindow={setShowAppointmentWindow}/>}
        <div className='container component'>
            <div className='app-row'>
                <div className='row'>
                    <div className='col-sm-3' style={{ textAlign: 'left', color: 'var(--darkgreen)' }}>
                        <h4 onClick={()=> setShowAppointmentWindow(true)}>{nurse.name}</h4>
                    </div>
                    <div className='col-sm-9' style={{ textAlign: 'right' }}>
                        <p>{new Date(props.appointment.start_date).toUTCString()}</p>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-sm' style={{ textAlign: 'left' }}>
                        <h6>{props.address}</h6>
                    </div>
                    {props.type === 'user' &&
                        <div className='col-sm-9' style={{ textAlign: 'right' }}>
                            <h6 style={{ color: 'var(--darkgreen)' }}>{nurse.rating} stars</h6>
                        </div>
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default AppointmentComponent