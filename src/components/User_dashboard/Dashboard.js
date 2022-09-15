import React from 'react'
import Sidebar from './Sidebar'
import TopRow from './TopRow'
import AppointmentsRow from './AppointmentsRow'
import AccountsRow from './AccountsRow'

function Dashboard(props) {

    const showBalance = () => {
        if (props.type === 'nurse') {
            return <AccountsRow balance='70,000' />
        }
    }

    return (
        <div>
            <div className='row'>
                <div className='col-sm-2'>
                    <Sidebar />
                </div>
                <div className='col-sm-8'>
                    <TopRow type={props.type} />
                    {showBalance()}
                    <AppointmentsRow type={props.type} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard