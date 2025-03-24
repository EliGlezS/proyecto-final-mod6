import './App.css'
import Footer from './components/FooterComponent'
import Contact from './pages/Contact'
import ToTopButton from './components/ToTopButtonComponent'
import { Routes,Route } from 'react-router-dom'


function App() {

  document.addEventListener('submit', (e)=>{e.preventDefault();})
  
  return (

      <>
        <Routes>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <ToTopButton/>
        <Footer/>
      </>
  )
}

export default App