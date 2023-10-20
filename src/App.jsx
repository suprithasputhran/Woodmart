import ContactUs from "./components/ContactUs"
import Header from "./components/Header"
import Home from "./components/Home"
import Portfolio from "./components/Portfolio"
import Services from "./components/Services"
import './index.css'
import Footer from "./components/Footer"
import Testimonials from "./components/Testimonials"
import OurTeam from "./components/OurTeam"
import Carousel from "./components/Carousel"
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {
  return (

    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="ourteam" element={<OurTeam />} />
        <Route path="contactus" element={<ContactUs />} />




        {/* <Testimonials /> */}


      </Routes>

      <Footer />
      {/* <Imagetap/>
         <Form/> */}
      {/* 
        <Carousel/> */}
      {/* <ImageCard/> */}

    </BrowserRouter>

  )

}

export default App
