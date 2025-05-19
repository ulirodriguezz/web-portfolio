
import styles from './Contact.module.scss';
import { useState } from 'react';
import ContacForm from './ContactForm';
import ContactFormSent from './ContactFormSent/ContactFormSent';
import emailjs from '@emailjs/browser';
import ContactInformation from './ContactInformation';
function ContactContainer() {
    const [messageSent, setMessageSent] = useState(false);
    const handleSubmit = (msg) => {
        // emailjs.send(
        //     import.meta.env.VITE_EMAILJS_SERVICE_ID,
        //     import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        //     msg,    
        // ).then((response) =>{console.log('mail enviado')},(error)=>{alert('Error al enviar el mensaje')})
        setMessageSent(true);
    }
    return (
        <section className={styles.contactSection} aria-labelledby='contact-title'>
            <div className={styles.contactFormDiv}>
                <header className={styles.contactFormHeader}>
                    <h2 id='contact-title' className='my-h1'>Let's get in touch!</h2>
                    <p className='my-p' hidden={messageSent}> Fill out the form to get in touch with me. I'll reply as soon as I can</p>
                </header>
                {!messageSent ? <ContacForm onSubmit={handleSubmit} /> : <ContactFormSent />}
            </div>
            <ContactInformation/>
        </section>
    )
}
export default ContactContainer;