import React from 'react'
import Sidebar from './Sidebar'
import TopRow from './TopRow'
import AllAppointmentsRow from './AllAppointmentsRow'
import AccountsRow from './AccountsRow'

function AllAppointments(props) {

    const showBalance = () => {
        if (props.type === 'nurse') {
            return <AccountsRow balance={props.user} />
        }
    }

    return (
        <div>
            <div className='row'>
                <div className='col-sm-2'>
                    <Sidebar />
                </div>
                <div className='col-sm-8'>
                    <AllAppointmentsRow user={props.user} />
                </div>
            </div>
        </div>
    )
}

export default AllAppointments