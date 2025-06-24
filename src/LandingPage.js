import './LandingPage.css';

function LandingPage() {
  return (
    <div className='landing-page-wrapper'>
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Login</li>
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