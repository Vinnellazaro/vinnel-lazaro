import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navigationbar'
import Inprogress from './components/inprogress';


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <div className="bg-dark text-white w-100 vh-100">
      <Inprogress></Inprogress>
    </div>
    </>
  );
}

export default App
