import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer/index'
import Home from './Pages/home/home'
import News from './Pages/news/news'
import Community from './Pages/community/community'
import Univercities from './Pages/univercities/univercities'

const App = () => {
  return (
    
  <div>
    <Navbar/>
    <Home/>
    <News/>
    <Community/>
    <Univercities/>
    <Footer/>
  </div>
  )
}

export default App
