//Importación React-Router-Dom
import { Routes,Route } from 'react-router-dom'

//importaciones proveedores
import { BooksProvider } from './context/BooksContext'
import { UsuarioProvider } from './context/UserContext';

//importaciones pages
import Home from './pages/Home'
import Recommended from './pages/Recommended'
import BooksDetailsPage from './pages/BooksDetailsPage'
import Header from './components/HeaderComponent'

//importaciones components
import UserListComponent from './components/UserListComponent';
import RegisterComponent from './components/RegisterComponent';
import LoginComponent from './components/LoginComponent';

/*TODO Colocar css index en lugar adecuado */
import './index.css'
import './App.css'




function App() {
  

  return (
    <BooksProvider>
      <UsuarioProvider>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/books/:id' element={<BooksDetailsPage/>}/>
          <Route path='/recommended' element={<Recommended/>}/>
          <Route path="/perfil" element={<UserListComponent/>}/>
          <Route path="/register" element={<RegisterComponent/>}/>
          <Route path="/login" element={<LoginComponent/>}/>
        </Routes>
      </UsuarioProvider>
    </BooksProvider>
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