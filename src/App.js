import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar';
import Homescreen from './Screens/Homescreen';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Homescreen/>
     </div>
  );
}

export default App;
