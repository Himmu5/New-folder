import './App.css';
import Navbar from './Navbar';
import MainContant from './MainContant'
import Footer from './Footer';
import Card from './Card'
import {Routes, Route} from 'react-router-dom'
function App() {

  return (
    <div className="bg-gray-100">
      
      <Navbar /> 
      
      <Routes>

      <Route path="/" element={<MainContant />} />
      <Route path="/Card" element={<Card/>} />

      </Routes>
      <Footer />  
    </div>
  );
}

export default App;
