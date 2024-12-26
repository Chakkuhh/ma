import React from 'react'
import Banner from '../Components/Banner'
import Expertise from '../Components/Expertise'
import Sustain from '../Components/Sustain'
import Mechinery from '../Components/Mechinery'
import Hvac from '../Components/Hvac'
import Projects from '../Components/Projects'
import Service from '../Components/Service'
import Footer from '../Components/Footer'
// import '../Styles/Main.css'

function Home() {
  return (
    <div>
      <Banner/>
      <Expertise/>
      <Sustain/>
      <Mechinery/>
      <Hvac/>
      <Projects/>
      <Service/>
      <Footer/>
    </div>
  )
}

export default Home