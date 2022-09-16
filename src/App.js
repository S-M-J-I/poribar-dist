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
import './styles/Admin_dashboard.css';
function App() {
  const [loginState, setLoginState] = useState(false)
  const [currentRoute, setCurrentRoute] = useState('home')
  useEffect(() => {
    const auth = getAuth(firebase)
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        setLoginState(false)
      } else {
        setLoginState(true)
      }
    })
  }, [loginState])
  return (
    <div className="App">
      <BrowserRouter>
        {currentRoute !== 'dashboard' ?
          <Navbar loginState={loginState} setLoginState={setLoginState} /> : <></>}
        <Routes >
          <Route path='/login' element={<Login setLoginState={setLoginState} />}>

          </Route>
          <Route path='/dashboard' element={<Admin_dashboard setCurrentRoute={setCurrentRoute} />} />
          <Route path='/events' element={<All_events />}></Route>
          <Route path='/nurse_profile' element={<Nurse_Profile />}></Route>
          <Route path='/' element={<Landingpage />}></Route>
          <Route path='/reviews' element={<Reviews />}></Route>
          <Route path='/nurse_appointment' element={<Nurse_Appointment />}></Route>
          <Route path='/nurse_appointment_form' element={<Nurse_Appointment_form_Details />}></Route>
          <Route path='/nurse_profile_review_form' element={<Nurse_Profile_Review_Form />}></Route>
        </Routes>
      </BrowserRouter>

    </div >
  );
}

export default App;
