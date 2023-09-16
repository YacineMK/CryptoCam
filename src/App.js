import './App.css';
import Cardssection from './Comp/Cardssection';
import Fotter from './Comp/Fotter';
import Hero from './Comp/Hero';
import Learnsection from './Comp/Learnsection';
import Navbar from './Comp/Navbar';
import Table from './Comp/Table';


function App() {
  return (
    <div className="App">
       <Navbar />
       <Hero />
       <Cardssection />
       <Learnsection />
       <Table />
       <Fotter />
    </div>
  );
}

export default App;
