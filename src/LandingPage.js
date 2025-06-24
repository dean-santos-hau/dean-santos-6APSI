import './LandingPage.css';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className='landing-page-wrapper'>
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li><Link to="/LoginPage">Login</Link></li>            
            </ul>
        </nav>
        <div className="landing-page-container">
            <h1>Im Landing Page</h1>
            <div className='img-container'></div>
        </div>
    </div>
  );
}

export default LandingPage;