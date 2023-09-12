import './App.css';
import Cardssection from './Comp/Cardssection';
import Hero from './Comp/Hero';
import Learnsection from './Comp/Learnsection';
import Navbar from './Comp/Navbar';


function App() {
  return (
    <div className="App">
       <Navbar />
       <Hero />
       <Cardssection />
       <Learnsection />
    </div>
  );
}

export default App;
