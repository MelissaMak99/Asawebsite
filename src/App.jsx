import { useState } from 'react'
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Mission from './components/Mission';
import Discover from './components/Discover';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Home';
import About from './pages/About';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Donate from './pages/Donate';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

  return (
    <div>
      <Router>
      <ScrollToTop/>
        {/* <Navbar/> */}
        <Routes>
        <Route exact path='/[Asawebsite]/' element={<Home/>}/>
        <Route path='/[Asawebsite]/About' element={<About/>}/>
        <Route path='/[Asawebsite]/Donate' element={<Donate/>}/>
        </Routes>
        
        <Footer/>
      </Router>
    </div>
  );
}

export default App
