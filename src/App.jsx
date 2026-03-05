import React from 'react'
import Navbar from './components/Header/Navbar'
import Banner from './components/Banner/Banner';
import CustomCursor from "./components/CustomCursor";
import Expertise from './components/Expertise/expertise';
import MyWork from './components/MyWork/MyWork';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div>
      <CustomCursor />
      <Navbar />
      <Banner />
      <Expertise />
      <MyWork />
      <Experience />
      <Footer />  
    </div>
  )
}

export default App
