import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavigationBar'
import ImageBanner from './components/ImageBanner'
import Contact from './components/Contact';
import Inprogress from './components/Inprogress';
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'


function App() {
  //const [count, setCount] = useState(0)

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
              <Navbar/>
              <ImageBanner/>
              <AboutMe/>
              <Skills/>
              <Contact/>
            </>
          } />
      </Routes>
    </Router>
  );
}

export default App
