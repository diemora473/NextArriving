import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { Provider } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Loading from './Components/Loading/Loading';
// import NavZone from './Components/Zonas/NavZonas';
import Zone from './Components/Zonas/ZoneHome';
import Info from './Components/InformationFooter/info/info';
import AboutUs from './Components/Footer/EmpresaF/About Us/About Us';
import Questions from './Components/Footer/EmpresaF/Questions/Questions';
import WorkWithUs from './Components/Footer/EmpresaF/Work With Us/WorkWithUs';
function App({ done }) {
  return (
    <Router>
      <div className="App bg-base-200 relative h-full">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/NextArriving/Zone" element={<Zone />}></Route>
          <Route exact path="/NextArriving/Info" element={<Info />}></Route>
          <Route exact path='/NextArriving/AboutUs' element={<AboutUs/>}></Route>
          <Route exact path='/NextArriving/Questions' element={<Questions/>}></Route>
          <Route exact path='/NextArriving/WorkWithUs' element={<WorkWithUs/>}></Route>
          {/* <Route exact path="/" element={<Loading done="70" />}></Route> */}
        </Routes>
      </div>
    </Router>
  );
}
export default App;