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
    const renderFlag = () => {
        if(props.appointment.status === 'accepted'){
            return 'green'
        }else if(props.appointment.status === 'pending'){
            return 'orange'
        }else if(props.appointment.status === 'reject'){
            return 'red'
        }else if(props.appointment.status === 'completed'){
            return 'blue'
        }
    }
    return (
        <>
            {showAppointmentWindow && <Profilepage user={nurse} setShowAppointmentWindow={setShowAppointmentWindow} appointment={props.appointment}/>}
            <div className='container component'>
                <div className='flag' style={{backgroundColor:renderFlag()}}>
                    <div className='app-row'>
                        <div className='row'>
                            <div className='col-sm-3' style={{ textAlign: 'left', color: 'var(--darkgreen)' }}>
                                <div style={{ cursor: 'pointer' }} onClick={() => setShowAppointmentWindow(true)}>
                                    {nurse.type === 'user' ? 'Appointment For: ' : 'Appointment With: '}
                                    <h4  >{nurse.name}</h4>
                                </div>
                            </div>
                            <div className='col-sm-9' style={{ textAlign: 'right' }}>
                                <br></br>
                                <p>{new Date(props.appointment.start_date).toUTCString()}</p>
                            </div>
                        </div>
                        <br />
                        <div className='row'>
                            <div className=' d-flex justify-content-between' style={{ textAlign: 'left' }} >
                                <h6>{props.appointment.location}</h6>
                                <p>ID:&nbsp;{props.appointment._id}</p>
                            </div>
                            {props.type === 'user' &&
                                <div className='' style={{ textAlign: 'right' }}>
                                    <h6 style={{ color: 'var(--darkgreen)' }}>{nurse.rating.toPrecision(2)} stars</h6>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppointmentComponent