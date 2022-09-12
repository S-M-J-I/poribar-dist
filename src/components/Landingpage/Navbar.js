
export default function Navbar() {
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand site-title" style={{ fontSize: '1.9rem' }} href="/"><b>PORIBAR</b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="d-flex" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll navbar-center " >
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">About Us</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-dark" href="/" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                  <li><a className="dropdown-item" href="/">Nurse Appointment</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Medical Report Tracker</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Review Nurses</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Play Interactive Games</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">Blogs</a>
              </li>
              <button type="button" class="btn custom-btn">Login</button>

            </ul>
          </div>
        </div>
      </nav>



    </>
  );

}