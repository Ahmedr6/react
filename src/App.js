import Comp2 from './Comp2';
import './App.css';
import Component from './Component';
import Navbarr from './Navbar';
import Comp3 from './comp3';

function App() {
  return (

    <div className="App">
     <div className='nav'><Navbarr/></div>

      <div className='myCard'><Component/>
      <Comp2/ >
      <Comp3/>
      
      </div>
      
    </div>
  );
}

export default App;
