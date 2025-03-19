import { UsuarioProvider } from './context/UserContext';
import { RegisterProvider } from './context/ResgisterContext';
import UserList from './components/UserListComponent';
import RegisterComponent from './components/RegisterComponent';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import LoginComponent from './components/LoginComponent';

function App() {
  

  return (
    <Router>
      <UsuarioProvider>
        <Routes>
          <Route path="/" element={<UserList/>}/>
          <Route path="/register" element={<RegisterProvider><RegisterComponent/></RegisterProvider>}/>
          <Route path="/login" element={<LoginComponent/>}/>
          

        </Routes>
        
      </UsuarioProvider>
    </Router>
  )
}

export default App
