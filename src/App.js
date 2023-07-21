import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import SignInPage from './pages/SignInPage'
import MainPage from './pages/MainPage'


function App() {

  return (
    <div className="App" >
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/SignInPage" element={<SignInPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
