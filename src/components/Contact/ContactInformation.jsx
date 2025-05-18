import { CiMail } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import FlexBoxDiv from '../Common/FlexBoxDiv/FlexBoxDiv';
import styles from './Contact.module.scss';
function ContactInformation() {
    return (
        <aside className={styles.contactInfo}>
            <header className={styles.contactInfoHeader}>
                <h4 className='my-h4'>Contact Information</h4>
            </header>
            <div className={styles.contactInfoItemList}>
                <FlexBoxDiv>
                    <div className={styles.contactIcon}>
                        <CiMail />
                    </div>
                    <span className={styles.contactInfoText}>ulirodrigueze@gmail.com</span>
                </FlexBoxDiv>
                <FlexBoxDiv>
                    <div className={styles.contactIcon}>
                        <LuPhone />
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
                <img src='../../src/assets/animated-icons/contact-aniamtion.gif' alt="" />
            </div>

        </aside>
    )
}
export default ContactInformation