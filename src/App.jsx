import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import emailjs from '@emailjs/browser';

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
      <Navbar />
      <Routes location={location}>
        <Route path='/' element={<Home setTheme={setTheme} />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/profile' element={<></>} />
        <Route path='/projects' element={<></>} />
      </Routes>
    </>
  );
}

export default App;
