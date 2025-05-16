import LottieAnimatedIcon from '../../Common/LottieAnimatedIcon/LottieAnimatedIcon'
import styles from './ContactFormSent.module.scss'
import messageSentIcon from '../../../assets/animated-icons/mail-success-icon.json'
function ContactFormSent (){
    return( 
        <div className={styles.containerDiv}>
            <LottieAnimatedIcon 
                animData={messageSentIcon} 
                loop={false} 
                autoplay={true} 
                hidden={false} 
                height='200px' 
                width='200px'
            />
            <h4 className='my-h4'>Message Sent!</h4>
            <span>Thank you for reaching out to me :)</span>
        </div>
    )
};
export default ContactFormSent