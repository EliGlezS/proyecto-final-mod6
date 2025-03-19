import './App.css'

import { Routes,Route } from 'react-router-dom'

//importaciones proveedores
import { BooksProvider } from './context/BooksContext'

//importaciones pages
import Home from './pages/Home'
import Recommended from './pages/Recommended'

//importaciones components


function App() {
  

  return (
    <>
    <BooksProvider>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/recommended' element={<Recommended/>}/>
      </Routes>
    </BooksProvider>
    </>
  )
}

export default App
