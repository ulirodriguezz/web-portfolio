
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/Home/Home.jsx'
import './index.scss'
import './styles/bootstrap-custom.scss'
import Navbar from './components/Navbar/Navbar.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Home/>
  </StrictMode>,
)
