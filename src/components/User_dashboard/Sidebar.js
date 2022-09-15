import React from 'react'


function Sidebar() {
    return (
        <div>
            <ul className="sidebar">
                <li style={{ color: 'var(--green)' }}><span>PORIBAR</span></li>
                <li><span><i ></i></span><span>Dashboard</span></li>
                <li><span><i ></i></span><span>Appointments</span></li>
                <li><span><i ></i></span><span>Payments</span></li>
                <li><span><i ></i></span><span>Settings</span></li>
            </ul>
        </div>
    )
}

export default Sidebar