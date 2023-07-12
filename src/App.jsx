import './App.css'
import Home from './Pages/Homepage/Home'
import Location from './Pages/Located/Location'
import MisionVision from './Pages/MisionVision/MisionVision'
import Projects from './Pages/ProjectPortfolio/Projects'
import About from './Pages/aboutPage/About'
import Footer from './Components/footer/Footer'
import Newsletter from './Pages/newsLetter/Newsletter'

function App() {

  return (
    <>
      <Home/>
      <About/>
      <Projects/>
      <MisionVision/>
      <Location/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App
