import { useState } from 'react';
import styles from './Contact.module.scss'
import LabeledTextInput from './LabeledTextInput/LabeledTextInput';
import { toast } from 'react-toastify';
function ContacForm({ onSubmit }) {

    const [formErrors, setFormErrors] = useState({})
    const formFieldNames = ['name', 'email', 'company', 'message']
    const handleSubmit = (e) => {
        e.preventDefault();

        const newFormErrors = {};
        const formData = new FormData(e.target);

        formFieldNames.forEach((fieldName) => {
            if (!formData.get(fieldName)) newFormErrors[fieldName] = true;
        })

        setFormErrors(newFormErrors)

        if (Object.keys(newFormErrors).length > 0) {
            toast.error('Missing fields',{
                className:styles.toastAlert
            });
            return
        }
        const msg = {
            name: formData.get('name'),
            company: formData.get('company'),
            email: formData.get('email'),
            msg: formData.get('message')
        }
        onSubmit(msg)

    }
    const clearError = (inputName) => {
        setFormErrors(prev => ({ ...prev, [inputName]: false }))
    }
    return (
        <form action="submit" className={styles.contactForm} onSubmit={handleSubmit}>
            <LabeledTextInput name='name' id='name-input' label='Name' placeholder='Enter your name' error={formErrors.name ? true : false} onChange={() => clearError('name')} />
            <LabeledTextInput name='company' id='company-input' label='Company (Optional)' placeholder='Enter your comapny name' error={formErrors.company ? true : false} onChange={() => clearError('company')} />
            <LabeledTextInput name='email' id='email-input' label='Email Adress' placeholder='Enter your email' type='email' error={formErrors.email ? true : false} onChange={() => clearError('email')} />
            <LabeledTextInput name='message' id='message-input' label='Message'
                placeholder="Write your message here" type='email' size='big' error={formErrors.message ? true : false} onChange={() => clearError('message')} />
            <button type="submit" className={styles.contactSubmitButton}>
                Submit
            </button>
        </form>
    )
};
export default ContacForm