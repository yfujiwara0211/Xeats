import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Search from './components/Search'
import Navbar from './components/Navbar';
import Signin from './components/Signin';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ログインステート

  const handleSignInSuccess = () => {
    // サインイン成功時の処理
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route  path="/" element={<Home />}></Route>
        <Route  path="/signin" element={<Signin handleSignInSuccess={handleSignInSuccess}/>}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
