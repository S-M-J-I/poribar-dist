import React, { useEffect, useState } from 'react'
import AppointmentComponent from './AppointmentComponent'

function AppointmentsRow(props) {

    const [appointments, setAppointments] = useState()

    useEffect(() => {
        let uid = ''
        if (props.user.type === 'user') {
            uid = props.user.uid
            console.log(uid)
            fetch(`http://localhost:3030/api/appointments/user/getall/${uid}`, {
                method: 'post',
                mode: 'cors'
            }).then(res => res.json())
                .then(data => {
                    console.log(data)
                    setAppointments(data)
                })
                .catch(err => {
                    alert(err)
                })
                .catch(err => {
                    alert(err)
                })
        } else if (props.user.type === 'nurse') {
            uid = props.user.uid
            fetch(`http://localhost:3030/api/appointments/nurse/getall/${uid}`, {
                method: 'post',
                mode: 'cors'
            }).then(res => res.json())
                .then(data => {
                    setAppointments(data)
                })
                .catch(err => {
                    alert(err)
                })
                .catch(err => {
                    alert(err)
                })
        }
    }, [])

    let displayAppointments = () => {
        const rows = []
        console.log(appointments)

        if (appointments && appointments.length >= 0) {
            if (props.user.type === 'user') {
                appointments.forEach(appointment => {
                    rows.push(<AppointmentComponent name={appointment.nurse} address={appointment.location} review='4.5' />)
                })
            } else {
                for (let i = 0; i < 5; ++i) {
                    rows.push(<AppointmentComponent name='John' date='3/9/2022' address='Some dmd area' review='4.5' />)
                }
            }
        } else {
            return <h4>No Appointments</h4>
        }

        return rows
    }

    return (
        <div className='appointments-row'>
            <div className='container'>
                <div className='row text-row'>
                    <h2>Appointments</h2>
                </div>
                <div className='row'>
                    {
                        displayAppointments()
                    }
                </div>
            </div>
        </div>
    )
}

export default AppointmentsRow