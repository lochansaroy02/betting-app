import React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Body from "./components/Body";
import Content from "./components/Content";
import Footer from './components/Footer';
import GoExchange from "./components/GoExchange";
import Header from './components/Header';
import Laser from "./components/Laser";


const App = () => {

  return (
    <div className='relative  '>


      <Router>


        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/content" element={<Content />} />
          <Route path="/go-exchange" element={<GoExchange />} />
          <Route path="/laser" element={<Laser />} />
          <Route path="/content" element={<Content />} />
        </Routes>
        <Footer />
      </Router>
    </div >
  )
}

export default App