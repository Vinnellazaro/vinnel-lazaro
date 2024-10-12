import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavigationBar'
import ImageBanner from './components/ImageBanner'
import Contact from './components/Contact';
import Inprogress from './components/Inprogress';
import AboutMe from './components/AboutMe'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <ImageBanner></ImageBanner>
    <AboutMe></AboutMe>
    <Contact></Contact>
    <div className="bg-dark text-white w-100 vh-100">
      <Inprogress></Inprogress>
    </div>
    </>
  );
}

export default App
