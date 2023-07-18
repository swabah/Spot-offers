import './App.css'
import Home from './Pages/Homepage/Home'
import Service from './Pages/ServicePortfolio/Service'
import About from './Pages/aboutPage/About'
import Footer from './Components/footer/Footer'
import Newsletter from './Pages/newsLetter/Newsletter'
import ScrollToTop from "react-scroll-to-top";
import Community from './Pages/Community/Community'


function App() {

  return (
    <>
      <ScrollToTop smooth height='20' width='20' className='flex items-center justify-center z-50'/>
      <Home/>
      <Community/>
      <About/>
      <Service/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App