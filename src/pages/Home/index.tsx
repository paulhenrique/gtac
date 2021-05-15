import React from 'react'
import Header from '../../components/Header'
import Partners from '../../components/Partners'
import Projects from '../../components/Projects'
import Sponsors from '../../components/Sponsors'
import Support from '../../components/Support'

function Home() {
  return (
    <div>
      <Header />
      <Projects />
      <Sponsors />
      <Support />
      <Partners />
    </div>
  )
}

export default Home;
