import React from 'react'
import * as Fa from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Admin_left_sidebar() {
    return (
        <div className='admin-left-sidebar'>
            <div className='admin-left-sidebar__logo'>
                <h1><Link to='/' >Poribar</Link></h1>
            </div>
            <div className='admin-left-sidebar__menu'>
                <ul>
                    <li>
                        <a href='#'>
                            <Fa.FaHome />
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <Fa.FaUser />
                            <span>Users</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <Fa.FaUser />
                            <span>Orders</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <Fa.FaUser />
                            <span>Products</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <Fa.FaUser />
                            <span>Reports</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <Fa.FaUser />
                            <span>Settings</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Admin_left_sidebar