import styles from './Contact.module.scss'
import LabeledTextInput from './LabeledTextInput/LabeledTextInput';
function ContacForm ({onSubmit}){
    return( 

        <form action="submit" className={styles.contactForm} onSubmit={onSubmit}>
            <LabeledTextInput name='name-input' id='name-input' label='Name' placeholder='Enter your name'/>
            <LabeledTextInput name='comapny-input' id='company-input' label='Company (Optional)' placeholder='Enter your comapny name'/>
            <LabeledTextInput name='email-input' id='email-input' label='Email Adress' placeholder='Enter your email' type='email'/>
            <LabeledTextInput name='message-input' id='message-input' label='Message'
            placeholder="Write your message here" type='email' size='big'/>
            <button type="submit" className={styles.contactSubmitButton}>
                Submit 
            </button>
        </form>

    )
};
export default ContacForm