import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navigationbar'
import ImageBanner from './components/imagebanner'
import Contact from './components/contact';
import Inprogress from './components/inprogress';


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <ImageBanner></ImageBanner>
    <Contact></Contact>
    <div className="bg-dark text-white w-100 vh-100">
      <Inprogress></Inprogress>
    </div>
    </>
  );
}

export default App
