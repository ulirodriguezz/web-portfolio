import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './Home.module.scss';
import { useEffect, useState } from 'react';
import Profile from './Profile';
function Home (){
    
    const [theme, setTheme] = useState('dark');
    useEffect(()=>{
        document.body.classList.remove('theme-dark', 'theme-light');
        document.body.classList.add(`theme-${theme}`);
    },[theme]);
    return( 
        <>
            <section className={styles.introSection}>
                <div className={styles.presentationDiv}>
                    <img className={styles.profilePhoto} src="../../../src/assets/my-photo.jpg" alt="My profile photo" />
                    <p className='my-p'>
                        Hello, My name is <span>Ulises Rodriguez</span>. I am 24 years old and i study <span>software engenieering</span> in <a href="https://www.uade.edu.ar/" target='balnk'>U.A.D.E</a>, Argentina <img className='small-img'src="../../../src/assets/arg.svg" alt="Argetina flag" />. 
                        I am passionate about programming and i strive every day to become a better programmer, developer and professional.
                        <br />
                        Currently, i am <span>searching for my first professional experience as a backend, frontend or fullstack developer</span> in order to grow
                        and become better at what i do by learning from more experienced professionals in the industry. 
                        <br />
                        If you are looking for a passionate developer who is responsible and eager to learn, i invite you to <span>explore more about me</span>, my profile                         
                        and my portfolio <span>on this site</span>.
                    </p>
                </div>
                
            </section>
            <Profile/>
        </>
        

    )
};
export default Home