import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div>
            <ul className="sidebar">
                <li style={{ color: 'var(--green)' }}><span>PORIBAR</span></li>
                <li><Link to='/dashboard/' style={{ textDecoration: 'none', color: 'black' }}>Dashboard</Link></li>
                <li><Link to='/dashboard/appointments' style={{ textDecoration: 'none', color: 'black' }}>Appointments</Link></li>
                <li><Link to='/dashboard/settings' style={{ textDecoration: 'none', color: 'black' }}>Settings</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar