import './App.css';
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Hero from './components/Hero/Hero';
import HeadLiners from './components/HeadlLiners/HeadLiners';
import Bread from './components/Bread/Bread';
import Location from './components/Location/Location';
import Footer from './components/Footer/Footer'
import Slider from './components/Slider/Slider';
import Map from './components/GoogleMap/Map'

// import HomePage from "./pages/HomePage/HomePage";
// import AboutPage from "./pages/AboutPage/AboutPage";
// import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
// import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div > 
      <Navbar/>
      <Hero/>
      <HeadLiners/>
      <Slider/>
      <Bread/>
      <Location/>
      {/* <Map/> */}
      <Footer/>

      </div>
  );
}

export default App;
