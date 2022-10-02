import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { Provider } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Loading from './Components/Loading/Loading';
// import NavZone from './Components/Zonas/NavZonas';
import Zone from './Components/Zonas/ZoneHome';
function App({ done }) {
  return (
    <Router>
      <div className="App bg-bas-200 relative h-full">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/NextArriving/Zone" element={<Zone />}></Route>
          {/* <Route exact path="/" element={<Loading done="70" />}></Route> */}
        </Routes>
      </div>
    </Router>
  );
}
export default App;