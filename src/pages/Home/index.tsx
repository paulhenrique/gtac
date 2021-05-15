import React from 'react'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Partners from '../../components/Partners'
import Projects from '../../components/Projects'
import Sponsors from '../../components/Sponsors'
import Support from '../../components/Support'

function Home() {
  return (
    <div>
      <div className="container">
        <Header />
        <Projects />
        <Sponsors />
        <Support />
        <Partners />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default Home;
