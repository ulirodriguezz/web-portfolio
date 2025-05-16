
import FlexBoxDiv from '../Common/FlexBoxDiv/FlexBoxDiv';
import styles from './Contact.module.scss';
import { CiMail } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { useState } from 'react';
import ContacForm from './ContactForm';
import ContactFormSent from './ContactFormSent/ContactFormSent';
function Contact (){
    const [messageSent,setMessageSent] = useState(false);
    const handleClick = (e)=>{
        e.preventDefault();
        setMessageSent(true);
    }
    return(
       <section className={styles.contactSection} aria-labelledby='contact-title'>
            <div className={styles.contactFormDiv}>
                <header className={styles.contactFormHeader}>
                    <h2 id='contact-title' className='my-h1'>Let's get in touch!</h2>
                    <p className='my-p' hidden={messageSent}> Fill out the form to get in touch with me. I'll reply as soon as I can</p>
                </header>
                {!messageSent?<ContacForm onClick={handleClick}/>:<ContactFormSent/>}
            </div>  
            <aside className={styles.contactInfo}>
                <h4 className='my-h4'>Contact Information</h4>
                <div className={styles.contactInfoItemList}>
                    <FlexBoxDiv>
                            <div className={styles.contactIcon}> 
                                <CiMail/>
                            </div>
                            <span className={styles.contactInfoText}>ulirodrigueze@gmail.com</span>
                    </FlexBoxDiv>
                        <FlexBoxDiv>
                            <div className={styles.contactIcon}>
                                <LuPhone  />
                            </div>
                            <span className={styles.contactInfoText}>+54 9 1130150582</span>
                    </FlexBoxDiv>
                        <FlexBoxDiv>
                            <div className={styles.contactIcon}>
                                <FaLinkedin />  
                            </div>
                            <a href="https://www.linkedin.com/in/ulises-rodriguez-ellerman-a09197271/" target='blank' className={styles.styledLink}>My Linkedin</a>
                    </FlexBoxDiv>
                </div>

               <div className={styles.contactAnimationDiv}>
                    <img style={{height:'200px'}} src='../../src/assets/animated-icons/contact-aniamtion.gif' alt="" />
               </div>

            </aside>
       </section>
    )
}
export default Contact;