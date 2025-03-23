import { UsuarioProvider } from './context/UserContext';
import UserListComponent from './components/UserListComponent';
import RegisterComponent from './components/RegisterComponent';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import LoginComponent from './components/LoginComponent';
import './index.css'
function App() {
  

  return (
    <Router>
      <UsuarioProvider>
        <Routes>
          <Route path="/perfil" element={<UserListComponent/>}/>
          <Route path="/register" element={<RegisterComponent/>}/>
          <Route path="/login" element={<LoginComponent/>}/>
          

        </Routes>
        
      </UsuarioProvider>
    </Router>
  )
}

export default App
