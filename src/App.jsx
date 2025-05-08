import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Banner from './Components/Banner/Banner'
import AppStore from './Components/AppStore/AppStore'
import Testimonials from './Components/Testimonials/Testimonials'
// import Hero from './Components/Hero'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <AppStore />
      <Testimonials />
    </div>
  )
}

export default App