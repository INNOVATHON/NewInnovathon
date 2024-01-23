import Contact from "../../components/contact/Contact";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import Parallax from "../../components/parallax/Parallax";
import Portfolio from "../../components/portfolio/Portfolio";
import Services from "../../components/services/Services";
import React, { useState } from "react";
import Timeline from "../../components/timeline/timeline";
import Team from "../../components/Team/team";
import Registration from "../Registration/Registration";


const Landing = () => {
    const [preLoader,setPreLoader] = useState(true);
  return (
    
    <div className="bg-animation">
      
     
      <section id="Homepage">
    
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Timeline">
        <Timeline/>
      </section>
      <section><Team/></section>
      <section id="Problems">
        <Parallax type="portfolio" />
      </section>
     
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
      {/* <Test/>
    <Test/> */}
    </div>
  )
}

export default Landing
