import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Sponsor from './components/Sponsor'
import Warning from './components/Warning'
import Services from './components/Services'
import CallToAction from './components/CallToAction'

const App = () => {
  return (
    <div className='relative'>
      <Header />
      <Hero />
      <CallToAction />
      <Sponsor />
      <Warning />
      <Services />
    </div>
  )
}

export default App