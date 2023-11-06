import React from "react";
import { Route, Routes } from "react-router-dom";
// import {Home} from './components/Home';
// import {About} from './components/About';
// import {HowitWorks} from './components/HowitWorks';
// import {Gallery} from './components/Gallery';
// import {Contact} from './components/Contact';

import { Home, About, HowitWorks, Gallery, Contact, Error, Banner, Donate} from './components'
import Footer from "./components/Footer";


const App = () => {
  

  return (
    <>
    <Banner/>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/About" Component={About} />
        <Route path="/HowitWorks" Component={HowitWorks} />
        <Route path="/Gallery" Component={Gallery} />
        <Route path="/Contact" Component={Contact} />
        <Route path="/Donate" Component={Donate} />
        <Route path="*" Component={Error} />
        
      </Routes>
      <Footer />
    </>
  )
}

export default App
