import React from 'react'
import * as Fa from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Admin_left_sidebar(props) {
    return (
        <div className='admin-left-sidebar'>
            <div className='admin-left-sidebar__logo'>
                <h1><Link to='/' >Poribar</Link></h1>
            </div>
            <div className='admin-left-sidebar__menu'>
                <ul>
                    <li onClick={()=> props.setPanel('dashboard')}>
                        <a >
                            <Fa.FaHome />
                            Dashboard
                        </a>
                    </li>
                    <li onClick={()=> props.setPanel('user_search')}>
                        <a >
                            <Fa.FaUser />
                            Users
                        </a>
                    </li>
                    <li onClick={()=> props.setPanel('transaction_search')}>
                        <a>
                            <Fa.FaBook />
                           Transactions
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <Fa.FaRegAddressBook />
                            Reports
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <Fa.FaCog />
                            Settings
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Admin_left_sidebar