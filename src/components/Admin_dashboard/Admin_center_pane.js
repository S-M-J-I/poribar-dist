import React, { useEffect, useState } from 'react'
import Admin_user_activity_widget from './Admin_user_activity_widget'
import Admin_transactions_widget from './Admin_transactions_widget'
import Admin_top_bar from './Admin_top_bar'
import Addevent from './Create_event/Addevent'
function Admin_center_pane() {
  return (
    <div className='admin-center-pane'>
      {/* {createEvent ? <Addevent /> : <></>} */}
        <div className='admin-center-pane__topbar'>
            <Admin_top_bar />
        </div>
        <div className='admin-center-pane__widgets d-flex justify-content-between'>
            <Admin_user_activity_widget />
            <div className='divider'></div>
            <Admin_transactions_widget />
        </div>
    </div>
  )
}

export default Admin_center_pane