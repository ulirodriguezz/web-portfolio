import styles from './LabeledTextInput.module.scss';
function LabeledTextInput ({name,id,label,placeholder,type = 'text',size='regular'}){
    return(
        <div className={styles.labeledInputDiv}>
            <label htmlFor={name} className={styles.inputLabel}>{label}</label>
            <input type={type} name={name} id={id} placeholder={placeholder} 
            className={`${styles.contactInput} ${size === 'regular'? styles.inputRegular : styles.inputBig}`}/>
        </div>
    )
}
export default LabeledTextInput;