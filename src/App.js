
import './App.css';
import Home from './IndexFiles/Home';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './IndexFiles/NavBar' 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HvacPrev from './SubFiles/HvacPrev';
import HvacReno from './SubFiles/HvacReno';
import Compressor from './SubFiles/Compressor';
import Aircooled from './SubFiles/Aircooled';
import AirCondition from './SubFiles/AirCondition';
import Motor from './SubFiles/Motor';
import About from './IndexFiles/About';
import Contact from './IndexFiles/Contact';
import AC from './Service/AC';
import PortFolio from './IndexFiles/PortFolio';

function App() {
  return (
    <Router basename='/ma'>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/home/hvacPre' element={<HvacPrev/>}/>
      <Route path='/home/hvacReno' element={<HvacReno/>}/>
      <Route path='/home/compressor' element={<Compressor/>}/>
      <Route path='/home/aircooler' element={<Aircooled/>}/>
      <Route path='/home/aircondition' element={<AirCondition/>}/>
      <Route path='/home/motor' element={<Motor/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/service/ac-condition' element={<AC/>}/>
      <Route path='/portfolio' element={<PortFolio/>}/>
    </Routes>
  </Router>
  );
}

export default App;
