import './App.css'
import Footer from './components/FooterComponent'
import ContactComponent from './components/ContactComponent'
// import { Routes,Route } from 'react-router-dom'

function App() {
  
  return (

      <>
        <ContactComponent/>
        <Footer/>
        {/* <Routes>
          <Route path="/contact" element={<ContactComponent/>}/>
        </Routes> */}
      </>
  )
}

export default App
