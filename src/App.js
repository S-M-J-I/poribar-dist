import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
// import './styles/Admin_dashboard.css';
import './styles/Login.css'
import Login from './components/Login/Login';
import { useEffect, useState } from 'react';
import Landingpage from './components/Landingpage/Landingpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import firebase from './firebase/firebase'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import All_events from './components/Eventpage/All_events';
import Admin_dashboard from './components/Admin_dashboard/Admin_dashboard';
import Nurse_Profile from './components/Nurses_Profile/Nurse_Profile';
import Nurse_Appointment from './components/Nurse_Appointment/Nurse_Appointment';
import Nurse_Appointment_form_Details from './components/Nurse_Appointment_Form_Details/Nurse_Appointment_Form_Details.js';
import Reviews from './components/Reviews/Reviews';
import Nurse_Profile_Review_Form from './components/Nurse_Profile_Review_Form/Nurse_Profile_Review_Form';
import Nurse_Profile_Review_Form_ratings from './components/Nurse_Profile_Review_Form/Block/Nurse_Profile_Review_Form_ratings';
import ReportsDashboard from './components/Reports/ReportsDashboard';
import SingleReport from './components/Reports//components/SingleReport'
import './styles/Admin_dashboard.css';
import Add_certificates from './components/Nurses_Profile/Add_info_windows/Add_certificates';
import Add_education from './components/Nurses_Profile/Add_info_windows/Add_education';
import Add_experiences from './components/Nurses_Profile/Add_info_windows/Add_experiences';
import AddReport from './components/Reports/components/AddReport';
import Event_Single_page from './components/Eventpage/Event_Single_page/Event_Single_page';
import Dashboard from './components/User_dashboard/Dashboard';
import Profilepage from './components/User_Profile/Profilepage';
import All_Nurses_Profile from './components/All_Nurses_profile/All_Nurses_Profile';
import UserSignUp from './components/User_signup/UserSignUp';
import AllAppointments from './components/User_dashboard/AllAppointments';
import ReportsDashboardIndividuals from './components/Reports/ReportsDashboardIndividual';
import Settings_Dashboard from './components/User_dashboard/Settings_Dashboard';
function App() {
  const [loginState, setLoginState] = useState(false)
  const [currentRoute, setCurrentRoute] = useState('home')
  const [currUser, setCurrUser] = useState()
  useEffect(() => {
    const auth = getAuth(firebase)
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        setLoginState(false)
      } else {
        setLoginState(true)

        fetch(`http://localhost:3030/api/auth/user/profile/${user.uid}`, {
          method: 'post',
          mode: 'cors'
        })
          .then(res => res.json())
          .then(data => {
            setCurrUser(data)
            console.log(data)
          })
          .catch(err => {

          })
      }
    })
  }, [loginState])
  const renderDashboardState = () => {
    if (currUser) {

      if (currUser.type === 'user') {
        return <Dashboard user={currUser} setCurrentRoute={setCurrentRoute} type='user' />
      } else if (currUser.type === 'nurse') {
        return <Dashboard user={currUser} setCurrentRoute={setCurrentRoute} type='nurse' />
      } else {
        return <Admin_dashboard setCurrentRoute={setCurrentRoute} />
      }
    }
  }
  const renderAppointments = () => {
    if (currUser) {
      if (currUser.type === 'user') {
        return <AllAppointments user={currUser} setCurrentRoute={setCurrentRoute} type='user' />
      } else if (currUser.type === 'nurse') {
        return <AllAppointments user={currUser} setCurrentRoute={setCurrentRoute} type='nurse' />
      }
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        {currentRoute !== 'dashboard' ?
          <Navbar user={currUser} setCurrUser={setCurrUser} loginState={loginState} setLoginState={setLoginState} /> : <></>}
        <Routes >

          <Route path='/login' element={<Login setLoginState={setLoginState} />}></Route>
          <Route path='/dashboard/appointments' element={renderAppointments()}></Route>
          <Route path='/dashboard/settings' element={<Settings_Dashboard user={currUser} />}></Route>
          <Route path='/dashboard' element={renderDashboardState()} />
          <Route path='/events' element={<All_events />}></Route>
          <Route path='/nurse_profile/:id' element={<Nurse_Profile />}></Route>
          <Route path='/reports/report/:id' element={<SingleReport />} />
          <Route path='/reports/add/:id' element={<AddReport />} />
          <Route path='/reports/:id' element={<ReportsDashboardIndividuals />} />
          <Route path='/reports' element={<ReportsDashboard />} />
          <Route path='/event/:id' element={<Event_Single_page />}></Route>
          <Route path='/reviews' element={<Reviews />}></Route>
          <Route path='/profile' element={<Profilepage />}></Route>
          <Route path='/all_nurses' element={<All_Nurses_Profile />}></Route>
          <Route path='/user_signup' element={<UserSignUp />}></Route>
          <Route path='/nurse_signup' element={<UserSignUp type='nurse' />}></Route>
          <Route path='/nurse_profile_review_form' element={<Nurse_Profile_Review_Form />}></Route>
          {/* <Route path='/settings' element={<Settings />}></Route> */}
          <Route path='/' element={<Landingpage />}></Route>
        </Routes>
      </BrowserRouter>

    </div >
  );
}

export default App;
