import Nav from './Component/Nav'
import MainContant from './Component/MainContant'
import Footer from './Component/Footer'
import {Routes , Route} from 'react-router-dom'
import Card from './Component/Card'
import About from './Component/About'
import Contact from './Component/Contact'

function App() {
  
  return (
    <div className="bg-gray-100">
      <Nav/>
      <Routes>
      <Route path="/" element={<MainContant/>} />
      <Route path='/Component/Card/:id/' element={<Card/>} />
      <Route path='/Component/About' element={<About/>} />
      <Route path='/Component/Contact' element={<Contact/>}/>
      </Routes>
      
      <Footer/>
    </div>
  )
}

export default App
