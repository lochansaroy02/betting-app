import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Sponsor from './components/Sponsor'
import Warning from './components/Warning'
import Services from './components/Services'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='relative'>
      <Header />
      <Hero />
      <Sponsor />
      <Warning />
      <Services />
      <Footer />
    </div>
  )
}

export default App