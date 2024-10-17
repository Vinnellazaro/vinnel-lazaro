//React
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
//Style
import 'bootstrap/dist/css/bootstrap.min.css';
//Component
import ImageBanner from './components/ImageBanner'
import Contact from './components/Contact';
import Inprogress from './components/Inprogress';
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'

import Menubar from './components/Menubar';
import Slider from './components/Slider';
import Home from './pages/Home';
import About from './pages/About';
import ContactPage from './pages/Contact';


function App() {

  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'About':
        return <About />;
      case 'Contact':
        return <ContactPage />;
      default:
        return <Home />;
    }
  };

  return (
     <Router basename="/vinnel-lazaro">
      <Routes>
        <Route path="/" element={
          <div className="bg-animation">
            <Inprogress></Inprogress>
          </div>
        } />
        <Route path="/portfolio" element={
            <>
              <ImageBanner/>
              <AboutMe/>
              <Skills/>
              <Contact/>
            </>
          } />
          <Route path="/slider" element={
          <>
            <Menubar setCurrentPage={setCurrentPage} />
            <div>{renderPage()}</div>          </>
          } />
      </Routes>
    </Router>
  );
}

export default App
