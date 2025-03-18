import './App.css'

import { Routes,Route } from 'react-router-dom'

//importaciones proveedores
import { BooksProvider } from './context/BooksContext'

//importaciones pages
import Home from './pages/Home'

//importaciones components


function App() {
  

  return (
    <>
    <BooksProvider>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </BooksProvider>
    </>
  )
}

export default App
