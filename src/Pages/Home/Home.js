import React from 'react'
import Header from '../../Components/Header/Header'
import Hero from '../../Components/Hero/Hero'
import Partiners from '../../Components/Partiners/Partiners'
import Trust from '../../Components/Trust/Trust'
import ServiceDisplay from '../../Components/ServiceDisplay/ServiceDisplay'
import Dev from '../../Components/Dev/Dev'
import CustomerFeedBack from '../../Components/CustomerFeedBack/CustomerFeedBack'
import FaqsComponent from '../../Components/FaqsComponent/FaqsComponent'
import Footer from '../../Components/Footer/Footer'

function Home() {
  return (
    <div className='home-container'>
        <Header />
        <Hero />
        <Partiners />
        <Trust />
        <ServiceDisplay />
        <Dev />
        <CustomerFeedBack />
        <FaqsComponent />
        <Footer />
    </div>
  )
}

export default Home