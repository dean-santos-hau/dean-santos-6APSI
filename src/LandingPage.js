import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page-container">
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Login</li>
            </ul>
        </nav>
        <h1>Im Landing Page</h1>
        <div className='img-container'></div>
    </div>
  );
}

export default LandingPage;