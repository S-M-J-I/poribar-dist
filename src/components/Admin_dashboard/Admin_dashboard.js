import React, { useEffect } from 'react'
import Admin_left_sidebar from './Admin_left_sidebar'
import Admin_center_pane from './Admin_center_pane'
// import firebase from '../../firebase/firebase'
function Admin_dashboard(props) {

  useEffect(() => {

    props.setCurrentRoute('dashboard')
    return () => {
      props.setCurrentRoute('home')
    }
  }, [])
  return (
    <div className='admin-dashboard'>
      <div className='admin-dashboard__left-sidebar'>
        <Admin_left_sidebar />
      </div>
      <div className='admin-dashboard__center-pane'>
        <Admin_center_pane />
      </div>
    </div>
  )
}

export default Admin_dashboard