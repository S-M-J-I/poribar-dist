import React from 'react'
import Sidebar from './Sidebar'
import TopRow from './TopRow'
import AppointmentsRow from './AppointmentsRow'
import AccountsRow from './AccountsRow'
import Settings from '../Settings/Settings'
function Settings_Dashboard(props) {

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
                    <Settings />
                </div>
            </div>
        </div>
    )
}

export default Settings_Dashboard