import './App.css';
import React from 'react';
// import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import SignInPage from './pages/SignInPage'
import MainPage from  './pages/MainPage'
//import Logo from './assets/netflixlogo.png';
//import { Link } from 'react-router-dom';


function App() {
 // const [selectedLanguage, setSelectedLanguage] = useState('');

 // const handleChange = (event) => {
  //  setSelectedLanguage(event.target.value);
 // };

  return (
    <div className="App">
    {/*<div className='hero-container'>
        <div className="navbar">
            <nav className="navbar navbar-expand-lg">
              <div className="container">
              <Link to='/'><img src={Logo} alt="logo" /></Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                  <select id="language-select" value={selectedLanguage} onChange={handleChange}>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                  </select>
                <Link to="/SignInPage" className="btn">
                    Sign In
                  </Link>
                </div>
              </div>
            </nav>
        </div>
    </div>*/}
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/SignInPage" element={<SignInPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
