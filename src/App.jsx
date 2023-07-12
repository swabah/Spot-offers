import './App.css'
import Home from './Pages/Homepage/Home'
import Location from './Pages/Located/Location'
import MisionVision from './Pages/MisionVision/MisionVision'
import Projects from './Pages/ProjectPortfolio/Projects'
import About from './Pages/aboutPage/About'
import Footer from './Components/footer/Footer'
import Newsletter from './Pages/newsLetter/Newsletter'
import ScrollToTop from "react-scroll-to-top";

function App() {

  return (
    <>
       <ScrollToTop smooth height='20' width='20' className='flex items-center justify-center z-50'/>
      <Home/>
      <About/>
      <Projects/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App
