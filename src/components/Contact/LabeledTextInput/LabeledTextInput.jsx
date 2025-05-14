import styles from './LabeledTextInput.module.scss';
function LabeledTextInput ({name,id,label,placeholder,type = 'text',size='regular'}){
    if(size != 'big'){
        return(
            <div className={styles.labeledInputDiv}>
                <label htmlFor={name} className={styles.inputLabel}>{label}</label>
                <input type={type} name={name} id={id} placeholder={placeholder} 
                className={`${styles.contactInput} ${size === 'regular'? styles.inputRegular : styles.inputBig}`}/>
            </div>
        )
    }
    else{
        
         return(
            <div className={styles.labeledInputDiv}>
                <label htmlFor={name} className={styles.inputLabel}>{label}</label>
                <textarea name={name} id={id} placeholder={placeholder} className={styles.tetxtArea}></textarea>
            </div>
        )

    }

}
export default LabeledTextInput;