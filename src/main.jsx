
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/Home/Home.jsx'
import './index.scss'
import './styles/bootstrap-custom.scss'
import Navbar from './components/Navbar/Navbar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BackendStack from './components/Home/Stacks/BackendStack.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/contact' element={<></>}/>
        <Route  path='/profile' element={<></>}/>
        <Route  path='/projects' element={<></>}/>
        
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
