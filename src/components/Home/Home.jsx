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
            <header>
                <h1>Bienvenido</h1>
            </header>
            <section>
                <h2 className={styles.mih2}>Algo algo</h2>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src='../../src/assets/cardimg.svg' />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </section>
        </>
        

    )
};
export default Home