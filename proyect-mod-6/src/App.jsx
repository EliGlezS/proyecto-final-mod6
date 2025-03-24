import './App.css'
import Footer from './components/FooterComponent'
import Contact from './pages/Contact'
import { Routes,Route } from 'react-router-dom'

function App() {
  
  return (

      <>
        <Footer/>
        <Routes>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </>
  )
}

export default App
