//Importación React-Router-Dom
import { Routes,Route } from 'react-router-dom'

//importaciones proveedores
import { BooksProvider } from './context/BooksContext'
import { UsuarioProvider } from './context/UserContext'
import { ProductsCartProvider } from './context/ProductsCartContext'
import { ModalProvider } from './context/ModalContextCart'

//importaciones pages
import Home from './pages/Home'
import Recommended from './pages/Recommended'
import BooksDetailsPage from './pages/BooksDetailsPage'
import Header from './components/HeaderComponent'
import ShoppingCart from './pages/ShoppingCart'
import Contact from './pages/Contact'
import Checkout from './pages/Checkout'

//importaciones components
import UserListComponent from './components/UserListComponent';
import RegisterComponent from './components/RegisterComponent';
import LoginComponent from './components/LoginComponent';
import Footer from './components/FooterComponent'
import ToTopButton from './components/ToTopButtonComponent'

//Estilado del App
import './App.css'

function App() {
  //TODO revisa localización submit
  //document.addEventListener('submit', (e)=>{e.preventDefault();})
  
  return (
    <ModalProvider>
      <BooksProvider>
        <ProductsCartProvider>
          <UsuarioProvider>
            <Header/>
            <ToTopButton/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/books/:id' element={<BooksDetailsPage/>}/>
              <Route path='/cart' element={<ShoppingCart/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
              <Route path='/recommended' element={<Recommended/>}/>
              <Route path="/perfil" element={<UserListComponent/>}/>
              <Route path="/register" element={<RegisterComponent/>}/>
              <Route path="/login" element={<LoginComponent/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
            <Footer/>
          </UsuarioProvider>
        </ProductsCartProvider>
      </BooksProvider>
    </ModalProvider>
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