import "../../styles/Navbar.css"
import { Link } from "react-router-dom";
import firebase from '../../firebase/firebase'
import { getAuth } from "firebase/auth";
export default function Navbar(props) {

  { console.log(props) }

  const selectDashboardType = (props) => {
    if (props.user.type === 'user') {
      return <Link to='/user/dashboard' className="nav-link active">Dashboard</Link>
    } else if (props.user.type === 'nurse') {
      return <Link to='/nurse/dashboard' className="nav-link active">Dashboard</Link>
    } else {
      return <Link to='/dashboard' className="nav-link active">Dashboard</Link>
    }
  }

  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand text-success" href="/">Poribar</a>

          <div className="d-flex" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll navbar-center " >
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="/">About Us</a> */}
                {props.loginState ?
                  <Link to='/dashboard' className="nav-link active">Dashboard</Link> :
                  <></>}
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-dark" href="/" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                  <li><Link to='/all_nurses' className="dropdown-item" style={{ textDecoration: 'none', color: 'black' }}>Nurses Profile</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <Link to='/reports' className="dropdown-item" style={{ textDecoration: 'none', color: 'black' }}>
                      Medical Report Tracker
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to='/events' className="nav-link active" style={{ textDecoration: 'none', color: 'black' }}>Events</Link>
              </li>
              {props.loginState !== true ?
                <Link to='/login' className="btn btn-success" style={{ textDecoration: 'none', color: 'white' }}>Login</Link>
                : <button className="btn btn-danger" onClick={() => {
                  const auth = getAuth(firebase);
                  auth.signOut();
                  props.setLoginState(false)
                  props.setCurrUser(null)
                  window.location = '/'
                }}>Sign Out</button>
              }
            </ul>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>



    </>
  );

}