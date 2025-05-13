
import FlexBoxDiv from '../Common/FlexBoxDiv/FlexBoxDiv';
import styles from './Contact.module.scss';
import LabeledTextInput from './LabeledTextInput/LabeledTextInput';
import { CiMail } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
function Contact (){
    return(
       <section className={styles.contactSection} aria-labelledby='contact-title'>
            <div className={styles.contactFormDiv}>
                <header className={styles.contactFormHeader}>
                    <h2 id='contact-title' className='my-h1'>Let's get in touch!</h2>
                    <p className='my-p'> Fill out the form to get in touch with me. I'll reply as soon as I can</p>
                </header>
                <form action="submit" className={styles.contactForm}>
                        <LabeledTextInput name='name-input' id='name-input' label='Name' placeholder='Enter your name'/>
                        <LabeledTextInput name='comapny-input' id='company-input' label='Company (Optional)' placeholder='Enter your comapny name'/>
                        <LabeledTextInput name='email-input' id='email-input' label='Email Adress' placeholder='Enter your email' type='email'/>
                        <LabeledTextInput name='message-input' id='message-input' label='Message'
                        placeholder="Write your message here" type='email' size='big'/>
                        <button type="submit" className={styles.contactSubmitButton}>Submit</button>
                </form>
            </div>
            <aside className={styles.contactInfo}>
                <h4 className='my-h4'>Contact Information</h4>
               <FlexBoxDiv>
                    <CiMail/>
                    <span className={styles.contactInfoText}>ulirodrigueze@gmail.com</span>
               </FlexBoxDiv>
                <FlexBoxDiv>
                    <LuPhone />
                    <span className={styles.contactInfoText}>54 9 1130150582</span>
               </FlexBoxDiv>
                <FlexBoxDiv>
                    <FaLinkedin />
                    <a href="https://www.linkedin.com/in/ulises-rodriguez-ellerman-a09197271/" target='blank'>Visit my Linkedin profile</a>
               </FlexBoxDiv>

            </aside>
       </section>
    )
}
export default Contact;