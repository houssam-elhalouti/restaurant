import React from 'react'
import './App.css'
import NavBar from './components/Navbars'
import Loading from './components/loading'
import Numbers from './components/numbers'
import AboutUs from './components/AboutUs'
import FoodImage from './components/FoodImage'
import OurStory from './components/OurStory'
import Explore from './components/Explore'
import Testimonials from './components/Testimonials'
import Frequently from './components/Frequently'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
 return(
  <div>
    <>
    <NavBar/>
    <div>
    <Loading/>
    <Numbers/>
    <AboutUs/>
    <FoodImage/>
    <OurStory/>
    <Explore/>
    <Testimonials/>
    <Frequently/>
    <Subscribe/>
    <Footer/>
    </div>
    </>
  </div>
 )
}

export default App
