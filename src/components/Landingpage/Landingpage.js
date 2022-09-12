import '../../styles/Navbar.css'
import MainRow from './MainRow';
import '../../styles/MainRow.css'
import BottomRow from './BottomRow';
import AboutRow from './AboutRow';
import '../../styles/AboutRow.css'
import ReviewRow from './ReviewRow';
import '../../styles/ReviewRow.css'

function Landingpage() {
    return (
        <div className="Landing-page">
            <MainRow />
            <AboutRow />
            <br />
            <br />
            <br />
            <ReviewRow />
            <br />
            <br />
            <br />
            <BottomRow />
        </div>
    );
}

export default Landingpage;
