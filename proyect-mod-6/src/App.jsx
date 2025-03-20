import './App.css'

import { Routes,Route } from 'react-router-dom'

//importaciones proveedores
import { BooksProvider } from './context/BooksContext'

//importaciones pages
import Home from './pages/Home'
import Recommended from './pages/Recommended'
import BooksDetailsPage from './pages/BooksDetailsPage'

//importaciones components


function App() {
  

  return (
    <>
    <BooksProvider>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/books/:id' element={<BooksDetailsPage/>}/>
              <Route path='/recommended' element={<Recommended/>}/>
            </Routes>
    </BooksProvider>
    </>
  )
}

export default App


{/* <BooksProvider>
      <ProductsCartProvider>
        <UserProvider>
          <HeaderComponent/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/books/:id' element={<BooksDetailsPage/>}/>
              <Route path='/recommended' element={<Recommended/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/cart' element={<ShoppingCart/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
              <Route path="/register" element={<RegisterComponent/>}/> 
              <Route path="/login" element={<LoginComponent/>}/>
            </Routes>
          <FooterComponent/>
        </UserProvider>
      </ProductsCartProvider>
    </BooksProvider> */}