import React from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Better from './Component/Better life/Better';
import Request from './Component/Request/Request';
import Barbar from './Component/Barbar/Barbar';
import Hormone from './Component/Hormone/Hormone';
import Therepy from './Component/Therepy/Therepy';
import Freequently from './Component/Freequently/Freequently';
import Boost from './Component/Boost/Boost';
import Location from './Component/Location/Location';
import Footer from './Component/Footer/Footer';
import Carousel from './Component/Carousel/Carousel';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Home />
      <Carousel />
      <Better />
      <Request />
      <Barbar />
      <Hormone />
      <Therepy />
      <Freequently />
      <Boost />
      <Location />
      <Footer />
    </div>
  )
}

export default App