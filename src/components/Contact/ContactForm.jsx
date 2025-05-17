import { useRef } from 'react';
import styles from './Contact.module.scss'
import LabeledTextInput from './LabeledTextInput/LabeledTextInput';
function ContacForm ({onSubmit}){
    const formRef = useRef();
    console.log(formRef)
    const handleSubmit = (e)=>{
        e.preventDefault();
        //Validar los datos del form  
        console.log(formRef)
        if(formRef.current[0].value == '' || formRef.current[1].value == '' || formRef.current[2].value == '' ||formRef.current[3].value == ''  ){
            return
        }
        console.log('Armo el msj')
        const msg ={
            name:formRef.current[0].value,
            company:formRef.current[1].value,
            email:formRef.current[2].value,
            msg:formRef.current[3].value
        }
        onSubmit(msg)
        //Crear un objeto msg con los datos del form para enviar por email.

    }
    return( 

        <form action="submit" className={styles.contactForm} onSubmit={handleSubmit} ref={formRef}>
            <LabeledTextInput name='name' id='name-input' label='Name' placeholder='Enter your name'/>
            <LabeledTextInput name='company' id='company-input' label='Company (Optional)' placeholder='Enter your comapny name'/>
            <LabeledTextInput name='email' id='email-input' label='Email Adress' placeholder='Enter your email' type='email'/>
            <LabeledTextInput name='message' id='message-input' label='Message'
            placeholder="Write your message here" type='email' size='big'/>
            <button type="submit" className={styles.contactSubmitButton}>
                Submit 
            </button>
        </form>

    )
};
export default ContacForm