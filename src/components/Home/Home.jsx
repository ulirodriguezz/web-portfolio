import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './Home.module.scss';
import { useEffect, useState } from 'react';
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
                    <p>
                        Hello, My name is <span>Ulises Rodriguez</span>. I am 24 years old and i study <span>software engenieering</span> in <a href="https://www.uade.edu.ar/" target='balnk'>U.A.D.E</a>, Argentina <img className='small-img'src="../../../src/assets/arg.svg" alt="Argetina flag" />. 
                        <br />
                        I am passionate about programming and i strive every day to become a better programmer, developer and professional.
                        <br />
                        Currently, i am <span>searching for my first professional experience as a backend, frontend or fullstack developer</span> in order to grow
                        <br />
                        and become better at what i do by learning from more experienced professionals in the industry. 
                        <br />
                        If you are looking for a passionate developer who is responsible and willing to learn, i invite you to <span>learn more about me</span>, my profile 
                        <br />
                        and my portfolio <span>in this site</span>.
                    </p>
                </div>
                
            </section>
            <section className={styles.myProfile}>
                <h2>My Profile</h2>
                <p>
                    As a student of software engenieering, i have leart to develop scalable solutions for both backend and frontend.
                    I have developed several Rest APIs with Spring boot as a framework and Web Apps and SPAs with React.
                    <br />
                    I am capable of developing web applications from end to end including APIs and Databases (SQL and noSQL).
                </p>
                <h3>Frameworks</h3>
            </section>
        </>
        

    )
};
export default Home