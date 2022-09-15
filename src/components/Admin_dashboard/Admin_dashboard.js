import React, { useEffect } from 'react'
import Admin_left_sidebar from './Admin_left_sidebar'
import Admin_center_pane from './Admin_center_pane'
// import firebase from '../../firebase/firebase'
import Admin_user_search from './Admin_user_search'
import Admin_transaction_search from './Admin_transaction_search'
// import { BrowserRouter,Routes, Route } from 'react-router-dom'
function renderItem(panel){
  if(panel === 'user_search'){
    return <Admin_user_search />
  }else if(panel==='transaction_search'){
    return <Admin_transaction_search />
  }
  return <Admin_center_pane />
}
function Admin_dashboard(props) {
  useEffect(() => {

    props.setCurrentRoute('dashboard')
    return () => {
      props.setCurrentRoute('home')
    }
  }, [])
  const [panel, setPanel] = React.useState('')
  return (
    <div className='admin-dashboard'>
      <div className='admin-dashboard__left-sidebar'>
        <Admin_left_sidebar setPanel={setPanel}/>
      </div>
      <div className='admin-dashboard__center-pane'>
        {renderItem(panel)}
      </div>
      
    </div>
  )
}

export default Admin_dashboard