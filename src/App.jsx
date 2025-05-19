import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import ContactContainer from './components/Contact/ContactContainer';
import Navbar from './components/Navbar/Navbar';
import emailjs from '@emailjs/browser';
import { ToastContainer } from 'react-toastify';


function App() {
  const [theme, setTheme] = useState('dark');
  const location = useLocation();

  useEffect(() => {
    emailjs.init({
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      limitRate: {
        id: 'app',
        throttle: 10000,
      },
    });
  }, []);
  useEffect(() => {
    document.body.classList.remove('theme-dark', 'theme-light');
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  return (
    <>
    <ToastContainer 
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick={false}
        pauseOnHover={true}
        draggable={true}
        progress={undefined}
        theme="dark"
      />
      <Navbar />
      <Routes location={location}>
        <Route path='/' element={<Home setTheme={setTheme} />} />
        <Route path='/contact' element={<ContactContainer />} />
        <Route path='/profile' element={<></>} />
        <Route path='/projects' element={<></>} />
      </Routes>
    </>
  );
}

export default App;
