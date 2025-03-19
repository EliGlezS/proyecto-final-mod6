import './App.css'
// import HeaderComponent from './components/headerComponent'
import Header from './components/HeaderComponent-v2'
import { BrowserRouter } from 'react-router-dom' 


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Header/>
    </BrowserRouter>
    </>
  )
}

export default App
