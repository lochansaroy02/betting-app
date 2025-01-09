import React, { useRef } from 'react'
import Hero from './Hero'
import Services from './Services'
import Sponsor from './Sponsor'
import Warning from './Warning'

const Body = () => {
    const servicesRef = useRef(null);
    const scrollToServices = () => {
        if (servicesRef.current) {
            servicesRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div>
            <Hero scrollToServices={scrollToServices} />
            <Sponsor />
            <Warning />
            <Services ref={servicesRef} />
        </div>
    )
}

export default Body