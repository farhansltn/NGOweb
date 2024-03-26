import Ceo from "./components/Ceo"
import Experience from "./components/Experience"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import HowItWorks from "./components/HowItWorks"
import Model from "./components/Model"
import Navbar from "./components/Navbar"

import * as Sentry from '@sentry/react'

const App = ()=> {

  return (
   <main className="bg-white">
    <Navbar/>
    <Hero/>
    <Highlights/>
    <div className="bg-no-repeat bg-center m-0 bg-[#E2F4C5]">
      <Experience />
    </div>
    <Model/>
    <Features/>
    <HowItWorks/>
    <Ceo/>
    <Footer/>
   </main>
  )
}

export default Sentry.withProfiler(App);
