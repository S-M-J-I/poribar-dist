import React from 'react'
import User_activity from './GraphWidgets/User_activity'
import * as Fa from 'react-icons/fa'
function Admin_user_activity_widget() {
  return (
    <div className='admin-user-widget' >
        <div className='admin-user-widget__header'>
            <h3>User Activity</h3>
            <Fa.FaEllipsisH />
        </div>
        <div className='admin-user-widget__body' >
            <div className='admin-user-widget__body__graph'>
                <User_activity />
            </div>
            
        </div>
        <div className='admin-user-widget__body__heading d-flex justify-content-between'>
                <div className='admin-user-widget__body__heading__item'>
                    <h4>User Activity</h4>
                    <h5>Total Users</h5>
                </div>
                <div className='admin-user-widget__body__heading__item'>
                    <br></br>
                    <h4>10000</h4>
                </div>
            </div>

    </div>
  )
}

export default Admin_user_activity_widget