import logo from './logo.svg';
import './App.css';
import img from './images/vision.png'
import Footer from './footer';
import Home from './home'
import Matchdetail from './matchdetail';
import Scorecard from './scorecard';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'

function App() {
  return (
  <>
   <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/matchdetail' element={<Matchdetail/>} />
          <Route path='/scorecard' element={<Scorecard/>} />
        </Routes>
      </BrowserRouter>
  </>
  );
}

export default App;
