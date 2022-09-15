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
import './styles/Admin_dashboard.css';
import Event_Single_page from './components/Eventpage/Event_Single_page/Event_Single_page';
import Dashboard from './components/User_dashboard/Dashboard';
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
          <Route path='/event/:id' element={<Event_Single_page />}></Route>
          <Route path='/user_dashboard' element={<Dashboard />}></Route>
          <Route path='/nurse_dashboard' element={<Dashboard type='nurse'/>}></Route>

          <Route path='/reviews' element={<Reviews />}></Route>
          <Route path='/nurse_appointment' element={<Nurse_Appointment />}></Route>
          <Route path='/nurse_appointment_form' element={<Nurse_Appointment_form_Details />}></Route>
          <Route path='/' element={<Landingpage />}></Route>
        </Routes>
      </BrowserRouter>

    </div >
  );
}

export default App;
