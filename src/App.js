import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer/index'
import Home from './Pages/home/home'
import News from './Pages/news/news'

const App = () => {
  return (
    
  <div>
    <Navbar/>
    <Home/>
    <News/>
    <Footer/>
  </div>
  )
}

export default App