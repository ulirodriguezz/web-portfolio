import styles from './LabeledTextInput.module.scss';
function LabeledTextInput ({name,id,label,placeholder,type = 'text',size='regular',error,onChange}){
    if(size != 'big'){
        return(
            <div className={styles.labeledInputDiv}>
                <label htmlFor={name} className={styles.inputLabel}>{label}</label>
                <input type={type} name={name} id={id} placeholder={placeholder} 
                className={`${styles.contactInput} ${size === 'regular'? styles.inputRegular : styles.inputBig} ${error?styles.errorInput:''}`}
                onChange={onChange}
                />
            </div>
        )
    }
    else{
        
         return(
            <div className={styles.labeledInputDiv}>
                <label htmlFor={name} className={styles.inputLabel}>{label}</label>
                <textarea name={name} id={id} placeholder={placeholder} className={`${error?styles.errorInput:''} ${styles.textArea}`} onChange={onChange}>
                </textarea>
            </div>
        )

    }

}
export default LabeledTextInput;