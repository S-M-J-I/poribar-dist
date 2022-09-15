import React from 'react'
import AppointmentComponent from './AppointmentComponent'

function AppointmentsRow(props) {

    let displayAppointments = () => {
        const rows = []

        if (props.type === 'user') {
            for (let i = 0; i < 5; ++i) {
                rows.push(<AppointmentComponent name='Nurse Jasmine' date='3/9/2022' address='Square Hospitals Ltd.' review='4.5' />)
            }
        } else {
            for (let i = 0; i < 5; ++i) {
                rows.push(<AppointmentComponent name='John' date='3/9/2022' address='Some dmd area' review='4.5' />)
            }
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