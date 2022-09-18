import React from 'react'
import Sidebar from './Sidebar'
import TopRow from './TopRow'
import AppointmentsRow from './AppointmentsRow'
import AccountsRow from './AccountsRow'

function Dashboard(props) {

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
                    <TopRow user={props.user} type={props.type}/>
                    {showBalance()}
                    <AppointmentsRow user={props.user} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard